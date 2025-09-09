import { ApiError, GetOperationsResponse } from '@/apis/requests';
import { BasicButton, BasicContent, BasicTable } from '@/components';
import { OPERATION_STATUS } from '@/constants/status';
import { useSearchParams } from '@/hooks/use-search-params';
import { EyeOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Alert, Button, Tooltip } from 'antd';
import React, { useRef, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useOperationsTable } from '../hooks/useOperationsTable';
import { getConstantColumns } from './constants';
import { FilterPro } from './filter';

type OperationsListProps = {
    namespace: string;
    openDetail: (id: string, fetchStatus: boolean) => void;
};

export const OperationsList: React.FC<OperationsListProps> = ({ openDetail }) => {
    const { t } = useTranslation();
    const actionRef = useRef<ActionType>(null);

    const [_, setSearchParams] = useSearchParams();

    const {
        isError,
        isLoading,
        isFetching,
        error,
        dataSource,
        refreshData,
        handleTableChange,
        pagination,
    } = useOperationsTable();
    const columns: ProColumns<GetOperationsResponse[number]>[] = useMemo(
        () => [
            ...getConstantColumns(t),
            {
                title: t('common.action'),
                valueType: 'option',
                key: 'option',
                width: 120,
                fixed: 'right',
                render: (_text, record, _index, _action) => {
                    return [
                        <Tooltip title={t('common.view')}>
                            <Button
                                key="viewable"
                                size="small"
                                onClick={() =>
                                    openDetail(
                                        record.id,
                                        record.status !== OPERATION_STATUS.SUCCEEDED,
                                    )
                                }
                                type="dashed"
                                icon={<EyeOutlined />}
                            />
                        </Tooltip>,
                    ];
                },
            },
        ],
        [t],
    );

    const refreshTable = useCallback(() => {
        refreshData();
        actionRef.current?.reload();
    }, [refreshData]);

    if (isError) {
        return (
            <BasicContent className="h-full">
                <Alert
                    message={t('common.error')}
                    description={
                        ((error as ApiError).body as any)?.error || 'Unknown error occurred'
                    }
                    type="error"
                    showIcon
                    action={
                        <BasicButton size="small" onClick={refreshData}>
                            {t('common.retry')}
                        </BasicButton>
                    }
                />
            </BasicContent>
        );
    }

    return (
        <BasicContent className="h-full">
            <BasicTable<GetOperationsResponse[number]>
                loading={isLoading || isFetching}
                defaultSize={'small'}
                columns={columns}
                actionRef={actionRef}
                dataSource={dataSource}
                pagination={pagination}
                onChange={handleTableChange}
                headerTitle={`${t('common.menu.operation')}`}
                options={{
                    reload: refreshTable,
                    setting: true,
                    density: true,
                }}
                toolBarRender={() => [
                    <FilterPro
                        columns={[
                            {
                                key: 'input',
                                title: 'Input',
                                dataType: 'text',
                            },
                            {
                                key: 'data',
                                title: 'Data',
                                dataType: 'text',
                            },
                            {
                                key: 'output',
                                title: 'Output',
                                dataType: 'text',
                            },
                            {
                                key: 'status',
                                title: 'Status',
                                dataType: 'select',
                                options: Object.values(OPERATION_STATUS).map((m) => ({
                                    label: m,
                                    value: m,
                                })),
                            },
                            {
                                key: 'created',
                                title: 'Created At',
                                dataType: 'datetime',
                            },
                        ]}
                        onFiltersChange={(filters) => {
                            if (filters.length > 0) {
                                const o = filters
                                    .map((f) => ({ [f.field]: f.operator + f.value }))
                                    .reduce((_pv, cur) => {
                                        return {
                                            ...cur,
                                        };
                                    }, {});
                                setSearchParams({
                                    ...o,
                                });
                            }
                        }}
                    />,
                ]}
                search={false}
            />
        </BasicContent>
    );
};
