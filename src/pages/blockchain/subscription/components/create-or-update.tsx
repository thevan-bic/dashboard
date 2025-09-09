import {
    ProForm,
    ProFormDependency,
    ProFormDigit,
    ProFormSelect,
    ProFormSwitch,
    ProFormText,
} from '@ant-design/pro-components';
import { Button, Divider, Drawer, Space, message } from 'antd';
import React, { useEffect, useState } from 'react';

interface TransactionFilter {
    type?: string;
}

interface BlockchainEventFilter {
    name?: string;
    listener?: string;
}

interface SubscriptionFilter {
    events?: string;
    transaction?: TransactionFilter;
    blockchainevent?: BlockchainEventFilter;
    topic?: string;
    deprecatedTopics?: string;
    deprecatedTag?: string;
    deprecatedGroup?: string;
    deprecatedAuthor?: string;
}

interface SubscriptionCoreOptions {
    firstEvent?: 'oldest' | 'newest';
    readAhead?: number;
    withData?: boolean;
    batch?: boolean;
    batchTimeout?: string;
}

interface SubscriptionOptions extends SubscriptionCoreOptions {
    tlsConfigName?: string;
    [key: string]: any;
}

interface Subscription {
    id?: string;
    namespace: string;
    name: string;
    transport: string;
    filter: SubscriptionFilter;
    options: SubscriptionOptions;
    ephemeral?: boolean;
    created?: string;
    updated?: string;
}

interface SubscriptionDrawerProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (values: Subscription) => Promise<void>;
    initialValues?: Partial<Subscription>;
    mode: 'create' | 'edit';
}

