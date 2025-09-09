//@ts-nocheck

import { UseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';
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

export const useAdminsServiceGetAdminsSuspense = <
    TData = Common.AdminsServiceGetAdminsDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
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
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseAdminsServiceGetAdminsKeyFn(
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
            },
            queryKey,
        ),
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
            }) as TData,
        ...options,
    });

export const useAdminsServiceGetAdminsByIdSuspense = <
    TData = Common.AdminsServiceGetAdminsByIdDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        id,
        requestTimeout,
    }: {
        id: string;
        requestTimeout?: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseAdminsServiceGetAdminsByIdKeyFn({ id, requestTimeout }, queryKey),
        queryFn: () => AdminsService.getAdminsById({ id, requestTimeout }) as TData,
        ...options,
    });

export const useContractApIsServiceGetApisSuspense = <
    TData = Common.ContractApIsServiceGetApisDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
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
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseContractApIsServiceGetApisKeyFn(
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
            queryKey,
        ),
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
            }) as TData,
        ...options,
    });

export const useContractApIsServiceGetApisByApiNameSuspense = <
    TData = Common.ContractApIsServiceGetApisByApiNameDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        apiName,
        requestTimeout,
    }: {
        apiName: string;
        requestTimeout?: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseContractApIsServiceGetApisByApiNameKeyFn(
            { apiName, requestTimeout },
            queryKey,
        ),
        queryFn: () => ContractApIsService.getApisByApiName({ apiName, requestTimeout }) as TData,
        ...options,
    });

export const useContractApIsServiceGetApisByApiNameInterfaceSuspense = <
    TData = Common.ContractApIsServiceGetApisByApiNameInterfaceDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        apiName,
        requestTimeout,
    }: {
        apiName: string;
        requestTimeout?: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseContractApIsServiceGetApisByApiNameInterfaceKeyFn(
            { apiName, requestTimeout },
            queryKey,
        ),
        queryFn: () =>
            ContractApIsService.getApisByApiNameInterface({ apiName, requestTimeout }) as TData,
        ...options,
    });
export const useContractApIsServiceGetApisByApiNameListenersByEventPathSuspense = <
    TData = Common.ContractApIsServiceGetApisByApiNameListenersByEventPathDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
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
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseContractApIsServiceGetApisByApiNameListenersByEventPathKeyFn(
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
            queryKey,
        ),
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
            }) as TData,
        ...options,
    });
export const useBlockchainEventsServiceGetBlockchaineventsSuspense = <
    TData = Common.BlockchainEventsServiceGetBlockchaineventsDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
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
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseBlockchainEventsServiceGetBlockchaineventsKeyFn(
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
            queryKey,
        ),
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
            }) as TData,
        ...options,
    });
export const useBlockchainEventsServiceGetBlockchaineventsByIdSuspense = <
    TData = Common.BlockchainEventsServiceGetBlockchaineventsByIdDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        id,
        requestTimeout,
    }: {
        id: string;
        requestTimeout?: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseBlockchainEventsServiceGetBlockchaineventsByIdKeyFn(
            { id, requestTimeout },
            queryKey,
        ),
        queryFn: () =>
            BlockchainEventsService.getBlockchaineventsById({ id, requestTimeout }) as TData,
        ...options,
    });
export const useChartHistogramServiceGetChartsHistogramByCollectionSuspense = <
    TData = Common.ChartHistogramServiceGetChartsHistogramByCollectionDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
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
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseChartHistogramServiceGetChartsHistogramByCollectionKeyFn(
            { buckets, collection, endTime, requestTimeout, startTime },
            queryKey,
        ),
        queryFn: () =>
            ChartHistogramService.getChartsHistogramByCollection({
                buckets,
                collection,
                endTime,
                requestTimeout,
                startTime,
            }) as TData,
        ...options,
    });
export const useContractsServiceGetContractsInterfacesSuspense = <
    TData = Common.ContractsServiceGetContractsInterfacesDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
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
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseContractsServiceGetContractsInterfacesKeyFn(
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
            queryKey,
        ),
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
            }) as TData,
        ...options,
    });
export const useContractsServiceGetContractsInterfacesByInterfaceIdSuspense = <
    TData = Common.ContractsServiceGetContractsInterfacesByInterfaceIdDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        fetchchildren,
        interfaceId,
        requestTimeout,
    }: {
        fetchchildren?: string;
        interfaceId: string;
        requestTimeout?: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseContractsServiceGetContractsInterfacesByInterfaceIdKeyFn(
            { fetchchildren, interfaceId, requestTimeout },
            queryKey,
        ),
        queryFn: () =>
            ContractsService.getContractsInterfacesByInterfaceId({
                fetchchildren,
                interfaceId,
                requestTimeout,
            }) as TData,
        ...options,
    });
