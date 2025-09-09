// generated with @7nohe/openapi-react-query-codegen@1.6.2

import { UseQueryResult } from '@tanstack/react-query';
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
export type AdminsServiceGetAdminsDefaultResponse = Awaited<
    ReturnType<typeof AdminsService.getAdmins>
>;
export type AdminsServiceGetAdminsQueryResult<
    TData = AdminsServiceGetAdminsDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAdminsServiceGetAdminsKey = 'AdminsServiceGetAdmins';
export const UseAdminsServiceGetAdminsKeyFn = (
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
    queryKey?: Array<unknown>,
) => [
    useAdminsServiceGetAdminsKey,
    ...(queryKey ?? [
        { ascending, count, descending, email, id, limit, namespace, requestTimeout, skip, sort },
    ]),
];
export type AdminsServiceGetAdminsByIdDefaultResponse = Awaited<
    ReturnType<typeof AdminsService.getAdminsById>
>;
export type AdminsServiceGetAdminsByIdQueryResult<
    TData = AdminsServiceGetAdminsByIdDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAdminsServiceGetAdminsByIdKey = 'AdminsServiceGetAdminsById';
export const UseAdminsServiceGetAdminsByIdKeyFn = (
    {
        id,
        requestTimeout,
    }: {
        id: string;
        requestTimeout?: string;
    },
    queryKey?: Array<unknown>,
) => [useAdminsServiceGetAdminsByIdKey, ...(queryKey ?? [{ id, requestTimeout }])];
export type ContractApIsServiceGetApisDefaultResponse = Awaited<
    ReturnType<typeof ContractApIsService.getApis>
>;
export type ContractApIsServiceGetApisQueryResult<
    TData = ContractApIsServiceGetApisDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useContractApIsServiceGetApisKey = 'ContractApIsServiceGetApis';
export const UseContractApIsServiceGetApisKeyFn = (
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
    queryKey?: Array<unknown>,
) => [
    useContractApIsServiceGetApisKey,
    ...(queryKey ?? [
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
        },
    ]),
];
export type ContractApIsServiceGetApisByApiNameDefaultResponse = Awaited<
    ReturnType<typeof ContractApIsService.getApisByApiName>
>;
export type ContractApIsServiceGetApisByApiNameQueryResult<
    TData = ContractApIsServiceGetApisByApiNameDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useContractApIsServiceGetApisByApiNameKey = 'ContractApIsServiceGetApisByApiName';
export const UseContractApIsServiceGetApisByApiNameKeyFn = (
    {
        apiName,
        requestTimeout,
    }: {
        apiName: string;
        requestTimeout?: string;
    },
    queryKey?: Array<unknown>,
) => [useContractApIsServiceGetApisByApiNameKey, ...(queryKey ?? [{ apiName, requestTimeout }])];
export type ContractApIsServiceGetApisByApiNameInterfaceDefaultResponse = Awaited<
    ReturnType<typeof ContractApIsService.getApisByApiNameInterface>
>;
export type ContractApIsServiceGetApisByApiNameInterfaceQueryResult<
    TData = ContractApIsServiceGetApisByApiNameInterfaceDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useContractApIsServiceGetApisByApiNameInterfaceKey =
    'ContractApIsServiceGetApisByApiNameInterface';
export const UseContractApIsServiceGetApisByApiNameInterfaceKeyFn = (
    {
        apiName,
        requestTimeout,
    }: {
        apiName: string;
        requestTimeout?: string;
    },
    queryKey?: Array<unknown>,
) => [
    useContractApIsServiceGetApisByApiNameInterfaceKey,
    ...(queryKey ?? [{ apiName, requestTimeout }]),
];
export type ContractApIsServiceGetApisByApiNameListenersByEventPathDefaultResponse = Awaited<
    ReturnType<typeof ContractApIsService.getApisByApiNameListenersByEventPath>
>;
export type ContractApIsServiceGetApisByApiNameListenersByEventPathQueryResult<
    TData = ContractApIsServiceGetApisByApiNameListenersByEventPathDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useContractApIsServiceGetApisByApiNameListenersByEventPathKey =
    'ContractApIsServiceGetApisByApiNameListenersByEventPath';
