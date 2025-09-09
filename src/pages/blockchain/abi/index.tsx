import { BasicContent } from '@/components';
import { useSearchParams } from '@/hooks/use-search-params';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import Detail from './components/detail';
import { ABIList } from './components/list';

export default function ContractABI() {
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const [getSearchParams, setGetSearchParams] = useSearchParams();
    const params = getSearchParams();
    const operationID = params.get('slideID');
    const fetchStatus = params.get('fetchStatus');

    useEffect(() => {
        if (operationID) {
            setOpen(true);
        }
    }, [operationID]);

    return (
        <BasicContent>
            <h1>{t('common.menu.contractABI')}</h1>
            <ABIList
                namespace={'payment'}
                openDetail={(id, fetchStatus) => {
                    setGetSearchParams({
                        slideID: id,
                        fetchStatus,
                    });
                    setOpen(true);
                }}
            />
            {/*<Detail*/}
            {/*    id={operationID || ''}*/}
            {/*    fetchStatus={fetchStatus === 'true'}*/}
            {/*    isOpen={open}*/}
            {/*    onClose={() => setOpen(false)}*/}
            {/*/>*/}
        </BasicContent>
    );
}
