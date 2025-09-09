import {
    useContractsServiceGetContractsInterfaces,
    useContractsServiceGetContractsInterfacesByInterfaceId,
} from '@/apis/queries';
import { EventPathModal } from '@/pages/blockchain/listener/components/create/event';
import { DeleteOutlined, MenuOutlined, PlusOutlined } from '@ant-design/icons';
import {
    ProForm,
    ProFormGroup,
    ProFormSelect,
    ProFormSwitch,
    ProFormText,
    ProSkeleton,
} from '@ant-design/pro-components';
import { Button, Card, Drawer, Form, Input, Space, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { InterfaceModal } from './create/interface';

interface FFIReference {
    id?: string;
    name?: string;
    version?: string;
    namespace?: string;
    description?: string;
    published?: boolean;
}

interface FFIEventDefinition {
    name: string;
    description?: string;
    params?: any;
    details?: any;
}

interface ContractListenerOptions {
    firstEvent?: string;
    withData?: boolean;
}

interface ListenerFilter {
    interface?: FFIReference;
    location?: {
        address?: string;
    };
    eventPath?: string;
    signature?: string;
}

interface ContractListener {
    id?: string;
    interface?: FFIReference;
    namespace?: string;
    name?: string;
    backendId?: string;
    location?: any;
    created?: string;
    event?: FFIEventDefinition;
    signature?: string;
    topic?: string;
    options?: ContractListenerOptions;
    filters?: ListenerFilter[];
}

interface FFIInterface {
    id: string;
    name: string;
    version: string;
    namespace?: string;
    description?: string;
    published?: boolean;
    events: FFIEvent[];
}

interface FFIEvent {
    id: string;
    name: string;
    signature: string;
    description?: string;
}

interface ContractListenerDrawerProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (values: ContractListener) => Promise<void>;
    initialValues?: Partial<ContractListener>;
    mode: 'create' | 'edit';
}

