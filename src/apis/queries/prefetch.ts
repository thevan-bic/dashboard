//@ts-nocheck

import { type QueryClient } from '@tanstack/react-query';
import {
    AdminsService,
    BlockchainEventsService,
    ChartHistogramService,
    ContractApIsService,
    ContractsService,
    EventsService,
    NamespacesService,
    OperationsService,
    SignersService,
    StatusService,
    SubscriptionsService,
    TransactionsService,
    WebSocketsService,
} from '../requests/services.gen';
import * as Common from './common';
export const prefetchUseAdminsServiceGetAdmins = (
    queryClient: QueryClient,
    {
        ascending,
        count,
        descending,
        email,
        id,
        limit,
        namespace,
        requestTimeout,
        skip,
        sort,
    }: {
        ascending?: string;
        count?: string;
        descending?: string;
        email?: string;
        id?: string;
        limit?: string;
        namespace?: string;
        requestTimeout?: string;
        skip?: string;
        sort?: string;
    } = {},
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseAdminsServiceGetAdminsKeyFn({
            ascending,
            count,
            descending,
            email,
            id,
            limit,
            namespace,
            requestTimeout,
            skip,
            sort,
        }),
        queryFn: () =>
            AdminsService.getAdmins({
                ascending,
                count,
                descending,
                email,
                id,
                limit,
                namespace,
                requestTimeout,
                skip,
                sort,
            }),
    });
export const prefetchUseAdminsServiceGetAdminsById = (
    queryClient: QueryClient,
    {
        id,
        requestTimeout,
    }: {
        id: string;
        requestTimeout?: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseAdminsServiceGetAdminsByIdKeyFn({ id, requestTimeout }),
        queryFn: () => AdminsService.getAdminsById({ id, requestTimeout }),
    });
export const prefetchUseContractApIsServiceGetApis = (
    queryClient: QueryClient,
    {
        _interface,
        ascending,
        count,
        descending,
        id,
        limit,
        name,
        networkname,
        published,
        requestTimeout,
        skip,
        sort,
    }: {
        _interface?: string;
        ascending?: string;
        count?: string;
        descending?: string;
        id?: string;
        limit?: string;
        name?: string;
        networkname?: string;
        published?: string;
        requestTimeout?: string;
        skip?: string;
        sort?: string;
    } = {},
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseContractApIsServiceGetApisKeyFn({
            _interface,
            ascending,
            count,
            descending,
            id,
            limit,
            name,
            networkname,
            published,
            requestTimeout,
            skip,
            sort,
        }),
        queryFn: () =>
            ContractApIsService.getApis({
                _interface,
                ascending,
                count,
                descending,
                id,
                limit,
                name,
                networkname,
                published,
                requestTimeout,
                skip,
                sort,
            }),
    });
export const prefetchUseContractApIsServiceGetApisByApiName = (
    queryClient: QueryClient,
    {
        apiName,
        requestTimeout,
    }: {
        apiName: string;
        requestTimeout?: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseContractApIsServiceGetApisByApiNameKeyFn({ apiName, requestTimeout }),
        queryFn: () => ContractApIsService.getApisByApiName({ apiName, requestTimeout }),
    });
export const prefetchUseContractApIsServiceGetApisByApiNameInterface = (
    queryClient: QueryClient,
    {
        apiName,
        requestTimeout,
    }: {
        apiName: string;
        requestTimeout?: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseContractApIsServiceGetApisByApiNameInterfaceKeyFn({
            apiName,
            requestTimeout,
        }),
        queryFn: () => ContractApIsService.getApisByApiNameInterface({ apiName, requestTimeout }),
    });
