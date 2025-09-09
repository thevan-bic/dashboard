import { useOperationsServiceGetOperationsOnchainByOpid } from '@/apis/queries';
import { ApiError } from '@/apis/requests';
import { BasicButton } from '@/components';
import { JsonViewAccordion } from '@/components/views/json';
import { RowInfo, RowStatusInfo } from '@/components/views/row-info';
import { formatToNow, formatUTC7Time } from '@/utils/time/format-distance-to-now';
import { Alert, Drawer, Skeleton } from 'antd';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface DetailProps {
    title: React.ReactNode;
    open: boolean;
    fetchStatus: boolean;
    operationID: string;
    onCloseChange: () => void;
    refreshTable?: () => void;
}

interface OperationData {
    id?: string;
    tx?: string;
    created?: string;
    status?: string;
    retry?: string;
    error?: string;
    input?: any;
    output?: any;
    data?: any;
    detail?: any;
}

const useOperationDetail = (operationID: string, open: boolean, fetchStatus: boolean) => {
    const queryResult = useOperationsServiceGetOperationsOnchainByOpid(
        {
            fetchstatus: fetchStatus,
            opid: operationID,
        },
        ['operation', operationID],
        {
            enabled: !!operationID && open,
            staleTime: 30000, // Cache for 30 seconds
        },
    );

    return {
        ...queryResult,
    };
};

// Loading component
const DetailSkeleton: React.FC = React.memo(() => <Skeleton active />);

// Error component
interface DetailErrorProps {
    error: any;
    onRetry: () => void;
}

const DetailError: React.FC<DetailErrorProps> = React.memo(({ error, onRetry }) => {
    const { t } = useTranslation();

    const errorMessage = useMemo(() => {
        if (error && typeof error === 'object') {
            return (
                ((error as ApiError).body as { error: string })?.error || 'Unknown error occurred'
            );
        }
        return 'Unknown error occurred';
    }, [error]);

    return (
        <Alert
            message={t('common.error')}
            description={errorMessage}
            type="error"
            showIcon
            action={
                <BasicButton size="small" onClick={onRetry}>
                    {t('common.retry')}
                </BasicButton>
            }
        />
    );
});

// Main info section
interface DetailInfoProps {
    data: OperationData;
}

const DetailInfo: React.FC<DetailInfoProps> = React.memo(({ data }) => {
    const createdTime = useMemo(() => {
        if (!data.created) {
            return 'N/A';
        }
        return `${formatUTC7Time(data.created)} (${formatToNow(data.created)})`;
    }, [data.created]);

    return (
        <>
            <RowInfo label="ID" value={data.id || ''} showCopy={!!data.id} />
            <RowInfo
                label="Transaction ID"
                value={data.tx || 'No Transaction'}
                showCopy={!!data.tx}
                link={data.tx ? `transactions/${data.tx}` : undefined}
            />
            <RowInfo label="Created At" value={createdTime} showCopy={false} />
            <RowStatusInfo
                label="Status"
                value={data.status || 'Unknown'}
                retry={data.retry || ''}
            />
        </>
    );
});

// JSON sections
const DetailJsonSections: React.FC<DetailInfoProps> = React.memo(({ data }) => {
    const jsonItems = useMemo(() => {
        const items = [
            {
                key: 'input',
                label: 'Input',
                source: data.input || '',
            },
            {
                key: 'output',
                label: 'Output',
                source: data.output || '',
            },
            {
                key: 'data',
                label: 'Data',
                source: data.data || '',
            },
            {
                key: 'detail',
                label: 'Detail',
                source: data.detail || '',
            },
        ];

        return items.filter((item) => item.source); // Only show non-empty sections
    }, [data]);

    const errorItems = useMemo(() => {
        if (!data.error) {
            return [];
        }
        return [
            {
                key: 'error',
                label: 'Error',
                source: { error: data.error },
            },
        ];
    }, [data.error]);

    return (
        <>
            {errorItems.length > 0 && <JsonViewAccordion items={errorItems} />}
            {jsonItems.length > 0 && <JsonViewAccordion items={jsonItems} />}
        </>
    );
});

// Main Detail component
export const OperationDetail: React.FC<DetailProps> = React.memo(
    ({ title, open, operationID, onCloseChange, refreshTable, fetchStatus }) => {
        const { data, isError, error, isLoading, isFetching, refetch } = useOperationDetail(
            operationID,
            open,
            fetchStatus,
        );

        const handleClose = useCallback(() => {
            onCloseChange();
        }, [onCloseChange]);

        const handleRetry = useCallback(() => {
            refetch();
            refreshTable?.();
        }, [refetch, refreshTable]);

        const isLoadingState = isLoading || isFetching;
        const hasData = data && !isLoadingState;
        return (
            <Drawer
                title={title}
                open={open}
                destroyOnHidden={true}
                onClose={handleClose}
                size="large"
            >
                {isLoadingState && (
                    <>
                        <DetailSkeleton />
                    </>
                )}

                {isError && <DetailError error={error} onRetry={handleRetry} />}

                {hasData && (
                    <>
                        <DetailInfo data={data} />
                        <DetailJsonSections data={data} />
                    </>
                )}
            </Drawer>
        );
    },
);
