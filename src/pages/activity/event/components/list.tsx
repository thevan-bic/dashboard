import { GetEventsResponse } from '@/apis/requests';
import { BasicButton, BasicContent, BasicTable } from '@/components';
import { useAccess } from '@/hooks';
import { useEventsTable } from '@/pages/activity/event/hooks/useEventsTable';
import { mapType } from '@/utils/map-type';
import { EyeOutlined, LineChartOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Alert, Button, Tooltip } from 'antd';
import React, { useRef, useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getConstantColumns } from './constants';
import { Detail } from './detail';

type EventsListProps = {
    namespace: string;
};

export const EventsList: React.FC<EventsListProps> = () => {
    const { t } = useTranslation();

    const actionRef = useRef<ActionType>(null);

    const { hasAccessByCodes } = useAccess();
    const [title, setTitle] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [detailData, setDetailData] = useState<GetEventsResponse[number] | undefined>(undefined);

    const {
        isError,
        isLoading,
        isFetching,
        error,
        dataSource,
        refreshData,
        handleTableChange,
        pagination,
    } = useEventsTable();

    const columns: ProColumns<GetEventsResponse[number]>[] = useMemo(
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
                                    setIsOpen(true);
                                    setTitle(t('common.menu.event') + ': ' + mapType(record.type));
                                    setDetailData(record);
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

    const onCloseChange = useCallback(() => {
        setIsOpen(false);
        setDetailData(undefined);
    }, []);

    const refreshTable = useCallback(() => {
        refreshData();
        actionRef.current?.reload();
    }, [refreshData]);

    if (isError) {
        return (
            <BasicContent className="h-full">
                <Alert
                    message={t('common.error')}
                    description={(error as any)?.message || 'Unknown error occurred'}
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
            <BasicTable<GetEventsResponse[number]>
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
                headerTitle={`${t('common.menu.event')}`}
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
            <Detail
                title={title}
                open={isOpen}
                onCloseChange={onCloseChange}
                detailData={detailData}
                refreshTable={refreshTable}
            />
        </BasicContent>
    );
};