export const useContractsServiceGetContractsInterfacesByNameByVersionSuspense = <
    TData = Common.ContractsServiceGetContractsInterfacesByNameByVersionDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
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
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseContractsServiceGetContractsInterfacesByNameByVersionKeyFn(
            { fetchchildren, name, requestTimeout, version },
            queryKey,
        ),
        queryFn: () =>
            ContractsService.getContractsInterfacesByNameByVersion({
                fetchchildren,
                name,
                requestTimeout,
                version,
            }) as TData,
        ...options,
    });
export const useContractsServiceGetContractsListenersSuspense = <
    TData = Common.ContractsServiceGetContractsListenersDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
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
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseContractsServiceGetContractsListenersKeyFn(
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
            queryKey,
        ),
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
            }) as TData,
        ...options,
    });
export const useContractsServiceGetContractsListenersByNameOrIdSuspense = <
    TData = Common.ContractsServiceGetContractsListenersByNameOrIdDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        fetchstatus,
        nameOrId,
        requestTimeout,
    }: {
        fetchstatus?: string;
        nameOrId: string;
        requestTimeout?: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseContractsServiceGetContractsListenersByNameOrIdKeyFn(
            { fetchstatus, nameOrId, requestTimeout },
            queryKey,
        ),
        queryFn: () =>
            ContractsService.getContractsListenersByNameOrId({
                fetchstatus,
                nameOrId,
                requestTimeout,
            }) as TData,
        ...options,
    });
export const useEventsServiceGetEventsSuspense = <
    TData = Common.EventsServiceGetEventsDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
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
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseEventsServiceGetEventsKeyFn(
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
            queryKey,
        ),
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
            }) as TData,
        ...options,
    });
export const useEventsServiceGetEventsByEidSuspense = <
    TData = Common.EventsServiceGetEventsByEidDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        eid,
        fetchreference,
        requestTimeout,
    }: {
        eid: string;
        fetchreference?: string;
        requestTimeout?: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseEventsServiceGetEventsByEidKeyFn(
            { eid, fetchreference, requestTimeout },
            queryKey,
        ),
        queryFn: () =>
            EventsService.getEventsByEid({ eid, fetchreference, requestTimeout }) as TData,
        ...options,
    });
export const useNamespacesServiceGetNamespacesSuspense = <
    TData = Common.NamespacesServiceGetNamespacesDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        includeinitializing,
        requestTimeout,
    }: {
        includeinitializing?: string;
        requestTimeout?: string;
    } = {},
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseNamespacesServiceGetNamespacesKeyFn(
            { includeinitializing, requestTimeout },
            queryKey,
        ),
        queryFn: () =>
            NamespacesService.getNamespaces({ includeinitializing, requestTimeout }) as TData,
        ...options,
    });
export const useNamespacesServiceGetNamespacesByNsSuspense = <
    TData = Common.NamespacesServiceGetNamespacesByNsDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        ns,
        requestTimeout,
    }: {
        ns: string;
        requestTimeout?: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseNamespacesServiceGetNamespacesByNsKeyFn(
            { ns, requestTimeout },
            queryKey,
        ),
        queryFn: () => NamespacesService.getNamespacesByNs({ ns, requestTimeout }) as TData,
        ...options,
    });
export const useOperationsServiceGetOperationsSuspense = <
    TData = Common.OperationsServiceGetOperationsDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
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
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseOperationsServiceGetOperationsKeyFn(
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
            },
            queryKey,
        ),
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
            }) as TData,
        ...options,
    });
export const useOperationsServiceGetOperationsOnchainByOpidSuspense = <
    TData = Common.OperationsServiceGetOperationsOnchainByOpidDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        fetchstatus,
        opid,
        requestTimeout,
    }: {
        fetchstatus?: string;
        opid: string;
        requestTimeout?: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseOperationsServiceGetOperationsOnchainByOpidKeyFn(
            { fetchstatus, opid, requestTimeout },
            queryKey,
        ),
        queryFn: () =>
            OperationsService.getOperationsOnchainByOpid({
                fetchstatus,
                opid,
                requestTimeout,
            }) as TData,
        ...options,
    });
export const useSignersServiceGetSignersSuspense = <
    TData = Common.SignersServiceGetSignersDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
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
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseSignersServiceGetSignersKeyFn(
            { ascending, count, descending, id, keyIdentifier, limit, requestTimeout, skip, sort },
            queryKey,
        ),
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
            }) as TData,
        ...options,
    });
export const useSignersServiceGetSignersByIdSuspense = <
    TData = Common.SignersServiceGetSignersByIdDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        id,
        requestTimeout,
    }: {
        id: string;
        requestTimeout?: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseSignersServiceGetSignersByIdKeyFn({ id, requestTimeout }, queryKey),
        queryFn: () => SignersService.getSignersById({ id, requestTimeout }) as TData,
        ...options,
    });
