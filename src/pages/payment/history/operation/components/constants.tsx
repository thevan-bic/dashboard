import { GetOperationsResponse } from '@/apis/requests';
import { StatusChip } from '@/components/views/status';
import { mapType } from '@/utils/map-type';
import { formatToNow } from '@/utils/time/format-distance-to-now';
import { ClockCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { Tag } from 'antd';
import type { TFunction } from 'i18next';

export function getConstantColumns(
    t: TFunction<'translation', undefined>,
): ProColumns<GetOperationsResponse[number]>[] {
    return [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            ellipsis: true,
            render: (_node, record) => (
                <span title={record.id} style={{ fontFamily: 'monospace' }}>
                    {record.id}
                </span>
            ),
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: (_node, record) => {
                return <Tag>{mapType(record.type)}</Tag>;
            },
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_node, record) => {
                return <StatusChip retry={!!record.retry} status={record.status || 'Unknown'} />;
            },
        },
        {
            title: t('event.created'),
            dataIndex: 'created',
            valueType: 'date',
            search: true,
            render: (_node, record) => {
                return (
                    <Tag icon={<ClockCircleOutlined />} color="default">
                        {formatToNow(record.created || '0')}
                    </Tag>
                );
            },
        },
    ];
}
