import {
    ArrowDownOutlined,
    ArrowUpOutlined,
    CopyOutlined,
    ExportOutlined,
    ReloadOutlined,
    SwapOutlined,
} from '@ant-design/icons';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { ArbitrumCircleColorful } from '@ant-design/web3-icons';
import { Button, Space, Tag, Tooltip, Typography, message } from 'antd';
import React, { useState, useRef } from 'react';

const { Text, Link } = Typography;

interface TransactionRecord {
    hash: string;
    from: string;
    to: string;
    value: string;
    tokenSymbol: string;
    tokenAddress: string;
    blockNumber: number;
    timestamp: number;
    gasUsed: string;
    gasPrice: string;
    status: 'success' | 'failed' | 'pending';
    type: 'buy' | 'sell' | 'transfer';
}

const TransactionDashboard: React.FC = () => {
    const actionRef = useRef<ActionType>(undefined);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    // Helper functions
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            message.success('Copied to clipboard');
        });
    };

    const openInExplorer = (hash: string) => {
        window.open(`https://sepolia.arbiscan.io/tx/${hash}`, '_blank');
    };

    // Address display component
    const AddressDisplay: React.FC<{ address: string; type?: 'from' | 'to' }> = ({
        address,
        type,
    }) => {
        const isUserAddress = true;

        return (
            <Space size={4}>
                {type &&
                    (type === 'from' ? (
                        <ArrowUpOutlined className="text-red-500" />
                    ) : (
                        <ArrowDownOutlined className="text-green-500" />
                    ))}
                <Text
                    className="font-mono"
                    strong={isUserAddress}
                    type={isUserAddress ? 'warning' : undefined}
                >
                    {address}
                </Text>
                <Tooltip title="Copy address">
                    <Button
                        type="text"
                        size="small"
                        icon={<CopyOutlined />}
                        onClick={() => copyToClipboard(address)}
                    />
                </Tooltip>
            </Space>
        );
    };

    const columns: ProColumns<TransactionRecord>[] = [
        {
            title: 'Transaction Hash',
            dataIndex: 'hash',
            key: 'hash',
            width: 180,
            fixed: 'left',
            copyable: true,
            render: (_, record) => (
                <Space size={4}>
                    <Link className="font-mono" onClick={() => openInExplorer(record.hash)}>
                        <ArbitrumCircleColorful />
                        {record.hash}
                    </Link>
                    <Tooltip title="Open in Explorer">
                        <Button
                            type="text"
                            size="small"
                            icon={<ExportOutlined />}
                            onClick={() => openInExplorer(record.hash)}
                        />
                    </Tooltip>
                </Space>
            ),
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            filters: [
                { text: 'Buy', value: 'buy' },
                { text: 'Sell', value: 'sell' },
                { text: 'Transfer', value: 'transfer' },
            ],
            render: (_node, record) => {
                const config = {
                    buy: { color: 'green', icon: <ArrowDownOutlined /> },
                    sell: { color: 'red', icon: <ArrowUpOutlined /> },
                    transfer: { color: 'blue', icon: <SwapOutlined /> },
                };
                const { color, icon } = config[record.type as keyof typeof config];
                return (
                    <Tag color={color} icon={icon}>
                        {record.type.toUpperCase()}
                    </Tag>
                );
            },
        },
        {
            title: 'From',
            dataIndex: 'from',
            key: 'from',
            renderText: (from: string) => <AddressDisplay address={from} type="from" />,
        },
        {
            title: 'To',
            dataIndex: 'to',
            key: 'to',
            renderText: (to: string) => <AddressDisplay address={to} type="to" />,
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
            sorter: true,
            render: (_, record) => (
                <Space>
                    <Text strong className="text-lg">
                        {parseFloat(record.value).toLocaleString()}
                    </Text>
                    <Text type="secondary">{record.tokenSymbol}</Text>
                </Space>
            ),
        },
        {
            title: 'Token',
            dataIndex: 'tokenSymbol',
            key: 'tokenSymbol',
            filters: [
                { text: 'USDT', value: 'USDT' },
                { text: 'USDC', value: 'USDC' },
                { text: 'DAI', value: 'DAI' },
                { text: 'WETH', value: 'WETH' },
                { text: 'ARB', value: 'ARB' },
            ],
            render: (_node, record) => (
                <Tooltip title={`Contract: ${record.tokenAddress}`}>
                    <Tag color="blue" className="cursor-pointer">
                        {record.tokenSymbol}
                    </Tag>
                </Tooltip>
            ),
        },
        {
            title: 'Time',
            dataIndex: 'timestamp',
            key: 'timestamp',
            sorter: true,
            renderText: (timestamp: number) => (
                <Tooltip title={new Date(timestamp).toLocaleString()}>
                    <Text>{timestamp}</Text>
                </Tooltip>
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 100,
            search: true,
            filters: [
                { text: 'Success', value: 'success' },
                { text: 'Failed', value: 'failed' },
                { text: 'Pending', value: 'pending' },
            ],
            renderText: (status: string) => {
                const config = {
                    success: 'success',
                    failed: 'error',
                    pending: 'processing',
                };
                return (
                    <Tag color={config[status as keyof typeof config]}>{status.toUpperCase()}</Tag>
                );
            },
        },
        {
            title: 'Gas Fee',
            key: 'gasFee',
            render: (_, record) => {
                const gasFee = (
                    (parseFloat(record.gasUsed) * parseFloat(record.gasPrice)) /
                    1e9
                ).toFixed(4);
                return (
                    <Tooltip
                        title={`Gas Used: ${record.gasUsed} | Gas Price: ${record.gasPrice} Gwei`}
                    >
                        <Text type="secondary">{gasFee} ETH</Text>
                    </Tooltip>
                );
            },
        },
        {
            title: 'Block',
            dataIndex: 'blockNumber',
            key: 'blockNumber',
            renderText: (block: number) => (
                <Link
                    onClick={() =>
                        window.open(`https://sepolia.arbiscan.io/block/${block}`, '_blank')
                    }
                >
                    {block.toLocaleString()}
                </Link>
            ),
        },
    ];

    const rowSelection = {
        selectedRowKeys,
        onChange: (keys: React.Key[]) => setSelectedRowKeys(keys),
    };

    return (
        <ProTable<TransactionRecord>
            form={{
                syncToUrl: true,
                syncToUrlAsImportant: true,
            }}
            columns={columns}
            actionRef={actionRef}
            cardBordered
            request={async (params, sort, filter) => {
                const { current = 1, pageSize = 20 } = params;
                // Mock data for demo
                const mockData = await generateMockData(current, pageSize);
                return mockData;
            }}
            rowKey="hash"
            pagination={{
                pageSize: 10,
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total) => `Total ${total} transactions`,
            }}
            dateFormatter="string"
            headerTitle={
                <Space>
                    <Text strong>Recent Transactions</Text>
                </Space>
            }
            rowSelection={rowSelection}
            tableAlertRender={({ selectedRowKeys, onCleanSelected }) => (
                <Space size={16}>
                    <span>
                        Selected {selectedRowKeys.length} transaction
                        {selectedRowKeys.length > 1 ? 's' : ''}
                    </span>
                    <Button size="small" onClick={onCleanSelected}>
                        Clear Selection
                    </Button>
                </Space>
            )}
            toolBarRender={() => [
                <Button
                    key="refresh"
                    icon={<ReloadOutlined />}
                    onClick={() => actionRef.current?.reload()}
                >
                    Refresh
                </Button>,
            ]}
            scroll={{ x: 1500 }}
        />
    );
};