export const useStatusServiceGetStatusSuspense = <
    TData = Common.StatusServiceGetStatusDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        requestTimeout,
    }: {
        requestTimeout?: string;
    } = {},
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseStatusServiceGetStatusKeyFn({ requestTimeout }, queryKey),
        queryFn: () => StatusService.getStatus({ requestTimeout }) as TData,
        ...options,
    });
export const useSubscriptionsServiceGetSubscriptionsSuspense = <
    TData = Common.SubscriptionsServiceGetSubscriptionsDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
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
        requestTimeout?: string;
        skip?: string;
        sort?: string;
        transport?: string;
    } = {},
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseSubscriptionsServiceGetSubscriptionsKeyFn(
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
            queryKey,
        ),
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
            }) as TData,
        ...options,
    });
export const useSubscriptionsServiceGetSubscriptionsBySubidSuspense = <
    TData = Common.SubscriptionsServiceGetSubscriptionsBySubidDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        fetchstatus,
        requestTimeout,
        subid,
    }: {
        fetchstatus?: string;
        requestTimeout?: string;
        subid: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseSubscriptionsServiceGetSubscriptionsBySubidKeyFn(
            { fetchstatus, requestTimeout, subid },
            queryKey,
        ),
        queryFn: () =>
            SubscriptionsService.getSubscriptionsBySubid({
                fetchstatus,
                requestTimeout,
                subid,
            }) as TData,
        ...options,
    });
export const useSubscriptionsServiceGetSubscriptionsBySubidEventsSuspense = <
    TData = Common.SubscriptionsServiceGetSubscriptionsBySubidEventsDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
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
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseSubscriptionsServiceGetSubscriptionsBySubidEventsKeyFn(
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
            queryKey,
        ),
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
            }) as TData,
        ...options,
    });
export const useTransactionsServiceGetTransactionsSuspense = <
    TData = Common.TransactionsServiceGetTransactionsDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
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
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseTransactionsServiceGetTransactionsKeyFn(
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
            queryKey,
        ),
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
            }) as TData,
        ...options,
    });
export const useTransactionsServiceGetTransactionsByTxnidSuspense = <
    TData = Common.TransactionsServiceGetTransactionsByTxnidDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
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
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseTransactionsServiceGetTransactionsByTxnidKeyFn(
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
            queryKey,
        ),
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
            }) as TData,
        ...options,
    });
export const useTransactionsServiceGetTransactionsByTxnidBlockchaineventsSuspense = <
    TData = Common.TransactionsServiceGetTransactionsByTxnidBlockchaineventsDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        requestTimeout,
        txnid,
    }: {
        requestTimeout?: string;
        txnid: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseTransactionsServiceGetTransactionsByTxnidBlockchaineventsKeyFn(
            { requestTimeout, txnid },
            queryKey,
        ),
        queryFn: () =>
            TransactionsService.getTransactionsByTxnidBlockchainevents({
                requestTimeout,
                txnid,
            }) as TData,
        ...options,
    });
export const useTransactionsServiceGetTransactionsByTxnidOperationsSuspense = <
    TData = Common.TransactionsServiceGetTransactionsByTxnidOperationsDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        requestTimeout,
        txnid,
    }: {
        requestTimeout?: string;
        txnid: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseTransactionsServiceGetTransactionsByTxnidOperationsKeyFn(
            { requestTimeout, txnid },
            queryKey,
        ),
        queryFn: () =>
            TransactionsService.getTransactionsByTxnidOperations({
                requestTimeout,
                txnid,
            }) as TData,
        ...options,
    });
export const useTransactionsServiceGetTransactionsByTxnidStatusSuspense = <
    TData = Common.TransactionsServiceGetTransactionsByTxnidStatusDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        requestTimeout,
        txnid,
    }: {
        requestTimeout?: string;
        txnid: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseTransactionsServiceGetTransactionsByTxnidStatusKeyFn(
            { requestTimeout, txnid },
            queryKey,
        ),
        queryFn: () =>
            TransactionsService.getTransactionsByTxnidStatus({ requestTimeout, txnid }) as TData,
        ...options,
    });
export const useWebSocketsServiceGetWebsocketsSuspense = <
    TData = Common.WebSocketsServiceGetWebsocketsDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        requestTimeout,
    }: {
        requestTimeout?: string;
    } = {},
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useSuspenseQuery<TData, TError>({
        queryKey: Common.UseWebSocketsServiceGetWebsocketsKeyFn({ requestTimeout }, queryKey),
        queryFn: () => WebSocketsService.getWebsockets({ requestTimeout }) as TData,
        ...options,
    });