export const ContractListenerManagement: React.FC<ContractListenerDrawerProps> = ({
    open,
    onClose,
    onSubmit,
    initialValues,
    mode,
}) => {
    const [form] = ProForm.useForm();
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState<any[]>([]);
    const [interfaceModalOpen, setInterfaceModalOpen] = useState(false);
    const [eventModalOpen, setEventModalOpen] = useState(false);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState<number>(-1);
    const [selectedInterface, setSelectedInterface] = useState<FFIInterface | null>(null);
    const [showJson, setShowJson] = useState(false);
    const [formValues, setFormValues] = useState<any>({});

    const { data: interfaces } = useContractsServiceGetContractsInterfaces();

    const {
        data: interfaceDetail,
        isFetching,
        isLoading,
    } = useContractsServiceGetContractsInterfacesByInterfaceId(
        {
            interfaceId: selectedInterface?.id,
            fetchchildren: 'true',
        },
        ['interface', selectedInterface?.id],
        {
            enabled: !!selectedInterface?.id,
        },
    );

    const firstEventOptions = [
        { label: 'Oldest', value: 'oldest' },
        { label: 'Newest', value: 'newest' },
    ];

    useEffect(() => {
        if (open) {
            if (initialValues && mode === 'edit') {
                const values = {
                    name: initialValues.name,
                    namespace: initialValues.namespace,
                    topic: initialValues.topic,
                    firstEvent: initialValues.options?.firstEvent || 'newest',
                    withData: initialValues.options?.withData || false,
                };
                form.setFieldsValue(values);
                setFormValues(values);
                setFilters(initialValues.filters || []);
            } else {
                const defaultValues = {
                    name: '',
                    namespace: '',
                    topic: '',
                    firstEvent: 'newest',
                    withData: true,
                };
                form.setFieldsValue(defaultValues);
                setFormValues(defaultValues);
                setFilters([
                    {
                        id: Date.now().toString(),
                        interface: undefined,
                        location: { address: '' },
                        eventPath: '',
                    },
                ]);
            }
        }
    }, [open, initialValues, mode, form]);

    // Watch form values for JSON preview
    useEffect(() => {
        const subscription = form.getFieldsValue();
        setFormValues(subscription);
    }, [form]);

    const addFilter = () => {
        const newFilter = {
            id: Date.now().toString(),
            interface: undefined,
            location: { address: '' },
            eventPath: '',
        };
        setFilters([...filters, newFilter]);
    };

    const removeFilter = (filterId: string) => {
        if (filters.length > 1) {
            setFilters(filters.filter((f) => f.id !== filterId));
        }
    };

    const updateFilter = (filterId: string, updates: any) => {
        setFilters(filters.map((f) => (f.id === filterId ? { ...f, ...updates } : f)));
    };

    const handleInterfaceSelect = (filterIndex: number) => {
        setSelectedFilterIndex(filterIndex);
        setInterfaceModalOpen(true);
    };

    const handleEventSelect = (filterIndex: number) => {
        const filter = filters[filterIndex];
        if (!filter.interface) {
            message.warning('Please select an interface first');
            return;
        }
        setSelectedFilterIndex(filterIndex);
        const selectedInterface = interfaces.find((i) => i.id === filter.interface.id);
        setSelectedInterface((selectedInterface as any) || null);
        setEventModalOpen(true);
    };

    const confirmInterfaceSelection = (selectedInterface: FFIInterface) => {
        if (selectedFilterIndex >= 0) {
            updateFilter(filters[selectedFilterIndex].id, {
                interface: {
                    id: selectedInterface.id,
                    name: selectedInterface.name,
                    version: selectedInterface.version,
                    namespace: selectedInterface.namespace,
                    description: selectedInterface.description,
                    published: selectedInterface.published,
                },
                eventPath: '',
            });
        }
        setInterfaceModalOpen(false);
    };

    const confirmEventSelection = (selectedEvent: FFIEvent) => {
        if (selectedFilterIndex >= 0) {
            updateFilter(filters[selectedFilterIndex].id, {
                eventPath: selectedEvent.name,
            });
        }
        setEventModalOpen(false);
    };

    const generateJsonConfig = () => {
        const cleanFilters = filters.map((filter) => {
            const cleanFilter: any = {};
            if (filter.interface) {
                cleanFilter.interface = filter.interface;
            }
            if (filter.location) {
                cleanFilter.location = filter.location;
            }
            if (filter.eventPath) {
                cleanFilter.eventPath = filter.eventPath;
            }
            return cleanFilter;
        });

        return {
            filters: cleanFilters,
            options: {
                firstEvent: formValues.firstEvent || 'newest',
                withData: formValues.withData || false,
            },
            topic: formValues.topic || '',
        };
    };

    const handleSubmit = async (values: any) => {
        setLoading(true);
        try {
            const contractListener: ContractListener = {
                id: mode === 'edit' ? initialValues?.id : undefined,
                name: values.name,
                namespace: values.namespace,
                topic: values.topic,
                options: {
                    firstEvent: values.firstEvent,
                    withData: values.withData,
                },
                filters: filters.map((filter) => ({
                    interface: filter.interface,
                    location: filter.location,
                    eventPath: filter.eventPath,
                })),
            };

            await onSubmit(contractListener);
            message.success(
                `Contract Listener ${mode === 'create' ? 'created' : 'updated'} successfully!`,
            );
            onClose();
        } catch (error) {
            message.error(`Failed to ${mode} contract listener: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    if (!interfaces) {
        return <ProSkeleton active />;
    }

    return (
        <>
            <Drawer
                title={
                    <div>
                        <div style={{ fontSize: 14, fontWeight: 'normal' }}>Contract Listener</div>
                        <div style={{ fontSize: 20, fontWeight: 'bold' }}>
                            {mode === 'create' ? 'Create New Listener' : 'Edit Listener'}
                        </div>
                    </div>
                }
                size={'large'}
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
                <div style={{ color: 'white' }}>
                    <ProForm
                        form={form}
                        layout="vertical"
                        submitter={false}
                        onFinish={handleSubmit}
                        onValuesChange={(_, allValues) => setFormValues(allValues)}
                    >
                        {/* JSON Configuration Toggle */}
                        <div style={{ marginBottom: 24 }}>
                            <Button type="default" onClick={() => setShowJson(!showJson)}>
                                {showJson ? '<> HIDE JSON' : '<> SHOW JSON'}
                            </Button>
                        </div>

                        {/* JSON Configuration Display */}
                        {showJson && (
                            <div style={{ marginBottom: 24 }}>
                                <h3 style={{ fontSize: 16, marginBottom: 12 }}>
                                    JSON Configuration
                                </h3>
                                <pre
                                    style={{
                                        borderRadius: 6,
                                        padding: 16,
                                        fontSize: 13,
                                        lineHeight: 1.5,
                                        overflow: 'auto',
                                        maxHeight: 400,
                                        margin: 0,
                                    }}
                                >
                                    {JSON.stringify(generateJsonConfig(), null, 2)}
                                </pre>
                            </div>
                        )}

                        {/* Filters Section */}
                        <div style={{ marginBottom: 32 }}>
                            <h3 style={{ fontSize: 18, marginBottom: 16 }}>Filters</h3>

                            {filters.map((filter, index) => (
                                <Card
                                    style={{ marginBottom: 8 }}
                                    key={filter.id}
                                    size="small"
                                    title={`Filter #${index + 1}`}
                                    extra={
                                        filters.length > 1 && (
                                            <Button
                                                type="dashed"
                                                size="small"
                                                color="primary"
                                                icon={<DeleteOutlined />}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    removeFilter(filter.id);
                                                }}
                                            />
                                        )
                                    }
                                >
                                    <Form.Item<any>
                                        label="Interface"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input interface!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            required
                                            value={filter.interface?.name || ''}
                                            placeholder="Select interface"
                                            readOnly
                                            suffix={
                                                <Button
                                                    icon={<MenuOutlined />}
                                                    onClick={() => handleInterfaceSelect(index)}
                                                />
                                            }
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        label="Event Path"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input event path!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            required
                                            value={filter.eventPath || ''}
                                            placeholder="Select event"
                                            readOnly
                                            suffix={
                                                <Button
                                                    icon={<MenuOutlined />}
                                                    onClick={() => handleEventSelect(index)}
                                                    disabled={!filter.interface}
                                                />
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Contract Address"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input contract address!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            required
                                            value={filter.interface?.location?.address || ''}
                                            placeholder="0xxx"
                                        />
                                    </Form.Item>
                                </Card>
                            ))}

                            <Button type="dashed" icon={<PlusOutlined />} onClick={addFilter}>
                                Add new filter
                            </Button>
                        </div>

                        <h3 style={{ fontSize: 18, marginBottom: 16 }}>Topic & Options</h3>
                        <ProFormGroup>
                            <ProFormText
                                name="topic"
                                label={<span>Topic *</span>}
                                rules={[{ required: true, message: 'Please enter topic' }]}
                                placeholder="Topic name for the subscription"
                                tooltip={'Topic name for the subscription'}
                            />
                            <ProFormSelect
                                label={'First Event'}
                                name="firstEvent"
                                options={firstEventOptions}
                                placeholder="Select first event strategy"
                                initialValue="newest"
                            />
                            <ProFormSwitch
                                tooltip={'With data'}
                                name="withData"
                                label={<span style={{ color: 'white' }}>Include Event Data</span>}
                                initialValue={false}
                            />
                        </ProFormGroup>
                    </ProForm>
                </div>
            </Drawer>

            <InterfaceModal
                isOpen={interfaceModalOpen}
                onClose={() => setInterfaceModalOpen(false)}
                dataSource={interfaces as any}
                onSelect={confirmInterfaceSelection as any}
            />
            <EventPathModal
                isOpen={eventModalOpen}
                isLoading={isLoading || isFetching}
                onClose={() => setEventModalOpen(false)}
                interface={interfaceDetail as any}
                dataSource={interfaceDetail?.events || []}
                onSelect={confirmEventSelection}
            />
        </>
    );
};
