import { useOperationsServiceGetOperations } from '@/apis/queries';
import { GetOperationsData } from '@/apis/requests';
import { useGenericTable } from '@/hooks/use-table';

type OperationsTableParams = GetOperationsData;

export const useOperationsTable = () => {
    return useGenericTable<OperationsTableParams>({
        initialParams: {
            status: 'Failed',
        },
        defaultPageSize: 10,
        useQueryHook: useOperationsServiceGetOperations,
        getInitialParamsFromURL: (searchParams) => ({
            count: searchParams.get('count') || '',
            created: searchParams.get('created') || undefined,
            status: searchParams.get('status') || 'Failed',
        }),
    });
};