// Mock data generator (same as before)
const generateMockData = async (
    current: number,
    pageSize: number,
): Promise<{
    data: TransactionRecord[];
    success: boolean;
    total: number;
}> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data: TransactionRecord[] = [];
            const startIndex = (current - 1) * pageSize;

            for (let i = 0; i < pageSize; i++) {
                const types = ['buy', 'sell', 'transfer'] as const;
                const statuses = ['success', 'failed', 'pending'] as const;
                const tokens = ['USDT', 'USDC', 'DAI', 'WETH', 'ARB'];

                data.push({
                    hash: `0x${Math.random().toString(16).substring(2, 10)}...${Math.random().toString(16).substring(2, 6)}`,
                    from: `0x${Math.random().toString(16).substring(2, 10)}...${Math.random().toString(16).substring(2, 6)}`,
                    to: `0x${Math.random().toString(16).substring(2, 10)}...${Math.random().toString(16).substring(2, 6)}`,
                    value: (Math.random() * 10000).toFixed(2),
                    tokenSymbol: tokens[Math.floor(Math.random() * tokens.length)],
                    tokenAddress: `0x${Math.random().toString(16).substring(2, 42)}`,
                    blockNumber: 1000000 + startIndex + i,
                    timestamp: Date.now() - Math.random() * 86400000 * 30,
                    gasUsed: (Math.random() * 100000).toFixed(0),
                    gasPrice: (Math.random() * 100).toFixed(2),
                    status: statuses[Math.floor(Math.random() * statuses.length)],
                    type: types[Math.floor(Math.random() * types.length)],
                });
            }

            resolve({
                data,
                success: true,
                total: 1000,
            });
        }, 500);
    });
};

export default TransactionDashboard;