export const prefetchUseContractApIsServiceGetApisByApiNameListenersByEventPath = (
    queryClient: QueryClient,
    {
        _interface,
        apiName,
        ascending,
        backendid,
        count,
        created,
        descending,
        eventPath,
        filters,
        id,
        limit,
        location,
        name,
        requestTimeout,
        signature,
        skip,
        sort,
        state,
        topic,
        updated,
    }: {
        _interface?: string;
        apiName: string;
        ascending?: string;
        backendid?: string;
        count?: string;
        created?: string;
        descending?: string;
        eventPath: string;
        filters?: string;
        id?: string;
        limit?: string;
        location?: string;
        name?: string;
        requestTimeout?: string;
        signature?: string;
        skip?: string;
        sort?: string;
        state?: string;
        topic?: string;
        updated?: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseContractApIsServiceGetApisByApiNameListenersByEventPathKeyFn({
            _interface,
            apiName,
            ascending,
            backendid,
            count,
            created,
            descending,
            eventPath,
            filters,
            id,
            limit,
            location,
            name,
            requestTimeout,
            signature,
            skip,
            sort,
            state,
            topic,
            updated,
        }),
        queryFn: () =>
            ContractApIsService.getApisByApiNameListenersByEventPath({
                _interface,
                apiName,
                ascending,
                backendid,
                count,
                created,
                descending,
                eventPath,
                filters,
                id,
                limit,
                location,
                name,
                requestTimeout,
                signature,
                skip,
                sort,
                state,
                topic,
                updated,
            }),
    });
export const prefetchUseBlockchainEventsServiceGetBlockchainevents = (
    queryClient: QueryClient,
    {
        ascending,
        count,
        descending,
        id,
        limit,
        listener,
        name,
        protocolid,
        requestTimeout,
        skip,
        sort,
        source,
        timestamp,
        txBlockchainid,
        txId,
        txType,
    }: {
        ascending?: string;
        count?: string;
        descending?: string;
        id?: string;
        limit?: string;
        listener?: string;
        name?: string;
        protocolid?: string;
        requestTimeout?: string;
        skip?: string;
        sort?: string;
        source?: string;
        timestamp?: string;
        txBlockchainid?: string;
        txId?: string;
        txType?: string;
    } = {},
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseBlockchainEventsServiceGetBlockchaineventsKeyFn({
            ascending,
            count,
            descending,
            id,
            limit,
            listener,
            name,
            protocolid,
            requestTimeout,
            skip,
            sort,
            source,
            timestamp,
            txBlockchainid,
            txId,
            txType,
        }),
        queryFn: () =>
            BlockchainEventsService.getBlockchainevents({
                ascending,
                count,
                descending,
                id,
                limit,
                listener,
                name,
                protocolid,
                requestTimeout,
                skip,
                sort,
                source,
                timestamp,
                txBlockchainid,
                txId,
                txType,
            }),
    });
export const prefetchUseBlockchainEventsServiceGetBlockchaineventsById = (
    queryClient: QueryClient,
    {
        id,
        requestTimeout,
    }: {
        id: string;
        requestTimeout?: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseBlockchainEventsServiceGetBlockchaineventsByIdKeyFn({
            id,
            requestTimeout,
        }),
        queryFn: () => BlockchainEventsService.getBlockchaineventsById({ id, requestTimeout }),
    });
export const prefetchUseChartHistogramServiceGetChartsHistogramByCollection = (
    queryClient: QueryClient,
    {
        buckets,
        collection,
        endTime,
        requestTimeout,
        startTime,
    }: {
        buckets?: string;
        collection: string;
        endTime?: string;
        requestTimeout?: string;
        startTime?: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseChartHistogramServiceGetChartsHistogramByCollectionKeyFn({
            buckets,
            collection,
            endTime,
            requestTimeout,
            startTime,
        }),
        queryFn: () =>
            ChartHistogramService.getChartsHistogramByCollection({
                buckets,
                collection,
                endTime,
                requestTimeout,
                startTime,
            }),
    });
export const prefetchUseContractsServiceGetContractsInterfaces = (
    queryClient: QueryClient,
    {
        ascending,
        count,
        descending,
        id,
        limit,
        name,
        networkname,
        published,
        requestTimeout,
        skip,
        sort,
        version,
    }: {
        ascending?: string;
        count?: string;
        descending?: string;
        id?: string;
        limit?: string;
        name?: string;
        networkname?: string;
        published?: string;
        requestTimeout?: string;
        skip?: string;
        sort?: string;
        version?: string;
    } = {},
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseContractsServiceGetContractsInterfacesKeyFn({
            ascending,
            count,
            descending,
            id,
            limit,
            name,
            networkname,
            published,
            requestTimeout,
            skip,
            sort,
            version,
        }),
        queryFn: () =>
            ContractsService.getContractsInterfaces({
                ascending,
                count,
                descending,
                id,
                limit,
                name,
                networkname,
                published,
                requestTimeout,
                skip,
                sort,
                version,
            }),
    });
