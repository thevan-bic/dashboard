import type { ParamsType, ProTableProps } from '@ant-design/pro-components';

import type { TablePaginationConfig } from 'antd';

import { cn } from '@/utils/cn';
import { LoadingOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-components';
import { useSize } from 'ahooks';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { BASIC_TABLE_ROOT_CLASS_NAME } from './constants';
import { useStyles } from './styles';

export interface BasicTableProps<D, U, V> extends ProTableProps<D, U, V> {
    autoHeight?: boolean;
    offsetBottom?: number;
}

export function BasicTable<
    DataType extends Record<string, any>,
    Params extends ParamsType = ParamsType,
    ValueType = 'text',
>(props: BasicTableProps<DataType, Params, ValueType>) {
    const classes = useStyles();
    const { t } = useTranslation();
    const { autoHeight = true, offsetBottom } = props;
    const tableWrapperRef = useRef<HTMLDivElement>(null);
    const size = useSize(tableWrapperRef);
    // const [scrollY, setScrollY] = useState(autoHeight ? 0 : undefined);

    useEffect(() => {
        const isPaginationDisabled = props.pagination === false;
        if (autoHeight && tableWrapperRef.current && size?.height) {
            const tableWrapperHeight = size.height;
            const basicTable = tableWrapperRef.current.getElementsByClassName(
                BASIC_TABLE_ROOT_CLASS_NAME,
            )[0];

            if (!basicTable) {
                return;
            }

            const tableWrapperRect = tableWrapperRef.current.getBoundingClientRect();

            if (tableWrapperRect.top > window.innerHeight) {
                // setScrollY(undefined);
                return;
            }

            const tableBody = basicTable.querySelector('div.ant-table-body');

            if (!tableBody) {
                return;
            }

            const tableBodyRect = tableBody.getBoundingClientRect();
            const tableHeaderHeight = tableBodyRect.top - tableWrapperRect.top;
            const paginationHeight = isPaginationDisabled ? 16 : 24 + 16 + 16;
            const realOffsetBottom = offsetBottom || paginationHeight;

            const bodyHeight = Math.max(
                400,
                tableWrapperHeight - tableHeaderHeight - realOffsetBottom,
            );
            if (bodyHeight - tableBodyRect.height <= 10) {
                return;
            }
            tableBody.setAttribute(
                'style',
                `overflow-y: auto;min-height: ${bodyHeight}px;max-height: ${bodyHeight}px;`,
            );
        }
    }, [size, autoHeight, offsetBottom, props.pagination]);

    const getLoadingProps = () => {
        if (props.loading === false) {
            return false;
        }
        if (props.loading === true) {
            return true;
        }
        return {
            indicator: <LoadingOutlined spin />,
            ...props.loading,
        };
    };

    const getPaginationProps = () => {
        if (props.pagination === false) {
            return false;
        }

        return {
            position: ['bottomRight'],
            defaultPageSize: 10,
            showQuickJumper: true,
            showSizeChanger: true,
            showTotal: (total) => t('common.pagination', { total }),
            ...props.pagination,
        } satisfies TablePaginationConfig;
    };

    return (
        <div className="h-full" ref={tableWrapperRef}>
            <ProTable
                tableClassName={'h-full'}
                cardBordered
                rowKey="id"
                dateFormatter="string"
                {...props}
                options={{
                    fullScreen: true,
                    ...props.options,
                }}
                rootClassName={cn(BASIC_TABLE_ROOT_CLASS_NAME, props.rootClassName)}
                className={cn(classes.basicTable, props.className)}
                scroll={{ ...props.scroll }}
                loading={getLoadingProps()}
                pagination={getPaginationProps()}
                expandable={{
                    ...props.expandable,
                }}
            />
        </div>
    );
}
