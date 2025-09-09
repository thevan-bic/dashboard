import { CopyOutlined } from '@ant-design/icons';
import { App, Button, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

type CopyButtonProps = {
    value: string;
    longForm?: boolean;
    onCopySuccess?: () => void;
    showNotification?: boolean;
};

export const CopyButton: React.FC<CopyButtonProps> = ({
    value,
    longForm = false,
    onCopySuccess,
    showNotification = false,
}) => {
    const { t } = useTranslation();
    const { message } = App.useApp();

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            if (onCopySuccess) {
                onCopySuccess();
            }
            if (showNotification) {
                message.success(`${t('common.copied')}: ${value}`);
            }
        } catch (_error) {
            if (showNotification) {
                message.error(value);
            }
        }
    };

    return (
        <>
            {longForm ? (
                <Button icon={<CopyOutlined />} size="small" onClick={handleCopy}>
                    <Typography.Text>{t('common.copy')}</Typography.Text>
                </Button>
            ) : (
                <Button type="text" icon={<CopyOutlined />} size="small" onClick={handleCopy} />
            )}
        </>
    );
};
