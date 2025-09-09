import { ApiError, GetOperationsResponse } from '@/apis/requests';
import { BasicButton, BasicContent, BasicTable } from '@/components';
import { EyeOutlined, LineChartOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Alert, Button, Tooltip } from 'antd';
import React, { useRef, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useOperationsTable } from '../hooks/useOperationsTable';
import { getConstantColumns } from './constants';

type OperationsListProps = {
    namespace: string;
};

export const OperationsList: React.FC<OperationsListProps> = () => {
    const { t } = useTranslation();
    // const [searchParams, _] = useSearchParams();
    const navigate = useNavigate();
    const actionRef = useRef<ActionType>(null);

    // const { hasAccessByCodes } = useAccess();
    // const [title, setTitle] = useState('');
    // const [isOpen, setIsOpen] = useState(!!searchParams.get('operationID'));
    // const [detailData, setDetailData] = useState<GetOperationsResponse[number] | undefined>(
    //     undefined,
    // );

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
                                onClick={async () => {
                                    // setDetailData(record);
                                    // setIsOpen(true);
                                    // setTitle(
                                    //     t('common.menu.operation') + ': ' + mapType(record.type),
                                    // );
                                    navigate(record.id);
                                }}
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

    // const onCloseChange = useCallback(() => {
    //     setIsOpen(false);
    //     setDetailData(undefined);
    // }, []);

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
                form={{
                    syncToUrl: (v, _t) => {
                        return v;
                    },
                }}
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
                    <BasicButton size="small" onClick={refreshTable} icon={<LineChartOutlined />}>
                        {t('common.timeline')}
                    </BasicButton>,
                ]}
            />
        </BasicContent>
    );
};