export const UseContractApIsServiceGetApisByApiNameListenersByEventPathKeyFn = (
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
    queryKey?: Array<unknown>,
) => [
    useContractApIsServiceGetApisByApiNameListenersByEventPathKey,
    ...(queryKey ?? [
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
        },
    ]),
];
export type BlockchainEventsServiceGetBlockchaineventsDefaultResponse = Awaited<
    ReturnType<typeof BlockchainEventsService.getBlockchainevents>
>;
export type BlockchainEventsServiceGetBlockchaineventsQueryResult<
    TData = BlockchainEventsServiceGetBlockchaineventsDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useBlockchainEventsServiceGetBlockchaineventsKey =
    'BlockchainEventsServiceGetBlockchainevents';
export const UseBlockchainEventsServiceGetBlockchaineventsKeyFn = (
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
    queryKey?: Array<unknown>,
) => [
    useBlockchainEventsServiceGetBlockchaineventsKey,
    ...(queryKey ?? [
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
        },
    ]),
];
export type BlockchainEventsServiceGetBlockchaineventsByIdDefaultResponse = Awaited<
    ReturnType<typeof BlockchainEventsService.getBlockchaineventsById>
>;
export type BlockchainEventsServiceGetBlockchaineventsByIdQueryResult<
    TData = BlockchainEventsServiceGetBlockchaineventsByIdDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useBlockchainEventsServiceGetBlockchaineventsByIdKey =
    'BlockchainEventsServiceGetBlockchaineventsById';
export const UseBlockchainEventsServiceGetBlockchaineventsByIdKeyFn = (
    {
        id,
        requestTimeout,
    }: {
        id: string;
        requestTimeout?: string;
    },
    queryKey?: Array<unknown>,
) => [
    useBlockchainEventsServiceGetBlockchaineventsByIdKey,
    ...(queryKey ?? [{ id, requestTimeout }]),
];
export type ChartHistogramServiceGetChartsHistogramByCollectionDefaultResponse = Awaited<
    ReturnType<typeof ChartHistogramService.getChartsHistogramByCollection>
>;
export type ChartHistogramServiceGetChartsHistogramByCollectionQueryResult<
    TData = ChartHistogramServiceGetChartsHistogramByCollectionDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useChartHistogramServiceGetChartsHistogramByCollectionKey =
    'ChartHistogramServiceGetChartsHistogramByCollection';
export const UseChartHistogramServiceGetChartsHistogramByCollectionKeyFn = (
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
    queryKey?: Array<unknown>,
) => [
    useChartHistogramServiceGetChartsHistogramByCollectionKey,
    ...(queryKey ?? [{ buckets, collection, endTime, requestTimeout, startTime }]),
];
export type ContractsServiceGetContractsInterfacesDefaultResponse = Awaited<
    ReturnType<typeof ContractsService.getContractsInterfaces>
>;
export type ContractsServiceGetContractsInterfacesQueryResult<
    TData = ContractsServiceGetContractsInterfacesDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useContractsServiceGetContractsInterfacesKey =
    'ContractsServiceGetContractsInterfaces';
export const UseContractsServiceGetContractsInterfacesKeyFn = (
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
    queryKey?: Array<unknown>,
) => [
    useContractsServiceGetContractsInterfacesKey,
    ...(queryKey ?? [
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
        },
    ]),
];
export type ContractsServiceGetContractsInterfacesByInterfaceIdDefaultResponse = Awaited<
    ReturnType<typeof ContractsService.getContractsInterfacesByInterfaceId>
>;
export type ContractsServiceGetContractsInterfacesByInterfaceIdQueryResult<
    TData = ContractsServiceGetContractsInterfacesByInterfaceIdDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useContractsServiceGetContractsInterfacesByInterfaceIdKey =
    'ContractsServiceGetContractsInterfacesByInterfaceId';
