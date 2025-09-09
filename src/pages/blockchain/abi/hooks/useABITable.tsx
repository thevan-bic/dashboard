import { useContractsServiceGetContractsInterfaces } from '@/apis/queries';
import { GetContractsInterfacesData } from '@/apis/requests';
import { useGenericTable } from '@/hooks/use-table';

type ContractABITableParams = GetContractsInterfacesData;

export const useABITable = () => {
    return useGenericTable<ContractABITableParams>({
        initialParams: {
            count: '',
        },
        defaultPageSize: 10,
        useQueryHook: useContractsServiceGetContractsInterfaces,
        getInitialParamsFromURL: (searchParams) => ({
            name: searchParams.get('name') || undefined,
            id: searchParams.get('id') || undefined,
        }),
    });
};