export const prefetchUseContractsServiceGetContractsInterfacesByInterfaceId = (
    queryClient: QueryClient,
    {
        fetchchildren,
        interfaceId,
        requestTimeout,
    }: {
        fetchchildren?: string;
        interfaceId: string;
        requestTimeout?: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseContractsServiceGetContractsInterfacesByInterfaceIdKeyFn({
            fetchchildren,
            interfaceId,
            requestTimeout,
        }),
        queryFn: () =>
            ContractsService.getContractsInterfacesByInterfaceId({
                fetchchildren,
                interfaceId,
                requestTimeout,
            }),
    });
export const prefetchUseContractsServiceGetContractsInterfacesByNameByVersion = (
    queryClient: QueryClient,
    {
        fetchchildren,
        name,
        requestTimeout,
        version,
    }: {
        fetchchildren?: string;
        name: string;
        requestTimeout?: string;
        version: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseContractsServiceGetContractsInterfacesByNameByVersionKeyFn({
            fetchchildren,
            name,
            requestTimeout,
            version,
        }),
        queryFn: () =>
            ContractsService.getContractsInterfacesByNameByVersion({
                fetchchildren,
                name,
                requestTimeout,
                version,
            }),
    });
export const prefetchUseContractsServiceGetContractsListeners = (
    queryClient: QueryClient,
    {
        _interface,
        ascending,
        backendid,
        count,
        created,
        descending,
        filters,
        id,
        limit,
        location,
        name,
        requestTimeout,
        signature,
        skip,
        sort,
        state,
        topic,
        updated,
    }: {
        _interface?: string;
        ascending?: string;
        backendid?: string;
        count?: string;
        created?: string;
        descending?: string;
        filters?: string;
        id?: string;
        limit?: string;
        location?: string;
        name?: string;
        requestTimeout?: string;
        signature?: string;
        skip?: string;
        sort?: string;
        state?: string;
        topic?: string;
        updated?: string;
    } = {},
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseContractsServiceGetContractsListenersKeyFn({
            _interface,
            ascending,
            backendid,
            count,
            created,
            descending,
            filters,
            id,
            limit,
            location,
            name,
            requestTimeout,
            signature,
            skip,
            sort,
            state,
            topic,
            updated,
        }),
        queryFn: () =>
            ContractsService.getContractsListeners({
                _interface,
                ascending,
                backendid,
                count,
                created,
                descending,
                filters,
                id,
                limit,
                location,
                name,
                requestTimeout,
                signature,
                skip,
                sort,
                state,
                topic,
                updated,
            }),
    });
export const prefetchUseContractsServiceGetContractsListenersByNameOrId = (
    queryClient: QueryClient,
    {
        fetchstatus,
        nameOrId,
        requestTimeout,
    }: {
        fetchstatus?: string;
        nameOrId: string;
        requestTimeout?: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseContractsServiceGetContractsListenersByNameOrIdKeyFn({
            fetchstatus,
            nameOrId,
            requestTimeout,
        }),
        queryFn: () =>
            ContractsService.getContractsListenersByNameOrId({
                fetchstatus,
                nameOrId,
                requestTimeout,
            }),
    });
export const prefetchUseEventsServiceGetEvents = (
    queryClient: QueryClient,
    {
        ascending,
        correlator,
        count,
        created,
        descending,
        fetchreference,
        fetchreferences,
        id,
        limit,
        reference,
        requestTimeout,
        sequence,
        skip,
        sort,
        topic,
        tx,
        type,
    }: {
        ascending?: string;
        correlator?: string;
        count?: string;
        created?: string;
        descending?: string;
        fetchreference?: string;
        fetchreferences?: string;
        id?: string;
        limit?: string;
        reference?: string;
        requestTimeout?: string;
        sequence?: string;
        skip?: string;
        sort?: string;
        topic?: string;
        tx?: string;
        type?: string;
    } = {},
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseEventsServiceGetEventsKeyFn({
            ascending,
            correlator,
            count,
            created,
            descending,
            fetchreference,
            fetchreferences,
            id,
            limit,
            reference,
            requestTimeout,
            sequence,
            skip,
            sort,
            topic,
            tx,
            type,
        }),
        queryFn: () =>
            EventsService.getEvents({
                ascending,
                correlator,
                count,
                created,
                descending,
                fetchreference,
                fetchreferences,
                id,
                limit,
                reference,
                requestTimeout,
                sequence,
                skip,
                sort,
                topic,
                tx,
                type,
            }),
    });
