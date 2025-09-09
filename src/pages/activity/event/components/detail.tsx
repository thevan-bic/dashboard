import { GetEventsResponse } from '@/apis/requests';
import { RowInfo } from '@/components/views/row-info';
import { formatToNow, formatUTC7Time } from '@/utils/time/format-distance-to-now';
import {} from '@ant-design/pro-components';
import { Drawer } from 'antd';
import { useTranslation } from 'react-i18next';

interface DetailProps {
    title: React.ReactNode;
    open: boolean;
    detailData: GetEventsResponse[number] | undefined;
    onCloseChange: () => void;
    refreshTable?: () => void;
}

export function Detail({ title, open, onCloseChange, detailData }: DetailProps) {
    const { t } = useTranslation();

    return (
        <Drawer
            title={title}
            open={open}
            destroyOnHidden={true}
            onClose={onCloseChange}
            size={'large'}
        >
            <RowInfo label={'Event ID'} value={detailData?.id || ''} showCopy={!!detailData?.id} />
            <RowInfo
                label={'Transaction ID'}
                value={detailData?.tx || 'No Transaction'}
                showCopy={!!detailData?.tx}
                link={detailData?.tx ? `transactions/${detailData?.tx}` : undefined}
            />
            <RowInfo
                label={'Created At'}
                value={`${formatUTC7Time(detailData?.created || '0')} (${formatToNow(detailData?.created || '0')})`}
                showCopy={false}
            />
        </Drawer>
    );
}
