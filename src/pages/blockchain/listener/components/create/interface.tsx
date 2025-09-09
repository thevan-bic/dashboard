import { GetContractsInterfacesResponse } from '@/apis/requests';

import { CheckCircleOutlined, ClockCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { EthereumColorful } from '@ant-design/web3-icons';
import { Avatar, Badge, Divider, Empty, Input, List, Modal, Space, Tag, Typography } from 'antd';
import React, { useMemo, useState, useCallback } from 'react';

const { Text } = Typography;

type ContractInterface = GetContractsInterfacesResponse[number];

export interface InterfaceModalProps {
    isOpen: boolean;
    onClose: () => void;
    dataSource: ContractInterface[];
    onSelect: (data: ContractInterface) => void;
    loading?: boolean;
    title?: string;
    placeholder?: string;
}

export const InterfaceModal: React.FC<InterfaceModalProps> = ({
    isOpen,
    onClose,
    onSelect,
    dataSource = [],
    loading = false,
    title = 'Select Interface',
    placeholder = 'Search interfaces...',
}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredInterfaces = useMemo(() => {
        if (!searchTerm.trim()) {
            return dataSource;
        }

        const term = searchTerm.toLowerCase().trim();
        return dataSource.filter((iface) => {
            return (
                iface.name?.toLowerCase().includes(term) ||
                iface.description?.toLowerCase().includes(term) ||
                iface.namespace?.toLowerCase().includes(term) ||
                iface.networkName?.toLowerCase().includes(term)
            );
        });
    }, [dataSource, searchTerm]);

    // Handlers
    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }, []);

    const handleInterfaceSelect = useCallback(
        (iface: ContractInterface) => {
            onSelect(iface);
            setSearchTerm('');
        },
        [onSelect],
    );

    const handleClose = useCallback(() => {
        setSearchTerm('');
        onClose();
    }, [onClose]);

    // Get network tag color
    const getNetworkTagColor = (network?: string) => {
        const colorMap: Record<string, string> = {
            ethereum: 'blue',
            polygon: 'purple',
            bsc: 'gold',
            arbitrum: 'cyan',
            optimism: 'red',
        };
        return colorMap[network?.toLowerCase() || ''] || 'default';
    };

    // Render interface item
    const renderInterfaceItem = (iface: ContractInterface) => (
        <List.Item
            key={iface.id}
            onClick={() => handleInterfaceSelect(iface)}
            style={{ cursor: 'pointer' }}
        >
            <List.Item.Meta
                avatar={
                    <Badge
                        dot={iface.published}
                        status={iface.published ? 'success' : 'default'}
                        offset={[-4, 4]}
                    >
                        <Avatar icon={<EthereumColorful />} size="large" />
                    </Badge>
                }
                title={
                    <Space size="small" wrap>
                        <Text strong ellipsis>
                            {iface.name || 'Unnamed Interface'}
                        </Text>
                        {iface.version && <Tag color="geekblue">v{iface.version}</Tag>}
                        {iface.published !== undefined && (
                            <Tag
                                icon={
                                    iface.published ? (
                                        <CheckCircleOutlined />
                                    ) : (
                                        <ClockCircleOutlined />
                                    )
                                }
                                color={iface.published ? 'success' : 'warning'}
                            >
                                {iface.published ? 'Published' : 'Draft'}
                            </Tag>
                        )}
                    </Space>
                }
                description={
                    <Space direction="vertical" size="small" style={{ width: '100%' }}>
                        {iface.description && (
                            <Text type="secondary" ellipsis={{ tooltip: iface.description }}>
                                {iface.description}
                            </Text>
                        )}
                        <Space size="middle" wrap>
                            {iface.namespace && (
                                <Space size="small">
                                    <Text type="secondary">Namespace:</Text>
                                    <Tag>{iface.namespace}</Tag>
                                </Space>
                            )}
                            {iface.networkName && (
                                <Space size="small">
                                    <Text type="secondary">Network:</Text>
                                    <Tag color={getNetworkTagColor(iface.networkName)}>
                                        {iface.networkName}
                                    </Tag>
                                </Space>
                            )}
                            {iface.id && (
                                <Space size="small">
                                    <Text type="secondary">ID:</Text>
                                    <Text code copyable={{ text: iface.id }}>
                                        {iface.id.substring(0, 8)}...
                                    </Text>
                                </Space>
                            )}
                        </Space>
                    </Space>
                }
            />
        </List.Item>
    );

    return (
        <Modal
            width={640}
            title={title}
            open={isOpen}
            onCancel={handleClose}
            footer={null}
            destroyOnHidden
        >
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <Input
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    prefix={<SearchOutlined />}
                    allowClear
                    size="large"
                />

                {searchTerm && (
                    <>
                        <Text type="secondary">
                            {filteredInterfaces.length === 0
                                ? 'No interfaces found'
                                : `${filteredInterfaces.length} interface${filteredInterfaces.length !== 1 ? 's' : ''} found`}
                        </Text>
                        <Divider />
                    </>
                )}

                <div style={{ maxHeight: 450, overflowY: 'auto' }}>
                    {filteredInterfaces.length === 0 ? (
                        <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description={
                                <Text type="secondary">
                                    {searchTerm
                                        ? 'No matching interfaces found'
                                        : 'No interfaces available'}
                                </Text>
                            }
                        />
                    ) : (
                        <List
                            dataSource={filteredInterfaces}
                            renderItem={renderInterfaceItem}
                            loading={loading}
                            size="large"
                            split={true}
                            itemLayout="horizontal"
                        />
                    )}
                </div>
            </Space>
        </Modal>
    );
};
