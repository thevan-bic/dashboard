import { ClearOutlined, FilterOutlined as Filter } from '@ant-design/icons';
import {
    ModalForm,
    ProFormDatePicker,
    ProFormDateRangePicker,
    ProFormDependency,
    ProFormDigit,
    ProFormSelect,
    ProFormSwitch,
    ProFormText,
} from '@ant-design/pro-components';
import { Button, Form, Space, Tag } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ColumnDefinition {
    key: string;
    title: string;
    dataType: 'text' | 'number' | 'date' | 'datetime' | 'select' | 'boolean';
    options?: { label: string; value: any }[];
}

interface FilterItem {
    id: string;
    field: string;
    operator: string;
    rule: string;
    value: any;
    caseSensitive: boolean;
    displayText: string;
    filterString: string;
}

interface FilterModalProps {
    title: React.ReactNode;
    open: boolean;
    columns: ColumnDefinition[];
    onCloseChange: () => void;
    onFilterAdd?: (filter: FilterItem) => void;
}

interface FilterManagerProps {
    initialValues?: FilterItem[];
    columns: ColumnDefinition[];
    onFiltersChange?: (filters: FilterItem[]) => void;
}

function FilterModal({ title, open, columns, onCloseChange, onFilterAdd }: FilterModalProps) {
    const { t } = useTranslation();
    const [form] = Form.useForm<any>();

    const operatorsByType = {
        text: [
            { label: `${t('filter.equal')} (=)`, value: '=', modifiers: true },
            { label: `${t('filter.contains')} (@)`, value: '@', modifiers: true },
            { label: `${t('filter.startsWith')} (^)`, value: '^', modifiers: true },
            { label: `${t('filter.endsWith')} ($)`, value: '$', modifiers: true },
            { label: `${t('filter.isEmpty')} (empty)`, value: 'empty', modifiers: false },
            { label: `${t('filter.isNotEmpty')} (!empty)`, value: '!empty', modifiers: false },
        ],
        number: [
            { label: `${t('filter.equal')} (=)`, value: '=', modifiers: false },
            { label: `${t('filter.greaterThan')} (>>)`, value: '>>', modifiers: false },
            { label: `${t('filter.greaterThanOrEqual')} (>=)`, value: '>=', modifiers: false },
            { label: `${t('filter.lessThan')} (<<)`, value: '<<', modifiers: false },
            { label: `${t('filter.lessThanOrEqual')} (<=)`, value: '<=', modifiers: false },
            { label: `${t('filter.between')} (><)`, value: '><', modifiers: false },
        ],
        date: [
            { label: `${t('filter.equal')} (=)`, value: '=', modifiers: false },
            { label: `${t('filter.greaterThan')} (>>)`, value: '>>', modifiers: false },
            { label: `${t('filter.greaterThanOrEqual')} (>=)`, value: '>=', modifiers: false },
            { label: `${t('filter.lessThan')} (<<)`, value: '<<', modifiers: false },
            { label: `${t('filter.lessThanOrEqual')} (<=)`, value: '<=', modifiers: false },
            { label: `${t('filter.between')} (><)`, value: '><', modifiers: false },
        ],
        datetime: [
            { label: `${t('filter.equal')} (=)`, value: '=', modifiers: false },
            { label: `${t('filter.greaterThan')} (>>)`, value: '>>', modifiers: false },
            { label: `${t('filter.greaterThanOrEqual')} (>=)`, value: '>=', modifiers: false },
            { label: `${t('filter.lessThan')} (<<)`, value: '<<', modifiers: false },
            { label: `${t('filter.lessThanOrEqual')} (<=)`, value: '<=', modifiers: false },
            { label: `${t('filter.between')} (><)`, value: '><', modifiers: false },
        ],
        select: [
            { label: `${t('filter.equal')} (=)`, value: '=', modifiers: false },
            { label: `${t('filter.notMatches')} (!=)`, value: '!=', modifiers: false },
        ],
        boolean: [{ label: `${t('filter.equal')} (=)`, value: '=', modifiers: false }],
    };

    const ruleOptions = [
        { label: t('filter.matches'), value: 'matches' },
        { label: t('filter.notMatches'), value: 'notMatches' },
    ];

    const fieldOptions = columns.map((col) => ({
        label: col.title,
        value: col.key,
        dataType: col.dataType,
    }));

    const getSelectedColumn = (fieldKey: string): ColumnDefinition | undefined => {
        return columns.find((col) => col.key === fieldKey);
    };

    const getOperatorOptions = (fieldKey: string) => {
        const column = getSelectedColumn(fieldKey);
        if (!column) {
            return [];
        }
        return operatorsByType[column.dataType] || operatorsByType.text;
    };

    const formatValue = (value: any, dataType: string, operator: string): string => {
        if (!value) {
            return '';
        }

        switch (dataType) {
            case 'date':
            case 'datetime':
                if (operator === '><' && Array.isArray(value)) {
                    return value.map((v) => dayjs(new Date(v)).unix()).join(',');
                }
                return dayjs(new Date(value)).unix().toString();
            case 'number':
                if (operator === '><' && Array.isArray(value)) {
                    return value.join(',');
                }
                return String(value);
            case 'boolean':
                return value ? 'true' : 'false';
            default:
                return String(value);
        }
    };

    const onFinish = async (values: any) => {
        const { field, operator, rule, value, caseSensitive } = values;

        if (!field || (operator !== 'empty' && operator !== '!empty' && !value)) {
            return false;
        }

        const column = getSelectedColumn(field);
        if (!column) {
            return false;
        }

        // Create filter string
        const isNegate = rule === 'notMatches';
        const isCaseInsensitive = !caseSensitive;
        const formattedValue = formatValue(value, column.dataType, operator);

        let filterString = '';
        if (operator === 'empty' || operator === '!empty') {
            filterString = `${field}=${operator}`;
        } else {
            filterString = `${field}=${isNegate ? '!' : ''}${
                isCaseInsensitive ? ':' : ''
            }${operator}${formattedValue}`;
        }

        // Create display text
        const operatorLabel =
            getOperatorOptions(field).find((op) => op.value === operator)?.label || operator;
        const ruleText = isNegate ? 'NOT' : '';
        const caseText = isCaseInsensitive ? '(case insensitive)' : '';
        const valueText =
            operator === 'empty' || operator === '!empty' ? '' : `"${formattedValue}"`;
        const displayText =
            `${column.title} ${ruleText} ${operatorLabel} ${valueText} ${caseText}`.trim();

        // Create new filter
        const newFilter: FilterItem = {
            id: `filter_${Date.now()}`,
            field,
            operator,
            rule: rule || 'matches',
            value: formattedValue,
            caseSensitive: caseSensitive ?? true,
            displayText,
            filterString,
        };

        // Add filter
        if (onFilterAdd) {
            onFilterAdd(newFilter);
        }

        // Reset form and close modal
        form.resetFields();
        return true;
    };

    useEffect(() => {
        if (open) {
            form.resetFields();
        }
    }, [open]);

    return (
        <ModalForm
            title={title}
            open={open}
            onOpenChange={(visible) => {
                if (!visible) {
                    onCloseChange();
                }
            }}
            labelCol={{ md: 6, xl: 4 }}
            layout="horizontal"
            form={form}
            autoFocusFirstInput
            modalProps={{
                destroyOnClose: true,
            }}
            grid
            width={{
                xl: 800,
                md: 600,
            }}
            onFinish={onFinish}
            initialValues={{
                rule: 'matches',
                caseSensitive: true,
            }}
        >
            <ProFormSelect
                name="field"
                label={t('filter.field')}
                options={fieldOptions}
                rules={[{ required: true, message: 'Please select a field' }]}
                showSearch
                placeholder="Select field"
                colProps={{ md: 24, xl: 24 }}
                fieldProps={{
                    onChange: () => {
                        // Reset operator and value when field changes
                        form.setFieldsValue({ operator: undefined, value: undefined });
                    },
                }}
            />

            <ProFormDependency name={['field']}>
                {({ field }) => {
                    if (!field) {
                        return null;
                    }

                    const operatorOptions = getOperatorOptions(field);
                    return (
                        <ProFormSelect
                            name="operator"
                            label={t('filter.operator')}
                            options={operatorOptions}
                            rules={[{ required: true, message: 'Please select an operator' }]}
                            placeholder="Select operator"
                            colProps={{ md: 24, xl: 24 }}
                            fieldProps={{
                                onChange: () => {
                                    // Reset value when operator changes
                                    form.setFieldsValue({ value: undefined });
                                },
                            }}
                        />
                    );
                }}
            </ProFormDependency>

            <ProFormSelect
                name="rule"
                label={t('filter.rule')}
                options={ruleOptions}
                placeholder="Select rule"
                colProps={{ md: 24, xl: 24 }}
            />

            {/* Dynamic Value Input based on field type and operator */}
            <ProFormDependency name={['field', 'operator']}>
                {({ field, operator }) => {
                    if (!field || !operator) {
                        return null;
                    }
                    if (operator === 'empty' || operator === '!empty') {
                        return null;
                    }

                    const column = getSelectedColumn(field);
                    if (!column) {
                        return null;
                    }

                    const isBetween = operator === '><';
                    const baseProps = {
                        name: 'value',
                        label: t('filter.value'),
                        rules: [{ required: true, message: 'Please enter a value' }],
                        placeholder: 'Enter value',
                        colProps: { md: 24, xl: 24 },
                    };

                    switch (column.dataType) {
                        case 'number':
                            if (isBetween) {
                                return (
                                    <div className="col-span-12">
                                        <label className="block text-sm font-medium mb-1">
                                            {t('filter.value')} (Range)
                                        </label>
                                        <Space.Compact style={{ display: 'flex' }}>
                                            <ProFormDigit
                                                name={['value', 0]}
                                                placeholder="Min value"
                                                rules={[{ required: true }]}
                                                fieldProps={{ style: { width: '50%' } }}
                                            />
                                            <ProFormDigit
                                                name={['value', 1]}
                                                placeholder="Max value"
                                                rules={[{ required: true }]}
                                                fieldProps={{ style: { width: '50%' } }}
                                            />
                                        </Space.Compact>
                                    </div>
                                );
                            }
                            return <ProFormDigit {...baseProps} allowClear />;

                        case 'date':
                            if (isBetween) {
                                return (
                                    <ProFormDateRangePicker
                                        {...baseProps}
                                        label={`${t('filter.value')} (Range)`}
                                        fieldProps={{
                                            format: 'YYYY-MM-DD',
                                        }}
                                    />
                                );
                            }
                            return (
                                <ProFormDatePicker
                                    {...baseProps}
                                    fieldProps={{
                                        format: 'YYYY-MM-DD',
                                    }}
                                />
                            );

                        case 'datetime':
                            if (isBetween) {
                                return (
                                    <ProFormDateRangePicker
                                        {...baseProps}
                                        label={`${t('filter.value')} (Range)`}
                                        fieldProps={{
                                            showTime: true,
                                            format: 'YYYY-MM-DD HH:mm:ss',
                                        }}
                                    />
                                );
                            }
                            return (
                                <ProFormDatePicker
                                    {...baseProps}
                                    fieldProps={{
                                        showTime: true,
                                        format: 'YYYY-MM-DD HH:mm:ss',
                                    }}
                                />
                            );

                        case 'select':
                            return (
                                <ProFormSelect
                                    {...baseProps}
                                    options={column.options || []}
                                    showSearch
                                />
                            );

                        case 'boolean':
                            return (
                                <ProFormSelect
                                    {...baseProps}
                                    options={[
                                        { label: 'True', value: true },
                                        { label: 'False', value: false },
                                    ]}
                                />
                            );

                        case 'text':
                        default:
                            return <ProFormText {...baseProps} allowClear />;
                    }
                }}
            </ProFormDependency>

            <ProFormDependency name={['field', 'operator']}>
                {({ field, operator }) => {
                    if (!field || !operator) {
                        return null;
                    }

                    const operatorData = getOperatorOptions(field).find(
                        (op) => op.value === operator,
                    );
                    const allowModifiers = operatorData?.modifiers ?? true;

                    return (
                        <ProFormSwitch
                            name="caseSensitive"
                            label={t('filter.caseSensitive')}
                            disabled={!allowModifiers}
                            colProps={{ md: 24, xl: 24 }}
                        />
                    );
                }}
            </ProFormDependency>
        </ModalForm>
    );
}

