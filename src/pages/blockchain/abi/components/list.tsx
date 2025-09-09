import { ApiError, GetContractsInterfacesResponse } from '@/apis/requests';
import { BasicButton, BasicContent, BasicTable } from '@/components';
import { DeleteOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Alert, Button, Popconfirm, Tooltip } from 'antd';
import React, { useRef, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useABITable } from '../hooks/useABITable';
import { getConstantColumns } from './constants';

type ABIListProps = {
    namespace: string;
    openDetail: (id: string, fetchStatus: boolean) => void;
};

export const ABIList: React.FC<ABIListProps> = ({ openDetail }) => {
    const { t } = useTranslation();
    const actionRef = useRef<ActionType>(null);

    const {
        isError,
        isLoading,
        isFetching,
        error,
        dataSource,
        refreshData,
        handleTableChange,
        pagination,
        form,
    } = useABITable();
    const columns: ProColumns<GetContractsInterfacesResponse[number]>[] = useMemo(
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
                                onClick={() => openDetail(record.id, true)}
                                type="dashed"
                                icon={<EyeOutlined />}
                            />
                        </Tooltip>,
                        <Popconfirm
                            key="delete"
                            title={t('common.confirmDelete')}
                            okText={t('common.confirm')}
                            cancelText={t('common.cancel')}
                        >
                            <Button
                                key="removable"
                                size="small"
                                type="dashed"
                                icon={<DeleteOutlined />}
                            />
                        </Popconfirm>,
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
            <BasicTable<GetContractsInterfacesResponse[number]>
                form={form}
                loading={isLoading || isFetching}
                defaultSize={'small'}
                columns={columns}
                actionRef={actionRef}
                dataSource={dataSource}
                pagination={pagination}
                onChange={handleTableChange}
                headerTitle={`${t('common.menu.contractABI')}`}
                options={{
                    reload: refreshTable,
                    setting: true,
                    density: true,
                }}
                toolBarRender={() => [
                    <Tooltip title={t('common.add')}>
                        <Button
                            size={'small'}
                            type="primary"
                            variant="outlined"
                            icon={<PlusOutlined size={16} />}
                        />
                    </Tooltip>,
                ]}
            />
        </BasicContent>
    );
};