export const UseContractsServiceGetContractsInterfacesByInterfaceIdKeyFn = (
    {
        fetchchildren,
        interfaceId,
        requestTimeout,
    }: {
        fetchchildren?: string;
        interfaceId: string;
        requestTimeout?: string;
    },
    queryKey?: Array<unknown>,
) => [
    useContractsServiceGetContractsInterfacesByInterfaceIdKey,
    ...(queryKey ?? [{ fetchchildren, interfaceId, requestTimeout }]),
];
export type ContractsServiceGetContractsInterfacesByNameByVersionDefaultResponse = Awaited<
    ReturnType<typeof ContractsService.getContractsInterfacesByNameByVersion>
>;
export type ContractsServiceGetContractsInterfacesByNameByVersionQueryResult<
    TData = ContractsServiceGetContractsInterfacesByNameByVersionDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useContractsServiceGetContractsInterfacesByNameByVersionKey =
    'ContractsServiceGetContractsInterfacesByNameByVersion';
export const UseContractsServiceGetContractsInterfacesByNameByVersionKeyFn = (
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
    queryKey?: Array<unknown>,
) => [
    useContractsServiceGetContractsInterfacesByNameByVersionKey,
    ...(queryKey ?? [{ fetchchildren, name, requestTimeout, version }]),
];
export type ContractsServiceGetContractsListenersDefaultResponse = Awaited<
    ReturnType<typeof ContractsService.getContractsListeners>
>;
export type ContractsServiceGetContractsListenersQueryResult<
    TData = ContractsServiceGetContractsListenersDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useContractsServiceGetContractsListenersKey = 'ContractsServiceGetContractsListeners';
export const UseContractsServiceGetContractsListenersKeyFn = (
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
    queryKey?: Array<unknown>,
) => [
    useContractsServiceGetContractsListenersKey,
    ...(queryKey ?? [
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
        },
    ]),
];
export type ContractsServiceGetContractsListenersByNameOrIdDefaultResponse = Awaited<
    ReturnType<typeof ContractsService.getContractsListenersByNameOrId>
>;
export type ContractsServiceGetContractsListenersByNameOrIdQueryResult<
    TData = ContractsServiceGetContractsListenersByNameOrIdDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useContractsServiceGetContractsListenersByNameOrIdKey =
    'ContractsServiceGetContractsListenersByNameOrId';
export const UseContractsServiceGetContractsListenersByNameOrIdKeyFn = (
    {
        fetchstatus,
        nameOrId,
        requestTimeout,
    }: {
        fetchstatus?: boolean;
        nameOrId: string;
        requestTimeout?: string;
    },
    queryKey?: Array<unknown>,
) => [
    useContractsServiceGetContractsListenersByNameOrIdKey,
    ...(queryKey ?? [{ fetchstatus, nameOrId, requestTimeout }]),
];
export type EventsServiceGetEventsDefaultResponse = Awaited<
    ReturnType<typeof EventsService.getEvents>
>;
export type EventsServiceGetEventsQueryResult<
    TData = EventsServiceGetEventsDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;

export const useEventsServiceGetEventsKey = 'EventsServiceGetEvents';

export const UseEventsServiceGetEventsKeyFn = (
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
    queryKey?: Array<unknown>,
) => [
    useEventsServiceGetEventsKey,
    ...(queryKey ?? [
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
        },
    ]),
];
export type EventsServiceGetEventsByEidDefaultResponse = Awaited<
    ReturnType<typeof EventsService.getEventsByEid>
>;
export type EventsServiceGetEventsByEidQueryResult<
    TData = EventsServiceGetEventsByEidDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventsServiceGetEventsByEidKey = 'EventsServiceGetEventsByEid';
export const UseEventsServiceGetEventsByEidKeyFn = (
    {
        eid,
        fetchreference,
        requestTimeout,
    }: {
        eid: string;
        fetchreference?: string;
        requestTimeout?: string;
    },
    queryKey?: Array<unknown>,
) => [
    useEventsServiceGetEventsByEidKey,
    ...(queryKey ?? [{ eid, fetchreference, requestTimeout }]),
];
export type NamespacesServiceGetNamespacesDefaultResponse = Awaited<
    ReturnType<typeof NamespacesService.getNamespaces>
