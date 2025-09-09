import {
    useContractsServiceGetContractsInterfaces,
    useContractsServiceGetContractsInterfacesByInterfaceId,
    useContractsServicePostContractsListeners,
} from '@/apis/queries';
import { GetContractsInterfacesResponse } from '@/apis/requests';
import { ETH_ADDRESS_RULES } from '@/constants';
import { useLogger } from '@/lib/logger';
import { EventPathModal } from '@/pages/blockchain/listener/components/create/event';
import { InterfaceModal } from '@/pages/blockchain/listener/components/create/interface';
import { MenuOutlined } from '@ant-design/icons';
import {
    DrawerForm,
    ProCard,
    ProFormInstance,
    ProFormList,
    ProFormSelect,
    ProFormSwitch,
    ProFormText,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import useApp from 'antd/es/app/useApp';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const firstEventOptions = [
    { label: 'Oldest', value: 'oldest' },
    { label: 'Newest', value: 'newest' },
];

type ContractListenerManagementProps = {
    namespace: string;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export const Add: React.FC<ContractListenerManagementProps> = ({ isOpen, setIsOpen }) => {
    const app = useApp();
    const { t } = useTranslation();
    const logger = useLogger(Add.name);
    const formRef = useRef<ProFormInstance>(null);

    const [interfaceModalOpen, setInterfaceModalOpen] = useState(false);
    const [eventModalOpen, setEventModalOpen] = useState(false);
    const [selectedInterface, setSelectedInterface] = useState<
        GetContractsInterfacesResponse[number] | null
    >(null);
    const [currentFilterIndex, setCurrentFilterIndex] = useState<number>(-1);

    // Get current form values to access filters
    const getCurrentFilters = () => {
        return formRef.current?.getFieldValue('filters') || [];
    };

    // Update specific filter in the form
    const updateFilterInForm = (index: number, updates: any) => {
        const currentFilters = getCurrentFilters();
        const updatedFilters = currentFilters.map((filter: any, i: number) =>
            i === index ? { ...filter, ...updates } : filter,
        );
        formRef.current?.setFieldValue('filters', updatedFilters);
    };

    const handleInterfaceSelect = (filterIndex: number) => {
        setCurrentFilterIndex(filterIndex);
        setInterfaceModalOpen(true);
    };

    const handleEventSelect = (filterIndex: number) => {
        const currentFilters = getCurrentFilters();
        const filter = currentFilters[filterIndex];

        if (!filter?.interface) {
            return;
        }
        let interfaceData;
        try {
            interfaceData =
                typeof filter.interface === 'string'
                    ? JSON.parse(filter.interface)
                    : filter.interface;
        } catch (error) {
            return;
        }

        setSelectedInterface(interfaceData);
        setCurrentFilterIndex(filterIndex);
        setEventModalOpen(true);
    };

    const confirmInterfaceSelection = (
        selectedInterface: GetContractsInterfacesResponse[number],
    ) => {
        if (currentFilterIndex >= 0) {
            // Store interface data and clear eventPath when interface changes
            updateFilterInForm(currentFilterIndex, {
                interface: selectedInterface, // Store as object, not JSON string
                interfaceDisplay: selectedInterface.name, // For display in readonly input
                eventPath: '', // Reset event path when interface changes
                eventPathDisplay: '', // Reset event path display
            });
        }
        setInterfaceModalOpen(false);
        setCurrentFilterIndex(-1);
    };

    const confirmEventSelection = (selectedEvent: any) => {
        if (currentFilterIndex >= 0) {
            updateFilterInForm(currentFilterIndex, {
                eventPath: selectedEvent.name,
                eventPathDisplay: selectedEvent.name, // For display in readonly input
            });
        }
        setEventModalOpen(false);
        setCurrentFilterIndex(-1);
        setSelectedInterface(null);
    };

    const handleModalClose = (modalType: 'interface' | 'event') => {
        if (modalType === 'interface') {
            setInterfaceModalOpen(false);
        } else {
            setEventModalOpen(false);
            setSelectedInterface(null);
        }
        setCurrentFilterIndex(-1);
    };

    const { data: interfaces = [] } = useContractsServiceGetContractsInterfaces();

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

    const createMutation = useContractsServicePostContractsListeners();

    const handleFormFinish = async (values: any) => {
        const processedData = {
            ...values,
            filters:
                values.filters?.map((filter: any) => ({
                    interface: filter.interface,
                    eventPath: filter.eventPath,
                    location: filter.location || { address: '' },
                })) || [],
        };

        return createMutation.mutateAsync(
            {
                requestBody: processedData,
            },
            {
                onSuccess: (data) => {
                    app.notification.success({
                        message: 'Create contract listener successfully.',
                        placement: 'bottomRight',
                    });
                },
                onError: (error) => {
                    app.notification.error({
                        message: 'Failed to create contract listener, try again.',
                        placement: 'bottomRight',
                    });
                    logger.error('Failed to create contract listener', error);
                },
            },
        );
    };

    return (
        <>
            <DrawerForm
                formRef={formRef}
                clearOnDestroy
                open={isOpen}
                onOpenChange={setIsOpen}
                title="Create Contract Listener"
                onFinish={handleFormFinish as any}
                initialValues={{
                    firstEvent: 'newest',
                    withData: true,
                    filters: [{}],
                }}
            >
                <ProFormText
                    name="topic"
                    label="Topic"
                    rules={[{ required: true, message: 'Please enter topic' }]}
                    placeholder="Topic name for the subscription"
                    tooltip="Topic name for the subscription"
                />

                <ProFormSelect
                    label="First Event"
                    tooltip="Select first event strategy"
                    name="firstEvent"
                    options={firstEventOptions}
                />

                <ProFormSwitch
                    tooltip="Include parsed event data"
                    name="withData"
                    label="Include Event Data"
                />

                <ProFormList
                    name="filters"
                    label="Filters"
                    copyIconProps={false}
                    actionGuard={{
                        beforeRemoveRow: (params) => {
                            const currentFilters = getCurrentFilters();
                            return currentFilters.length > 1;
                        },
                    }}
                    itemRender={({ listDom, action }, { record, index }) => {
                        return (
                            <ProCard
                                bordered
                                extra={action}
                                title={`Filter #${(index || 0) + 1}`}
                                style={{
                                    marginBlockEnd: 8,
                                }}
                            >
                                {listDom}
                            </ProCard>
                        );
                    }}
                >
                    {(meta) => {
                        const currentIndex = meta.name; // This gives us the correct index for this filter

                        return [
                            <ProFormText
                                key="interfaceDisplay"
                                name="interfaceDisplay"
                                label="Interface"
                                rules={[{ required: true, message: 'Please select an interface' }]}
                                placeholder="Select interface"
                                fieldProps={{
                                    readOnly: true,
                                    suffix: (
                                        <Button
                                            size="small"
                                            icon={<MenuOutlined />}
                                            onClick={() => handleInterfaceSelect(currentIndex)}
                                        />
                                    ),
                                }}
                            />,

                            <ProFormText
                                key="eventPathDisplay"
                                name="eventPathDisplay"
                                label="Event Path"
                                rules={[{ required: true, message: 'Please select an event' }]}
                                placeholder="Select event"
                                fieldProps={{
                                    readOnly: true,
                                    suffix: (
                                        <Button
                                            size="small"
                                            icon={<MenuOutlined />}
                                            onClick={() => handleEventSelect(currentIndex)}
                                        />
                                    ),
                                }}
                            />,

                            <ProFormText
                                key="contractAddress"
                                name={['location', 'address']}
                                label="Contract Address"
                                rules={ETH_ADDRESS_RULES(t)}
                                placeholder="0x..."
                                tooltip="The contract address to listen for events"
                            />,

                            <ProFormText key="interface" name="interface" hidden />,
                            <ProFormText key="eventPath" name="eventPath" hidden />,
                        ];
                    }}
                </ProFormList>
            </DrawerForm>

            <InterfaceModal
                isOpen={interfaceModalOpen}
                onClose={() => handleModalClose('interface')}
                dataSource={interfaces}
                onSelect={confirmInterfaceSelection}
            />

            <EventPathModal
                isOpen={eventModalOpen}
                isLoading={isLoading || isFetching}
                onClose={() => handleModalClose('event')}
                interface={interfaceDetail as any}
                dataSource={interfaceDetail?.events || []}
                onSelect={confirmEventSelection}
            />
        </>
    );
};
