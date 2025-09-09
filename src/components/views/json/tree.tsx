import { CopyOutlined } from '@ant-design/icons';
import { App, Button, Tooltip, Tree, TreeProps, theme } from 'antd';
import type { DataNode } from 'antd/es/tree';
import * as React from 'react';
import { isArray, isObject, isPrimitive, truncateString } from './datatypes';

const { useToken } = theme;

let id = 0;

const TitleWithCopy: React.FC<{ children: React.ReactNode; value: any }> = ({
    children,
    value,
}) => {
    const { message } = App.useApp();
    const handleCopy = (e: React.MouseEvent) => {
        e.stopPropagation();
        const textToCopy =
            typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                message.success('Copied: ' + textToCopy);
            })
            .catch(() => {
                message.error('Failed to copy');
            });
    };

    return (
        <span className="inline-flex items-end gap-2 group max-w-full">
            <span>{children}</span>
            <Button
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                type="text"
                size="small"
                icon={<CopyOutlined />}
                onClick={handleCopy}
            />
        </span>
    );
};

const getTreeNode = (key: string, value: any, token: any): DataNode => {
    const nodeKey = String(id++);
    if (isPrimitive(value)) {
        const displayValue = String(value);
        const fullTitle = `${key}: ${displayValue}`;
        // Truncate very long values for display
        const maxLength = 30;
        const truncatedValue = truncateString(displayValue, maxLength);

        return {
            key: nodeKey,
            title: (
                <TitleWithCopy value={value}>
                    <Tooltip title={fullTitle}>
                        <span className="inline-flex items-end">
                            <span>{key}:</span>
                            <span
                                className="ml-1 inline-block align-bottom"
                                style={{ color: token.colorPrimary }}
                            >
                                {truncatedValue}
                            </span>
                        </span>
                    </Tooltip>
                </TitleWithCopy>
            ),
        };
    }
    if (isArray(value)) {
        const children = value.map((v, i) => getTreeNode(String(i), v, token));
        const title = (
            <TitleWithCopy value={value}>
                <span title={`${key} [${value.length}]`}>
                    {key}
                    <span className="text-gray"> [{value.length}]</span>
                </span>
            </TitleWithCopy>
        );
        return {
            key: nodeKey,
            title,
            children,
        };
    }
    if (isObject(value)) {
        const keys = Object.keys(value);
        const children = keys.map((key) => getTreeNode(key, value[key], token));
        const title = (
            <TitleWithCopy value={value}>
                <span title={`${key} {${keys.length}}`}>
                    {key}
                    <span className="text-gray-400"> {`{${keys.length}}`}</span>
                </span>
            </TitleWithCopy>
        );
        return {
            key: nodeKey,
            title,
            children,
        };
    }

    return {
        key: nodeKey,
        title: key,
    };
};

const getTreeNodes = (data: unknown, token: unknown): DataNode[] => {
    if (isArray(data)) {
        return [getTreeNode('array', data, token)];
    }
    if (isObject(data)) {
        return [getTreeNode('object', data, token)];
    }
    return [];
};

export interface JSONTreeProps extends TreeProps {
    data: Record<any, any> | string;
}

const TreeWithTheme: React.FC<JSONTreeProps> = ({ data, ...restProps }) => {
    const { token } = useToken();
    id = 0;
    const treeData = getTreeNodes(data, token);
    return (
        <div className="overflow-x-auto overflow-y-hidden">
            <Tree showLine defaultExpandAll={true} {...restProps} treeData={treeData} />
        </div>
    );
};

export const JSONTree: React.FC<JSONTreeProps> = ({ data, ...restProps }) => {
    return <TreeWithTheme data={data} {...restProps} />;
};
