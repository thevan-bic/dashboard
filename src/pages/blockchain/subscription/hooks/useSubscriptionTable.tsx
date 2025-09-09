import { useSubscriptionsServiceGetSubscriptions } from '@/apis/queries';
import { GetSubscriptionsData } from '@/apis/requests';
import { useGenericTable } from '@/hooks/use-table';

type SubscriptionsTableParams = GetSubscriptionsData;

export const useSubscriptionTable = () => {
    return useGenericTable<SubscriptionsTableParams>({
        initialParams: {
            count: '',
        },
        defaultPageSize: 10,
        useQueryHook: useSubscriptionsServiceGetSubscriptions,
        getInitialParamsFromURL: (searchParams) => ({
            name: searchParams.get('name') || undefined,
            id: searchParams.get('id') || undefined,
        }),
    });
};
