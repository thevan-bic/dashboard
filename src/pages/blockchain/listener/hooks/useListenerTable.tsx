import { useContractsServiceGetContractsListeners } from '@/apis/queries';
import { GetContractsListenersData } from '@/apis/requests';
import { useGenericTable } from '@/hooks/use-table';

type ContractsListenersTableParams = GetContractsListenersData;

export const useListenerTable = () => {
    return useGenericTable<ContractsListenersTableParams>({
        initialParams: {
            count: '',
        },
        defaultPageSize: 10,
        useQueryHook: useContractsServiceGetContractsListeners,
        getInitialParamsFromURL: (searchParams) => ({
            name: searchParams.get('name') || undefined,
            id: searchParams.get('id') || undefined,
        }),
    });
};
