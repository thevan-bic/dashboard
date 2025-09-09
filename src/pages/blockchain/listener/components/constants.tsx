import { GetContractsListenersResponse } from '@/apis/requests';
import { CopyButton } from '@/components/buttons/copy';
import { getShortString } from '@/utils/short-hash';
import { formatToNow } from '@/utils/time/format-distance-to-now';
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
        // {
        //     title: 'Interface',
        //     dataIndex: ['interface', 'id'],
        //     key: 'interface.id',
        //     search: false,
        //     renderText: (interfaceId: string) => {
        //         return (
        //             <span>
        //                 <Tooltip title={interfaceId}>{getShortString(interfaceId, 20)}</Tooltip>
        //                 <CopyButton value={interfaceId} showNotification={true} />
        //             </span>
        //         );
        //     },
        // },
        {
            title: 'Event',
            dataIndex: ['event', 'name'],
            key: 'event.name',
            width: 200,
            renderText: (name) => {
                return <Tag color={'success'}>{name}</Tag>;
            },
        },
        {
            title: 'Topic',
            dataIndex: 'topic',
            key: 'topic',
            search: false,
            width: 200,
            renderText: (name) => {
                return <Tag color={'warning'}>{name}</Tag>;
            },
        },
        {
            title: 'Signature',
            dataIndex: 'signature',
            key: 'signature',
            ellipsis: true,
            search: false,
            renderText: (signature: string) => {
                return (
                    <span>
                        <Tooltip title={signature}>{getShortString(signature, 20)}</Tooltip>
                        <CopyButton value={signature} showNotification={true} />
                    </span>
                );
            },
        },
        {
            title: 'Created At',
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
