import { BasicContent } from '@/components';
import { useSearchParams } from '@/hooks/use-search-params';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SubscriptionManagement from './components/create-or-update';
import { Detail } from './components/detail';
import { SubscriptionList } from './components/list';

export default function ContractABI() {
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const [getSearchParams, setGetSearchParams] = useSearchParams();
    const params = getSearchParams();
    const subscriptionID = params.get('slideID');
    const fetchStatus = params.get('fetchStatus');

    useEffect(() => {
        if (subscriptionID) {
            setOpen(true);
        }
    }, [subscriptionID]);

    return (
        <BasicContent>
            <h1>{t('common.menu.subscription')}</h1>
            <SubscriptionList
                namespace={'payment'}
                openDetail={(id, fetchStatus) => {
                    setGetSearchParams({
                        slideID: id,
                        fetchStatus,
                    });
                    setOpen(true);
                }}
            />
            <Detail
                id={subscriptionID || ''}
                fetchStatus={fetchStatus === 'true'}
                isOpen={open}
                onClose={() => setOpen(false)}
            />
            <SubscriptionManagement />
        </BasicContent>
    );
}