>;
export type NamespacesServiceGetNamespacesQueryResult<
    TData = NamespacesServiceGetNamespacesDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useNamespacesServiceGetNamespacesKey = 'NamespacesServiceGetNamespaces';
export const UseNamespacesServiceGetNamespacesKeyFn = (
    {
        includeinitializing,
        requestTimeout,
    }: {
        includeinitializing?: string;
        requestTimeout?: string;
    } = {},
    queryKey?: Array<unknown>,
) => [
    useNamespacesServiceGetNamespacesKey,
    ...(queryKey ?? [{ includeinitializing, requestTimeout }]),
];
export type NamespacesServiceGetNamespacesByNsDefaultResponse = Awaited<
    ReturnType<typeof NamespacesService.getNamespacesByNs>
>;
export type NamespacesServiceGetNamespacesByNsQueryResult<
    TData = NamespacesServiceGetNamespacesByNsDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useNamespacesServiceGetNamespacesByNsKey = 'NamespacesServiceGetNamespacesByNs';
export const UseNamespacesServiceGetNamespacesByNsKeyFn = (
    {
        ns,
        requestTimeout,
    }: {
        ns: string;
        requestTimeout?: string;
    },
    queryKey?: Array<unknown>,
) => [useNamespacesServiceGetNamespacesByNsKey, ...(queryKey ?? [{ ns, requestTimeout }])];
export type OperationsServiceGetOperationsDefaultResponse = Awaited<
    ReturnType<typeof OperationsService.getOperations>
>;
export type OperationsServiceGetOperationsQueryResult<
    TData = OperationsServiceGetOperationsDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOperationsServiceGetOperationsKey = 'OperationsServiceGetOperations';
export const UseOperationsServiceGetOperationsKeyFn = (
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
        data,
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
        data?: string;
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
    queryKey?: Array<unknown>,
) => [
    useOperationsServiceGetOperationsKey,
    ...(queryKey ?? [
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
            data,
            plugin,
            requestTimeout,
            retry,
            skip,
            sort,
            status,
            tx,
            type,
            updated,
        },
    ]),
];
export type OperationsServiceGetOperationsOnchainByOpidDefaultResponse = Awaited<
    ReturnType<typeof OperationsService.getOperationsOnchainByOpid>
>;
export type OperationsServiceGetOperationsOnchainByOpidQueryResult<
    TData = OperationsServiceGetOperationsOnchainByOpidDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOperationsServiceGetOperationsOnchainByOpidKey =
    'OperationsServiceGetOperationsOnchainByOpid';
export const UseOperationsServiceGetOperationsOnchainByOpidKeyFn = (
    {
        fetchstatus,
        opid,
        requestTimeout,
    }: {
        fetchstatus?: boolean;
        opid: string;
        requestTimeout?: string;
    },
    queryKey?: Array<unknown>,
) => [
    useOperationsServiceGetOperationsOnchainByOpidKey,
    ...(queryKey ?? [{ fetchstatus, opid, requestTimeout }]),
];
export type SignersServiceGetSignersDefaultResponse = Awaited<
    ReturnType<typeof SignersService.getSigners>
>;
export type SignersServiceGetSignersQueryResult<
    TData = SignersServiceGetSignersDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useSignersServiceGetSignersKey = 'SignersServiceGetSigners';
export const UseSignersServiceGetSignersKeyFn = (
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
    queryKey?: Array<unknown>,
) => [
    useSignersServiceGetSignersKey,
    ...(queryKey ?? [
        { ascending, count, descending, id, keyIdentifier, limit, requestTimeout, skip, sort },
    ]),
];
export type SignersServiceGetSignersByIdDefaultResponse = Awaited<
    ReturnType<typeof SignersService.getSignersById>
>;
export type SignersServiceGetSignersByIdQueryResult<
    TData = SignersServiceGetSignersByIdDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useSignersServiceGetSignersByIdKey = 'SignersServiceGetSignersById';
export const UseSignersServiceGetSignersByIdKeyFn = (
    {
        id,
        requestTimeout,
    }: {
        id: string;
        requestTimeout?: string;
    },
    queryKey?: Array<unknown>,
) => [useSignersServiceGetSignersByIdKey, ...(queryKey ?? [{ id, requestTimeout }])];
export type StatusServiceGetStatusDefaultResponse = Awaited<
    ReturnType<typeof StatusService.getStatus>
