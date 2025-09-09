import { useSubscriptionsServiceGetSubscriptionsBySubid } from '@/apis/queries';
import { ApiError, GetSubscriptionsBySubidResponse } from '@/apis/requests';
import { BasicButton } from '@/components';
import { JsonViewAccordion } from '@/components/views/json';
import { RowInfo } from '@/components/views/row-info';
import { formatToNow, formatUTC7Time } from '@/utils/time/format-distance-to-now';
import { Alert, Drawer, Skeleton, Typography } from 'antd';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface DetailProps {
    open: boolean;
    fetchStatus: boolean;
    operationID: string;
    onCloseChange: () => void;
    refreshTable?: () => void;
}

const useSubscriptionDetail = (subscriptionID: string, open: boolean, fetchStatus: boolean) => {
    const queryResult = useSubscriptionsServiceGetSubscriptionsBySubid(
        {
            subid: subscriptionID,
            fetchstatus: fetchStatus,
        },
        ['subscription', subscriptionID],
        {
            enabled: !!subscriptionID && open,
            staleTime: 30000,
        },
    );

    return {
        ...queryResult,
    };
};

const DetailSkeleton: React.FC = React.memo(() => <Skeleton active />);

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

interface DetailInfoProps {
    data: GetSubscriptionsBySubidResponse;
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
            <RowInfo label="Transport" value={data.transport} />
            <RowInfo label="Created At" value={createdTime} />
        </>
    );
});

const DetailJsonSections: React.FC<DetailInfoProps> = React.memo(({ data }) => {
    const jsonItems = useMemo(() => {
        const items = [
            {
                key: 'status',
                label: 'Status',
                source: data.status || '',
            },
            {
                key: 'filter',
                label: 'Filter',
                source: data.filter || '',
            },
            {
                key: 'options',
                label: 'Options',
                source: data.options || '',
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

export const SubscriptionDetail: React.FC<DetailProps> = React.memo(
    ({ open, operationID, onCloseChange, refreshTable, fetchStatus }) => {
        const { data, isError, error, isLoading, isFetching, refetch } = useSubscriptionDetail(
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
                title={<Typography.Text>{data?.name}</Typography.Text>}
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

export function Detail({
    id,
    isOpen,
    onClose,
    fetchStatus,
}: { id: string; isOpen: boolean; onClose: () => void; fetchStatus: boolean }) {
    const onCloseChange = useCallback(() => {
        const url = new URL(window.location.href);
        url.searchParams.delete('slideID');
        url.searchParams.delete('fetchStatus');
        window.history.pushState(null, '', url.toString());
        onClose();
    }, []);

    return (
        isOpen &&
        id && (
            <SubscriptionDetail
                fetchStatus={fetchStatus}
                open={isOpen}
                onCloseChange={onCloseChange}
                operationID={id}
            />
        )
    );
}
