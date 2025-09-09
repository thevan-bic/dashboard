import { GetContractsInterfacesResponse } from '@/apis/requests';
import { CodeOutlined, KeyOutlined, MessageOutlined, SearchOutlined } from '@ant-design/icons';
import { ProSkeleton } from '@ant-design/pro-components';
import { Avatar, Empty, Input, List, Modal, Skeleton, Space, Tag, Tooltip, Typography } from 'antd';
import React, { useMemo, useState, useCallback } from 'react';

const { Text, Title } = Typography;

type ContractInterface = GetContractsInterfacesResponse[number];

export interface EventPathModalProps {
    isOpen: boolean;
    isLoading?: boolean;
    onClose: () => void;
    interface: ContractInterface;
    dataSource: ContractInterface['events'];
    onSelect: (data: ContractInterface['events'][number]) => void;
    placeholder?: string;
}

export const EventPathModal: React.FC<EventPathModalProps> = ({
    isOpen,
    isLoading,
    onClose,
    onSelect,
    interface: contractInterface,
    dataSource = [],
    placeholder = 'Search events...',
}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Memoized filtered events
    const filteredEvents = useMemo(() => {
        if (!searchTerm.trim()) {
            return dataSource;
        }

        const term = searchTerm.toLowerCase().trim();
        return dataSource.filter((event) => {
            return (
                event.name?.toLowerCase().includes(term) ||
                event.signature?.toLowerCase().includes(term) ||
                event.description?.toLowerCase().includes(term) ||
                event.id?.toLowerCase().includes(term)
            );
        });
    }, [dataSource, searchTerm]);

    // Handlers
    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }, []);

    const handleEventSelect = useCallback(
        (event) => {
            onSelect(event);
            setSearchTerm('');
        },
        [onSelect],
    );

    const handleClose = useCallback(() => {
        setSearchTerm('');
        onClose();
    }, [onClose]);

    const getParametersCount = (signature?: string) => {
        if (!signature) {
            return 0;
        }
        const match = signature.match(/\((.*)\)/);
        if (!match || !match[1]) {
            return 0;
        }
        const params = match[1].split(',').filter((p) => p.trim());
        return params.length;
    };

    const getEventTypeColor = (event) => {
        if (event.anonymous) {
            return 'orange';
        }
        const paramCount = getParametersCount(event.signature);
        if (paramCount === 0) {
            return 'green';
        }
        if (paramCount <= 3) {
            return 'blue';
        }
        return 'purple';
    };

    const renderEventItem = (event) => {
        const paramCount = getParametersCount(event.signature);

        return (
            <List.Item
                key={event.id || event.name}
                onClick={() => handleEventSelect(event)}
                style={{ cursor: 'pointer' }}
            >
                <List.Item.Meta
                    avatar={<Avatar icon={<MessageOutlined />} />}
                    title={
                        <Space size="small" wrap>
                            <Text strong ellipsis>
                                {event.name || 'Unnamed Event'}
                            </Text>
                            {event.anonymous && (
                                <Tag color="orange" icon={<CodeOutlined />}>
                                    Anonymous
                                </Tag>
                            )}
                            <Tag color={getEventTypeColor(event)}>
                                {paramCount} param{paramCount !== 1 ? 's' : ''}
                            </Tag>
                        </Space>
                    }
                    description={
                        <Space direction="vertical" size="small">
                            {event.signature && (
                                <Tooltip title="Event Signature" placement="topLeft">
                                    <Text
                                        code
                                        copyable={{ text: event.signature }}
                                        ellipsis={{ tooltip: event.signature }}
                                    >
                                        {event.signature}
                                    </Text>
                                </Tooltip>
                            )}

                            {event.description && (
                                <Text type="secondary" ellipsis={{ tooltip: event.description }}>
                                    {event.description}
                                </Text>
                            )}

                            <Space size="middle" wrap>
                                {event.id && (
                                    <Space size="small">
                                        <KeyOutlined />
                                        <Text code copyable={{ text: event.id }}>
                                            {event.id.length > 8
                                                ? `${event.id.substring(0, 8)}...`
                                                : event.id}
                                        </Text>
                                    </Space>
                                )}
                            </Space>
                        </Space>
                    }
                />
            </List.Item>
        );
    };

    return (
        <Modal
            title={
                <Space direction="vertical" size="small">
                    <Title level={4} style={{ margin: 0 }}>
                        Select Event
                    </Title>
                    {contractInterface?.name && (
                        <Text type="secondary">
                            Interface: <Text code>{contractInterface.name}</Text>
                            {contractInterface.version && (
                                <Tag style={{ marginLeft: 8 }}>v{contractInterface.version}</Tag>
                            )}
                        </Text>
                    )}
                </Space>
            }
            open={isOpen}
            onCancel={handleClose}
            footer={null}
            width={700}
            destroyOnHidden
        >
            {isLoading && <Skeleton />}
            {!isLoading && (
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                    {/* Search Input */}
                    <Input
                        placeholder={placeholder}
                        value={searchTerm}
                        onChange={handleSearchChange}
                        prefix={<SearchOutlined />}
                        allowClear
                        size="large"
                    />

                    {/* Results Summary */}
                    {(searchTerm || dataSource.length > 0) && (
                        <Space size="large">
                            <Text type="secondary">
                                {searchTerm
                                    ? filteredEvents.length === 0
                                        ? 'No events found'
                                        : `${filteredEvents.length} event${filteredEvents.length !== 1 ? 's' : ''} found`
                                    : `${dataSource.length} event${dataSource.length !== 1 ? 's' : ''} available`}
                            </Text>
                        </Space>
                    )}

                    {/* Events List */}
                    <div style={{ maxHeight: 450, overflowY: 'auto' }}>
                        {filteredEvents.length === 0 ? (
                            <Empty
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                description={
                                    <Text type="secondary">
                                        {searchTerm
                                            ? 'No matching events found'
                                            : 'No events available in this interface'}
                                    </Text>
                                }
                            />
                        ) : (
                            <List
                                dataSource={filteredEvents}
                                renderItem={renderEventItem}
                                loading={isLoading}
                                size="large"
                                split={true}
                                itemLayout="horizontal"
                            />
                        )}
                    </div>
                </Space>
            )}
        </Modal>
    );
};
