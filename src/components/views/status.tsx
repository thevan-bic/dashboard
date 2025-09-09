import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    ReloadOutlined,
    SyncOutlined,
} from '@ant-design/icons';
import { Tag } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface StatusChipProps {
    retry: boolean;
    status: string;
}

export const OpStatusIconMap: { [key: string]: React.ReactNode } = {
    Succeeded: <CheckCircleOutlined />,
    Pending: <SyncOutlined />,
    Failed: <CloseCircleOutlined />,
    Retried: <ReloadOutlined />,
};

export const OpStatusColorMap: { [key: string]: string } = {
    Succeeded: 'success',
    Pending: 'processing',
    Failed: 'error',
    Retried: 'warning',
};

export const StatusChip: React.FC<StatusChipProps> = ({ retry, status }) => {
    const { t } = useTranslation();
    if (retry) {
        return (
            <Tag color={OpStatusColorMap['Retried']} icon={OpStatusIconMap['Retried']}>
                {t('retried')}
            </Tag>
        );
    }
    return (
        <Tag color={OpStatusColorMap[status]} icon={OpStatusIconMap[status]}>
            {status}
        </Tag>
    );
};
