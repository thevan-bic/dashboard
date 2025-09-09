import type { ReactNode } from 'react';

import { QueryClient, QueryClientProvider, keepPreviousData } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            placeholderData: keepPreviousData,
            staleTime: 5000,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: 3,
        },
        mutations: {
            retry: 3,
        },
    },
});

export interface TanstackQueryProps {
    children: ReactNode;
}

export function TanstackQuery({ children }: TanstackQueryProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            {children}
        </QueryClientProvider>
    );
}
