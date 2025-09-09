import { useEventsServiceGetEvents } from '@/apis/queries';
import { useCallback, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';

interface UseEventsTableParams {
    fetchreferences?: string;
    count?: string;
    created?: string;
    id?: string;
    topic?: string;
    tx?: string;
    type?: string;
    limit?: string;
    skip?: string;
    sort?: string;
    ascending?: string;
}

export const useEventsTable = () => {
    const [params] = useSearchParams();

    const initialParams = useMemo(
        () => ({
            count: '',
            fetchreferences: '',
            limit: params.get('pageSize') || '10',
            skip: String(
                parseInt(params.get('current') || '1') * parseInt(params.get('pageSize') || '10'),
            ),
            created: params.get('created') || '>=1750275714',
        }),
        [],
    );

    const [queryParams, setQueryParams] = useState<UseEventsTableParams>({
        ...initialParams,
    });

    const [tableStateRef, setTableStateRef] = useState({
        current: Math.floor(
            parseInt(initialParams.skip || '0') / parseInt(initialParams.limit || '10'),
        ),
        pageSize: parseInt(initialParams.limit || '10'),
        filters: {} as any,
        sorter: {} as any,
    });

    const dataStateRef = useRef({
        currentData: null as any,
        previousData: null as any,
        isTransitioning: false,
        transitionStartTime: 0,
    });

    const queryResult = useEventsServiceGetEvents(queryParams);

    if (queryResult.data && queryResult.data !== dataStateRef.current.currentData) {
        dataStateRef.current.previousData = dataStateRef.current.currentData;
        dataStateRef.current.currentData = queryResult.data;
        dataStateRef.current.isTransitioning = true;
        dataStateRef.current.transitionStartTime = Date.now();

        setTimeout(() => {
            dataStateRef.current.isTransitioning = false;
        }, 100);
    }

    const handleTableChange = (pagination: any, filters: any, sorter: any) => {
        dataStateRef.current.isTransitioning = true;
        dataStateRef.current.transitionStartTime = Date.now();

        setTableStateRef((old) => ({
            ...old,
            current: pagination?.current || 1,
            pageSize: pagination?.pageSize || 10,
            filters: filters || {},
            sorter: sorter || {},
        }));

        const newQueryParams: UseEventsTableParams = {
            ...queryParams,
            limit: String(pagination?.pageSize || 10),
            skip: String(((pagination?.current || 1) - 1) * (pagination?.pageSize || 10)),
        };

        if (filters) {
            Object.keys(filters).forEach((key) => {
                if (filters[key] && filters[key].length > 0) {
                    newQueryParams[key as keyof UseEventsTableParams] = filters[key].join(',');
                } else {
                    delete newQueryParams[key as keyof UseEventsTableParams];
                }
            });
        }

        setQueryParams(newQueryParams);
    };

    const refreshData = useCallback(() => {
        dataStateRef.current.isTransitioning = true;
        dataStateRef.current.transitionStartTime = Date.now();
        queryResult.refetch();
    }, [queryResult.refetch]);

    const resetFilters = useCallback(() => {
        const resetParams = {
            fetchreferences: params.get('fetchreferences') || '',
            count: params.get('count') || '',
            limit: '10',
            skip: '0',
        };

        setTableStateRef((old) => ({
            ...old,
            current: 1,
            pageSize: 10,
            filters: {},
            sorter: {},
        }));

        dataStateRef.current.isTransitioning = true;
        dataStateRef.current.transitionStartTime = Date.now();

        setQueryParams(resetParams);
    }, [params]);

    const paginationProps = {
        current: tableStateRef.current,
        pageSize: tableStateRef.pageSize,
        total: dataStateRef.current.currentData?.total || 0,
        pageSizeOptions: ['10', '20', '50'],
        showSizeChanger: true,
        showQuickJumper: true,
    };

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

    return {
        data: queryResult.data,
        isLoading: queryResult.isLoading,
        isFetching: queryResult.isFetching,
        isError: queryResult.isError,
        error: queryResult.error,

        dataSource,
        pagination: paginationProps,
        loading: loadingState,

        isTransitioning: transitionState.isTransitioning,
        transitionProgress: transitionState.transitionProgress,
        shouldShowOverlay: transitionState.shouldShowOverlay,
        hasData: !!dataSource.length,

        handleTableChange,
        refreshData,
        resetFilters,

        queryParams,
    };
};