>;
export type StatusServiceGetStatusQueryResult<
    TData = StatusServiceGetStatusDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useStatusServiceGetStatusKey = 'StatusServiceGetStatus';
export const UseStatusServiceGetStatusKeyFn = (
    {
        requestTimeout,
    }: {
        requestTimeout?: string;
    } = {},
    queryKey?: Array<unknown>,
) => [useStatusServiceGetStatusKey, ...(queryKey ?? [{ requestTimeout }])];
export type SubscriptionsServiceGetSubscriptionsDefaultResponse = Awaited<
    ReturnType<typeof SubscriptionsService.getSubscriptions>
>;
export type SubscriptionsServiceGetSubscriptionsQueryResult<
    TData = SubscriptionsServiceGetSubscriptionsDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useSubscriptionsServiceGetSubscriptionsKey = 'SubscriptionsServiceGetSubscriptions';
export const UseSubscriptionsServiceGetSubscriptionsKeyFn = (
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
    queryKey?: Array<unknown>,
) => [
    useSubscriptionsServiceGetSubscriptionsKey,
    ...(queryKey ?? [
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
        },
    ]),
];
export type SubscriptionsServiceGetSubscriptionsBySubidDefaultResponse = Awaited<
    ReturnType<typeof SubscriptionsService.getSubscriptionsBySubid>
>;
export type SubscriptionsServiceGetSubscriptionsBySubidQueryResult<
    TData = SubscriptionsServiceGetSubscriptionsBySubidDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useSubscriptionsServiceGetSubscriptionsBySubidKey =
    'SubscriptionsServiceGetSubscriptionsBySubid';
export const UseSubscriptionsServiceGetSubscriptionsBySubidKeyFn = (
    {
        fetchstatus,
        requestTimeout,
        subid,
    }: {
        fetchstatus?: boolean;
        requestTimeout?: string;
        subid: string;
    },
    queryKey?: Array<unknown>,
) => [
    useSubscriptionsServiceGetSubscriptionsBySubidKey,
    ...(queryKey ?? [{ fetchstatus, requestTimeout, subid }]),
];
export type SubscriptionsServiceGetSubscriptionsBySubidEventsDefaultResponse = Awaited<
    ReturnType<typeof SubscriptionsService.getSubscriptionsBySubidEvents>
>;
export type SubscriptionsServiceGetSubscriptionsBySubidEventsQueryResult<
    TData = SubscriptionsServiceGetSubscriptionsBySubidEventsDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useSubscriptionsServiceGetSubscriptionsBySubidEventsKey =
    'SubscriptionsServiceGetSubscriptionsBySubidEvents';
export const UseSubscriptionsServiceGetSubscriptionsBySubidEventsKeyFn = (
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
    queryKey?: Array<unknown>,
) => [
    useSubscriptionsServiceGetSubscriptionsBySubidEventsKey,
    ...(queryKey ?? [
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
        },
    ]),
];
export type TransactionsServiceGetTransactionsDefaultResponse = Awaited<
    ReturnType<typeof TransactionsService.getTransactions>
>;
export type TransactionsServiceGetTransactionsQueryResult<
    TData = TransactionsServiceGetTransactionsDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTransactionsServiceGetTransactionsKey = 'TransactionsServiceGetTransactions';
export const UseTransactionsServiceGetTransactionsKeyFn = (
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
    queryKey?: Array<unknown>,
) => [
    useTransactionsServiceGetTransactionsKey,
    ...(queryKey ?? [
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
        },
    ]),
];
export type TransactionsServiceGetTransactionsByTxnidDefaultResponse = Awaited<
    ReturnType<typeof TransactionsService.getTransactionsByTxnid>
>;
export type TransactionsServiceGetTransactionsByTxnidQueryResult<
    TData = TransactionsServiceGetTransactionsByTxnidDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTransactionsServiceGetTransactionsByTxnidKey =
    'TransactionsServiceGetTransactionsByTxnid';
