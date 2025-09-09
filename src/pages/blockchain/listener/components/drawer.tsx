import { useContractsServiceGetContractsListenersByNameOrId } from '@/apis/queries';
import { ApiError, GetContractsListenersByNameOrIdResponse } from '@/apis/requests';
import { BasicButton } from '@/components';
import { JsonViewAccordion } from '@/components/views/json';
import { RowInfo } from '@/components/views/row-info';
import { formatToNow, formatUTC7Time } from '@/utils/time/format-distance-to-now';
import { Alert, Drawer, Skeleton } from 'antd';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface DetailProps {
    open: boolean;
    fetchStatus: boolean;
    operationID: string;
    onCloseChange: () => void;
    refreshTable?: () => void;
}

const useListenerDetail = (id: string, open: boolean, fetchStatus: boolean) => {
    const queryResult = useContractsServiceGetContractsListenersByNameOrId(
        {
            fetchstatus: fetchStatus,
            nameOrId: id,
        },
        ['listener', id],
        {
            enabled: !!id && open,
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
    data: GetContractsListenersByNameOrIdResponse;
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
            <RowInfo label="Name" value={data.name || ''} showCopy={!!data.name} />
            <RowInfo label="Backend ID" value={data.backendId || ''} showCopy={!!data.backendId} />
            <RowInfo label="Signature" value={data.signature} showCopy={!!data.signature} />
            <RowInfo label="Topic" value={data.topic || 'No topic'} showCopy={!!data.topic} />
            <RowInfo label="Created At" value={createdTime} />
        </>
    );
});

// JSON sections
const DetailJsonSections: React.FC<DetailInfoProps> = React.memo(({ data }) => {
    const jsonItems = useMemo(() => {
        const items = [
            {
                key: 'interface',
                label: 'Interface',
                source: data.interface || '',
            },
            {
                key: 'options',
                label: 'Options',
                source: data.options || '',
            },
            {
                key: 'location',
                label: 'Location',
                source: data.location || '',
            },
            {
                key: 'status',
                label: 'Status',
                source: data.status || '',
            },
            {
                key: 'event',
                label: 'Event Schema',
                source: data.event || '',
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
export const ListenerDetail: React.FC<DetailProps> = React.memo(
    ({ open, operationID, onCloseChange, refreshTable, fetchStatus }) => {
        const { data, isError, error, isLoading, isFetching, refetch } = useListenerDetail(
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
                title={data?.event.name || ''}
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
