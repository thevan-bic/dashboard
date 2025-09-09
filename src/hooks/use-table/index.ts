import { useSearchParams } from '@/hooks/use-search-params';
import { useCallback, useMemo, useRef, useState } from 'react';

interface TablePaginationParams {
    limit?: string;
    skip?: string;
}

interface BaseQueryParams extends TablePaginationParams {
    [key: string]: any;
}

interface TableState {
    current: number;
    pageSize: number;
    filters: Record<string, any>;
    sorter: Record<string, any>;
}

interface UseGenericTableParams<TParams extends BaseQueryParams> {
    initialParams?: Partial<TParams>;
    defaultPageSize?: number;
    useQueryHook: any;
    getInitialParamsFromURL?: (searchParams: URLSearchParams) => Partial<TParams>;
    pageSizeOptions?: string[];
}

export const useGenericTable = <TParams extends BaseQueryParams, TData = any>({
    initialParams = {},
    defaultPageSize = 10,
    useQueryHook,
    getInitialParamsFromURL,
    pageSizeOptions = ['10', '20', '50', '100'],
}: UseGenericTableParams<TParams>) => {
    const [getSearchParams, setSearchParams] = useSearchParams();
    const params = getSearchParams();

    const current = parseInt(params.get('current') || '1');
    const pageSize = parseInt(params.get('pageSize') || '10');

    const computedInitialParams = useMemo(() => {
        const urlParams = getInitialParamsFromURL ? getInitialParamsFromURL(params) : {};

        return {
            limit: pageSize || String(defaultPageSize),
            skip: String(((current || 1) - 1) * (pageSize || defaultPageSize)),
            ...initialParams,
            ...urlParams,
        } as TParams;
    }, [initialParams, defaultPageSize, getInitialParamsFromURL]);

    const [queryParams, setQueryParams] = useState<TParams>(computedInitialParams);

    const [tableState, setTableState] = useState<TableState>({
        current:
            Math.floor(
                parseInt(computedInitialParams.skip || '0') /
                    parseInt(computedInitialParams.limit || String(defaultPageSize)),
            ) + 1,
        pageSize: parseInt(computedInitialParams.limit || String(defaultPageSize)),
        filters: {},
        sorter: {},
    });

    const dataStateRef = useRef({
        currentData: null as any,
        previousData: null as any,
        isTransitioning: false,
        transitionStartTime: 0,
    });

    const queryResult = useQueryHook(queryParams as any);

    // Handle data transitions
    if (queryResult.data && queryResult.data !== dataStateRef.current.currentData) {
        dataStateRef.current.previousData = dataStateRef.current.currentData;
        dataStateRef.current.currentData = queryResult.data;
        dataStateRef.current.isTransitioning = true;
        dataStateRef.current.transitionStartTime = Date.now();

        setTimeout(() => {
            dataStateRef.current.isTransitioning = false;
        }, 100);
    }

    const handleTableChange = useCallback(
        (pagination: any, filters: any, sorter: any, _extra) => {
            setSearchParams({ current: pagination.current, pageSize: pagination.pageSize });
            setTableState((old) => ({
                ...old,
                current: pagination?.current || 1,
                pageSize: pagination?.pageSize || defaultPageSize,
                filters: filters || {},
                sorter: sorter || {},
            }));

            const newQueryParams: TParams = {
                ...queryParams,
                limit: String(pagination?.pageSize || defaultPageSize),
                skip: String(
                    ((pagination?.current || 1) - 1) * (pagination?.pageSize || defaultPageSize),
                ),
            };

            setQueryParams(newQueryParams);
        },
        [queryParams, defaultPageSize],
    );

    const refreshData = useCallback(() => {
        dataStateRef.current.isTransitioning = true;
        dataStateRef.current.transitionStartTime = Date.now();
        queryResult.refetch();
    }, [queryResult]);

    const resetFilters = useCallback(() => {
        const resetParams = {
            limit: String(defaultPageSize),
            skip: '0',
            ...initialParams,
        } as TParams;

        setTableState((old) => ({
            ...old,
            current: 1,
            pageSize: defaultPageSize,
            filters: {},
            sorter: {},
        }));

        dataStateRef.current.isTransitioning = true;
        dataStateRef.current.transitionStartTime = Date.now();

        setQueryParams(resetParams);
    }, [initialParams, defaultPageSize]);

    const updateQueryParams = useCallback((newParams: Partial<TParams>) => {
        setQueryParams((prev) => ({ ...prev, ...newParams }));
    }, []);

    const paginationProps = useMemo(
        () => ({
            current: tableState.current,
            pageSize: tableState.pageSize,
            total: dataStateRef.current.currentData?.total || 0,
            pageSizeOptions: pageSizeOptions,
            showSizeChanger: true,
            showQuickJumper: true,
        }),
        [tableState.current, tableState.pageSize, dataStateRef.current.currentData?.total],
    );

    const dataSource = useMemo(() => {
        const currentData = dataStateRef.current.currentData;
        const previousData = dataStateRef.current.previousData;

        if (currentData?.items) {
            return currentData.items;
        }

        if (queryResult.isFetching && previousData?.items) {
            return previousData.items;
        }

        return [];
    }, [
        dataStateRef.current.currentData,
        dataStateRef.current.previousData,
        queryResult.isFetching,
    ]);

    const loadingState = useMemo(() => {
        const hasAnyData = dataStateRef.current.currentData || dataStateRef.current.previousData;
        return (queryResult.isLoading || queryResult.isFetching) && !hasAnyData;
    }, [
        queryResult.isLoading,
        queryResult.isFetching,
        dataStateRef.current.currentData,
        dataStateRef.current.previousData,
    ]);

    const transitionState = useMemo(() => {
        const isTransitioning = dataStateRef.current.isTransitioning;
        const transitionDuration = Date.now() - dataStateRef.current.transitionStartTime;

        return {
            isTransitioning: isTransitioning && transitionDuration < 3000,
            transitionProgress: Math.min(transitionDuration / 3000, 1),
            shouldShowOverlay: queryResult.isFetching && !!dataStateRef.current.currentData,
        };
    }, [
        dataStateRef.current.isTransitioning,
        dataStateRef.current.transitionStartTime,
        queryResult.isFetching,
        dataStateRef.current.currentData,
    ]);

    const form = {
        syncToUrl: (v, _t) => {
            if (v.current && typeof v.current === 'string') {
                v.current = parseInt(v.current);
            }
            if (v.pageSize && typeof v.pageSize === 'string') {
                v.pageSize = parseInt(v.pageSize);
            }
            if (v.slideID) {
                delete v.slideID;
            }
            return v;
        },
    };
    return {
        // Raw query data
        data: queryResult.data as TData,
        isLoading: queryResult.isLoading,
        isFetching: queryResult.isFetching,
        isError: queryResult.isError,
        error: queryResult.error,

        // Processed data for table
        dataSource,
        pagination: paginationProps,
        loading: loadingState,

        // Transition states for smooth UX
        isTransitioning: transitionState.isTransitioning,
        transitionProgress: transitionState.transitionProgress,
        shouldShowOverlay: transitionState.shouldShowOverlay,
        hasData: !!dataSource.length,

        // Table controls
        tableState,
        handleTableChange,
        refreshData,
        resetFilters,
        updateQueryParams,

        // Current query params
        queryParams,

        // sync param
        form,
    };
};
