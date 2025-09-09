import { useOperationsServiceGetOperations } from '@/apis/queries';
import { GetOperationsData } from '@/apis/requests';
import { useGenericTable } from '@/hooks/use-table';

type OperationsTableParams = GetOperationsData;

export const useOperationsTable = () => {
    return useGenericTable<OperationsTableParams>({
        initialParams: {
            count: '',
        },
        defaultPageSize: 10,
        useQueryHook: useOperationsServiceGetOperations,
        getInitialParamsFromURL: (searchParams) => ({
            data: searchParams.get('data') || undefined,
            created: searchParams.get('created') || undefined,
            status: searchParams.get('status') || undefined,
            output: searchParams.get('output') || undefined,
            input: searchParams.get('input') || undefined,
        }),
    });
};
