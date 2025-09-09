import { GetContractsListenersResponse } from '@/apis/requests';
import { CopyButton } from '@/components/buttons/copy';
import { getShortString } from '@/utils/short-hash';
import { formatToNow, formatUTC7Time } from '@/utils/time/format-distance-to-now';
import { ClockCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { Tag, Tooltip } from 'antd';
import type { TFunction } from 'i18next';

export function getConstantColumns(
    _t: TFunction<'translation', undefined>,
): ProColumns<GetContractsListenersResponse[number]>[] {
    return [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            ellipsis: true,
            renderText: (id: string) => {
                return (
                    <span>
                        <Tooltip title={id}>{getShortString(id, 20)}</Tooltip>
                        <CopyButton value={id} showNotification={true} />
                    </span>
                );
            },
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            search: false,
            renderText: (name) => {
                return <Tag color={'success'}>{name}</Tag>;
            },
        },
        {
            title: 'Transport',
            dataIndex: 'transport',
            key: 'transport',
            search: false,
            renderText: (transport) => {
                return <Tag color="warning">{transport}</Tag>;
            },
        },
        {
            title: 'Created At',
            dataIndex: 'created',
            valueType: 'date',
            search: false,
            render: (_item, record) => {
                return (
                    <Tooltip title={formatUTC7Time(record.created || '0')} placement="top">
                        <Tag icon={<ClockCircleOutlined />} color="default">
                            {formatToNow(record.created || '0')}
                        </Tag>
                    </Tooltip>
                );
            },
        },
    ];
}