export const FilterPro: React.FC<FilterManagerProps> = ({
    initialValues,
    columns,
    onFiltersChange,
}) => {
    const { t } = useTranslation();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [filters, setFilters] = useState<FilterItem[]>([]);

    useEffect(() => {
        if (onFiltersChange) {
            onFiltersChange(filters);
        }
    }, [filters, onFiltersChange]);

    const handleFilterAdd = (newFilter: FilterItem) => {
        setFilters((prev) => [...prev, newFilter]);
        setIsModalVisible(false);
    };

    const removeFilter = (filterId: string) => {
        setFilters((prev) => prev.filter((f) => f.id !== filterId));
    };

    const cleanFilter = () => {
        setFilters([]);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    {filters.length > 0 ? (
                        <Space wrap>
                            {filters.map((filter) => (
                                <Tag
                                    key={filter.id}
                                    closable
                                    onClose={() => removeFilter(filter.id)}
                                    className="px-3 py-1 cursor-pointer"
                                    title={t('filter.clickToRemove')}
                                    color="blue"
                                >
                                    <Space size={4}>
                                        <Filter size={12} />
                                        <span>{filter.displayText}</span>
                                    </Space>
                                </Tag>
                            ))}
                        </Space>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="flex-shrink-0">
                    <div className="flex items-start justify-between gap-4">
                        {filters && filters.length > 0 && (
                            <div className="flex-1">
                                <Button
                                    size={'small'}
                                    variant="outlined"
                                    icon={<ClearOutlined size={16} />}
                                    onClick={() => cleanFilter()}
                                >
                                    {t('filter.cleanFilter')}
                                </Button>
                            </div>
                        )}
                        <div className="flex-shrink-0">
                            <Button
                                size={'small'}
                                type="primary"
                                variant="outlined"
                                icon={<Filter size={16} />}
                                onClick={() => setIsModalVisible(true)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Filter Modal */}
            <FilterModal
                title={
                    <Space>
                        <Filter size={16} />
                        {t('addFilter')}
                    </Space>
                }
                open={isModalVisible}
                columns={columns}
                onCloseChange={handleCloseModal}
                onFilterAdd={handleFilterAdd}
            />
        </div>
    );
};