export const prefetchUseEventsServiceGetEventsByEid = (
    queryClient: QueryClient,
    {
        eid,
        fetchreference,
        requestTimeout,
    }: {
        eid: string;
        fetchreference?: string;
        requestTimeout?: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseEventsServiceGetEventsByEidKeyFn({
            eid,
            fetchreference,
            requestTimeout,
        }),
        queryFn: () => EventsService.getEventsByEid({ eid, fetchreference, requestTimeout }),
    });
export const prefetchUseNamespacesServiceGetNamespaces = (
    queryClient: QueryClient,
    {
        includeinitializing,
        requestTimeout,
    }: {
        includeinitializing?: string;
        requestTimeout?: string;
    } = {},
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseNamespacesServiceGetNamespacesKeyFn({
            includeinitializing,
            requestTimeout,
        }),
        queryFn: () => NamespacesService.getNamespaces({ includeinitializing, requestTimeout }),
    });
export const prefetchUseNamespacesServiceGetNamespacesByNs = (
    queryClient: QueryClient,
    {
        ns,
        requestTimeout,
    }: {
        ns: string;
        requestTimeout?: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseNamespacesServiceGetNamespacesByNsKeyFn({ ns, requestTimeout }),
        queryFn: () => NamespacesService.getNamespacesByNs({ ns, requestTimeout }),
    });
export const prefetchUseOperationsServiceGetOperations = (
    queryClient: QueryClient,
    {
        ascending,
        count,
        created,
        descending,
        error,
        id,
        input,
        limit,
        output,
        plugin,
        requestTimeout,
        retry,
        skip,
        sort,
        status,
        tx,
        type,
        updated,
    }: {
        ascending?: string;
        count?: string;
        created?: string;
        descending?: string;
        error?: string;
        id?: string;
        input?: string;
        limit?: string;
        output?: string;
        plugin?: string;
        requestTimeout?: string;
        retry?: string;
        skip?: string;
        sort?: string;
        status?: string;
        tx?: string;
        type?: string;
        updated?: string;
    } = {},
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseOperationsServiceGetOperationsKeyFn({
            ascending,
            count,
            created,
            descending,
            error,
            id,
            input,
            limit,
            output,
            plugin,
            requestTimeout,
            retry,
            skip,
            sort,
            status,
            tx,
            type,
            updated,
        }),
        queryFn: () =>
            OperationsService.getOperations({
                ascending,
                count,
                created,
                descending,
                error,
                id,
                input,
                limit,
                output,
                plugin,
                requestTimeout,
                retry,
                skip,
                sort,
                status,
                tx,
                type,
                updated,
            }),
    });
export const prefetchUseOperationsServiceGetOperationsOnchainByOpid = (
    queryClient: QueryClient,
    {
        fetchstatus,
        opid,
        requestTimeout,
    }: {
        fetchstatus?: string;
        opid: string;
        requestTimeout?: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseOperationsServiceGetOperationsOnchainByOpidKeyFn({
            fetchstatus,
            opid,
            requestTimeout,
        }),
        queryFn: () =>
            OperationsService.getOperationsOnchainByOpid({ fetchstatus, opid, requestTimeout }),
    });
