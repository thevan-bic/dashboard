import { GetContractsInterfacesResponse } from '@/apis/requests';
import { CopyButton } from '@/components/buttons/copy';
import { getShortString } from '@/utils/short-hash';
import type { ProColumns } from '@ant-design/pro-components';
import { Tag, Tooltip } from 'antd';
import type { TFunction } from 'i18next';

export function getConstantColumns(
    _t: TFunction<'translation', undefined>,
): ProColumns<GetContractsInterfacesResponse[number]>[] {
    return [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            renderText: (name) => {
                return <Tag color={'success'}>{name}</Tag>;
            },
        },
        {
            title: 'Version',
            dataIndex: 'version',
            key: 'version',
            width: 80,
            search: false,
            renderText: (version: string) => {
                return <Tag color="warning">{version}</Tag>;
            },
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            search: false,
        },
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
    ];
}
