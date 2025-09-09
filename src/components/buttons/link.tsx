import { ExportOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';

type LinkButtonProps = {
    url: string;
};

export const LinkButton: React.FC<LinkButtonProps> = ({ url }) => {
    const navigate = useNavigate();
    return (
        <Button type="text" icon={<ExportOutlined />} size="small" onClick={() => navigate(url)} />
    );
};