export const prefetchUseSignersServiceGetSigners = (
    queryClient: QueryClient,
    {
        ascending,
        count,
        descending,
        id,
        keyIdentifier,
        limit,
        requestTimeout,
        skip,
        sort,
    }: {
        ascending?: string;
        count?: string;
        descending?: string;
        id?: string;
        keyIdentifier?: string;
        limit?: string;
        requestTimeout?: string;
        skip?: string;
        sort?: string;
    } = {},
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseSignersServiceGetSignersKeyFn({
            ascending,
            count,
            descending,
            id,
            keyIdentifier,
            limit,
            requestTimeout,
            skip,
            sort,
        }),
        queryFn: () =>
            SignersService.getSigners({
                ascending,
                count,
                descending,
                id,
                keyIdentifier,
                limit,
                requestTimeout,
                skip,
                sort,
            }),
    });
export const prefetchUseSignersServiceGetSignersById = (
    queryClient: QueryClient,
    {
        id,
        requestTimeout,
    }: {
        id: string;
        requestTimeout?: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseSignersServiceGetSignersByIdKeyFn({ id, requestTimeout }),
        queryFn: () => SignersService.getSignersById({ id, requestTimeout }),
    });
export const prefetchUseStatusServiceGetStatus = (
    queryClient: QueryClient,
    {
        requestTimeout,
    }: {
        requestTimeout?: string;
    } = {},
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseStatusServiceGetStatusKeyFn({ requestTimeout }),
        queryFn: () => StatusService.getStatus({ requestTimeout }),
    });
export const prefetchUseSubscriptionsServiceGetSubscriptions = (
    queryClient: QueryClient,
    {
        ascending,
        count,
        created,
        descending,
        events,
        filters,
        id,
        limit,
        name,
        options,
        requestTimeout,
        skip,
        sort,
        transport,
    }: {
        ascending?: string;
        count?: string;
        created?: string;
        descending?: string;
        events?: string;
        filters?: string;
        id?: string;
        limit?: string;
        name?: string;
        options?: string;
        requestTimeout?: string;
        skip?: string;
        sort?: string;
        transport?: string;
    } = {},
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseSubscriptionsServiceGetSubscriptionsKeyFn({
            ascending,
            count,
            created,
            descending,
            events,
            filters,
            id,
            limit,
            name,
            options,
            requestTimeout,
            skip,
            sort,
            transport,
        }),
        queryFn: () =>
            SubscriptionsService.getSubscriptions({
                ascending,
                count,
                created,
                descending,
                events,
                filters,
                id,
                limit,
                name,
                options,
                requestTimeout,
                skip,
                sort,
                transport,
            }),
    });
export const prefetchUseSubscriptionsServiceGetSubscriptionsBySubid = (
    queryClient: QueryClient,
    {
        fetchstatus,
        requestTimeout,
        subid,
    }: {
        fetchstatus?: string;
        requestTimeout?: string;
        subid: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseSubscriptionsServiceGetSubscriptionsBySubidKeyFn({
            fetchstatus,
            requestTimeout,
            subid,
        }),
        queryFn: () =>
            SubscriptionsService.getSubscriptionsBySubid({ fetchstatus, requestTimeout, subid }),
    });
export const prefetchUseSubscriptionsServiceGetSubscriptionsBySubidEvents = (
    queryClient: QueryClient,
    {
        ascending,
        correlator,
        count,
        created,
        descending,
        endsequence,
        id,
        limit,
        reference,
        requestTimeout,
        sequence,
        skip,
        sort,
        startsequence,
        subid,
        topic,
        tx,
        type,
    }: {
        ascending?: string;
        correlator?: string;
        count?: string;
        created?: string;
        descending?: string;
        endsequence?: string;
        id?: string;
        limit?: string;
        reference?: string;
        requestTimeout?: string;
        sequence?: string;
        skip?: string;
        sort?: string;
        startsequence?: string;
        subid: string;
        topic?: string;
        tx?: string;
        type?: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseSubscriptionsServiceGetSubscriptionsBySubidEventsKeyFn({
            ascending,
            correlator,
            count,
            created,
            descending,
            endsequence,
            id,
            limit,
            reference,
            requestTimeout,
            sequence,
            skip,
            sort,
            startsequence,
            subid,
            topic,
            tx,
            type,
        }),
        queryFn: () =>
            SubscriptionsService.getSubscriptionsBySubidEvents({
                ascending,
                correlator,
                count,
                created,
                descending,
                endsequence,
                id,
                limit,
                reference,
                requestTimeout,
                sequence,
                skip,
                sort,
                startsequence,
                subid,
                topic,
                tx,
                type,
            }),
    });
