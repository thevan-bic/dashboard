import { JSONTree } from '@/components/views/json/tree';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import React from 'react';

type JsonViewAccordionItem = {
    key: string;
    label: string;
    source: Record<any, any> | string;
    style?: React.CSSProperties;
};

type JsonViewAccordionProps = {
    items: JsonViewAccordionItem[];
};

export const JsonViewAccordion: React.FC<JsonViewAccordionProps> = ({ items }) => {
    const { token } = theme.useToken();

    const panelStyle: React.CSSProperties = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };

    const itemsWithStyle = items.map((i) => ({
        key: i.key,
        label: i.label,
        children: <JSONTree data={i.source} />,
        style: panelStyle,
    }));

    const expandHandle = ({ isActive }: { isActive?: boolean }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
    );

    return (
        <Collapse
            bordered={false}
            defaultActiveKey={itemsWithStyle.map((i) => i.key)}
            expandIcon={expandHandle}
            style={{ background: 'transparent' }}
            items={itemsWithStyle}
        />
    );
};
