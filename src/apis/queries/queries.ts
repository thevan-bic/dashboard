// generated with @7nohe/openapi-react-query-codegen@1.6.2

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from '@tanstack/react-query';
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
export const useAdminsServiceGetAdmins = <
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
    useQuery<TData, TError>({
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
export const useAdminsServiceGetAdminsById = <
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
    useQuery<TData, TError>({
        queryKey: Common.UseAdminsServiceGetAdminsByIdKeyFn({ id, requestTimeout }, queryKey),
        queryFn: () => AdminsService.getAdminsById({ id, requestTimeout }) as TData,
        ...options,
    });
export const useContractApIsServiceGetApis = <
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
    useQuery<TData, TError>({
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
export const useContractApIsServiceGetApisByApiName = <
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
    useQuery<TData, TError>({
        queryKey: Common.UseContractApIsServiceGetApisByApiNameKeyFn(
            { apiName, requestTimeout },
            queryKey,
        ),
        queryFn: () => ContractApIsService.getApisByApiName({ apiName, requestTimeout }) as TData,
        ...options,
    });
export const useContractApIsServiceGetApisByApiNameInterface = <
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
    useQuery<TData, TError>({
        queryKey: Common.UseContractApIsServiceGetApisByApiNameInterfaceKeyFn(
            { apiName, requestTimeout },
            queryKey,
        ),
        queryFn: () =>
            ContractApIsService.getApisByApiNameInterface({ apiName, requestTimeout }) as TData,
        ...options,
    });
export const useContractApIsServiceGetApisByApiNameListenersByEventPath = <
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
    useQuery<TData, TError>({
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
export const useBlockchainEventsServiceGetBlockchainevents = <
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
    useQuery<TData, TError>({
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
export const useBlockchainEventsServiceGetBlockchaineventsById = <
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
    useQuery<TData, TError>({
        queryKey: Common.UseBlockchainEventsServiceGetBlockchaineventsByIdKeyFn(
            { id, requestTimeout },
            queryKey,
        ),
        queryFn: () =>
            BlockchainEventsService.getBlockchaineventsById({ id, requestTimeout }) as TData,
        ...options,
    });
export const useChartHistogramServiceGetChartsHistogramByCollection = <
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
    useQuery<TData, TError>({
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
export const useContractsServiceGetContractsInterfaces = <
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
    useQuery<TData, TError>({
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
export const useContractsServiceGetContractsInterfacesByInterfaceId = <
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
    useQuery<TData, TError>({
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
export const useContractsServiceGetContractsInterfacesByNameByVersion = <
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
    useQuery<TData, TError>({
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
export const useContractsServiceGetContractsListeners = <
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
    useQuery<TData, TError>({
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
export const useContractsServiceGetContractsListenersByNameOrId = <
    TData = Common.ContractsServiceGetContractsListenersByNameOrIdDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        fetchstatus,
        nameOrId,
        requestTimeout,
    }: {
        fetchstatus?: boolean;
        nameOrId: string;
        requestTimeout?: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useQuery<TData, TError>({
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
export const useEventsServiceGetEvents = <
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
    useQuery<TData, TError>({
        queryKey: Common.UseEventsServiceGetEventsKeyFn(
            {
                ascending,
                correlator,
                count,
                created,
                descending,
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
export const useEventsServiceGetEventsByEid = <
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
    useQuery<TData, TError>({
        queryKey: Common.UseEventsServiceGetEventsByEidKeyFn(
            { eid, fetchreference, requestTimeout },
            queryKey,
        ),
        queryFn: () =>
            EventsService.getEventsByEid({ eid, fetchreference, requestTimeout }) as TData,
        ...options,
    });
export const useNamespacesServiceGetNamespaces = <
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
    useQuery<TData, TError>({
        queryKey: Common.UseNamespacesServiceGetNamespacesKeyFn(
            { includeinitializing, requestTimeout },
            queryKey,
        ),
        queryFn: () =>
            NamespacesService.getNamespaces({ includeinitializing, requestTimeout }) as TData,
        ...options,
    });
export const useNamespacesServiceGetNamespacesByNs = <
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
    useQuery<TData, TError>({
        queryKey: Common.UseNamespacesServiceGetNamespacesByNsKeyFn(
            { ns, requestTimeout },
            queryKey,
        ),
        queryFn: () => NamespacesService.getNamespacesByNs({ ns, requestTimeout }) as TData,
        ...options,
    });
export const useOperationsServiceGetOperations = <
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
        data?: string;
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
    useQuery<TData, TError>({
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
            }) as TData,
        ...options,
    });
export const useOperationsServiceGetOperationsOnchainByOpid = <
    TData = Common.OperationsServiceGetOperationsOnchainByOpidDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        fetchstatus,
        opid,
        requestTimeout,
    }: {
        fetchstatus?: boolean;
        opid: string;
        requestTimeout?: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useQuery<TData, TError>({
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
export const useSignersServiceGetSigners = <
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
    useQuery<TData, TError>({
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
export const useSignersServiceGetSignersById = <
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
    useQuery<TData, TError>({
        queryKey: Common.UseSignersServiceGetSignersByIdKeyFn({ id, requestTimeout }, queryKey),
        queryFn: () => SignersService.getSignersById({ id, requestTimeout }) as TData,
        ...options,
    });
export const useStatusServiceGetStatus = <
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
    useQuery<TData, TError>({
        queryKey: Common.UseStatusServiceGetStatusKeyFn({ requestTimeout }, queryKey),
        queryFn: () => StatusService.getStatus({ requestTimeout }) as TData,
        ...options,
    });
export const useSubscriptionsServiceGetSubscriptions = <
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
        options?: string;
        requestTimeout?: string;
        skip?: string;
        sort?: string;
        transport?: string;
    } = {},
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useQuery<TData, TError>({
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
                requestTimeout,
                skip,
                sort,
                transport,
            }) as TData,
        ...options,
    });
export const useSubscriptionsServiceGetSubscriptionsBySubid = <
    TData = Common.SubscriptionsServiceGetSubscriptionsBySubidDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
>(
    {
        fetchstatus,
        requestTimeout,
        subid,
    }: {
        fetchstatus?: boolean;
        requestTimeout?: string;
        subid: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
    useQuery<TData, TError>({
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
export const useSubscriptionsServiceGetSubscriptionsBySubidEvents = <
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
    useQuery<TData, TError>({
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
export const useTransactionsServiceGetTransactions = <
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
    useQuery<TData, TError>({
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
export const useTransactionsServiceGetTransactionsByTxnid = <
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
    useQuery<TData, TError>({
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
export const useTransactionsServiceGetTransactionsByTxnidBlockchainevents = <
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
    useQuery<TData, TError>({
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
export const useTransactionsServiceGetTransactionsByTxnidOperations = <
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
    useQuery<TData, TError>({
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
export const useTransactionsServiceGetTransactionsByTxnidStatus = <
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
    useQuery<TData, TError>({
        queryKey: Common.UseTransactionsServiceGetTransactionsByTxnidStatusKeyFn(
            { requestTimeout, txnid },
            queryKey,
        ),
        queryFn: () =>
            TransactionsService.getTransactionsByTxnidStatus({ requestTimeout, txnid }) as TData,
        ...options,
    });
export const useWebSocketsServiceGetWebsockets = <
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
    useQuery<TData, TError>({
        queryKey: Common.UseWebSocketsServiceGetWebsocketsKeyFn({ requestTimeout }, queryKey),
        queryFn: () => WebSocketsService.getWebsockets({ requestTimeout }) as TData,
        ...options,
    });
export const useAdminsServicePostAdmins = <
    TData = Common.AdminsServicePostAdminsMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                requestBody?: {
                    email?: string;
                    id?: string;
                    is_active?: boolean;
                    namespace?: string;
                    password?: string;
                    role?: string;
                };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            requestBody?: {
                email?: string;
                id?: string;
                is_active?: boolean;
                namespace?: string;
                password?: string;
                role?: string;
            };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ requestBody, requestTimeout }) =>
            AdminsService.postAdmins({ requestBody, requestTimeout }) as unknown as Promise<TData>,
        ...options,
    });
export const useAdminsServicePostAdminsLogin = <
    TData = Common.AdminsServicePostAdminsLoginMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                requestBody?: { email?: string; password?: string };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            requestBody?: { email?: string; password?: string };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ requestBody, requestTimeout }) =>
            AdminsService.postAdminsLogin({
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useContractApIsServicePostApis = <
    TData = Common.ContractApIsServicePostApisMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                confirm?: string;
                publish?: string;
                requestBody?: {
                    interface?: { id?: string; name?: string; version?: string };
                    location?: unknown;
                    name?: string;
                    networkName?: string;
                };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            confirm?: string;
            publish?: string;
            requestBody?: {
                interface?: { id?: string; name?: string; version?: string };
                location?: unknown;
                name?: string;
                networkName?: string;
            };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ confirm, publish, requestBody, requestTimeout }) =>
            ContractApIsService.postApis({
                confirm,
                publish,
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useContractApIsServicePostApisByApiNameInvokeByMethodPath = <
    TData = Common.ContractApIsServicePostApisByApiNameInvokeByMethodPathMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                apiName: string;
                confirm?: string;
                methodPath: string;
                requestBody?: {
                    data?: { [key: string]: unknown };
                    idempotencyKey?: string;
                    input?: { [key: string]: unknown };
                    key?: string;
                    location?: unknown;
                    message?: {
                        data?: {
                            datatype?: { name?: string; version?: string };
                            id?: string;
                            validator?: string;
                            value?: unknown;
                        }[];
                        group?: { members?: { identity?: string; node?: string }[]; name?: string };
                        header?: {
                            author?: string;
                            cid?: string;
                            group?: string;
                            key?: string;
                            tag?: string;
                            topics?: string[];
                            txtype?:
                                | 'none'
                                | 'unpinned'
                                | 'batch_pin'
                                | 'network_action'
                                | 'token_pool'
                                | 'token_transfer'
                                | 'contract_deploy'
                                | 'contract_invoke'
                                | 'contract_invoke_pin'
                                | 'token_approval'
                                | 'data_publish'
                                | 'user_operation_send';
                            type?:
                                | 'definition'
                                | 'broadcast'
                                | 'private'
                                | 'groupinit'
                                | 'transfer_broadcast'
                                | 'transfer_private'
                                | 'approval_broadcast'
                                | 'approval_private';
                        };
                        idempotencyKey?: string;
                    };
                    options?: { [key: string]: unknown };
                };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            apiName: string;
            confirm?: string;
            methodPath: string;
            requestBody?: {
                data?: { [key: string]: unknown };
                idempotencyKey?: string;
                input?: { [key: string]: unknown };
                key?: string;
                location?: unknown;
                message?: {
                    data?: {
                        datatype?: { name?: string; version?: string };
                        id?: string;
                        validator?: string;
                        value?: unknown;
                    }[];
                    group?: { members?: { identity?: string; node?: string }[]; name?: string };
                    header?: {
                        author?: string;
                        cid?: string;
                        group?: string;
                        key?: string;
                        tag?: string;
                        topics?: string[];
                        txtype?:
                            | 'none'
                            | 'unpinned'
                            | 'batch_pin'
                            | 'network_action'
                            | 'token_pool'
                            | 'token_transfer'
                            | 'contract_deploy'
                            | 'contract_invoke'
                            | 'contract_invoke_pin'
                            | 'token_approval'
                            | 'data_publish'
                            | 'user_operation_send';
                        type?:
                            | 'definition'
                            | 'broadcast'
                            | 'private'
                            | 'groupinit'
                            | 'transfer_broadcast'
                            | 'transfer_private'
                            | 'approval_broadcast'
                            | 'approval_private';
                    };
                    idempotencyKey?: string;
                };
                options?: { [key: string]: unknown };
            };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ apiName, confirm, methodPath, requestBody, requestTimeout }) =>
            ContractApIsService.postApisByApiNameInvokeByMethodPath({
                apiName,
                confirm,
                methodPath,
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useContractApIsServicePostApisByApiNameListenersByEventPath = <
    TData = Common.ContractApIsServicePostApisByApiNameListenersByEventPathMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                apiName: string;
                eventPath: string;
                requestBody?: {
                    event?: {
                        description?: string;
                        details?: { [key: string]: unknown };
                        name?: string;
                        params?: { name?: string; schema?: unknown }[];
                    };
                    location?: unknown;
                    name?: string;
                    options?: { firstEvent?: string };
                    topic?: string;
                };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            apiName: string;
            eventPath: string;
            requestBody?: {
                event?: {
                    description?: string;
                    details?: { [key: string]: unknown };
                    name?: string;
                    params?: { name?: string; schema?: unknown }[];
                };
                location?: unknown;
                name?: string;
                options?: { firstEvent?: string };
                topic?: string;
            };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ apiName, eventPath, requestBody, requestTimeout }) =>
            ContractApIsService.postApisByApiNameListenersByEventPath({
                apiName,
                eventPath,
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useContractApIsServicePostApisByApiNamePublish = <
    TData = Common.ContractApIsServicePostApisByApiNamePublishMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                apiName: string;
                confirm?: string;
                requestBody?: { networkName?: string };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            apiName: string;
            confirm?: string;
            requestBody?: { networkName?: string };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ apiName, confirm, requestBody, requestTimeout }) =>
            ContractApIsService.postApisByApiNamePublish({
                apiName,
                confirm,
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useContractApIsServicePostApisByApiNameQueryByMethodPath = <
    TData = Common.ContractApIsServicePostApisByApiNameQueryByMethodPathMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                apiName: string;
                methodPath: string;
                requestBody?: {
                    data?: { [key: string]: unknown };
                    idempotencyKey?: string;
                    input?: { [key: string]: unknown };
                    key?: string;
                    location?: unknown;
                    options?: { [key: string]: unknown };
                };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            apiName: string;
            methodPath: string;
            requestBody?: {
                data?: { [key: string]: unknown };
                idempotencyKey?: string;
                input?: { [key: string]: unknown };
                key?: string;
                location?: unknown;
                options?: { [key: string]: unknown };
            };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ apiName, methodPath, requestBody, requestTimeout }) =>
            ContractApIsService.postApisByApiNameQueryByMethodPath({
                apiName,
                methodPath,
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useContractsServicePostContractsInterfaces = <
    TData = Common.ContractsServicePostContractsInterfacesMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                confirm?: string;
                publish?: string;
                requestBody?: {
                    description?: string;
                    errors?: {
                        description?: string;
                        name?: string;
                        params?: { name?: string; schema?: unknown }[];
                    }[];
                    events?: {
                        description?: string;
                        details?: { [key: string]: unknown };
                        name?: string;
                        params?: { name?: string; schema?: unknown }[];
                    }[];
                    methods?: {
                        description?: string;
                        details?: { [key: string]: unknown };
                        name?: string;
                        params?: { name?: string; schema?: unknown }[];
                        returns?: { name?: string; schema?: unknown }[];
                    }[];
                    name?: string;
                    networkName?: string;
                    version?: string;
                };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            confirm?: string;
            publish?: string;
            requestBody?: {
                description?: string;
                errors?: {
                    description?: string;
                    name?: string;
                    params?: { name?: string; schema?: unknown }[];
                }[];
                events?: {
                    description?: string;
                    details?: { [key: string]: unknown };
                    name?: string;
                    params?: { name?: string; schema?: unknown }[];
                }[];
                methods?: {
                    description?: string;
                    details?: { [key: string]: unknown };
                    name?: string;
                    params?: { name?: string; schema?: unknown }[];
                    returns?: { name?: string; schema?: unknown }[];
                }[];
                name?: string;
                networkName?: string;
                version?: string;
            };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ confirm, publish, requestBody, requestTimeout }) =>
            ContractsService.postContractsInterfaces({
                confirm,
                publish,
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useContractsServicePostContractsInterfacesByNameByVersionPublish = <
    TData = Common.ContractsServicePostContractsInterfacesByNameByVersionPublishMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                confirm?: string;
                name: string;
                requestBody?: { networkName?: string };
                requestTimeout?: string;
                version: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            confirm?: string;
            name: string;
            requestBody?: { networkName?: string };
            requestTimeout?: string;
            version: string;
        },
        TContext
    >({
        mutationFn: ({ confirm, name, requestBody, requestTimeout, version }) =>
            ContractsService.postContractsInterfacesByNameByVersionPublish({
                confirm,
                name,
                requestBody,
                requestTimeout,
                version,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useContractsServicePostContractsInterfacesGenerate = <
    TData = Common.ContractsServicePostContractsInterfacesGenerateMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                requestBody?: {
                    description?: string;
                    input?: unknown;
                    name?: string;
                    namespace?: string;
                    version?: string;
                };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            requestBody?: {
                description?: string;
                input?: unknown;
                name?: string;
                namespace?: string;
                version?: string;
            };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ requestBody, requestTimeout }) =>
            ContractsService.postContractsInterfacesGenerate({
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useContractsServicePostContractsInvoke = <
    TData = Common.ContractsServicePostContractsInvokeMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                confirm?: string;
                requestBody?: {
                    data?: { [key: string]: unknown };
                    errors?: {
                        description?: string;
                        name?: string;
                        params?: { name?: string; schema?: unknown }[];
                    }[];
                    idempotencyKey?: string;
                    input?: { [key: string]: unknown };
                    interface?: string;
                    key?: string;
                    location?: unknown;
                    message?: {
                        data?: {
                            datatype?: { name?: string; version?: string };
                            id?: string;
                            validator?: string;
                            value?: unknown;
                        }[];
                        group?: { members?: { identity?: string; node?: string }[]; name?: string };
                        header?: {
                            author?: string;
                            cid?: string;
                            group?: string;
                            key?: string;
                            tag?: string;
                            topics?: string[];
                            txtype?:
                                | 'none'
                                | 'unpinned'
                                | 'batch_pin'
                                | 'network_action'
                                | 'token_pool'
                                | 'token_transfer'
                                | 'contract_deploy'
                                | 'contract_invoke'
                                | 'contract_invoke_pin'
                                | 'token_approval'
                                | 'data_publish'
                                | 'user_operation_send';
                            type?:
                                | 'definition'
                                | 'broadcast'
                                | 'private'
                                | 'groupinit'
                                | 'transfer_broadcast'
                                | 'transfer_private'
                                | 'approval_broadcast'
                                | 'approval_private';
                        };
                        idempotencyKey?: string;
                    };
                    method?: {
                        description?: string;
                        details?: { [key: string]: unknown };
                        name?: string;
                        params?: { name?: string; schema?: unknown }[];
                        returns?: { name?: string; schema?: unknown }[];
                    };
                    methodPath?: string;
                    options?: { [key: string]: unknown };
                };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            confirm?: string;
            requestBody?: {
                data?: { [key: string]: unknown };
                errors?: {
                    description?: string;
                    name?: string;
                    params?: { name?: string; schema?: unknown }[];
                }[];
                idempotencyKey?: string;
                input?: { [key: string]: unknown };
                interface?: string;
                key?: string;
                location?: unknown;
                message?: {
                    data?: {
                        datatype?: { name?: string; version?: string };
                        id?: string;
                        validator?: string;
                        value?: unknown;
                    }[];
                    group?: { members?: { identity?: string; node?: string }[]; name?: string };
                    header?: {
                        author?: string;
                        cid?: string;
                        group?: string;
                        key?: string;
                        tag?: string;
                        topics?: string[];
                        txtype?:
                            | 'none'
                            | 'unpinned'
                            | 'batch_pin'
                            | 'network_action'
                            | 'token_pool'
                            | 'token_transfer'
                            | 'contract_deploy'
                            | 'contract_invoke'
                            | 'contract_invoke_pin'
                            | 'token_approval'
                            | 'data_publish'
                            | 'user_operation_send';
                        type?:
                            | 'definition'
                            | 'broadcast'
                            | 'private'
                            | 'groupinit'
                            | 'transfer_broadcast'
                            | 'transfer_private'
                            | 'approval_broadcast'
                            | 'approval_private';
                    };
                    idempotencyKey?: string;
                };
                method?: {
                    description?: string;
                    details?: { [key: string]: unknown };
                    name?: string;
                    params?: { name?: string; schema?: unknown }[];
                    returns?: { name?: string; schema?: unknown }[];
                };
                methodPath?: string;
                options?: { [key: string]: unknown };
            };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ confirm, requestBody, requestTimeout }) =>
            ContractsService.postContractsInvoke({
                confirm,
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useContractsServicePostContractsListeners = <
    TData = Common.ContractsServicePostContractsListenersMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                requestBody?: {
                    event?: {
                        description?: string;
                        details?: { [key: string]: unknown };
                        name?: string;
                        params?: { name?: string; schema?: unknown }[];
                    };
                    eventPath?: string;
                    filters?: {
                        event?: {
                            description?: string;
                            details?: { [key: string]: unknown };
                            name?: string;
                            params?: { name?: string; schema?: unknown }[];
                        };
                        eventPath?: string;
                        interface?: { id?: string; name?: string; version?: string };
                        location?: unknown;
                    }[];
                    interface?: { id?: string; name?: string; version?: string };
                    location?: unknown;
                    name?: string;
                    options?: { firstEvent?: string };
                    topic?: string;
                };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            requestBody?: {
                event?: {
                    description?: string;
                    details?: { [key: string]: unknown };
                    name?: string;
                    params?: { name?: string; schema?: unknown }[];
                };
                eventPath?: string;
                filters?: {
                    event?: {
                        description?: string;
                        details?: { [key: string]: unknown };
                        name?: string;
                        params?: { name?: string; schema?: unknown }[];
                    };
                    eventPath?: string;
                    interface?: { id?: string; name?: string; version?: string };
                    location?: unknown;
                }[];
                interface?: { id?: string; name?: string; version?: string };
                location?: unknown;
                name?: string;
                options?: { firstEvent?: string };
                topic?: string;
            };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ requestBody, requestTimeout }) =>
            ContractsService.postContractsListeners({
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useContractsServicePostContractsListenersSignature = <
    TData = Common.ContractsServicePostContractsListenersSignatureMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                requestBody?: {
                    event?: {
                        description?: string;
                        details?: { [key: string]: unknown };
                        name?: string;
                        params?: { name?: string; schema?: unknown }[];
                    };
                    eventPath?: string;
                    filters?: {
                        event?: {
                            description?: string;
                            details?: { [key: string]: unknown };
                            name?: string;
                            params?: { name?: string; schema?: unknown }[];
                        };
                        eventPath?: string;
                        interface?: { id?: string; name?: string; version?: string };
                        location?: unknown;
                    }[];
                    interface?: { id?: string; name?: string; version?: string };
                    location?: unknown;
                    name?: string;
                    options?: { firstEvent?: string };
                    topic?: string;
                };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            requestBody?: {
                event?: {
                    description?: string;
                    details?: { [key: string]: unknown };
                    name?: string;
                    params?: { name?: string; schema?: unknown }[];
                };
                eventPath?: string;
                filters?: {
                    event?: {
                        description?: string;
                        details?: { [key: string]: unknown };
                        name?: string;
                        params?: { name?: string; schema?: unknown }[];
                    };
                    eventPath?: string;
                    interface?: { id?: string; name?: string; version?: string };
                    location?: unknown;
                }[];
                interface?: { id?: string; name?: string; version?: string };
                location?: unknown;
                name?: string;
                options?: { firstEvent?: string };
                topic?: string;
            };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ requestBody, requestTimeout }) =>
            ContractsService.postContractsListenersSignature({
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useContractsServicePostContractsQuery = <
    TData = Common.ContractsServicePostContractsQueryMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                requestBody?: {
                    data?: { [key: string]: unknown };
                    errors?: {
                        description?: string;
                        name?: string;
                        params?: { name?: string; schema?: unknown }[];
                    }[];
                    idempotencyKey?: string;
                    input?: { [key: string]: unknown };
                    interface?: string;
                    key?: string;
                    location?: unknown;
                    method?: {
                        description?: string;
                        details?: { [key: string]: unknown };
                        name?: string;
                        params?: { name?: string; schema?: unknown }[];
                        returns?: { name?: string; schema?: unknown }[];
                    };
                    methodPath?: string;
                    options?: { [key: string]: unknown };
                };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            requestBody?: {
                data?: { [key: string]: unknown };
                errors?: {
                    description?: string;
                    name?: string;
                    params?: { name?: string; schema?: unknown }[];
                }[];
                idempotencyKey?: string;
                input?: { [key: string]: unknown };
                interface?: string;
                key?: string;
                location?: unknown;
                method?: {
                    description?: string;
                    details?: { [key: string]: unknown };
                    name?: string;
                    params?: { name?: string; schema?: unknown }[];
                    returns?: { name?: string; schema?: unknown }[];
                };
                methodPath?: string;
                options?: { [key: string]: unknown };
            };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ requestBody, requestTimeout }) =>
            ContractsService.postContractsQuery({
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useNamespacesServicePostReset = <
    TData = Common.NamespacesServicePostResetMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                requestBody?: unknown;
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            requestBody?: unknown;
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ requestBody, requestTimeout }) =>
            NamespacesService.postReset({
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useOperationsServicePostOperationsByOpidRetry = <
    TData = Common.OperationsServicePostOperationsByOpidRetryMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                opid: string;
                requestBody?: { [key: string]: unknown };
                requestTimeout?: string;
                txHash?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            opid: string;
            requestBody?: { [key: string]: unknown };
            requestTimeout?: string;
            txHash?: string;
        },
        TContext
    >({
        mutationFn: ({ opid, requestBody, requestTimeout, txHash }) =>
            OperationsService.postOperationsByOpidRetry({
                opid,
                requestBody,
                requestTimeout,
                txHash,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useOperationsServicePostOperationsByOpidStatus = <
    TData = Common.OperationsServicePostOperationsByOpidStatusMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                opid: string;
                requestBody?: { [key: string]: unknown };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            opid: string;
            requestBody?: { [key: string]: unknown };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ opid, requestBody, requestTimeout }) =>
            OperationsService.postOperationsByOpidStatus({
                opid,
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useSignersServicePostSigners = <
    TData = Common.SignersServicePostSignersMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                requestBody?: {
                    created?: string;
                    description?: string;
                    id?: string;
                    isActive?: boolean;
                    keyIdentifier?: string;
                    name?: string;
                    namespace?: string;
                    provider?: string;
                    providerResource?: string;
                    providerService?: string;
                    updated?: string;
                };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            requestBody?: {
                created?: string;
                description?: string;
                id?: string;
                isActive?: boolean;
                keyIdentifier?: string;
                name?: string;
                namespace?: string;
                provider?: string;
                providerResource?: string;
                providerService?: string;
                updated?: string;
            };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ requestBody, requestTimeout }) =>
            SignersService.postSigners({
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useSubscriptionsServicePostSubscriptions = <
    TData = Common.SubscriptionsServicePostSubscriptionsMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                requestBody?: {
                    filter?: {
                        author?: string;
                        blockchainevent?: { listener?: string; name?: string };
                        events?: string;
                        group?: string;
                        message?: { author?: string; group?: string; tag?: string };
                        tag?: string;
                        topic?: string;
                        topics?: string;
                        transaction?: { type?: string };
                    };
                    name?: string;
                    namespace?: string;
                    options?: {
                        batch?: boolean;
                        batchTimeout?: string;
                        fastack?: boolean;
                        firstEvent?: string;
                        headers?: { [key: string]: string };
                        httpOptions?: {
                            connectionTimeout?: string;
                            expectContinueTimeout?: string;
                            idleTimeout?: string;
                            maxIdleConns?: number;
                            proxyURL?: string;
                            requestTimeout?: string;
                            tlsHandshakeTimeout?: string;
                        };
                        input?: {
                            body?: string;
                            headers?: string;
                            path?: string;
                            query?: string;
                            replytx?: string;
                        };
                        json?: boolean;
                        method?: string;
                        query?: { [key: string]: string };
                        readAhead?: number;
                        reply?: boolean;
                        replytag?: string;
                        replytx?: string;
                        retry?: {
                            count?: number;
                            enabled?: boolean;
                            initialDelay?: string;
                            maxDelay?: string;
                        };
                        tlsConfigName?: string;
                        url?: string;
                        withData?: boolean;
                    };
                    transport?: string;
                };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            requestBody?: {
                filter?: {
                    author?: string;
                    blockchainevent?: { listener?: string; name?: string };
                    events?: string;
                    group?: string;
                    message?: { author?: string; group?: string; tag?: string };
                    tag?: string;
                    topic?: string;
                    topics?: string;
                    transaction?: { type?: string };
                };
                name?: string;
                namespace?: string;
                options?: {
                    batch?: boolean;
                    batchTimeout?: string;
                    fastack?: boolean;
                    firstEvent?: string;
                    headers?: { [key: string]: string };
                    httpOptions?: {
                        connectionTimeout?: string;
                        expectContinueTimeout?: string;
                        idleTimeout?: string;
                        maxIdleConns?: number;
                        proxyURL?: string;
                        requestTimeout?: string;
                        tlsHandshakeTimeout?: string;
                    };
                    input?: {
                        body?: string;
                        headers?: string;
                        path?: string;
                        query?: string;
                        replytx?: string;
                    };
                    json?: boolean;
                    method?: string;
                    query?: { [key: string]: string };
                    readAhead?: number;
                    reply?: boolean;
                    replytag?: string;
                    replytx?: string;
                    retry?: {
                        count?: number;
                        enabled?: boolean;
                        initialDelay?: string;
                        maxDelay?: string;
                    };
                    tlsConfigName?: string;
                    url?: string;
                    withData?: boolean;
                };
                transport?: string;
            };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ requestBody, requestTimeout }) =>
            SubscriptionsService.postSubscriptions({
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useContractApIsServicePutApisByApiName = <
    TData = Common.ContractApIsServicePutApisByApiNameMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                confirm?: string;
                id: string;
                requestBody?: {
                    interface?: { id?: string; name?: string; version?: string };
                    location?: unknown;
                    name?: string;
                    networkName?: string;
                };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            confirm?: string;
            id: string;
            requestBody?: {
                interface?: { id?: string; name?: string; version?: string };
                location?: unknown;
                name?: string;
                networkName?: string;
            };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ confirm, id, requestBody, requestTimeout }) =>
            ContractApIsService.putApisByApiName({
                confirm,
                id,
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useSubscriptionsServicePutSubscriptions = <
    TData = Common.SubscriptionsServicePutSubscriptionsMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                requestBody?: {
                    filter?: {
                        author?: string;
                        blockchainevent?: { listener?: string; name?: string };
                        events?: string;
                        group?: string;
                        message?: { author?: string; group?: string; tag?: string };
                        tag?: string;
                        topic?: string;
                        topics?: string;
                        transaction?: { type?: string };
                    };
                    name?: string;
                    namespace?: string;
                    options?: {
                        batch?: boolean;
                        batchTimeout?: string;
                        fastack?: boolean;
                        firstEvent?: string;
                        headers?: { [key: string]: string };
                        httpOptions?: {
                            connectionTimeout?: string;
                            expectContinueTimeout?: string;
                            idleTimeout?: string;
                            maxIdleConns?: number;
                            proxyURL?: string;
                            requestTimeout?: string;
                            tlsHandshakeTimeout?: string;
                        };
                        input?: {
                            body?: string;
                            headers?: string;
                            path?: string;
                            query?: string;
                            replytx?: string;
                        };
                        json?: boolean;
                        method?: string;
                        query?: { [key: string]: string };
                        readAhead?: number;
                        reply?: boolean;
                        replytag?: string;
                        replytx?: string;
                        retry?: {
                            count?: number;
                            enabled?: boolean;
                            initialDelay?: string;
                            maxDelay?: string;
                        };
                        tlsConfigName?: string;
                        url?: string;
                        withData?: boolean;
                    };
                    transport?: string;
                };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            requestBody?: {
                filter?: {
                    author?: string;
                    blockchainevent?: { listener?: string; name?: string };
                    events?: string;
                    group?: string;
                    message?: { author?: string; group?: string; tag?: string };
                    tag?: string;
                    topic?: string;
                    topics?: string;
                    transaction?: { type?: string };
                };
                name?: string;
                namespace?: string;
                options?: {
                    batch?: boolean;
                    batchTimeout?: string;
                    fastack?: boolean;
                    firstEvent?: string;
                    headers?: { [key: string]: string };
                    httpOptions?: {
                        connectionTimeout?: string;
                        expectContinueTimeout?: string;
                        idleTimeout?: string;
                        maxIdleConns?: number;
                        proxyURL?: string;
                        requestTimeout?: string;
                        tlsHandshakeTimeout?: string;
                    };
                    input?: {
                        body?: string;
                        headers?: string;
                        path?: string;
                        query?: string;
                        replytx?: string;
                    };
                    json?: boolean;
                    method?: string;
                    query?: { [key: string]: string };
                    readAhead?: number;
                    reply?: boolean;
                    replytag?: string;
                    replytx?: string;
                    retry?: {
                        count?: number;
                        enabled?: boolean;
                        initialDelay?: string;
                        maxDelay?: string;
                    };
                    tlsConfigName?: string;
                    url?: string;
                    withData?: boolean;
                };
                transport?: string;
            };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ requestBody, requestTimeout }) =>
            SubscriptionsService.putSubscriptions({
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useNamespacesServicePatchOperationsByNsopid = <
    TData = Common.NamespacesServicePatchOperationsByNsopidMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                nsopid: string;
                requestBody?: {
                    error?: string;
                    output?: { [key: string]: unknown };
                    status?: string;
                };
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            nsopid: string;
            requestBody?: { error?: string; output?: { [key: string]: unknown }; status?: string };
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ nsopid, requestBody, requestTimeout }) =>
            NamespacesService.patchOperationsByNsopid({
                nsopid,
                requestBody,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useAdminsServiceDeleteAdminsById = <
    TData = Common.AdminsServiceDeleteAdminsByIdMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                id: string;
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            id: string;
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ id, requestTimeout }) =>
            AdminsService.deleteAdminsById({ id, requestTimeout }) as unknown as Promise<TData>,
        ...options,
    });
export const useContractApIsServiceDeleteApisByApiName = <
    TData = Common.ContractApIsServiceDeleteApisByApiNameMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                apiName: string;
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            apiName: string;
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ apiName, requestTimeout }) =>
            ContractApIsService.deleteApisByApiName({
                apiName,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useContractsServiceDeleteContractsInterfacesByInterfaceId = <
    TData = Common.ContractsServiceDeleteContractsInterfacesByInterfaceIdMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                interfaceId: string;
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            interfaceId: string;
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ interfaceId, requestTimeout }) =>
            ContractsService.deleteContractsInterfacesByInterfaceId({
                interfaceId,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useContractsServiceDeleteContractsListenersByNameOrId = <
    TData = Common.ContractsServiceDeleteContractsListenersByNameOrIdMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                nameOrId: string;
                requestTimeout?: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            nameOrId: string;
            requestTimeout?: string;
        },
        TContext
    >({
        mutationFn: ({ nameOrId, requestTimeout }) =>
            ContractsService.deleteContractsListenersByNameOrId({
                nameOrId,
                requestTimeout,
            }) as unknown as Promise<TData>,
        ...options,
    });
export const useSubscriptionsServiceDeleteSubscriptionsBySubid = <
    TData = Common.SubscriptionsServiceDeleteSubscriptionsBySubidMutationResult,
    TError = unknown,
    TContext = unknown,
>(
    options?: Omit<
        UseMutationOptions<
            TData,
            TError,
            {
                requestTimeout?: string;
                subid: string;
            },
            TContext
        >,
        'mutationFn'
    >,
) =>
    useMutation<
        TData,
        TError,
        {
            requestTimeout?: string;
            subid: string;
        },
        TContext
    >({
        mutationFn: ({ requestTimeout, subid }) =>
            SubscriptionsService.deleteSubscriptionsBySubid({
                requestTimeout,
                subid,
            }) as unknown as Promise<TData>,
        ...options,
    });