const SubscriptionDrawer: React.FC<SubscriptionDrawerProps> = ({
    open,
    onClose,
    onSubmit,
    initialValues,
    mode,
}) => {
    const [form] = ProForm.useForm();
    const [loading, setLoading] = useState(false);

    // Transport options
    const transportOptions = [
        { label: 'WebSocket', value: 'websocket' },
        { label: 'HTTP', value: 'http' },
        { label: 'Webhook', value: 'webhook' },
        { label: 'MQTT', value: 'mqtt' },
    ];

    // First event options
    const firstEventOptions = [
        { label: 'Oldest', value: 'oldest' },
        { label: 'Newest', value: 'newest' },
    ];

    // Listener options
    const listenerOptions = [
        { label: 'Payment Listener', value: 'payment-listener' },
        { label: 'Transfer Listener', value: 'transfer-listener' },
        { label: 'Token Listener', value: 'token-listener' },
        { label: 'NFT Listener', value: 'nft-listener' },
        { label: 'DeFi Listener', value: 'defi-listener' },
        { label: 'Bridge Listener', value: 'bridge-listener' },
    ];

    useEffect(() => {
        if (open) {
            if (initialValues && mode === 'edit') {
                // Transform the data for form
                const formValues = {
                    ...initialValues,
                    'filter.events': initialValues.filter?.events,
                    'filter.topic': initialValues.filter?.topic,
                    'filter.transaction.type': initialValues.filter?.transaction?.type,
                    'filter.blockchainevent.name': initialValues.filter?.blockchainevent?.name,
                    'filter.blockchainevent.listener':
                        initialValues.filter?.blockchainevent?.listener,
                    'options.firstEvent': initialValues.options?.firstEvent,
                    'options.readAhead': initialValues.options?.readAhead,
                    'options.withData': initialValues.options?.withData,
                    'options.batch': initialValues.options?.batch,
                    'options.batchTimeout': initialValues.options?.batchTimeout,
                    'options.tlsConfigName': initialValues.options?.tlsConfigName,
                };
                form.setFieldsValue(formValues);
            } else {
                form.resetFields();
            }
        }
    }, [open, initialValues, mode, form]);

    const handleSubmit = async (values: any) => {
        setLoading(true);
        try {
            // Transform form values back to the expected structure
            const subscription: Subscription = {
                id: mode === 'edit' ? initialValues?.id : undefined,
                namespace: values.namespace,
                name: values.name,
                transport: values.transport,
                ephemeral: values.ephemeral || false,
                filter: {
                    events: values['filter.events'],
                    topic: values['filter.topic'],
                    transaction: {
                        type: values['filter.transaction.type'],
                    },
                    blockchainevent: {
                        name: values['filter.blockchainevent.name'],
                        listener: values['filter.blockchainevent.listener'],
                    },
                },
                options: {
                    firstEvent: values['options.firstEvent'],
                    readAhead: values['options.readAhead'],
                    withData: values['options.withData'],
                    batch: values['options.batch'],
                    batchTimeout: values['options.batchTimeout'],
                    tlsConfigName: values['options.tlsConfigName'],
                },
            };

            await onSubmit(subscription);
            message.success(
                `Subscription ${mode === 'create' ? 'created' : 'updated'} successfully!`,
            );
            onClose();
        } catch (error) {
            message.error(`Failed to ${mode} subscription: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Drawer
            title={mode === 'create' ? 'Create Subscription' : 'Edit Subscription'}
            width={720}
            open={open}
            onClose={onClose}
            footer={
                <Space style={{ float: 'right' }}>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="primary" loading={loading} onClick={() => form.submit()}>
                        {mode === 'create' ? 'Create' : 'Update'}
                    </Button>
                </Space>
            }
        >
            <ProForm form={form} layout="vertical" submitter={false} onFinish={handleSubmit}>
                {/* Basic Information */}
                <h3 style={{ marginBottom: 16 }}>Basic Information</h3>
                <ProFormText
                    name="namespace"
                    label="Namespace"
                    rules={[{ required: true, message: 'Please enter namespace' }]}
                    placeholder="Enter namespace"
                />
                <ProFormText
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: 'Please enter subscription name' }]}
                    placeholder="Enter subscription name"
                />
                <ProFormSelect
                    name="transport"
                    label="Transport"
                    rules={[{ required: true, message: 'Please select transport' }]}
                    options={transportOptions}
                    placeholder="Select transport type"
                />
                <ProFormSwitch
                    name="ephemeral"
                    label="Ephemeral"
                    tooltip="Whether this subscription is ephemeral"
                />

                <Divider />

                {/* Filter Configuration */}
                <h3 style={{ marginBottom: 16 }}>Filter Configuration</h3>
                <ProFormText
                    name="filter.events"
                    label="Events"
                    placeholder="Event filter regex"
                    tooltip="Regular expression to match against events"
                />
                <ProFormText
                    name="filter.topic"
                    label="Topic"
                    placeholder="Topic filter"
                    tooltip="Topic to filter events"
                />

                {/* Transaction Filter */}
                <ProFormText
                    name="filter.transaction.type"
                    label="Transaction Type"
                    placeholder="Transaction type filter"
                />

                {/* Blockchain Event Filter */}
                <ProFormText
                    name="filter.blockchainevent.name"
                    label="Blockchain Event Name"
                    placeholder="Blockchain event name filter"
                />
                <ProFormSelect
                    name="filter.blockchainevent.listener"
                    label="Blockchain Event Listener"
                    options={listenerOptions}
                    placeholder="Select blockchain event listener"
                    allowClear
                />

                <Divider />

                {/* Subscription Options */}
                <h3 style={{ marginBottom: 16 }}>Subscription Options</h3>
                <ProFormSelect
                    name="options.firstEvent"
                    label="First Event"
                    options={firstEventOptions}
                    placeholder="Select first event strategy"
                    tooltip="Strategy for the first event to be dispatched"
                />
                <ProFormDigit
                    name="options.readAhead"
                    label="Read Ahead"
                    placeholder="Read ahead count"
                    tooltip="Number of events to read ahead"
                    min={0}
                />
                <ProFormSwitch
                    name="options.withData"
                    label="With Data"
                    tooltip="Whether to include event data"
                />
                <ProFormSwitch
                    name="options.batch"
                    label="Batch"
                    tooltip="Whether to batch events"
                />
                <ProFormDependency name={['options.batch']}>
                    {({ 'options.batch': batch }) => {
                        if (batch) {
                            return (
                                <ProFormText
                                    name="options.batchTimeout"
                                    label="Batch Timeout"
                                    placeholder="e.g., 30s, 1m"
                                    tooltip="Timeout for batching events"
                                />
                            );
                        }
                        return null;
                    }}
                </ProFormDependency>
                <ProFormText
                    name="options.tlsConfigName"
                    label="TLS Config Name"
                    placeholder="TLS configuration name"
                    tooltip="Name of TLS configuration to use"
                />
            </ProForm>
        </Drawer>
    );
};

// Demo component to show usage
const SubscriptionManagement: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [mode, setMode] = useState<'create' | 'edit'>('create');
    const [editingSubscription, setEditingSubscription] = useState<Partial<Subscription>>();

    const handleCreate = () => {
        setMode('create');
        setEditingSubscription(undefined);
        setDrawerOpen(true);
    };

    const handleEdit = () => {
        // Mock editing data
        const mockSubscription: Partial<Subscription> = {
            id: '123e4567-e89b-12d3-a456-426614174000',
            namespace: 'default',
            name: 'payment-events',
            transport: 'websocket',
            ephemeral: false,
            filter: {
                events: 'payment.*',
                topic: 'payments',
                transaction: {
                    type: 'payment',
                },
                blockchainevent: {
                    name: 'Transfer',
                    listener: 'payment-listener',
                },
            },
            options: {
                firstEvent: 'newest',
                readAhead: 10,
                withData: true,
                batch: true,
                batchTimeout: '30s',
                tlsConfigName: 'default-tls',
            },
        };

        setMode('edit');
        setEditingSubscription(mockSubscription);
        setDrawerOpen(true);
    };

    const handleSubmit = async (subscription: Subscription) => {
        // Simulate API call
        console.log('Submitting subscription:', subscription);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (mode === 'create') {
            console.log('Creating new subscription');
        } else {
            console.log('Updating existing subscription');
        }
    };

    return (
        <div style={{ padding: 24 }}>
            <Space>
                <Button type="primary" onClick={handleCreate}>
                    Create Subscription
                </Button>
                <Button onClick={handleEdit}>Edit Sample Subscription</Button>
            </Space>

            <SubscriptionDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                onSubmit={handleSubmit}
                initialValues={editingSubscription}
                mode={mode}
            />
        </div>
    );
};

export default SubscriptionManagement;