export const UseTransactionsServiceGetTransactionsByTxnidKeyFn = (
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
    queryKey?: Array<unknown>,
) => [
    useTransactionsServiceGetTransactionsByTxnidKey,
    ...(queryKey ?? [
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
        },
    ]),
];
export type TransactionsServiceGetTransactionsByTxnidBlockchaineventsDefaultResponse = Awaited<
    ReturnType<typeof TransactionsService.getTransactionsByTxnidBlockchainevents>
>;
export type TransactionsServiceGetTransactionsByTxnidBlockchaineventsQueryResult<
    TData = TransactionsServiceGetTransactionsByTxnidBlockchaineventsDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTransactionsServiceGetTransactionsByTxnidBlockchaineventsKey =
    'TransactionsServiceGetTransactionsByTxnidBlockchainevents';
export const UseTransactionsServiceGetTransactionsByTxnidBlockchaineventsKeyFn = (
    {
        requestTimeout,
        txnid,
    }: {
        requestTimeout?: string;
        txnid: string;
    },
    queryKey?: Array<unknown>,
) => [
    useTransactionsServiceGetTransactionsByTxnidBlockchaineventsKey,
    ...(queryKey ?? [{ requestTimeout, txnid }]),
];
export type TransactionsServiceGetTransactionsByTxnidOperationsDefaultResponse = Awaited<
    ReturnType<typeof TransactionsService.getTransactionsByTxnidOperations>
>;
export type TransactionsServiceGetTransactionsByTxnidOperationsQueryResult<
    TData = TransactionsServiceGetTransactionsByTxnidOperationsDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTransactionsServiceGetTransactionsByTxnidOperationsKey =
    'TransactionsServiceGetTransactionsByTxnidOperations';
export const UseTransactionsServiceGetTransactionsByTxnidOperationsKeyFn = (
    {
        requestTimeout,
        txnid,
    }: {
        requestTimeout?: string;
        txnid: string;
    },
    queryKey?: Array<unknown>,
) => [
    useTransactionsServiceGetTransactionsByTxnidOperationsKey,
    ...(queryKey ?? [{ requestTimeout, txnid }]),
];
export type TransactionsServiceGetTransactionsByTxnidStatusDefaultResponse = Awaited<
    ReturnType<typeof TransactionsService.getTransactionsByTxnidStatus>
>;
export type TransactionsServiceGetTransactionsByTxnidStatusQueryResult<
    TData = TransactionsServiceGetTransactionsByTxnidStatusDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTransactionsServiceGetTransactionsByTxnidStatusKey =
    'TransactionsServiceGetTransactionsByTxnidStatus';
export const UseTransactionsServiceGetTransactionsByTxnidStatusKeyFn = (
    {
        requestTimeout,
        txnid,
    }: {
        requestTimeout?: string;
        txnid: string;
    },
    queryKey?: Array<unknown>,
) => [
    useTransactionsServiceGetTransactionsByTxnidStatusKey,
    ...(queryKey ?? [{ requestTimeout, txnid }]),
];
export type WebSocketsServiceGetWebsocketsDefaultResponse = Awaited<
    ReturnType<typeof WebSocketsService.getWebsockets>
>;
export type WebSocketsServiceGetWebsocketsQueryResult<
    TData = WebSocketsServiceGetWebsocketsDefaultResponse,
    TError = unknown,
> = UseQueryResult<TData, TError>;
export const useWebSocketsServiceGetWebsocketsKey = 'WebSocketsServiceGetWebsockets';
export const UseWebSocketsServiceGetWebsocketsKeyFn = (
    {
        requestTimeout,
    }: {
        requestTimeout?: string;
    } = {},
    queryKey?: Array<unknown>,
) => [useWebSocketsServiceGetWebsocketsKey, ...(queryKey ?? [{ requestTimeout }])];
export type AdminsServicePostAdminsMutationResult = Awaited<
    ReturnType<typeof AdminsService.postAdmins>
>;
export type AdminsServicePostAdminsLoginMutationResult = Awaited<
    ReturnType<typeof AdminsService.postAdminsLogin>
