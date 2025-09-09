import { GetEventsResponse } from '@/apis/requests';
import { CopyButton } from '@/components/buttons/copy';
import { mapType } from '@/utils/map-type';
import { getShortHash } from '@/utils/short-hash';
import { formatToNow } from '@/utils/time/format-distance-to-now';
import { ClockCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { Tag, Tooltip, Typography } from 'antd';
import type { TFunction } from 'i18next';

export function getConstantColumns(
    t: TFunction<'translation', undefined>,
): ProColumns<GetEventsResponse[number]>[] {
    return [
        {
            title: t('event.id'),
            dataIndex: 'id',
            filters: true,
            onFilter: true,
            render: (_node, record) => {
                return (
                    <Tooltip title={record.id}>
                        <Typography.Text strong>{getShortHash(record.id || '-')}</Typography.Text>
                        <CopyButton value={record.id || '-'} showNotification={true} />
                    </Tooltip>
                );
            },
        },
        {
            title: t('event.tx'),
            dataIndex: 'tx',
            filters: true,
            onFilter: true,
            render: (_node, record) => {
                if (!record.tx) {
                    return '-';
                }
                return (
                    <Tooltip title={record.tx}>
                        <Typography.Text strong>{getShortHash(record.tx || '-')}</Typography.Text>
                        <CopyButton value={record.tx || '-'} showNotification={true} />
                    </Tooltip>
                );
            },
        },
        {
            title: t('event.reference'),
            dataIndex: 'reference',
            filters: true,
            onFilter: true,
            render: (_node, record) => {
                if (!record.reference) {
                    return '-';
                }
                return (
                    <Tooltip title={record.reference}>
                        <Typography.Text strong>
                            {getShortHash(record.reference || '-')}
                            <CopyButton value={record.reference || '-'} showNotification={true} />
                        </Typography.Text>
                    </Tooltip>
                );
            },
        },
        {
            title: t('event.type'),
            dataIndex: 'type',
            filters: true,
            onFilter: true,
            render: (_node, record) => {
                const title = mapType(record.type);
                return <Tag>{title}</Tag>;
            },
        },

        {
            title: t('event.detail'),
            filters: false,
            onFilter: false,
            render: (_node, record) => {
                return (
                    <Typography.Text type="secondary">
                        {FF_EVENTS_CATEGORY_MAP[record.type || ''].enrichedEventString(record)}
                    </Typography.Text>
                );
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

export const FF_EVENTS_CATEGORY_MAP = {
    blockchain_event_received: {
        enrichedEventString: (event: any): string =>
            `${event.blockchainEvent?.name}${
                event.blockchainEvent?.protocolId
                    ? ', ProtocolID=' + getShortHash(event.blockchainEvent?.protocolId)
                    : ''
            }`,
    },
    blockchain_invoke_op_succeeded: {
        enrichedEventString: (event: any): string =>
            `OperationID=${getShortHash(event.operation?.id ?? '')}`,
    },
    blockchain_invoke_op_failed: {
        enrichedEventString: (event: any): string =>
            `OperationID=${getShortHash(event.operation?.id ?? '')}`,
    },
    contract_api_confirmed: {
        enrichedEventString: (event: any): string =>
            `${event.contractAPI?.name}${
                event.contractAPI?.location?.address
                    ? ', Address=' +
                      getShortHash(getShortHash(event.contractAPI?.location?.address))
                    : ''
            }`,
    },
    contract_interface_confirmed: {
        enrichedEventString: (event: any): string =>
            `${event.contractInterface?.name}${
                event.contractInterface?.version
                    ? ', Version=' + event.contractInterface?.version
                    : ''
            }`,
    },
    transaction_submitted: {
        enrichedEventString: (event: any): string =>
            event.transaction?.blockchainIds?.length === 1
                ? `BlockchainID=${event.transaction?.blockchainIds[0]}`
                : event.transaction?.blockchainIds
                  ? `BlockchainIDs=[${event.transaction?.blockchainIds
                        ?.map((bid) => getShortHash(bid))
                        .join(', ')}]`
                  : 'Transaction Submitted',
    },
    user_operation_send: {
        enrichedEventString: (event: any): string => `Operation ID=${event.operation?.id ?? ''}`,
    },
};
