import { useContractsServiceDeleteContractsListenersByNameOrId } from '@/apis/queries';
import { BasicContent } from '@/components';
import { useSearchParams } from '@/hooks/use-search-params';
import { useLogger } from '@/lib/logger';
import useApp from 'antd/es/app/useApp';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Add } from './components/add';
import { List } from './components/list';
import { View } from './components/view';

export default function ContractABI() {
    const { t } = useTranslation();
    const logger = useLogger(ContractABI.name);
    const app = useApp();
    const [isView, setIsView] = React.useState(false);
    const [isCreate, setIsCreate] = React.useState(false);
    const [getSearchParams, setGetSearchParams] = useSearchParams();
    const params = getSearchParams();

    const id = params.get('slideID');
    const fetchStatus = params.get('fetchStatus');

    const deleteMutation = useContractsServiceDeleteContractsListenersByNameOrId();

    useEffect(() => {
        if (id) {
            setIsView(true);
        }
    }, [id]);

    return (
        <BasicContent>
            <h1>{t('common.menu.listener')}</h1>
            <List
                namespace={'payment'}
                view={(id, fetchStatus) => {
                    setGetSearchParams({
                        slideID: id,
                        fetchStatus,
                    });
                    setIsView(true);
                }}
                add={() => setIsCreate(true)}
                remove={(id) => {
                    return deleteMutation.mutateAsync(
                        {
                            nameOrId: id,
                        },
                        {
                            onSuccess: (res) => {
                                app.notification.success({
                                    message: 'Removed: ' + id,
                                    placement: 'bottomRight',
                                });
                            },
                            onError: (err) => {
                                app.notification.error({
                                    message: 'Remove: ' + (err as Error).message,
                                    placement: 'bottomRight',
                                });
                            },
                        },
                    );
                }}
            />
            <View
                id={id || ''}
                fetchStatus={fetchStatus === 'true'}
                isOpen={isView}
                onClose={() => setIsView(false)}
            />
            <Add isOpen={isCreate} setIsOpen={setIsCreate} namespace={'payment'} />
        </BasicContent>
    );
}