>;
export type ContractApIsServicePostApisMutationResult = Awaited<
    ReturnType<typeof ContractApIsService.postApis>
>;
export type ContractApIsServicePostApisByApiNameInvokeByMethodPathMutationResult = Awaited<
    ReturnType<typeof ContractApIsService.postApisByApiNameInvokeByMethodPath>
>;
export type ContractApIsServicePostApisByApiNameListenersByEventPathMutationResult = Awaited<
    ReturnType<typeof ContractApIsService.postApisByApiNameListenersByEventPath>
>;
export type ContractApIsServicePostApisByApiNamePublishMutationResult = Awaited<
    ReturnType<typeof ContractApIsService.postApisByApiNamePublish>
>;
export type ContractApIsServicePostApisByApiNameQueryByMethodPathMutationResult = Awaited<
    ReturnType<typeof ContractApIsService.postApisByApiNameQueryByMethodPath>
>;
export type ContractsServicePostContractsInterfacesMutationResult = Awaited<
    ReturnType<typeof ContractsService.postContractsInterfaces>
>;
export type ContractsServicePostContractsInterfacesByNameByVersionPublishMutationResult = Awaited<
    ReturnType<typeof ContractsService.postContractsInterfacesByNameByVersionPublish>
>;
export type ContractsServicePostContractsInterfacesGenerateMutationResult = Awaited<
    ReturnType<typeof ContractsService.postContractsInterfacesGenerate>
>;
export type ContractsServicePostContractsInvokeMutationResult = Awaited<
    ReturnType<typeof ContractsService.postContractsInvoke>
>;
export type ContractsServicePostContractsListenersMutationResult = Awaited<
    ReturnType<typeof ContractsService.postContractsListeners>
>;
export type ContractsServicePostContractsListenersSignatureMutationResult = Awaited<
    ReturnType<typeof ContractsService.postContractsListenersSignature>
>;
export type ContractsServicePostContractsQueryMutationResult = Awaited<
    ReturnType<typeof ContractsService.postContractsQuery>
>;
export type NamespacesServicePostResetMutationResult = Awaited<
    ReturnType<typeof NamespacesService.postReset>
>;
export type OperationsServicePostOperationsByOpidRetryMutationResult = Awaited<
    ReturnType<typeof OperationsService.postOperationsByOpidRetry>
>;
export type OperationsServicePostOperationsByOpidStatusMutationResult = Awaited<
    ReturnType<typeof OperationsService.postOperationsByOpidStatus>
>;
export type SignersServicePostSignersMutationResult = Awaited<
    ReturnType<typeof SignersService.postSigners>
>;
export type SubscriptionsServicePostSubscriptionsMutationResult = Awaited<
    ReturnType<typeof SubscriptionsService.postSubscriptions>
>;
export type ContractApIsServicePutApisByApiNameMutationResult = Awaited<
    ReturnType<typeof ContractApIsService.putApisByApiName>
>;
export type SubscriptionsServicePutSubscriptionsMutationResult = Awaited<
    ReturnType<typeof SubscriptionsService.putSubscriptions>
>;
export type NamespacesServicePatchOperationsByNsopidMutationResult = Awaited<
    ReturnType<typeof NamespacesService.patchOperationsByNsopid>
>;
export type AdminsServiceDeleteAdminsByIdMutationResult = Awaited<
    ReturnType<typeof AdminsService.deleteAdminsById>
>;
export type ContractApIsServiceDeleteApisByApiNameMutationResult = Awaited<
    ReturnType<typeof ContractApIsService.deleteApisByApiName>
>;
export type ContractsServiceDeleteContractsInterfacesByInterfaceIdMutationResult = Awaited<
    ReturnType<typeof ContractsService.deleteContractsInterfacesByInterfaceId>
>;
export type ContractsServiceDeleteContractsListenersByNameOrIdMutationResult = Awaited<
    ReturnType<typeof ContractsService.deleteContractsListenersByNameOrId>
>;
export type SubscriptionsServiceDeleteSubscriptionsBySubidMutationResult = Awaited<
    ReturnType<typeof SubscriptionsService.deleteSubscriptionsBySubid>
>;