export const prefetchUseTransactionsServiceGetTransactions = (
    queryClient: QueryClient,
    {
        ascending,
        blockchainids,
        count,
        created,
        descending,
        id,
        idempotencykey,
        limit,
        requestTimeout,
        skip,
        sort,
        type,
    }: {
        ascending?: string;
        blockchainids?: string;
        count?: string;
        created?: string;
        descending?: string;
        id?: string;
        idempotencykey?: string;
        limit?: string;
        requestTimeout?: string;
        skip?: string;
        sort?: string;
        type?: string;
    } = {},
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseTransactionsServiceGetTransactionsKeyFn({
            ascending,
            blockchainids,
            count,
            created,
            descending,
            id,
            idempotencykey,
            limit,
            requestTimeout,
            skip,
            sort,
            type,
        }),
        queryFn: () =>
            TransactionsService.getTransactions({
                ascending,
                blockchainids,
                count,
                created,
                descending,
                id,
                idempotencykey,
                limit,
                requestTimeout,
                skip,
                sort,
                type,
            }),
    });
export const prefetchUseTransactionsServiceGetTransactionsByTxnid = (
    queryClient: QueryClient,
    {
        ascending,
        blockchainids,
        count,
        created,
        descending,
        id,
        idempotencykey,
        limit,
        requestTimeout,
        skip,
        sort,
        txnid,
        type,
    }: {
        ascending?: string;
        blockchainids?: string;
        count?: string;
        created?: string;
        descending?: string;
        id?: string;
        idempotencykey?: string;
        limit?: string;
        requestTimeout?: string;
        skip?: string;
        sort?: string;
        txnid: string;
        type?: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseTransactionsServiceGetTransactionsByTxnidKeyFn({
            ascending,
            blockchainids,
            count,
            created,
            descending,
            id,
            idempotencykey,
            limit,
            requestTimeout,
            skip,
            sort,
            txnid,
            type,
        }),
        queryFn: () =>
            TransactionsService.getTransactionsByTxnid({
                ascending,
                blockchainids,
                count,
                created,
                descending,
                id,
                idempotencykey,
                limit,
                requestTimeout,
                skip,
                sort,
                txnid,
                type,
            }),
    });
export const prefetchUseTransactionsServiceGetTransactionsByTxnidBlockchainevents = (
    queryClient: QueryClient,
    {
        requestTimeout,
        txnid,
    }: {
        requestTimeout?: string;
        txnid: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseTransactionsServiceGetTransactionsByTxnidBlockchaineventsKeyFn({
            requestTimeout,
            txnid,
        }),
        queryFn: () =>
            TransactionsService.getTransactionsByTxnidBlockchainevents({ requestTimeout, txnid }),
    });
export const prefetchUseTransactionsServiceGetTransactionsByTxnidOperations = (
    queryClient: QueryClient,
    {
        requestTimeout,
        txnid,
    }: {
        requestTimeout?: string;
        txnid: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseTransactionsServiceGetTransactionsByTxnidOperationsKeyFn({
            requestTimeout,
            txnid,
        }),
        queryFn: () =>
            TransactionsService.getTransactionsByTxnidOperations({ requestTimeout, txnid }),
    });
export const prefetchUseTransactionsServiceGetTransactionsByTxnidStatus = (
    queryClient: QueryClient,
    {
        requestTimeout,
        txnid,
    }: {
        requestTimeout?: string;
        txnid: string;
    },
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseTransactionsServiceGetTransactionsByTxnidStatusKeyFn({
            requestTimeout,
            txnid,
        }),
        queryFn: () => TransactionsService.getTransactionsByTxnidStatus({ requestTimeout, txnid }),
    });
export const prefetchUseWebSocketsServiceGetWebsockets = (
    queryClient: QueryClient,
    {
        requestTimeout,
    }: {
        requestTimeout?: string;
    } = {},
) =>
    queryClient.prefetchQuery({
        queryKey: Common.UseWebSocketsServiceGetWebsocketsKeyFn({ requestTimeout }),
        queryFn: () => WebSocketsService.getWebsockets({ requestTimeout }),
    });
