export interface paths {
    '/admins': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list of system user */
        get: operations['getAdmins'];
        put?: never;
        /** @description Create new admin */
        post: operations['postNewAdmin'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/admins/{id}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get admin by id */
        get: operations['getAdminByID'];
        put?: never;
        post?: never;
        /** @description Delete admin by id */
        delete: operations['deleteAdmin'];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/admins/login': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Login */
        post: operations['postAdminLogin'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/apis': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list of contract APIs that have been published */
        get: operations['getContractAPIs'];
        put?: never;
        /** @description Creates and broadcasts a new custom smart contract API */
        post: operations['postNewContractAPI'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/apis/{apiName}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets information about a contract API, including the URLs for the OpenAPI Spec and Swagger UI for the API */
        get: operations['getContractAPIByName'];
        /** @description The ID of the contract API */
        put: operations['putContractAPI'];
        post?: never;
        /** @description Delete a contract API */
        delete: operations['deleteContractAPI'];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/apis/{apiName}/interface': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a contract interface for a contract API */
        get: operations['getContractAPIInterface'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/apis/{apiName}/invoke/{methodPath}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Invokes a method on a smart contract API. Performs a blockchain transaction. */
        post: operations['postContractAPIInvoke'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/apis/{apiName}/listeners/{eventPath}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list of contract listeners */
        get: operations['getContractAPIListeners'];
        put?: never;
        /** @description Creates a new blockchain listener for events emitted by custom smart contracts */
        post: operations['postContractAPIListeners'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/apis/{apiName}/publish': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Publish a contract API to all other members of the multiparty network */
        post: operations['postContractAPIPublish'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/apis/{apiName}/query/{methodPath}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Queries a method on a smart contract API. Performs a read-only query. */
        post: operations['postContractAPIQuery'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/blockchainevents': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list of blockchain events */
        get: operations['getBlockchainEvents'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/blockchainevents/{id}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a blockchain event */
        get: operations['getBlockchainEventByID'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/charts/histogram/{collection}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a JSON object containing statistics data that can be used to build a graphical representation of recent activity in a given database collection */
        get: operations['getChartHistogram'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/contracts/interfaces': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list of contract interfaces that have been published */
        get: operations['getContractInterfaces'];
        put?: never;
        /** @description Creates and broadcasts a new custom smart contract interface */
        post: operations['postNewContractInterface'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/contracts/interfaces/{interfaceId}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a contract interface by its ID */
        get: operations['getContractInterface'];
        put?: never;
        post?: never;
        /** @description Delete a contract interface */
        delete: operations['deleteContractInterface'];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/contracts/interfaces/{name}/{version}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a contract interface by its name and version */
        get: operations['getContractInterfaceByNameAndVersion'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/contracts/interfaces/{name}/{version}/publish': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Publish a contract interface to all other members of the multiparty network */
        post: operations['postContractInterfacePublish'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/contracts/interfaces/generate': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description A convenience method to convert a blockchain specific smart contract format into a FireFly Interface format. The specific blockchain plugin in use must support this functionality. */
        post: operations['postGenerateContractInterface'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/contracts/invoke': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Invokes a method on a smart contract. Performs a blockchain transaction. */
        post: operations['postContractInvoke'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/contracts/listeners': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list of contract listeners */
        get: operations['getContractListeners'];
        put?: never;
        /** @description Creates a new blockchain listener for events emitted by custom smart contracts */
        post: operations['postNewContractListener'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/contracts/listeners/{nameOrId}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a contract listener by its name or ID */
        get: operations['getContractListenerByNameOrID'];
        put?: never;
        post?: never;
        /** @description Deletes a contract listener referenced by its name or its ID */
        delete: operations['deleteContractListener'];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/contracts/listeners/signature': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Calculates the hash of a blockchain listener filters and events */
        post: operations['postContractListenerSignature'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/contracts/query': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Queries a method on a smart contract. Performs a read-only query. */
        post: operations['postContractQuery'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/events': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list of events */
        get: operations['getEvents'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/events/{eid}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets an event by its ID */
        get: operations['getEventByID'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/namespaces': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list of namespaces */
        get: operations['getNamespaces'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/namespaces/{ns}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a namespace */
        get: operations['getNamespace'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/operations': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a a list of operations */
        get: operations['getOps'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/operations-onchain/{opid}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets an operation by ID */
        get: operations['getOpByID'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/operations/{nsopid}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** @description Updates an operation by ID */
        patch: operations['spiPatchOpByID'];
        trace?: never;
    };
    '/operations/{opid}/retry': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Retries a failed operation */
        post: operations['postOpRetry'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/operations/{opid}/status': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Set operation pending status */
        post: operations['postOpStatus'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/reset': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Restarts FireFly Core HTTP servers and apply all configuration updates */
        post: operations['spiPostReset'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/signers': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get signers */
        get: operations['spiGetSigners'];
        put?: never;
        /** @description Create new signer */
        post: operations['spiPostNewSigner'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/signers/{id}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get signer by id */
        get: operations['spiGetSignerByID'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/status': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets the status of this namespace */
        get: operations['getStatus'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/subscriptions': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list of subscriptions */
        get: operations['getSubscriptions'];
        /** @description Update an existing subscription */
        put: operations['putSubscription'];
        /** @description Creates a new subscription for an application to receive events from FireFly */
        post: operations['postNewSubscription'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/subscriptions/{subid}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a subscription by its ID */
        get: operations['getSubscriptionByID'];
        put?: never;
        post?: never;
        /** @description Deletes a subscription */
        delete: operations['deleteSubscription'];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/subscriptions/{subid}/events': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a collection of events filtered by the subscription for further filtering */
        get: operations['getSubscriptionEventsFiltered'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/transactions': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list of transactions */
        get: operations['getTxns'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/transactions/{txnid}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a transaction by its ID */
        get: operations['getTxnByID'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/transactions/{txnid}/blockchainevents': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list blockchain events for a specific transaction */
        get: operations['getTxnBlockchainEvents'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/transactions/{txnid}/operations': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list of operations in a specific transaction */
        get: operations['getTxnOps'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/transactions/{txnid}/status': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets the status of a transaction */
        get: operations['getTxnStatus'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/websockets': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list of the current WebSocket connections to this node */
        get: operations['getWebSockets'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: never;
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getAdmins: {
        parameters: {
            query?: {
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                email?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                id?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                namespace?: string;
                /** @description Sort field. For multi-field sort use comma separated values (or multiple query values) with '-' prefix for descending */
                sort?: string;
                /** @description Ascending sort order (overrides all fields in a multi-field sort) */
                ascending?: string;
                /** @description Descending sort order (overrides all fields in a multi-field sort) */
                descending?: string;
                /** @description The number of records to skip (max: 1,000). Unsuitable for bulk operations */
                skip?: string;
                /** @description The maximum number of records to return (max: 1,000) */
                limit?: string;
                /** @description Return a total count as well as items (adds extra database processing) */
                count?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description Admin.email */
                        email?: string;
                        /**
                         * Format: uuid
                         * @description Admin.id
                         */
                        id?: string;
                        /** @description Admin.is_active */
                        is_active?: boolean;
                        /** @description Admin.namespace */
                        namespace?: string;
                        /** @description Admin.password */
                        password?: string;
                        /** @description Admin.role */
                        role?: string;
                    }[];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postNewAdmin: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description Admin.email */
                    email?: string;
                    /**
                     * Format: uuid
                     * @description Admin.id
                     */
                    id?: string;
                    /** @description Admin.is_active */
                    is_active?: boolean;
                    /** @description Admin.namespace */
                    namespace?: string;
                    /** @description Admin.password */
                    password?: string;
                    /** @description Admin.role */
                    role?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description Admin.email */
                        email?: string;
                        /**
                         * Format: uuid
                         * @description Admin.id
                         */
                        id?: string;
                        /** @description Admin.is_active */
                        is_active?: boolean;
                        /** @description Admin.namespace */
                        namespace?: string;
                        /** @description Admin.password */
                        password?: string;
                        /** @description Admin.role */
                        role?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getAdminByID: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The admin ID key to get */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description Admin.email */
                        email?: string;
                        /**
                         * Format: uuid
                         * @description Admin.id
                         */
                        id?: string;
                        /** @description Admin.is_active */
                        is_active?: boolean;
                        /** @description Admin.namespace */
                        namespace?: string;
                        /** @description Admin.password */
                        password?: string;
                        /** @description Admin.role */
                        role?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    deleteAdmin: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The admin ID key to get */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description The time the operation was created
                         */
                        created?: string;
                        /** @description Operation.data */
                        data?: {
                            [key: string]: unknown;
                        };
                        /** @description Additional detailed information about an operation provided by the connector */
                        detail?: unknown;
                        /** @description Any error reported back from the plugin for this operation */
                        error?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the operation
                         */
                        id?: string;
                        /** @description The input to this operation */
                        input?: {
                            [key: string]: unknown;
                        };
                        /** @description The namespace of the operation */
                        namespace?: string;
                        /** @description Any output reported back from the plugin for this operation */
                        output?: {
                            [key: string]: unknown;
                        };
                        /** @description The plugin responsible for performing the operation */
                        plugin?: string;
                        /**
                         * Format: uuid
                         * @description If this operation was initiated as a retry to a previous operation, this field points to the UUID of the operation being retried
                         */
                        retry?: string;
                        /** @description The current status of the operation */
                        status?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly transaction the operation is part of
                         */
                        tx?: string;
                        /**
                         * @description The type of the operation
                         * @enum {string}
                         */
                        type?: 'blockchain_invoke' | 'user_operation_send';
                        /**
                         * Format: date-time
                         * @description The last update time of the operation
                         */
                        updated?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postAdminLogin: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description Admin.email */
                    email?: string;
                    /** @description Admin.password */
                    password?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description Admin.token */
                        token?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getContractAPIs: {
        parameters: {
            query?: {
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                id?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                interface?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                name?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                networkname?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                published?: string;
                /** @description Sort field. For multi-field sort use comma separated values (or multiple query values) with '-' prefix for descending */
                sort?: string;
                /** @description Ascending sort order (overrides all fields in a multi-field sort) */
                ascending?: string;
                /** @description Descending sort order (overrides all fields in a multi-field sort) */
                descending?: string;
                /** @description The number of records to skip (max: 1,000). Unsuitable for bulk operations */
                skip?: string;
                /** @description The maximum number of records to return (max: 1,000) */
                limit?: string;
                /** @description Return a total count as well as items (adds extra database processing) */
                count?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: uuid
                         * @description The UUID of the contract API
                         */
                        id?: string;
                        /** @description Reference to the FireFly Interface definition associated with the contract API */
                        interface?: {
                            /**
                             * Format: uuid
                             * @description The UUID of the FireFly interface
                             */
                            id?: string;
                            /** @description The name of the FireFly interface */
                            name?: string;
                            /** @description The version of the FireFly interface */
                            version?: string;
                        };
                        /** @description If this API is tied to an individual instance of a smart contract, this field can include a blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                        location?: unknown;
                        /**
                         * Format: uuid
                         * @description The UUID of the broadcast message that was used to publish this API to the network
                         */
                        message?: string;
                        /** @description The name that is used in the URL to access the API */
                        name?: string;
                        /** @description The namespace of the contract API */
                        namespace?: string;
                        /** @description The published name of the API within the multiparty network */
                        networkName?: string;
                        /** @description Indicates if the API is published to other members of the multiparty network */
                        published?: boolean;
                        /** @description The URLs to use to access the API */
                        urls?: {
                            /** @description The URL to use to invoke the API */
                            api?: string;
                            /** @description The URL to download the OpenAPI v3 (Swagger) description for the API generated in JSON or YAML format */
                            openapi?: string;
                            /** @description The URL to use in a web browser to access the SwaggerUI explorer/exerciser for the API */
                            ui?: string;
                        };
                    }[];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postNewContractAPI: {
        parameters: {
            query?: {
                /** @description When true the HTTP request blocks until the message is confirmed */
                confirm?: string;
                /** @description When true the definition will be published to all other members of the multiparty network */
                publish?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description Reference to the FireFly Interface definition associated with the contract API */
                    interface?: {
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly interface
                         */
                        id?: string;
                        /** @description The name of the FireFly interface */
                        name?: string;
                        /** @description The version of the FireFly interface */
                        version?: string;
                    };
                    /** @description If this API is tied to an individual instance of a smart contract, this field can include a blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                    location?: unknown;
                    /** @description The name that is used in the URL to access the API */
                    name?: string;
                    /** @description The published name of the API within the multiparty network */
                    networkName?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: uuid
                         * @description The UUID of the contract API
                         */
                        id?: string;
                        /** @description Reference to the FireFly Interface definition associated with the contract API */
                        interface?: {
                            /**
                             * Format: uuid
                             * @description The UUID of the FireFly interface
                             */
                            id?: string;
                            /** @description The name of the FireFly interface */
                            name?: string;
                            /** @description The version of the FireFly interface */
                            version?: string;
                        };
                        /** @description If this API is tied to an individual instance of a smart contract, this field can include a blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                        location?: unknown;
                        /**
                         * Format: uuid
                         * @description The UUID of the broadcast message that was used to publish this API to the network
                         */
                        message?: string;
                        /** @description The name that is used in the URL to access the API */
                        name?: string;
                        /** @description The namespace of the contract API */
                        namespace?: string;
                        /** @description The published name of the API within the multiparty network */
                        networkName?: string;
                        /** @description Indicates if the API is published to other members of the multiparty network */
                        published?: boolean;
                        /** @description The URLs to use to access the API */
                        urls?: {
                            /** @description The URL to use to invoke the API */
                            api?: string;
                            /** @description The URL to download the OpenAPI v3 (Swagger) description for the API generated in JSON or YAML format */
                            openapi?: string;
                            /** @description The URL to use in a web browser to access the SwaggerUI explorer/exerciser for the API */
                            ui?: string;
                        };
                    };
                };
            };
            /** @description Success */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: uuid
                         * @description The UUID of the contract API
                         */
                        id?: string;
                        /** @description Reference to the FireFly Interface definition associated with the contract API */
                        interface?: {
                            /**
                             * Format: uuid
                             * @description The UUID of the FireFly interface
                             */
                            id?: string;
                            /** @description The name of the FireFly interface */
                            name?: string;
                            /** @description The version of the FireFly interface */
                            version?: string;
                        };
                        /** @description If this API is tied to an individual instance of a smart contract, this field can include a blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                        location?: unknown;
                        /**
                         * Format: uuid
                         * @description The UUID of the broadcast message that was used to publish this API to the network
                         */
                        message?: string;
                        /** @description The name that is used in the URL to access the API */
                        name?: string;
                        /** @description The namespace of the contract API */
                        namespace?: string;
                        /** @description The published name of the API within the multiparty network */
                        networkName?: string;
                        /** @description Indicates if the API is published to other members of the multiparty network */
                        published?: boolean;
                        /** @description The URLs to use to access the API */
                        urls?: {
                            /** @description The URL to use to invoke the API */
                            api?: string;
                            /** @description The URL to download the OpenAPI v3 (Swagger) description for the API generated in JSON or YAML format */
                            openapi?: string;
                            /** @description The URL to use in a web browser to access the SwaggerUI explorer/exerciser for the API */
                            ui?: string;
                        };
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getContractAPIByName: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The name of the contract API */
                apiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: uuid
                         * @description The UUID of the contract API
                         */
                        id?: string;
                        /** @description Reference to the FireFly Interface definition associated with the contract API */
                        interface?: {
                            /**
                             * Format: uuid
                             * @description The UUID of the FireFly interface
                             */
                            id?: string;
                            /** @description The name of the FireFly interface */
                            name?: string;
                            /** @description The version of the FireFly interface */
                            version?: string;
                        };
                        /** @description If this API is tied to an individual instance of a smart contract, this field can include a blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                        location?: unknown;
                        /**
                         * Format: uuid
                         * @description The UUID of the broadcast message that was used to publish this API to the network
                         */
                        message?: string;
                        /** @description The name that is used in the URL to access the API */
                        name?: string;
                        /** @description The namespace of the contract API */
                        namespace?: string;
                        /** @description The published name of the API within the multiparty network */
                        networkName?: string;
                        /** @description Indicates if the API is published to other members of the multiparty network */
                        published?: boolean;
                        /** @description The URLs to use to access the API */
                        urls?: {
                            /** @description The URL to use to invoke the API */
                            api?: string;
                            /** @description The URL to download the OpenAPI v3 (Swagger) description for the API generated in JSON or YAML format */
                            openapi?: string;
                            /** @description The URL to use in a web browser to access the SwaggerUI explorer/exerciser for the API */
                            ui?: string;
                        };
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    putContractAPI: {
        parameters: {
            query?: {
                /** @description When true the HTTP request blocks until the message is confirmed */
                confirm?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The name of the contract API */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description Reference to the FireFly Interface definition associated with the contract API */
                    interface?: {
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly interface
                         */
                        id?: string;
                        /** @description The name of the FireFly interface */
                        name?: string;
                        /** @description The version of the FireFly interface */
                        version?: string;
                    };
                    /** @description If this API is tied to an individual instance of a smart contract, this field can include a blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                    location?: unknown;
                    /** @description The name that is used in the URL to access the API */
                    name?: string;
                    /** @description The published name of the API within the multiparty network */
                    networkName?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: uuid
                         * @description The UUID of the contract API
                         */
                        id?: string;
                        /** @description Reference to the FireFly Interface definition associated with the contract API */
                        interface?: {
                            /**
                             * Format: uuid
                             * @description The UUID of the FireFly interface
                             */
                            id?: string;
                            /** @description The name of the FireFly interface */
                            name?: string;
                            /** @description The version of the FireFly interface */
                            version?: string;
                        };
                        /** @description If this API is tied to an individual instance of a smart contract, this field can include a blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                        location?: unknown;
                        /**
                         * Format: uuid
                         * @description The UUID of the broadcast message that was used to publish this API to the network
                         */
                        message?: string;
                        /** @description The name that is used in the URL to access the API */
                        name?: string;
                        /** @description The namespace of the contract API */
                        namespace?: string;
                        /** @description The published name of the API within the multiparty network */
                        networkName?: string;
                        /** @description Indicates if the API is published to other members of the multiparty network */
                        published?: boolean;
                        /** @description The URLs to use to access the API */
                        urls?: {
                            /** @description The URL to use to invoke the API */
                            api?: string;
                            /** @description The URL to download the OpenAPI v3 (Swagger) description for the API generated in JSON or YAML format */
                            openapi?: string;
                            /** @description The URL to use in a web browser to access the SwaggerUI explorer/exerciser for the API */
                            ui?: string;
                        };
                    };
                };
            };
            /** @description Success */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: uuid
                         * @description The UUID of the contract API
                         */
                        id?: string;
                        /** @description Reference to the FireFly Interface definition associated with the contract API */
                        interface?: {
                            /**
                             * Format: uuid
                             * @description The UUID of the FireFly interface
                             */
                            id?: string;
                            /** @description The name of the FireFly interface */
                            name?: string;
                            /** @description The version of the FireFly interface */
                            version?: string;
                        };
                        /** @description If this API is tied to an individual instance of a smart contract, this field can include a blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                        location?: unknown;
                        /**
                         * Format: uuid
                         * @description The UUID of the broadcast message that was used to publish this API to the network
                         */
                        message?: string;
                        /** @description The name that is used in the URL to access the API */
                        name?: string;
                        /** @description The namespace of the contract API */
                        namespace?: string;
                        /** @description The published name of the API within the multiparty network */
                        networkName?: string;
                        /** @description Indicates if the API is published to other members of the multiparty network */
                        published?: boolean;
                        /** @description The URLs to use to access the API */
                        urls?: {
                            /** @description The URL to use to invoke the API */
                            api?: string;
                            /** @description The URL to download the OpenAPI v3 (Swagger) description for the API generated in JSON or YAML format */
                            openapi?: string;
                            /** @description The URL to use in a web browser to access the SwaggerUI explorer/exerciser for the API */
                            ui?: string;
                        };
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    deleteContractAPI: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The name of the contract API */
                apiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': unknown;
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getContractAPIInterface: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The name of the contract API */
                apiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description A description of the smart contract this FFI represents */
                        description?: string;
                        /** @description An array of smart contract error definitions */
                        errors?: {
                            /** @description A description of the smart contract error */
                            description?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI error definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this error is part of
                             */
                            interface?: string;
                            /** @description The name of the error */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of error parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this error within the FFI for use on URL paths */
                            pathname?: string;
                            /** @description The stringified signature of the error, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /** @description An array of smart contract event definitions */
                        events?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI event definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this event is part of
                             */
                            interface?: string;
                            /** @description The name of the event */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this event within the FFI for use on URL paths. Supports contracts that have multiple event overrides with the same name */
                            pathname?: string;
                            /** @description The stringified signature of the event, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly interface (FFI) smart contract definition
                         */
                        id?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the broadcast message that was used to publish this FFI to the network
                         */
                        message?: string;
                        /** @description An array of smart contract method definitions */
                        methods?: {
                            /** @description A description of the smart contract method */
                            description?: string;
                            /** @description Additional blockchain specific fields about this method from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI method definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this method is part of
                             */
                            interface?: string;
                            /** @description The name of the method */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of method parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this method within the FFI for use on URL paths. Supports contracts that have multiple method overrides with the same name */
                            pathname?: string;
                            /** @description An array of method return definitions */
                            returns?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        }[];
                        /** @description The name of the FFI - usually matching the smart contract name */
                        name?: string;
                        /** @description The namespace of the FFI */
                        namespace?: string;
                        /** @description The published name of the FFI within the multiparty network */
                        networkName?: string;
                        /** @description Indicates if the FFI is published to other members of the multiparty network */
                        published?: boolean;
                        /** @description A version for the FFI - use of semantic versioning such as 'v1.0.1' is encouraged */
                        version?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postContractAPIInvoke: {
        parameters: {
            query?: {
                /** @description When true the HTTP request blocks until the message is confirmed */
                confirm?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The name of the contract API */
                apiName: string;
                /** @description The name or uniquely generated path name of a method on a smart contract */
                methodPath: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description ContractCallRequest.data */
                    data?: {
                        [key: string]: unknown;
                    };
                    /** @description An optional identifier to allow idempotent submission of requests. Stored on the transaction uniquely within a namespace */
                    idempotencyKey?: string;
                    /** @description A map of named inputs. The name and type of each input must be compatible with the FFI description of the method, so that FireFly knows how to serialize it to the blockchain via the connector */
                    input?: {
                        [key: string]: unknown;
                    };
                    /** @description The blockchain signing key that will sign the invocation. Defaults to the first signing key of the organization that operates the node */
                    key?: string;
                    /** @description A blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                    location?: unknown;
                    /** @description You can specify a message to correlate with the invocation, which can be of type broadcast or private. Your specified method must support on-chain/off-chain correlation by taking a data input on the call */
                    message?: {
                        /** @description For input allows you to specify data in-line in the message, that will be turned into data attachments. For output when fetchdata is used on API calls, includes the in-line data payloads of all data attachments */
                        data?: {
                            /** @description The optional datatype to use for validation of the in-line data */
                            datatype?: {
                                /** @description The name of the datatype */
                                name?: string;
                                /** @description The version of the datatype. Semantic versioning is encouraged, such as v1.0.1 */
                                version?: string;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the referenced data resource
                             */
                            id?: string;
                            /** @description The data validator type to use for in-line data */
                            validator?: string;
                            /** @description The in-line value for the data. Can be any JSON type - object, array, string, number or boolean */
                            value?: unknown;
                        }[];
                        /** @description Allows you to specify details of the private group of recipients in-line in the message. Alternative to using the header.group to specify the hash of a group that has been previously resolved */
                        group?: {
                            /** @description An array of members of the group. If no identities local to the sending node are included, then the organization owner of the local node is added automatically */
                            members?: {
                                /** @description The DID of the group member. On input can be a UUID or org name, and will be resolved to a DID */
                                identity?: string;
                                /** @description The UUID of the node that will receive a copy of the off-chain message for the identity. The first applicable node for the identity will be picked automatically on input if not specified */
                                node?: string;
                            }[];
                            /** @description Optional name for the group. Allows you to have multiple separate groups with the same list of participants */
                            name?: string;
                        };
                        /** @description The message header contains all fields that are used to build the message hash */
                        header?: {
                            /** @description The DID of identity of the submitter */
                            author?: string;
                            /**
                             * Format: uuid
                             * @description The correlation ID of the message. Set this when a message is a response to another message
                             */
                            cid?: string;
                            /**
                             * Format: byte
                             * @description Private messages only - the identifier hash of the privacy group. Derived from the name and member list of the group
                             */
                            group?: string;
                            /** @description The on-chain signing key used to sign the transaction */
                            key?: string;
                            /** @description The message tag indicates the purpose of the message to the applications that process it */
                            tag?: string;
                            /** @description A message topic associates this message with an ordered stream of data. A custom topic should be assigned - using the default topic is discouraged */
                            topics?: string[];
                            /**
                             * @description The type of transaction used to order/deliver this message
                             * @enum {string}
                             */
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
                            /**
                             * @description The type of the message
                             * @enum {string}
                             */
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
                        /** @description An optional unique identifier for a message. Cannot be duplicated within a namespace, thus allowing idempotent submission of messages to the API. Local only - not transferred when the message is sent to other members of the network */
                        idempotencyKey?: string;
                    };
                    /** @description A map of named inputs that will be passed through to the blockchain connector */
                    options?: {
                        [key: string]: unknown;
                    };
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description The time the operation was created
                         */
                        created?: string;
                        /** @description Operation.data */
                        data?: {
                            [key: string]: unknown;
                        };
                        /** @description Any error reported back from the plugin for this operation */
                        error?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the operation
                         */
                        id?: string;
                        /** @description The input to this operation */
                        input?: {
                            [key: string]: unknown;
                        };
                        /** @description The namespace of the operation */
                        namespace?: string;
                        /** @description Any output reported back from the plugin for this operation */
                        output?: {
                            [key: string]: unknown;
                        };
                        /** @description The plugin responsible for performing the operation */
                        plugin?: string;
                        /**
                         * Format: uuid
                         * @description If this operation was initiated as a retry to a previous operation, this field points to the UUID of the operation being retried
                         */
                        retry?: string;
                        /** @description The current status of the operation */
                        status?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly transaction the operation is part of
                         */
                        tx?: string;
                        /**
                         * @description The type of the operation
                         * @enum {string}
                         */
                        type?: 'blockchain_invoke' | 'user_operation_send';
                        /**
                         * Format: date-time
                         * @description The last update time of the operation
                         */
                        updated?: string;
                    };
                };
            };
            /** @description Success */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description The time the operation was created
                         */
                        created?: string;
                        /** @description Operation.data */
                        data?: {
                            [key: string]: unknown;
                        };
                        /** @description Any error reported back from the plugin for this operation */
                        error?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the operation
                         */
                        id?: string;
                        /** @description The input to this operation */
                        input?: {
                            [key: string]: unknown;
                        };
                        /** @description The namespace of the operation */
                        namespace?: string;
                        /** @description Any output reported back from the plugin for this operation */
                        output?: {
                            [key: string]: unknown;
                        };
                        /** @description The plugin responsible for performing the operation */
                        plugin?: string;
                        /**
                         * Format: uuid
                         * @description If this operation was initiated as a retry to a previous operation, this field points to the UUID of the operation being retried
                         */
                        retry?: string;
                        /** @description The current status of the operation */
                        status?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly transaction the operation is part of
                         */
                        tx?: string;
                        /**
                         * @description The type of the operation
                         * @enum {string}
                         */
                        type?: 'blockchain_invoke' | 'user_operation_send';
                        /**
                         * Format: date-time
                         * @description The last update time of the operation
                         */
                        updated?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getContractAPIListeners: {
        parameters: {
            query?: {
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                backendid?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                created?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                filters?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                id?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                interface?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                location?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                name?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                signature?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                state?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                topic?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                updated?: string;
                /** @description Sort field. For multi-field sort use comma separated values (or multiple query values) with '-' prefix for descending */
                sort?: string;
                /** @description Ascending sort order (overrides all fields in a multi-field sort) */
                ascending?: string;
                /** @description Descending sort order (overrides all fields in a multi-field sort) */
                descending?: string;
                /** @description The number of records to skip (max: 1,000). Unsuitable for bulk operations */
                skip?: string;
                /** @description The maximum number of records to return (max: 1,000) */
                limit?: string;
                /** @description Return a total count as well as items (adds extra database processing) */
                count?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The name of the contract API */
                apiName: string;
                /** @description The name or uniquely generated path name of a event on a smart contract */
                eventPath: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description An ID assigned by the blockchain connector to this listener */
                        backendId?: string;
                        /**
                         * Format: date-time
                         * @description The creation time of the listener
                         */
                        created?: string;
                        /** @description Deprecated: Please use 'event' in the array of 'filters' instead */
                        event?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /** @description The name of the event */
                            name?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        };
                        /** @description A list of filters for the contract listener. Each filter is made up of an Event and an optional Location. Events matching these filters will always be emitted in the order determined by the blockchain. */
                        filters?: {
                            /** @description The definition of the event, either provided in-line when creating the listener, or extracted from the referenced FFI */
                            event?: {
                                /** @description A description of the smart contract event */
                                description?: string;
                                /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                                details?: {
                                    [key: string]: unknown;
                                };
                                /** @description The name of the event */
                                name?: string;
                                /** @description An array of event parameter/argument definitions */
                                params?: {
                                    /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                    name?: string;
                                    /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                    schema?: unknown;
                                }[];
                            };
                            /** @description A reference to an existing FFI, containing pre-registered type information for the event */
                            interface?: {
                                /**
                                 * Format: uuid
                                 * @description The UUID of the FireFly interface
                                 */
                                id?: string;
                                /** @description The name of the FireFly interface */
                                name?: string;
                                /** @description The version of the FireFly interface */
                                version?: string;
                            };
                            /** @description A blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                            location?: unknown;
                            /** @description The stringified signature of the event and location, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /**
                         * Format: uuid
                         * @description The UUID of the smart contract listener
                         */
                        id?: string;
                        /** @description Deprecated: Please use 'interface' in the array of 'filters' instead */
                        interface?: {
                            /**
                             * Format: uuid
                             * @description The UUID of the FireFly interface
                             */
                            id?: string;
                            /** @description The name of the FireFly interface */
                            name?: string;
                            /** @description The version of the FireFly interface */
                            version?: string;
                        };
                        /** @description Deprecated: Please use 'location' in the array of 'filters' instead */
                        location?: unknown;
                        /** @description A descriptive name for the listener */
                        name?: string;
                        /** @description The namespace of the listener, which defines the namespace of all blockchain events detected by this listener */
                        namespace?: string;
                        /** @description Options that control how the listener subscribes to events from the underlying blockchain */
                        options?: {
                            /** @description A blockchain specific string, such as a block number, to start listening from. The special strings 'oldest' and 'newest' are supported by all blockchain connectors. Default is 'newest' */
                            firstEvent?: string;
                        };
                        /** @description A concatenation of all the stringified signature of the event and location, as computed by the blockchain plugin */
                        signature?: string;
                        /** @description A topic to set on the FireFly event that is emitted each time a blockchain event is detected from the blockchain. Setting this topic on a number of listeners allows applications to easily subscribe to all events they need */
                        topic?: string;
                    }[];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postContractAPIListeners: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The name of the contract API */
                apiName: string;
                /** @description The name or uniquely generated path name of a event on a smart contract */
                eventPath: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description Deprecated: Please use 'event' in the array of 'filters' instead */
                    event?: {
                        /** @description A description of the smart contract event */
                        description?: string;
                        /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                        details?: {
                            [key: string]: unknown;
                        };
                        /** @description The name of the event */
                        name?: string;
                        /** @description An array of event parameter/argument definitions */
                        params?: {
                            /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                            name?: string;
                            /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                            schema?: unknown;
                        }[];
                    };
                    /** @description Deprecated: Please use 'location' in the array of 'filters' instead */
                    location?: unknown;
                    /** @description A descriptive name for the listener */
                    name?: string;
                    /** @description Options that control how the listener subscribes to events from the underlying blockchain */
                    options?: {
                        /** @description A blockchain specific string, such as a block number, to start listening from. The special strings 'oldest' and 'newest' are supported by all blockchain connectors. Default is 'newest' */
                        firstEvent?: string;
                    };
                    /** @description A topic to set on the FireFly event that is emitted each time a blockchain event is detected from the blockchain. Setting this topic on a number of listeners allows applications to easily subscribe to all events they need */
                    topic?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description An ID assigned by the blockchain connector to this listener */
                        backendId?: string;
                        /**
                         * Format: date-time
                         * @description The creation time of the listener
                         */
                        created?: string;
                        /** @description Deprecated: Please use 'event' in the array of 'filters' instead */
                        event?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /** @description The name of the event */
                            name?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        };
                        /** @description A list of filters for the contract listener. Each filter is made up of an Event and an optional Location. Events matching these filters will always be emitted in the order determined by the blockchain. */
                        filters?: {
                            /** @description The definition of the event, either provided in-line when creating the listener, or extracted from the referenced FFI */
                            event?: {
                                /** @description A description of the smart contract event */
                                description?: string;
                                /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                                details?: {
                                    [key: string]: unknown;
                                };
                                /** @description The name of the event */
                                name?: string;
                                /** @description An array of event parameter/argument definitions */
                                params?: {
                                    /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                    name?: string;
                                    /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                    schema?: unknown;
                                }[];
                            };
                            /** @description A reference to an existing FFI, containing pre-registered type information for the event */
                            interface?: {
                                /**
                                 * Format: uuid
                                 * @description The UUID of the FireFly interface
                                 */
                                id?: string;
                                /** @description The name of the FireFly interface */
                                name?: string;
                                /** @description The version of the FireFly interface */
                                version?: string;
                            };
                            /** @description A blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                            location?: unknown;
                            /** @description The stringified signature of the event and location, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /**
                         * Format: uuid
                         * @description The UUID of the smart contract listener
                         */
                        id?: string;
                        /** @description Deprecated: Please use 'interface' in the array of 'filters' instead */
                        interface?: {
                            /**
                             * Format: uuid
                             * @description The UUID of the FireFly interface
                             */
                            id?: string;
                            /** @description The name of the FireFly interface */
                            name?: string;
                            /** @description The version of the FireFly interface */
                            version?: string;
                        };
                        /** @description Deprecated: Please use 'location' in the array of 'filters' instead */
                        location?: unknown;
                        /** @description A descriptive name for the listener */
                        name?: string;
                        /** @description The namespace of the listener, which defines the namespace of all blockchain events detected by this listener */
                        namespace?: string;
                        /** @description Options that control how the listener subscribes to events from the underlying blockchain */
                        options?: {
                            /** @description A blockchain specific string, such as a block number, to start listening from. The special strings 'oldest' and 'newest' are supported by all blockchain connectors. Default is 'newest' */
                            firstEvent?: string;
                        };
                        /** @description A concatenation of all the stringified signature of the event and location, as computed by the blockchain plugin */
                        signature?: string;
                        /** @description A topic to set on the FireFly event that is emitted each time a blockchain event is detected from the blockchain. Setting this topic on a number of listeners allows applications to easily subscribe to all events they need */
                        topic?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postContractAPIPublish: {
        parameters: {
            query?: {
                /** @description When true the HTTP request blocks until the message is confirmed */
                confirm?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The name of the contract API */
                apiName: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description An optional name to be used for publishing this definition to the multiparty network, which may differ from the local name */
                    networkName?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description A description of the smart contract this FFI represents */
                        description?: string;
                        /** @description An array of smart contract error definitions */
                        errors?: {
                            /** @description A description of the smart contract error */
                            description?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI error definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this error is part of
                             */
                            interface?: string;
                            /** @description The name of the error */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of error parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this error within the FFI for use on URL paths */
                            pathname?: string;
                            /** @description The stringified signature of the error, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /** @description An array of smart contract event definitions */
                        events?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI event definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this event is part of
                             */
                            interface?: string;
                            /** @description The name of the event */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this event within the FFI for use on URL paths. Supports contracts that have multiple event overrides with the same name */
                            pathname?: string;
                            /** @description The stringified signature of the event, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly interface (FFI) smart contract definition
                         */
                        id?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the broadcast message that was used to publish this FFI to the network
                         */
                        message?: string;
                        /** @description An array of smart contract method definitions */
                        methods?: {
                            /** @description A description of the smart contract method */
                            description?: string;
                            /** @description Additional blockchain specific fields about this method from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI method definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this method is part of
                             */
                            interface?: string;
                            /** @description The name of the method */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of method parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this method within the FFI for use on URL paths. Supports contracts that have multiple method overrides with the same name */
                            pathname?: string;
                            /** @description An array of method return definitions */
                            returns?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        }[];
                        /** @description The name of the FFI - usually matching the smart contract name */
                        name?: string;
                        /** @description The namespace of the FFI */
                        namespace?: string;
                        /** @description The published name of the FFI within the multiparty network */
                        networkName?: string;
                        /** @description Indicates if the FFI is published to other members of the multiparty network */
                        published?: boolean;
                        /** @description A version for the FFI - use of semantic versioning such as 'v1.0.1' is encouraged */
                        version?: string;
                    };
                };
            };
            /** @description Success */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description A description of the smart contract this FFI represents */
                        description?: string;
                        /** @description An array of smart contract error definitions */
                        errors?: {
                            /** @description A description of the smart contract error */
                            description?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI error definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this error is part of
                             */
                            interface?: string;
                            /** @description The name of the error */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of error parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this error within the FFI for use on URL paths */
                            pathname?: string;
                            /** @description The stringified signature of the error, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /** @description An array of smart contract event definitions */
                        events?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI event definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this event is part of
                             */
                            interface?: string;
                            /** @description The name of the event */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this event within the FFI for use on URL paths. Supports contracts that have multiple event overrides with the same name */
                            pathname?: string;
                            /** @description The stringified signature of the event, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly interface (FFI) smart contract definition
                         */
                        id?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the broadcast message that was used to publish this FFI to the network
                         */
                        message?: string;
                        /** @description An array of smart contract method definitions */
                        methods?: {
                            /** @description A description of the smart contract method */
                            description?: string;
                            /** @description Additional blockchain specific fields about this method from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI method definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this method is part of
                             */
                            interface?: string;
                            /** @description The name of the method */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of method parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this method within the FFI for use on URL paths. Supports contracts that have multiple method overrides with the same name */
                            pathname?: string;
                            /** @description An array of method return definitions */
                            returns?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        }[];
                        /** @description The name of the FFI - usually matching the smart contract name */
                        name?: string;
                        /** @description The namespace of the FFI */
                        namespace?: string;
                        /** @description The published name of the FFI within the multiparty network */
                        networkName?: string;
                        /** @description Indicates if the FFI is published to other members of the multiparty network */
                        published?: boolean;
                        /** @description A version for the FFI - use of semantic versioning such as 'v1.0.1' is encouraged */
                        version?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postContractAPIQuery: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The name of the contract API */
                apiName: string;
                /** @description The name or uniquely generated path name of a method on a smart contract */
                methodPath: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description ContractCallRequest.data */
                    data?: {
                        [key: string]: unknown;
                    };
                    /** @description An optional identifier to allow idempotent submission of requests. Stored on the transaction uniquely within a namespace */
                    idempotencyKey?: string;
                    /** @description A map of named inputs. The name and type of each input must be compatible with the FFI description of the method, so that FireFly knows how to serialize it to the blockchain via the connector */
                    input?: {
                        [key: string]: unknown;
                    };
                    /** @description The blockchain signing key that will sign the invocation. Defaults to the first signing key of the organization that operates the node */
                    key?: string;
                    /** @description A blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                    location?: unknown;
                    /** @description A map of named inputs that will be passed through to the blockchain connector */
                    options?: {
                        [key: string]: unknown;
                    };
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        [key: string]: unknown;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getBlockchainEvents: {
        parameters: {
            query?: {
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                id?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                listener?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                name?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                protocolid?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                source?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                timestamp?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                'tx.blockchainid'?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                'tx.id'?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                'tx.type'?: string;
                /** @description Sort field. For multi-field sort use comma separated values (or multiple query values) with '-' prefix for descending */
                sort?: string;
                /** @description Ascending sort order (overrides all fields in a multi-field sort) */
                ascending?: string;
                /** @description Descending sort order (overrides all fields in a multi-field sort) */
                descending?: string;
                /** @description The number of records to skip (max: 1,000). Unsuitable for bulk operations */
                skip?: string;
                /** @description The maximum number of records to return (max: 1,000) */
                limit?: string;
                /** @description Return a total count as well as items (adds extra database processing) */
                count?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: uuid
                         * @description The UUID assigned to the event by FireFly
                         */
                        id?: string;
                        /** @description Detailed blockchain specific information about the event, as generated by the blockchain connector */
                        info?: {
                            [key: string]: unknown;
                        };
                        /**
                         * Format: uuid
                         * @description The UUID of the listener that detected this event, or nil for built-in events in the system namespace
                         */
                        listener?: string;
                        /** @description The name of the event in the blockchain smart contract */
                        name?: string;
                        /** @description The namespace of the listener that detected this blockchain event */
                        namespace?: string;
                        /** @description The data output by the event, parsed to JSON according to the interface of the smart contract */
                        output?: {
                            [key: string]: unknown;
                        };
                        /** @description An alphanumerically sortable string that represents this event uniquely on the blockchain (convention for plugins is zero-padded values BLOCKNUMBER/TXN_INDEX/EVENT_INDEX) */
                        protocolId?: string;
                        /** @description The blockchain plugin or token service that detected the event */
                        source?: string;
                        /**
                         * Format: date-time
                         * @description The time allocated to this event by the blockchain. This is the block timestamp for most blockchain connectors
                         */
                        timestamp?: string;
                        /** @description If this blockchain event is coorelated to FireFly transaction such as a FireFly submitted token transfer, this field is set to the UUID of the FireFly transaction */
                        tx?: {
                            /** @description The blockchain transaction ID, in the format specific to the blockchain involved in the transaction. Not all FireFly transactions include a blockchain */
                            blockchainId?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FireFly transaction
                             */
                            id?: string;
                            /** @description The type of the FireFly transaction */
                            type?: string;
                        };
                    }[];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getBlockchainEventByID: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The blockchain event ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: uuid
                         * @description The UUID assigned to the event by FireFly
                         */
                        id?: string;
                        /** @description Detailed blockchain specific information about the event, as generated by the blockchain connector */
                        info?: {
                            [key: string]: unknown;
                        };
                        /**
                         * Format: uuid
                         * @description The UUID of the listener that detected this event, or nil for built-in events in the system namespace
                         */
                        listener?: string;
                        /** @description The name of the event in the blockchain smart contract */
                        name?: string;
                        /** @description The namespace of the listener that detected this blockchain event */
                        namespace?: string;
                        /** @description The data output by the event, parsed to JSON according to the interface of the smart contract */
                        output?: {
                            [key: string]: unknown;
                        };
                        /** @description An alphanumerically sortable string that represents this event uniquely on the blockchain (convention for plugins is zero-padded values BLOCKNUMBER/TXN_INDEX/EVENT_INDEX) */
                        protocolId?: string;
                        /** @description The blockchain plugin or token service that detected the event */
                        source?: string;
                        /**
                         * Format: date-time
                         * @description The time allocated to this event by the blockchain. This is the block timestamp for most blockchain connectors
                         */
                        timestamp?: string;
                        /** @description If this blockchain event is coorelated to FireFly transaction such as a FireFly submitted token transfer, this field is set to the UUID of the FireFly transaction */
                        tx?: {
                            /** @description The blockchain transaction ID, in the format specific to the blockchain involved in the transaction. Not all FireFly transactions include a blockchain */
                            blockchainId?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FireFly transaction
                             */
                            id?: string;
                            /** @description The type of the FireFly transaction */
                            type?: string;
                        };
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getChartHistogram: {
        parameters: {
            query?: {
                /** @description Start time of the data to be fetched */
                startTime?: string;
                /** @description End time of the data to be fetched */
                endTime?: string;
                /** @description Number of buckets between start time and end time */
                buckets?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The collection ID */
                collection: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description Total count of entries in this time bucket within the histogram */
                        count?: string;
                        /** @description Indicates whether there are more results in this bucket that are not being displayed */
                        isCapped?: boolean;
                        /**
                         * Format: date-time
                         * @description Starting timestamp for the bucket
                         */
                        timestamp?: string;
                        /** @description Array of separate counts for individual types of record within the bucket */
                        types?: {
                            /** @description Count of entries of a given type within a bucket */
                            count?: string;
                            /** @description Name of the type */
                            type?: string;
                        }[];
                    }[];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getContractInterfaces: {
        parameters: {
            query?: {
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                id?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                name?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                networkname?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                published?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                version?: string;
                /** @description Sort field. For multi-field sort use comma separated values (or multiple query values) with '-' prefix for descending */
                sort?: string;
                /** @description Ascending sort order (overrides all fields in a multi-field sort) */
                ascending?: string;
                /** @description Descending sort order (overrides all fields in a multi-field sort) */
                descending?: string;
                /** @description The number of records to skip (max: 1,000). Unsuitable for bulk operations */
                skip?: string;
                /** @description The maximum number of records to return (max: 1,000) */
                limit?: string;
                /** @description Return a total count as well as items (adds extra database processing) */
                count?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description A description of the smart contract this FFI represents */
                        description?: string;
                        /** @description An array of smart contract error definitions */
                        errors?: {
                            /** @description A description of the smart contract error */
                            description?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI error definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this error is part of
                             */
                            interface?: string;
                            /** @description The name of the error */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of error parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this error within the FFI for use on URL paths */
                            pathname?: string;
                            /** @description The stringified signature of the error, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /** @description An array of smart contract event definitions */
                        events?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI event definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this event is part of
                             */
                            interface?: string;
                            /** @description The name of the event */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this event within the FFI for use on URL paths. Supports contracts that have multiple event overrides with the same name */
                            pathname?: string;
                            /** @description The stringified signature of the event, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly interface (FFI) smart contract definition
                         */
                        id?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the broadcast message that was used to publish this FFI to the network
                         */
                        message?: string;
                        /** @description An array of smart contract method definitions */
                        methods?: {
                            /** @description A description of the smart contract method */
                            description?: string;
                            /** @description Additional blockchain specific fields about this method from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI method definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this method is part of
                             */
                            interface?: string;
                            /** @description The name of the method */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of method parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this method within the FFI for use on URL paths. Supports contracts that have multiple method overrides with the same name */
                            pathname?: string;
                            /** @description An array of method return definitions */
                            returns?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        }[];
                        /** @description The name of the FFI - usually matching the smart contract name */
                        name?: string;
                        /** @description The namespace of the FFI */
                        namespace?: string;
                        /** @description The published name of the FFI within the multiparty network */
                        networkName?: string;
                        /** @description Indicates if the FFI is published to other members of the multiparty network */
                        published?: boolean;
                        /** @description A version for the FFI - use of semantic versioning such as 'v1.0.1' is encouraged */
                        version?: string;
                    }[];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postNewContractInterface: {
        parameters: {
            query?: {
                /** @description When true the HTTP request blocks until the message is confirmed */
                confirm?: string;
                /** @description When true the definition will be published to all other members of the multiparty network */
                publish?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description A description of the smart contract this FFI represents */
                    description?: string;
                    /** @description An array of smart contract error definitions */
                    errors?: {
                        /** @description A description of the smart contract error */
                        description?: string;
                        /** @description The name of the error */
                        name?: string;
                        /** @description An array of error parameter/argument definitions */
                        params?: {
                            /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                            name?: string;
                            /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                            schema?: unknown;
                        }[];
                    }[];
                    /** @description An array of smart contract event definitions */
                    events?: {
                        /** @description A description of the smart contract event */
                        description?: string;
                        /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                        details?: {
                            [key: string]: unknown;
                        };
                        /** @description The name of the event */
                        name?: string;
                        /** @description An array of event parameter/argument definitions */
                        params?: {
                            /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                            name?: string;
                            /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                            schema?: unknown;
                        }[];
                    }[];
                    /** @description An array of smart contract method definitions */
                    methods?: {
                        /** @description A description of the smart contract method */
                        description?: string;
                        /** @description Additional blockchain specific fields about this method from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                        details?: {
                            [key: string]: unknown;
                        };
                        /** @description The name of the method */
                        name?: string;
                        /** @description An array of method parameter/argument definitions */
                        params?: {
                            /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                            name?: string;
                            /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                            schema?: unknown;
                        }[];
                        /** @description An array of method return definitions */
                        returns?: {
                            /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                            name?: string;
                            /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                            schema?: unknown;
                        }[];
                    }[];
                    /** @description The name of the FFI - usually matching the smart contract name */
                    name?: string;
                    /** @description The published name of the FFI within the multiparty network */
                    networkName?: string;
                    /** @description A version for the FFI - use of semantic versioning such as 'v1.0.1' is encouraged */
                    version?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description A description of the smart contract this FFI represents */
                        description?: string;
                        /** @description An array of smart contract error definitions */
                        errors?: {
                            /** @description A description of the smart contract error */
                            description?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI error definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this error is part of
                             */
                            interface?: string;
                            /** @description The name of the error */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of error parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this error within the FFI for use on URL paths */
                            pathname?: string;
                            /** @description The stringified signature of the error, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /** @description An array of smart contract event definitions */
                        events?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI event definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this event is part of
                             */
                            interface?: string;
                            /** @description The name of the event */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this event within the FFI for use on URL paths. Supports contracts that have multiple event overrides with the same name */
                            pathname?: string;
                            /** @description The stringified signature of the event, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly interface (FFI) smart contract definition
                         */
                        id?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the broadcast message that was used to publish this FFI to the network
                         */
                        message?: string;
                        /** @description An array of smart contract method definitions */
                        methods?: {
                            /** @description A description of the smart contract method */
                            description?: string;
                            /** @description Additional blockchain specific fields about this method from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI method definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this method is part of
                             */
                            interface?: string;
                            /** @description The name of the method */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of method parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this method within the FFI for use on URL paths. Supports contracts that have multiple method overrides with the same name */
                            pathname?: string;
                            /** @description An array of method return definitions */
                            returns?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        }[];
                        /** @description The name of the FFI - usually matching the smart contract name */
                        name?: string;
                        /** @description The namespace of the FFI */
                        namespace?: string;
                        /** @description The published name of the FFI within the multiparty network */
                        networkName?: string;
                        /** @description Indicates if the FFI is published to other members of the multiparty network */
                        published?: boolean;
                        /** @description A version for the FFI - use of semantic versioning such as 'v1.0.1' is encouraged */
                        version?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getContractInterface: {
        parameters: {
            query?: {
                /** @description When set, the API will return the full FireFly Interface document including all methods, events, and parameters */
                fetchchildren?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The ID of the contract interface */
                interfaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description A description of the smart contract this FFI represents */
                        description?: string;
                        /** @description An array of smart contract error definitions */
                        errors?: {
                            /** @description A description of the smart contract error */
                            description?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI error definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this error is part of
                             */
                            interface?: string;
                            /** @description The name of the error */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of error parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this error within the FFI for use on URL paths */
                            pathname?: string;
                            /** @description The stringified signature of the error, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /** @description An array of smart contract event definitions */
                        events?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI event definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this event is part of
                             */
                            interface?: string;
                            /** @description The name of the event */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this event within the FFI for use on URL paths. Supports contracts that have multiple event overrides with the same name */
                            pathname?: string;
                            /** @description The stringified signature of the event, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly interface (FFI) smart contract definition
                         */
                        id?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the broadcast message that was used to publish this FFI to the network
                         */
                        message?: string;
                        /** @description An array of smart contract method definitions */
                        methods?: {
                            /** @description A description of the smart contract method */
                            description?: string;
                            /** @description Additional blockchain specific fields about this method from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI method definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this method is part of
                             */
                            interface?: string;
                            /** @description The name of the method */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of method parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this method within the FFI for use on URL paths. Supports contracts that have multiple method overrides with the same name */
                            pathname?: string;
                            /** @description An array of method return definitions */
                            returns?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        }[];
                        /** @description The name of the FFI - usually matching the smart contract name */
                        name?: string;
                        /** @description The namespace of the FFI */
                        namespace?: string;
                        /** @description The published name of the FFI within the multiparty network */
                        networkName?: string;
                        /** @description Indicates if the FFI is published to other members of the multiparty network */
                        published?: boolean;
                        /** @description A version for the FFI - use of semantic versioning such as 'v1.0.1' is encouraged */
                        version?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    deleteContractInterface: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The ID of the contract interface */
                interfaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': unknown;
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getContractInterfaceByNameAndVersion: {
        parameters: {
            query?: {
                /** @description When set, the API will return the full FireFly Interface document including all methods, events, and parameters */
                fetchchildren?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The name of the contract interface */
                name: string;
                /** @description The version of the contract interface */
                version: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description A description of the smart contract this FFI represents */
                        description?: string;
                        /** @description An array of smart contract error definitions */
                        errors?: {
                            /** @description A description of the smart contract error */
                            description?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI error definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this error is part of
                             */
                            interface?: string;
                            /** @description The name of the error */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of error parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this error within the FFI for use on URL paths */
                            pathname?: string;
                            /** @description The stringified signature of the error, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /** @description An array of smart contract event definitions */
                        events?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI event definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this event is part of
                             */
                            interface?: string;
                            /** @description The name of the event */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this event within the FFI for use on URL paths. Supports contracts that have multiple event overrides with the same name */
                            pathname?: string;
                            /** @description The stringified signature of the event, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly interface (FFI) smart contract definition
                         */
                        id?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the broadcast message that was used to publish this FFI to the network
                         */
                        message?: string;
                        /** @description An array of smart contract method definitions */
                        methods?: {
                            /** @description A description of the smart contract method */
                            description?: string;
                            /** @description Additional blockchain specific fields about this method from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI method definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this method is part of
                             */
                            interface?: string;
                            /** @description The name of the method */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of method parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this method within the FFI for use on URL paths. Supports contracts that have multiple method overrides with the same name */
                            pathname?: string;
                            /** @description An array of method return definitions */
                            returns?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        }[];
                        /** @description The name of the FFI - usually matching the smart contract name */
                        name?: string;
                        /** @description The namespace of the FFI */
                        namespace?: string;
                        /** @description The published name of the FFI within the multiparty network */
                        networkName?: string;
                        /** @description Indicates if the FFI is published to other members of the multiparty network */
                        published?: boolean;
                        /** @description A version for the FFI - use of semantic versioning such as 'v1.0.1' is encouraged */
                        version?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postContractInterfacePublish: {
        parameters: {
            query?: {
                /** @description When true the HTTP request blocks until the message is confirmed */
                confirm?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The name of the contract interface */
                name: string;
                /** @description The version of the contract interface */
                version: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description An optional name to be used for publishing this definition to the multiparty network, which may differ from the local name */
                    networkName?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description A description of the smart contract this FFI represents */
                        description?: string;
                        /** @description An array of smart contract error definitions */
                        errors?: {
                            /** @description A description of the smart contract error */
                            description?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI error definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this error is part of
                             */
                            interface?: string;
                            /** @description The name of the error */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of error parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this error within the FFI for use on URL paths */
                            pathname?: string;
                            /** @description The stringified signature of the error, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /** @description An array of smart contract event definitions */
                        events?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI event definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this event is part of
                             */
                            interface?: string;
                            /** @description The name of the event */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this event within the FFI for use on URL paths. Supports contracts that have multiple event overrides with the same name */
                            pathname?: string;
                            /** @description The stringified signature of the event, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly interface (FFI) smart contract definition
                         */
                        id?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the broadcast message that was used to publish this FFI to the network
                         */
                        message?: string;
                        /** @description An array of smart contract method definitions */
                        methods?: {
                            /** @description A description of the smart contract method */
                            description?: string;
                            /** @description Additional blockchain specific fields about this method from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI method definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this method is part of
                             */
                            interface?: string;
                            /** @description The name of the method */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of method parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this method within the FFI for use on URL paths. Supports contracts that have multiple method overrides with the same name */
                            pathname?: string;
                            /** @description An array of method return definitions */
                            returns?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        }[];
                        /** @description The name of the FFI - usually matching the smart contract name */
                        name?: string;
                        /** @description The namespace of the FFI */
                        namespace?: string;
                        /** @description The published name of the FFI within the multiparty network */
                        networkName?: string;
                        /** @description Indicates if the FFI is published to other members of the multiparty network */
                        published?: boolean;
                        /** @description A version for the FFI - use of semantic versioning such as 'v1.0.1' is encouraged */
                        version?: string;
                    };
                };
            };
            /** @description Success */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description A description of the smart contract this FFI represents */
                        description?: string;
                        /** @description An array of smart contract error definitions */
                        errors?: {
                            /** @description A description of the smart contract error */
                            description?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI error definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this error is part of
                             */
                            interface?: string;
                            /** @description The name of the error */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of error parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this error within the FFI for use on URL paths */
                            pathname?: string;
                            /** @description The stringified signature of the error, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /** @description An array of smart contract event definitions */
                        events?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI event definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this event is part of
                             */
                            interface?: string;
                            /** @description The name of the event */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this event within the FFI for use on URL paths. Supports contracts that have multiple event overrides with the same name */
                            pathname?: string;
                            /** @description The stringified signature of the event, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly interface (FFI) smart contract definition
                         */
                        id?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the broadcast message that was used to publish this FFI to the network
                         */
                        message?: string;
                        /** @description An array of smart contract method definitions */
                        methods?: {
                            /** @description A description of the smart contract method */
                            description?: string;
                            /** @description Additional blockchain specific fields about this method from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI method definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this method is part of
                             */
                            interface?: string;
                            /** @description The name of the method */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of method parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this method within the FFI for use on URL paths. Supports contracts that have multiple method overrides with the same name */
                            pathname?: string;
                            /** @description An array of method return definitions */
                            returns?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        }[];
                        /** @description The name of the FFI - usually matching the smart contract name */
                        name?: string;
                        /** @description The namespace of the FFI */
                        namespace?: string;
                        /** @description The published name of the FFI within the multiparty network */
                        networkName?: string;
                        /** @description Indicates if the FFI is published to other members of the multiparty network */
                        published?: boolean;
                        /** @description A version for the FFI - use of semantic versioning such as 'v1.0.1' is encouraged */
                        version?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postGenerateContractInterface: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description The description of the FFI to be generated. Defaults to the description extracted by the blockchain specific converter utility */
                    description?: string;
                    /** @description A blockchain connector specific payload. For example in Ethereum this is a JSON structure containing an 'abi' array, and optionally a 'devdocs' array. */
                    input?: unknown;
                    /** @description The name of the FFI to generate */
                    name?: string;
                    /** @description The namespace into which the FFI will be generated */
                    namespace?: string;
                    /** @description The version of the FFI to generate */
                    version?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description A description of the smart contract this FFI represents */
                        description?: string;
                        /** @description An array of smart contract error definitions */
                        errors?: {
                            /** @description A description of the smart contract error */
                            description?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI error definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this error is part of
                             */
                            interface?: string;
                            /** @description The name of the error */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of error parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this error within the FFI for use on URL paths */
                            pathname?: string;
                            /** @description The stringified signature of the error, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /** @description An array of smart contract event definitions */
                        events?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI event definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this event is part of
                             */
                            interface?: string;
                            /** @description The name of the event */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this event within the FFI for use on URL paths. Supports contracts that have multiple event overrides with the same name */
                            pathname?: string;
                            /** @description The stringified signature of the event, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly interface (FFI) smart contract definition
                         */
                        id?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the broadcast message that was used to publish this FFI to the network
                         */
                        message?: string;
                        /** @description An array of smart contract method definitions */
                        methods?: {
                            /** @description A description of the smart contract method */
                            description?: string;
                            /** @description Additional blockchain specific fields about this method from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI method definition
                             */
                            id?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FFI smart contract definition that this method is part of
                             */
                            interface?: string;
                            /** @description The name of the method */
                            name?: string;
                            /** @description The namespace of the FFI */
                            namespace?: string;
                            /** @description An array of method parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                            /** @description The unique name allocated to this method within the FFI for use on URL paths. Supports contracts that have multiple method overrides with the same name */
                            pathname?: string;
                            /** @description An array of method return definitions */
                            returns?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        }[];
                        /** @description The name of the FFI - usually matching the smart contract name */
                        name?: string;
                        /** @description The namespace of the FFI */
                        namespace?: string;
                        /** @description The published name of the FFI within the multiparty network */
                        networkName?: string;
                        /** @description Indicates if the FFI is published to other members of the multiparty network */
                        published?: boolean;
                        /** @description A version for the FFI - use of semantic versioning such as 'v1.0.1' is encouraged */
                        version?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postContractInvoke: {
        parameters: {
            query?: {
                /** @description When true the HTTP request blocks until the blockchain transaction is confirmed */
                confirm?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description ContractCallRequest.data */
                    data?: {
                        [key: string]: unknown;
                    };
                    /** @description An in-line FFI errors definition for the method to invoke. Alternative to specifying FFI */
                    errors?: {
                        /** @description A description of the smart contract error */
                        description?: string;
                        /** @description The name of the error */
                        name?: string;
                        /** @description An array of error parameter/argument definitions */
                        params?: {
                            /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                            name?: string;
                            /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                            schema?: unknown;
                        }[];
                    }[];
                    /** @description An optional identifier to allow idempotent submission of requests. Stored on the transaction uniquely within a namespace */
                    idempotencyKey?: string;
                    /** @description A map of named inputs. The name and type of each input must be compatible with the FFI description of the method, so that FireFly knows how to serialize it to the blockchain via the connector */
                    input?: {
                        [key: string]: unknown;
                    };
                    /**
                     * Format: uuid
                     * @description The UUID of a method within a pre-configured FireFly interface (FFI) definition for a smart contract. Required if the 'method' is omitted. Also see Contract APIs as a way to configure a dedicated API for your FFI, including all methods and an OpenAPI/Swagger interface
                     */
                    interface?: string;
                    /** @description The blockchain signing key that will sign the invocation. Defaults to the first signing key of the organization that operates the node */
                    key?: string;
                    /** @description A blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                    location?: unknown;
                    /** @description You can specify a message to correlate with the invocation, which can be of type broadcast or private. Your specified method must support on-chain/off-chain correlation by taking a data input on the call */
                    message?: {
                        /** @description For input allows you to specify data in-line in the message, that will be turned into data attachments. For output when fetchdata is used on API calls, includes the in-line data payloads of all data attachments */
                        data?: {
                            /** @description The optional datatype to use for validation of the in-line data */
                            datatype?: {
                                /** @description The name of the datatype */
                                name?: string;
                                /** @description The version of the datatype. Semantic versioning is encouraged, such as v1.0.1 */
                                version?: string;
                            };
                            /**
                             * Format: uuid
                             * @description The UUID of the referenced data resource
                             */
                            id?: string;
                            /** @description The data validator type to use for in-line data */
                            validator?: string;
                            /** @description The in-line value for the data. Can be any JSON type - object, array, string, number or boolean */
                            value?: unknown;
                        }[];
                        /** @description Allows you to specify details of the private group of recipients in-line in the message. Alternative to using the header.group to specify the hash of a group that has been previously resolved */
                        group?: {
                            /** @description An array of members of the group. If no identities local to the sending node are included, then the organization owner of the local node is added automatically */
                            members?: {
                                /** @description The DID of the group member. On input can be a UUID or org name, and will be resolved to a DID */
                                identity?: string;
                                /** @description The UUID of the node that will receive a copy of the off-chain message for the identity. The first applicable node for the identity will be picked automatically on input if not specified */
                                node?: string;
                            }[];
                            /** @description Optional name for the group. Allows you to have multiple separate groups with the same list of participants */
                            name?: string;
                        };
                        /** @description The message header contains all fields that are used to build the message hash */
                        header?: {
                            /** @description The DID of identity of the submitter */
                            author?: string;
                            /**
                             * Format: uuid
                             * @description The correlation ID of the message. Set this when a message is a response to another message
                             */
                            cid?: string;
                            /**
                             * Format: byte
                             * @description Private messages only - the identifier hash of the privacy group. Derived from the name and member list of the group
                             */
                            group?: string;
                            /** @description The on-chain signing key used to sign the transaction */
                            key?: string;
                            /** @description The message tag indicates the purpose of the message to the applications that process it */
                            tag?: string;
                            /** @description A message topic associates this message with an ordered stream of data. A custom topic should be assigned - using the default topic is discouraged */
                            topics?: string[];
                            /**
                             * @description The type of transaction used to order/deliver this message
                             * @enum {string}
                             */
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
                            /**
                             * @description The type of the message
                             * @enum {string}
                             */
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
                        /** @description An optional unique identifier for a message. Cannot be duplicated within a namespace, thus allowing idempotent submission of messages to the API. Local only - not transferred when the message is sent to other members of the network */
                        idempotencyKey?: string;
                    };
                    /** @description An in-line FFI method definition for the method to invoke. Required when FFI is not specified */
                    method?: {
                        /** @description A description of the smart contract method */
                        description?: string;
                        /** @description Additional blockchain specific fields about this method from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                        details?: {
                            [key: string]: unknown;
                        };
                        /** @description The name of the method */
                        name?: string;
                        /** @description An array of method parameter/argument definitions */
                        params?: {
                            /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                            name?: string;
                            /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                            schema?: unknown;
                        }[];
                        /** @description An array of method return definitions */
                        returns?: {
                            /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                            name?: string;
                            /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                            schema?: unknown;
                        }[];
                    };
                    /** @description The pathname of the method on the specified FFI */
                    methodPath?: string;
                    /** @description A map of named inputs that will be passed through to the blockchain connector */
                    options?: {
                        [key: string]: unknown;
                    };
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description The time the operation was created
                         */
                        created?: string;
                        /** @description Operation.data */
                        data?: {
                            [key: string]: unknown;
                        };
                        /** @description Any error reported back from the plugin for this operation */
                        error?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the operation
                         */
                        id?: string;
                        /** @description The input to this operation */
                        input?: {
                            [key: string]: unknown;
                        };
                        /** @description The namespace of the operation */
                        namespace?: string;
                        /** @description Any output reported back from the plugin for this operation */
                        output?: {
                            [key: string]: unknown;
                        };
                        /** @description The plugin responsible for performing the operation */
                        plugin?: string;
                        /**
                         * Format: uuid
                         * @description If this operation was initiated as a retry to a previous operation, this field points to the UUID of the operation being retried
                         */
                        retry?: string;
                        /** @description The current status of the operation */
                        status?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly transaction the operation is part of
                         */
                        tx?: string;
                        /**
                         * @description The type of the operation
                         * @enum {string}
                         */
                        type?: 'blockchain_invoke' | 'user_operation_send';
                        /**
                         * Format: date-time
                         * @description The last update time of the operation
                         */
                        updated?: string;
                    };
                };
            };
            /** @description Success */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description The time the operation was created
                         */
                        created?: string;
                        /** @description Operation.data */
                        data?: {
                            [key: string]: unknown;
                        };
                        /** @description Any error reported back from the plugin for this operation */
                        error?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the operation
                         */
                        id?: string;
                        /** @description The input to this operation */
                        input?: {
                            [key: string]: unknown;
                        };
                        /** @description The namespace of the operation */
                        namespace?: string;
                        /** @description Any output reported back from the plugin for this operation */
                        output?: {
                            [key: string]: unknown;
                        };
                        /** @description The plugin responsible for performing the operation */
                        plugin?: string;
                        /**
                         * Format: uuid
                         * @description If this operation was initiated as a retry to a previous operation, this field points to the UUID of the operation being retried
                         */
                        retry?: string;
                        /** @description The current status of the operation */
                        status?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly transaction the operation is part of
                         */
                        tx?: string;
                        /**
                         * @description The type of the operation
                         * @enum {string}
                         */
                        type?: 'blockchain_invoke' | 'user_operation_send';
                        /**
                         * Format: date-time
                         * @description The last update time of the operation
                         */
                        updated?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getContractListeners: {
        parameters: {
            query?: {
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                backendid?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                created?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                filters?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                id?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                interface?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                location?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                name?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                signature?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                state?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                topic?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                updated?: string;
                /** @description Sort field. For multi-field sort use comma separated values (or multiple query values) with '-' prefix for descending */
                sort?: string;
                /** @description Ascending sort order (overrides all fields in a multi-field sort) */
                ascending?: string;
                /** @description Descending sort order (overrides all fields in a multi-field sort) */
                descending?: string;
                /** @description The number of records to skip (max: 1,000). Unsuitable for bulk operations */
                skip?: string;
                /** @description The maximum number of records to return (max: 1,000) */
                limit?: string;
                /** @description Return a total count as well as items (adds extra database processing) */
                count?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description An ID assigned by the blockchain connector to this listener */
                        backendId?: string;
                        /**
                         * Format: date-time
                         * @description The creation time of the listener
                         */
                        created?: string;
                        /** @description Deprecated: Please use 'event' in the array of 'filters' instead */
                        event?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /** @description The name of the event */
                            name?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        };
                        /** @description A list of filters for the contract listener. Each filter is made up of an Event and an optional Location. Events matching these filters will always be emitted in the order determined by the blockchain. */
                        filters?: {
                            /** @description The definition of the event, either provided in-line when creating the listener, or extracted from the referenced FFI */
                            event?: {
                                /** @description A description of the smart contract event */
                                description?: string;
                                /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                                details?: {
                                    [key: string]: unknown;
                                };
                                /** @description The name of the event */
                                name?: string;
                                /** @description An array of event parameter/argument definitions */
                                params?: {
                                    /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                    name?: string;
                                    /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                    schema?: unknown;
                                }[];
                            };
                            /** @description A reference to an existing FFI, containing pre-registered type information for the event */
                            interface?: {
                                /**
                                 * Format: uuid
                                 * @description The UUID of the FireFly interface
                                 */
                                id?: string;
                                /** @description The name of the FireFly interface */
                                name?: string;
                                /** @description The version of the FireFly interface */
                                version?: string;
                            };
                            /** @description A blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                            location?: unknown;
                            /** @description The stringified signature of the event and location, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /**
                         * Format: uuid
                         * @description The UUID of the smart contract listener
                         */
                        id?: string;
                        /** @description Deprecated: Please use 'interface' in the array of 'filters' instead */
                        interface?: {
                            /**
                             * Format: uuid
                             * @description The UUID of the FireFly interface
                             */
                            id?: string;
                            /** @description The name of the FireFly interface */
                            name?: string;
                            /** @description The version of the FireFly interface */
                            version?: string;
                        };
                        /** @description Deprecated: Please use 'location' in the array of 'filters' instead */
                        location?: unknown;
                        /** @description A descriptive name for the listener */
                        name?: string;
                        /** @description The namespace of the listener, which defines the namespace of all blockchain events detected by this listener */
                        namespace?: string;
                        /** @description Options that control how the listener subscribes to events from the underlying blockchain */
                        options?: {
                            /** @description A blockchain specific string, such as a block number, to start listening from. The special strings 'oldest' and 'newest' are supported by all blockchain connectors. Default is 'newest' */
                            firstEvent?: string;
                        };
                        /** @description A concatenation of all the stringified signature of the event and location, as computed by the blockchain plugin */
                        signature?: string;
                        /** @description A topic to set on the FireFly event that is emitted each time a blockchain event is detected from the blockchain. Setting this topic on a number of listeners allows applications to easily subscribe to all events they need */
                        topic?: string;
                    }[];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postNewContractListener: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description Deprecated: Please use 'event' in the array of 'filters' instead */
                    event?: {
                        /** @description A description of the smart contract event */
                        description?: string;
                        /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                        details?: {
                            [key: string]: unknown;
                        };
                        /** @description The name of the event */
                        name?: string;
                        /** @description An array of event parameter/argument definitions */
                        params?: {
                            /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                            name?: string;
                            /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                            schema?: unknown;
                        }[];
                    };
                    /** @description Deprecated: Please use 'eventPath' in the array of 'filters' instead */
                    eventPath?: string;
                    /** @description A list of filters for the contract listener. Each filter is made up of an Event and an optional Location. Events matching these filters will always be emitted in the order determined by the blockchain. */
                    filters?: {
                        /** @description The definition of the event, either provided in-line when creating the listener, or extracted from the referenced FFI */
                        event?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /** @description The name of the event */
                            name?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        };
                        /** @description When creating a listener from an existing FFI, this is the pathname of the event on that FFI to be detected by this listener */
                        eventPath?: string;
                        /** @description A reference to an existing FFI, containing pre-registered type information for the event */
                        interface?: {
                            /**
                             * Format: uuid
                             * @description The UUID of the FireFly interface
                             */
                            id?: string;
                            /** @description The name of the FireFly interface */
                            name?: string;
                            /** @description The version of the FireFly interface */
                            version?: string;
                        };
                        /** @description A blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                        location?: unknown;
                    }[];
                    /** @description Deprecated: Please use 'interface' in the array of 'filters' instead */
                    interface?: {
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly interface
                         */
                        id?: string;
                        /** @description The name of the FireFly interface */
                        name?: string;
                        /** @description The version of the FireFly interface */
                        version?: string;
                    };
                    /** @description Deprecated: Please use 'location' in the array of 'filters' instead */
                    location?: unknown;
                    /** @description A descriptive name for the listener */
                    name?: string;
                    /** @description Options that control how the listener subscribes to events from the underlying blockchain */
                    options?: {
                        /** @description A blockchain specific string, such as a block number, to start listening from. The special strings 'oldest' and 'newest' are supported by all blockchain connectors. Default is 'newest' */
                        firstEvent?: string;
                    };
                    /** @description A topic to set on the FireFly event that is emitted each time a blockchain event is detected from the blockchain. Setting this topic on a number of listeners allows applications to easily subscribe to all events they need */
                    topic?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description An ID assigned by the blockchain connector to this listener */
                        backendId?: string;
                        /**
                         * Format: date-time
                         * @description The creation time of the listener
                         */
                        created?: string;
                        /** @description Deprecated: Please use 'event' in the array of 'filters' instead */
                        event?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /** @description The name of the event */
                            name?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        };
                        /** @description A list of filters for the contract listener. Each filter is made up of an Event and an optional Location. Events matching these filters will always be emitted in the order determined by the blockchain. */
                        filters?: {
                            /** @description The definition of the event, either provided in-line when creating the listener, or extracted from the referenced FFI */
                            event?: {
                                /** @description A description of the smart contract event */
                                description?: string;
                                /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                                details?: {
                                    [key: string]: unknown;
                                };
                                /** @description The name of the event */
                                name?: string;
                                /** @description An array of event parameter/argument definitions */
                                params?: {
                                    /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                    name?: string;
                                    /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                    schema?: unknown;
                                }[];
                            };
                            /** @description A reference to an existing FFI, containing pre-registered type information for the event */
                            interface?: {
                                /**
                                 * Format: uuid
                                 * @description The UUID of the FireFly interface
                                 */
                                id?: string;
                                /** @description The name of the FireFly interface */
                                name?: string;
                                /** @description The version of the FireFly interface */
                                version?: string;
                            };
                            /** @description A blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                            location?: unknown;
                            /** @description The stringified signature of the event and location, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /**
                         * Format: uuid
                         * @description The UUID of the smart contract listener
                         */
                        id?: string;
                        /** @description Deprecated: Please use 'interface' in the array of 'filters' instead */
                        interface?: {
                            /**
                             * Format: uuid
                             * @description The UUID of the FireFly interface
                             */
                            id?: string;
                            /** @description The name of the FireFly interface */
                            name?: string;
                            /** @description The version of the FireFly interface */
                            version?: string;
                        };
                        /** @description Deprecated: Please use 'location' in the array of 'filters' instead */
                        location?: unknown;
                        /** @description A descriptive name for the listener */
                        name?: string;
                        /** @description The namespace of the listener, which defines the namespace of all blockchain events detected by this listener */
                        namespace?: string;
                        /** @description Options that control how the listener subscribes to events from the underlying blockchain */
                        options?: {
                            /** @description A blockchain specific string, such as a block number, to start listening from. The special strings 'oldest' and 'newest' are supported by all blockchain connectors. Default is 'newest' */
                            firstEvent?: string;
                        };
                        /** @description A concatenation of all the stringified signature of the event and location, as computed by the blockchain plugin */
                        signature?: string;
                        /** @description A topic to set on the FireFly event that is emitted each time a blockchain event is detected from the blockchain. Setting this topic on a number of listeners allows applications to easily subscribe to all events they need */
                        topic?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getContractListenerByNameOrID: {
        parameters: {
            query?: {
                /** @description When set, the API will return additional status information if available */
                fetchstatus?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The contract listener name or ID */
                nameOrId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description An ID assigned by the blockchain connector to this listener */
                        backendId?: string;
                        /**
                         * Format: date-time
                         * @description The creation time of the listener
                         */
                        created?: string;
                        /** @description Deprecated: Please use 'event' in the array of 'filters' instead */
                        event?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /** @description The name of the event */
                            name?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        };
                        /** @description A list of filters for the contract listener. Each filter is made up of an Event and an optional Location. Events matching these filters will always be emitted in the order determined by the blockchain. */
                        filters?: {
                            /** @description The definition of the event, either provided in-line when creating the listener, or extracted from the referenced FFI */
                            event?: {
                                /** @description A description of the smart contract event */
                                description?: string;
                                /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                                details?: {
                                    [key: string]: unknown;
                                };
                                /** @description The name of the event */
                                name?: string;
                                /** @description An array of event parameter/argument definitions */
                                params?: {
                                    /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                    name?: string;
                                    /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                    schema?: unknown;
                                }[];
                            };
                            /** @description A reference to an existing FFI, containing pre-registered type information for the event */
                            interface?: {
                                /**
                                 * Format: uuid
                                 * @description The UUID of the FireFly interface
                                 */
                                id?: string;
                                /** @description The name of the FireFly interface */
                                name?: string;
                                /** @description The version of the FireFly interface */
                                version?: string;
                            };
                            /** @description A blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                            location?: unknown;
                            /** @description The stringified signature of the event and location, as computed by the blockchain plugin */
                            signature?: string;
                        }[];
                        /**
                         * Format: uuid
                         * @description The UUID of the smart contract listener
                         */
                        id?: string;
                        /** @description Deprecated: Please use 'interface' in the array of 'filters' instead */
                        interface?: {
                            /**
                             * Format: uuid
                             * @description The UUID of the FireFly interface
                             */
                            id?: string;
                            /** @description The name of the FireFly interface */
                            name?: string;
                            /** @description The version of the FireFly interface */
                            version?: string;
                        };
                        /** @description Deprecated: Please use 'location' in the array of 'filters' instead */
                        location?: unknown;
                        /** @description A descriptive name for the listener */
                        name?: string;
                        /** @description The namespace of the listener, which defines the namespace of all blockchain events detected by this listener */
                        namespace?: string;
                        /** @description Options that control how the listener subscribes to events from the underlying blockchain */
                        options?: {
                            /** @description A blockchain specific string, such as a block number, to start listening from. The special strings 'oldest' and 'newest' are supported by all blockchain connectors. Default is 'newest' */
                            firstEvent?: string;
                        };
                        /** @description A concatenation of all the stringified signature of the event and location, as computed by the blockchain plugin */
                        signature?: string;
                        /** @description A topic to set on the FireFly event that is emitted each time a blockchain event is detected from the blockchain. Setting this topic on a number of listeners allows applications to easily subscribe to all events they need */
                        topic?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    deleteContractListener: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The contract listener name or ID */
                nameOrId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': unknown;
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postContractListenerSignature: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description Deprecated: Please use 'event' in the array of 'filters' instead */
                    event?: {
                        /** @description A description of the smart contract event */
                        description?: string;
                        /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                        details?: {
                            [key: string]: unknown;
                        };
                        /** @description The name of the event */
                        name?: string;
                        /** @description An array of event parameter/argument definitions */
                        params?: {
                            /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                            name?: string;
                            /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                            schema?: unknown;
                        }[];
                    };
                    /** @description Deprecated: Please use 'eventPath' in the array of 'filters' instead */
                    eventPath?: string;
                    /** @description A list of filters for the contract listener. Each filter is made up of an Event and an optional Location. Events matching these filters will always be emitted in the order determined by the blockchain. */
                    filters?: {
                        /** @description The definition of the event, either provided in-line when creating the listener, or extracted from the referenced FFI */
                        event?: {
                            /** @description A description of the smart contract event */
                            description?: string;
                            /** @description Additional blockchain specific fields about this event from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                            details?: {
                                [key: string]: unknown;
                            };
                            /** @description The name of the event */
                            name?: string;
                            /** @description An array of event parameter/argument definitions */
                            params?: {
                                /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                                name?: string;
                                /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                                schema?: unknown;
                            }[];
                        };
                        /** @description When creating a listener from an existing FFI, this is the pathname of the event on that FFI to be detected by this listener */
                        eventPath?: string;
                        /** @description A reference to an existing FFI, containing pre-registered type information for the event */
                        interface?: {
                            /**
                             * Format: uuid
                             * @description The UUID of the FireFly interface
                             */
                            id?: string;
                            /** @description The name of the FireFly interface */
                            name?: string;
                            /** @description The version of the FireFly interface */
                            version?: string;
                        };
                        /** @description A blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                        location?: unknown;
                    }[];
                    /** @description Deprecated: Please use 'interface' in the array of 'filters' instead */
                    interface?: {
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly interface
                         */
                        id?: string;
                        /** @description The name of the FireFly interface */
                        name?: string;
                        /** @description The version of the FireFly interface */
                        version?: string;
                    };
                    /** @description Deprecated: Please use 'location' in the array of 'filters' instead */
                    location?: unknown;
                    /** @description A descriptive name for the listener */
                    name?: string;
                    /** @description Options that control how the listener subscribes to events from the underlying blockchain */
                    options?: {
                        /** @description A blockchain specific string, such as a block number, to start listening from. The special strings 'oldest' and 'newest' are supported by all blockchain connectors. Default is 'newest' */
                        firstEvent?: string;
                    };
                    /** @description A topic to set on the FireFly event that is emitted each time a blockchain event is detected from the blockchain. Setting this topic on a number of listeners allows applications to easily subscribe to all events they need */
                    topic?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description A concatenation of all the stringified signature of the event and location, as computed by the blockchain plugin */
                        signature?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postContractQuery: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description ContractCallRequest.data */
                    data?: {
                        [key: string]: unknown;
                    };
                    /** @description An in-line FFI errors definition for the method to invoke. Alternative to specifying FFI */
                    errors?: {
                        /** @description A description of the smart contract error */
                        description?: string;
                        /** @description The name of the error */
                        name?: string;
                        /** @description An array of error parameter/argument definitions */
                        params?: {
                            /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                            name?: string;
                            /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                            schema?: unknown;
                        }[];
                    }[];
                    /** @description An optional identifier to allow idempotent submission of requests. Stored on the transaction uniquely within a namespace */
                    idempotencyKey?: string;
                    /** @description A map of named inputs. The name and type of each input must be compatible with the FFI description of the method, so that FireFly knows how to serialize it to the blockchain via the connector */
                    input?: {
                        [key: string]: unknown;
                    };
                    /**
                     * Format: uuid
                     * @description The UUID of a method within a pre-configured FireFly interface (FFI) definition for a smart contract. Required if the 'method' is omitted. Also see Contract APIs as a way to configure a dedicated API for your FFI, including all methods and an OpenAPI/Swagger interface
                     */
                    interface?: string;
                    /** @description The blockchain signing key that will sign the invocation. Defaults to the first signing key of the organization that operates the node */
                    key?: string;
                    /** @description A blockchain specific contract identifier. For example an Ethereum contract address, or a Fabric chaincode name and channel */
                    location?: unknown;
                    /** @description An in-line FFI method definition for the method to invoke. Required when FFI is not specified */
                    method?: {
                        /** @description A description of the smart contract method */
                        description?: string;
                        /** @description Additional blockchain specific fields about this method from the original smart contract. Used by the blockchain plugin and for documentation generation. */
                        details?: {
                            [key: string]: unknown;
                        };
                        /** @description The name of the method */
                        name?: string;
                        /** @description An array of method parameter/argument definitions */
                        params?: {
                            /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                            name?: string;
                            /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                            schema?: unknown;
                        }[];
                        /** @description An array of method return definitions */
                        returns?: {
                            /** @description The name of the parameter. Note that parameters must be ordered correctly on the FFI, according to the order in the blockchain smart contract */
                            name?: string;
                            /** @description FireFly uses an extended subset of JSON Schema to describe parameters, similar to OpenAPI/Swagger. Converters are available for native blockchain interface definitions / type systems - such as an Ethereum ABI. See the documentation for more detail */
                            schema?: unknown;
                        }[];
                    };
                    /** @description The pathname of the method on the specified FFI */
                    methodPath?: string;
                    /** @description A map of named inputs that will be passed through to the blockchain connector */
                    options?: {
                        [key: string]: unknown;
                    };
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        [key: string]: unknown;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getEvents: {
        parameters: {
            query?: {
                /** @description When set, the API will return the record that this item references in its 'reference' field */
                fetchreference?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                correlator?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                created?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                id?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                reference?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                sequence?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                topic?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                tx?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                type?: string;
                /** @description Sort field. For multi-field sort use comma separated values (or multiple query values) with '-' prefix for descending */
                sort?: string;
                /** @description Ascending sort order (overrides all fields in a multi-field sort) */
                ascending?: string;
                /** @description Descending sort order (overrides all fields in a multi-field sort) */
                descending?: string;
                /** @description The number of records to skip (max: 1,000). Unsuitable for bulk operations */
                skip?: string;
                /** @description The maximum number of records to return (max: 1,000) */
                limit?: string;
                /** @description Return a total count as well as items (adds extra database processing) */
                count?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: uuid
                         * @description For message events, this is the 'header.cid' field from the referenced message. For certain other event types, a secondary object is referenced such as a token pool
                         */
                        correlator?: string;
                        /**
                         * Format: date-time
                         * @description The time the event was emitted. Not guaranteed to be unique, or to increase between events in the same order as the final sequence events are delivered to your application. As such, the 'sequence' field should be used instead of the 'created' field for querying events in the exact order they are delivered to applications
                         */
                        created?: string;
                        /**
                         * Format: uuid
                         * @description The UUID assigned to this event by your local FireFly node
                         */
                        id?: string;
                        /** @description The namespace of the event. Your application must subscribe to events within a namespace */
                        namespace?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of an resource that is the subject of this event. The event type determines what type of resource is referenced, and whether this field might be unset
                         */
                        reference?: string;
                        /**
                         * Format: int64
                         * @description A sequence indicating the order in which events are delivered to your application. Assure to be unique per event in your local FireFly database (unlike the created timestamp)
                         */
                        sequence?: number;
                        /** @description A stream of information this event relates to. For message confirmation events, a separate event is emitted for each topic in the message. For blockchain events, the listener specifies the topic. Rules exist for how the topic is set for other event types */
                        topic?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of a transaction that is event is part of. Not all events are part of a transaction
                         */
                        tx?: string;
                        /**
                         * @description All interesting activity in FireFly is emitted as a FireFly event, of a given type. The 'type' combined with the 'reference' can be used to determine how to process the event within your application
                         * @enum {string}
                         */
                        type?:
                            | 'transaction_submitted'
                            | 'message_confirmed'
                            | 'message_rejected'
                            | 'datatype_confirmed'
                            | 'identity_confirmed'
                            | 'identity_updated'
                            | 'token_pool_confirmed'
                            | 'token_pool_op_failed'
                            | 'token_transfer_confirmed'
                            | 'token_transfer_op_failed'
                            | 'token_approval_confirmed'
                            | 'token_approval_op_failed'
                            | 'contract_interface_confirmed'
                            | 'contract_api_confirmed'
                            | 'blockchain_event_received'
                            | 'blockchain_invoke_op_succeeded'
                            | 'blockchain_invoke_op_failed'
                            | 'blockchain_contract_deploy_op_succeeded'
                            | 'blockchain_contract_deploy_op_failed';
                    }[];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getEventByID: {
        parameters: {
            query?: {
                /** @description When set, the API will return the record that this item references in its 'reference' field */
                fetchreference?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The event ID */
                eid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: uuid
                         * @description For message events, this is the 'header.cid' field from the referenced message. For certain other event types, a secondary object is referenced such as a token pool
                         */
                        correlator?: string;
                        /**
                         * Format: date-time
                         * @description The time the event was emitted. Not guaranteed to be unique, or to increase between events in the same order as the final sequence events are delivered to your application. As such, the 'sequence' field should be used instead of the 'created' field for querying events in the exact order they are delivered to applications
                         */
                        created?: string;
                        /**
                         * Format: uuid
                         * @description The UUID assigned to this event by your local FireFly node
                         */
                        id?: string;
                        /** @description The namespace of the event. Your application must subscribe to events within a namespace */
                        namespace?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of an resource that is the subject of this event. The event type determines what type of resource is referenced, and whether this field might be unset
                         */
                        reference?: string;
                        /**
                         * Format: int64
                         * @description A sequence indicating the order in which events are delivered to your application. Assure to be unique per event in your local FireFly database (unlike the created timestamp)
                         */
                        sequence?: number;
                        /** @description A stream of information this event relates to. For message confirmation events, a separate event is emitted for each topic in the message. For blockchain events, the listener specifies the topic. Rules exist for how the topic is set for other event types */
                        topic?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of a transaction that is event is part of. Not all events are part of a transaction
                         */
                        tx?: string;
                        /**
                         * @description All interesting activity in FireFly is emitted as a FireFly event, of a given type. The 'type' combined with the 'reference' can be used to determine how to process the event within your application
                         * @enum {string}
                         */
                        type?:
                            | 'transaction_submitted'
                            | 'message_confirmed'
                            | 'message_rejected'
                            | 'datatype_confirmed'
                            | 'identity_confirmed'
                            | 'identity_updated'
                            | 'token_pool_confirmed'
                            | 'token_pool_op_failed'
                            | 'token_transfer_confirmed'
                            | 'token_transfer_op_failed'
                            | 'token_approval_confirmed'
                            | 'token_approval_op_failed'
                            | 'contract_interface_confirmed'
                            | 'contract_api_confirmed'
                            | 'blockchain_event_received'
                            | 'blockchain_invoke_op_succeeded'
                            | 'blockchain_invoke_op_failed'
                            | 'blockchain_contract_deploy_op_succeeded'
                            | 'blockchain_contract_deploy_op_failed';
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getNamespaces: {
        parameters: {
            query?: {
                /** @description When set, the API will return namespaces even if they are not yet initialized, including in error cases where an initializationError is included */
                includeinitializing?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description The time the namespace was created
                         */
                        created?: string;
                        /** @description A description of the namespace */
                        description?: string;
                        /** @description Set to a non-empty string in the case that the namespace is currently failing to initialize */
                        initializationError?: string;
                        /** @description Set to true if the namespace is still initializing */
                        initializing?: boolean;
                        /** @description The local namespace name */
                        name?: string;
                        /** @description The shared namespace name within the multiparty network */
                        networkName?: string;
                    }[];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getNamespace: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The namespace which scopes this request */
                ns: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description The time the namespace was created
                         */
                        created?: string;
                        /** @description A description of the namespace */
                        description?: string;
                        /** @description The local namespace name */
                        name?: string;
                        /** @description The shared namespace name within the multiparty network */
                        networkName?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getOps: {
        parameters: {
            query?: {
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                created?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                error?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                id?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                input?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                output?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                plugin?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                retry?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                status?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                tx?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                type?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                updated?: string;
                /** @description Sort field. For multi-field sort use comma separated values (or multiple query values) with '-' prefix for descending */
                sort?: string;
                /** @description Ascending sort order (overrides all fields in a multi-field sort) */
                ascending?: string;
                /** @description Descending sort order (overrides all fields in a multi-field sort) */
                descending?: string;
                /** @description The number of records to skip (max: 1,000). Unsuitable for bulk operations */
                skip?: string;
                /** @description The maximum number of records to return (max: 1,000) */
                limit?: string;
                /** @description Return a total count as well as items (adds extra database processing) */
                count?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description The time the operation was created
                         */
                        created?: string;
                        /** @description Operation.data */
                        data?: {
                            [key: string]: unknown;
                        };
                        /** @description Any error reported back from the plugin for this operation */
                        error?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the operation
                         */
                        id?: string;
                        /** @description The input to this operation */
                        input?: {
                            [key: string]: unknown;
                        };
                        /** @description The namespace of the operation */
                        namespace?: string;
                        /** @description Any output reported back from the plugin for this operation */
                        output?: {
                            [key: string]: unknown;
                        };
                        /** @description The plugin responsible for performing the operation */
                        plugin?: string;
                        /**
                         * Format: uuid
                         * @description If this operation was initiated as a retry to a previous operation, this field points to the UUID of the operation being retried
                         */
                        retry?: string;
                        /** @description The current status of the operation */
                        status?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly transaction the operation is part of
                         */
                        tx?: string;
                        /**
                         * @description The type of the operation
                         * @enum {string}
                         */
                        type?: 'blockchain_invoke' | 'user_operation_send';
                        /**
                         * Format: date-time
                         * @description The last update time of the operation
                         */
                        updated?: string;
                    }[];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getOpByID: {
        parameters: {
            query?: {
                /** @description When set, the API will return additional status information if available */
                fetchstatus?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The operation ID key to get */
                opid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description The time the operation was created
                         */
                        created?: string;
                        /** @description Operation.data */
                        data?: {
                            [key: string]: unknown;
                        };
                        /** @description Additional detailed information about an operation provided by the connector */
                        detail?: unknown;
                        /** @description Any error reported back from the plugin for this operation */
                        error?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the operation
                         */
                        id?: string;
                        /** @description The input to this operation */
                        input?: {
                            [key: string]: unknown;
                        };
                        /** @description The namespace of the operation */
                        namespace?: string;
                        /** @description Any output reported back from the plugin for this operation */
                        output?: {
                            [key: string]: unknown;
                        };
                        /** @description The plugin responsible for performing the operation */
                        plugin?: string;
                        /**
                         * Format: uuid
                         * @description If this operation was initiated as a retry to a previous operation, this field points to the UUID of the operation being retried
                         */
                        retry?: string;
                        /** @description The current status of the operation */
                        status?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly transaction the operation is part of
                         */
                        tx?: string;
                        /**
                         * @description The type of the operation
                         * @enum {string}
                         */
                        type?: 'blockchain_invoke' | 'user_operation_send';
                        /**
                         * Format: date-time
                         * @description The last update time of the operation
                         */
                        updated?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    spiPatchOpByID: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The operation ID as passed to the connector when the operation was performed, including the 'namespace:' prefix */
                nsopid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description Any error reported back from the plugin for this operation */
                    error?: string;
                    /** @description Any output reported back from the plugin for this operation */
                    output?: {
                        [key: string]: unknown;
                    };
                    /** @description The current status of the operation */
                    status?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        [key: string]: unknown;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postOpRetry: {
        parameters: {
            query?: {
                /** @description transaction hash */
                txHash?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The UUID of the operation */
                opid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Success */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description The time the operation was created
                         */
                        created?: string;
                        /** @description Operation.data */
                        data?: {
                            [key: string]: unknown;
                        };
                        /** @description Any error reported back from the plugin for this operation */
                        error?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the operation
                         */
                        id?: string;
                        /** @description The input to this operation */
                        input?: {
                            [key: string]: unknown;
                        };
                        /** @description The namespace of the operation */
                        namespace?: string;
                        /** @description Any output reported back from the plugin for this operation */
                        output?: {
                            [key: string]: unknown;
                        };
                        /** @description The plugin responsible for performing the operation */
                        plugin?: string;
                        /**
                         * Format: uuid
                         * @description If this operation was initiated as a retry to a previous operation, this field points to the UUID of the operation being retried
                         */
                        retry?: string;
                        /** @description The current status of the operation */
                        status?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly transaction the operation is part of
                         */
                        tx?: string;
                        /**
                         * @description The type of the operation
                         * @enum {string}
                         */
                        type?: 'blockchain_invoke' | 'user_operation_send';
                        /**
                         * Format: date-time
                         * @description The last update time of the operation
                         */
                        updated?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postOpStatus: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The UUID of the operation */
                opid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Success */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description The time the operation was created
                         */
                        created?: string;
                        /** @description Operation.data */
                        data?: {
                            [key: string]: unknown;
                        };
                        /** @description Any error reported back from the plugin for this operation */
                        error?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the operation
                         */
                        id?: string;
                        /** @description The input to this operation */
                        input?: {
                            [key: string]: unknown;
                        };
                        /** @description The namespace of the operation */
                        namespace?: string;
                        /** @description Any output reported back from the plugin for this operation */
                        output?: {
                            [key: string]: unknown;
                        };
                        /** @description The plugin responsible for performing the operation */
                        plugin?: string;
                        /**
                         * Format: uuid
                         * @description If this operation was initiated as a retry to a previous operation, this field points to the UUID of the operation being retried
                         */
                        retry?: string;
                        /** @description The current status of the operation */
                        status?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly transaction the operation is part of
                         */
                        tx?: string;
                        /**
                         * @description The type of the operation
                         * @enum {string}
                         */
                        type?: 'blockchain_invoke' | 'user_operation_send';
                        /**
                         * Format: date-time
                         * @description The last update time of the operation
                         */
                        updated?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    spiPostReset: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': unknown;
            };
        };
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': unknown;
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    spiGetSigners: {
        parameters: {
            query?: {
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                KeyIdentifier?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                id?: string;
                /** @description Sort field. For multi-field sort use comma separated values (or multiple query values) with '-' prefix for descending */
                sort?: string;
                /** @description Ascending sort order (overrides all fields in a multi-field sort) */
                ascending?: string;
                /** @description Descending sort order (overrides all fields in a multi-field sort) */
                descending?: string;
                /** @description The number of records to skip (max: 1,000). Unsuitable for bulk operations */
                skip?: string;
                /** @description The maximum number of records to return (max: 1,000) */
                limit?: string;
                /** @description Return a total count as well as items (adds extra database processing) */
                count?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description Signer.created
                         */
                        created?: string;
                        /** @description Signer.description */
                        description?: string;
                        /**
                         * Format: uuid
                         * @description Signer.id
                         */
                        id?: string;
                        /** @description Signer.isActive */
                        isActive?: boolean;
                        /** @description Signer.keyIdentifier */
                        keyIdentifier?: string;
                        /** @description Signer.name */
                        name?: string;
                        /** @description Signer.namespace */
                        namespace?: string;
                        /** @description Signer.provider */
                        provider?: string;
                        /** @description Signer.providerResource */
                        providerResource?: string;
                        /** @description Signer.providerService */
                        providerService?: string;
                        /**
                         * Format: date-time
                         * @description Signer.updated
                         */
                        updated?: string;
                    }[];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    spiPostNewSigner: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /**
                     * Format: date-time
                     * @description Signer.created
                     */
                    created?: string;
                    /** @description Signer.description */
                    description?: string;
                    /**
                     * Format: uuid
                     * @description Signer.id
                     */
                    id?: string;
                    /** @description Signer.isActive */
                    isActive?: boolean;
                    /** @description Signer.keyIdentifier */
                    keyIdentifier?: string;
                    /** @description Signer.name */
                    name?: string;
                    /** @description Signer.namespace */
                    namespace?: string;
                    /** @description Signer.provider */
                    provider?: string;
                    /** @description Signer.providerResource */
                    providerResource?: string;
                    /** @description Signer.providerService */
                    providerService?: string;
                    /**
                     * Format: date-time
                     * @description Signer.updated
                     */
                    updated?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description Signer.created
                         */
                        created?: string;
                        /** @description Signer.description */
                        description?: string;
                        /**
                         * Format: uuid
                         * @description Signer.id
                         */
                        id?: string;
                        /** @description Signer.isActive */
                        isActive?: boolean;
                        /** @description Signer.keyIdentifier */
                        keyIdentifier?: string;
                        /** @description Signer.name */
                        name?: string;
                        /** @description Signer.namespace */
                        namespace?: string;
                        /** @description Signer.provider */
                        provider?: string;
                        /** @description Signer.providerResource */
                        providerResource?: string;
                        /** @description Signer.providerService */
                        providerService?: string;
                        /**
                         * Format: date-time
                         * @description Signer.updated
                         */
                        updated?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    spiGetSignerByID: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description Signer ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description Signer.created
                         */
                        created?: string;
                        /** @description Signer.description */
                        description?: string;
                        /**
                         * Format: uuid
                         * @description Signer.id
                         */
                        id?: string;
                        /** @description Signer.isActive */
                        isActive?: boolean;
                        /** @description Signer.keyIdentifier */
                        keyIdentifier?: string;
                        /** @description Signer.name */
                        name?: string;
                        /** @description Signer.namespace */
                        namespace?: string;
                        /** @description Signer.provider */
                        provider?: string;
                        /** @description Signer.providerResource */
                        providerResource?: string;
                        /** @description Signer.providerService */
                        providerService?: string;
                        /**
                         * Format: date-time
                         * @description Signer.updated
                         */
                        updated?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getStatus: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description The namespace that this status applies to */
                        namespace?: {
                            /**
                             * Format: date-time
                             * @description The time the namespace was created
                             */
                            created?: string;
                            /** @description A description of the namespace */
                            description?: string;
                            /** @description The local namespace name */
                            name?: string;
                            /** @description The shared namespace name within the multiparty network */
                            networkName?: string;
                        };
                        /** @description Details of the local node */
                        node?: {
                            /**
                             * Format: uuid
                             * @description The UUID of the node, if registered
                             */
                            id?: string;
                            /** @description The name of this node, as specified in the local configuration */
                            name?: string;
                            /** @description Whether the node has been successfully registered */
                            registered?: boolean;
                        };
                        /** @description Details of the root organization identity registered for this namespace on the local node */
                        org?: {
                            /** @description The DID of the organization identity, if registered */
                            did?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the organization, if registered
                             */
                            id?: string;
                            /** @description The name of the node operator organization, as specified in the local configuration */
                            name?: string;
                            /** @description Whether the organization has been successfully registered */
                            registered?: boolean;
                            /** @description Array of verifiers (blockchain keys) owned by this identity */
                            verifiers?: {
                                /**
                                 * @description The type of the verifier
                                 * @enum {string}
                                 */
                                type?: 'ethereum_address';
                                /** @description The verifier string, such as an Ethereum address, or Fabric MSP identifier */
                                value?: string;
                            }[];
                        };
                        /** @description Information about plugins configured on this namespace */
                        plugins?: {
                            /** @description The blockchain plugins on this namespace */
                            blockchain?: {
                                /** @description The name of the plugin */
                                name?: string;
                                /** @description The type of the plugin */
                                pluginType?: string;
                            }[];
                            /** @description The database plugins on this namespace */
                            database?: {
                                /** @description The name of the plugin */
                                name?: string;
                                /** @description The type of the plugin */
                                pluginType?: string;
                            }[];
                            /** @description The event plugins on this namespace */
                            events?: {
                                /** @description The name of the plugin */
                                name?: string;
                                /** @description The type of the plugin */
                                pluginType?: string;
                            }[];
                            /** @description NamespaceStatusPlugins.messageBroker */
                            messageBroker?: {
                                /** @description The name of the plugin */
                                name?: string;
                                /** @description The type of the plugin */
                                pluginType?: string;
                            }[];
                        };
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getSubscriptions: {
        parameters: {
            query?: {
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                created?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                events?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                filters?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                id?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                name?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                options?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                transport?: string;
                /** @description Sort field. For multi-field sort use comma separated values (or multiple query values) with '-' prefix for descending */
                sort?: string;
                /** @description Ascending sort order (overrides all fields in a multi-field sort) */
                ascending?: string;
                /** @description Descending sort order (overrides all fields in a multi-field sort) */
                descending?: string;
                /** @description The number of records to skip (max: 1,000). Unsuitable for bulk operations */
                skip?: string;
                /** @description The maximum number of records to return (max: 1,000) */
                limit?: string;
                /** @description Return a total count as well as items (adds extra database processing) */
                count?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description Creation time of the subscription
                         */
                        created?: string;
                        /** @description Ephemeral subscriptions only exist as long as the application is connected, and as such will miss events that occur while the application is disconnected, and cannot be created administratively. You can create one over over a connected WebSocket connection */
                        ephemeral?: boolean;
                        /** @description Server-side filter to apply to events */
                        filter?: {
                            /** @description Deprecated: Please use 'message.author' instead */
                            author?: string;
                            /** @description Filters specific to blockchain events. If an event is not a blockchain event, these filters are ignored */
                            blockchainevent?: {
                                /** @description Regular expression to apply to the blockchain event 'listener' field, which is the UUID of the event listener. So you can restrict your subscription to certain blockchain listeners. Alternatively to avoid your application need to know listener UUIDs you can set the 'topic' field of blockchain event listeners, and use a topic filter on your subscriptions */
                                listener?: string;
                                /** @description Regular expression to apply to the blockchain event 'name' field, which is the name of the event in the underlying blockchain smart contract */
                                name?: string;
                            };
                            /** @description Regular expression to apply to the event type, to subscribe to a subset of event types */
                            events?: string;
                            /** @description Deprecated: Please use 'message.group' instead */
                            group?: string;
                            /** @description Filters specific to message events. If an event is not a message event, these filters are ignored */
                            message?: {
                                /** @description Regular expression to apply to the message 'header.author' field */
                                author?: string;
                                /** @description Regular expression to apply to the message 'header.group' field */
                                group?: string;
                                /** @description Regular expression to apply to the message 'header.tag' field */
                                tag?: string;
                            };
                            /** @description Deprecated: Please use 'message.tag' instead */
                            tag?: string;
                            /** @description Regular expression to apply to the topic of the event, to subscribe to a subset of topics. Note for messages sent with multiple topics, a separate event is emitted for each topic */
                            topic?: string;
                            /** @description Deprecated: Please use 'topic' instead */
                            topics?: string;
                            /** @description Filters specific to events with a transaction. If an event is not associated with a transaction, this filter is ignored */
                            transaction?: {
                                /** @description Regular expression to apply to the transaction 'type' field */
                                type?: string;
                            };
                        };
                        /**
                         * Format: uuid
                         * @description The UUID of the subscription
                         */
                        id?: string;
                        /** @description The name of the subscription. The application specifies this name when it connects, in order to attach to the subscription and receive events that arrived while it was disconnected. If multiple apps connect to the same subscription, events are workload balanced across the connected application instances */
                        name?: string;
                        /** @description The namespace of the subscription. A subscription will only receive events generated in the namespace of the subscription */
                        namespace?: string;
                        /** @description Subscription options */
                        options?: {
                            /** @description Events are delivered in batches in an ordered array. The batch size is capped to the readAhead limit. The event payload is always an array even if there is a single event in the batch, allowing client-side optimizations when processing the events in a group. Available for both Webhooks and WebSockets. */
                            batch?: boolean;
                            /** @description When batching is enabled, the optional timeout to send events even when the batch hasn't filled. */
                            batchTimeout?: string;
                            /** @description Webhooks only: When true the event will be acknowledged before the webhook is invoked, allowing parallel invocations */
                            fastack?: boolean;
                            /** @description Whether your application would like to receive events from the 'oldest' event emitted by your FireFly node (from the beginning of time), or the 'newest' event (from now), or a specific event sequence. Default is 'newest' */
                            firstEvent?: string;
                            /** @description Webhooks only: Static headers to set on the webhook request */
                            headers?: {
                                [key: string]: string;
                            };
                            /** @description Webhooks only: a set of options for HTTP */
                            httpOptions?: {
                                /** @description The maximum amount of time that a connection is allowed to remain with no data transmitted. */
                                connectionTimeout?: string;
                                /** @description See [ExpectContinueTimeout in the Go docs](https://pkg.go.dev/net/http#Transport) */
                                expectContinueTimeout?: string;
                                /** @description The max duration to hold a HTTP keepalive connection between calls */
                                idleTimeout?: string;
                                /** @description The max number of idle connections to hold pooled */
                                maxIdleConns?: number;
                                /** @description HTTP proxy URL to use for outbound requests to the webhook */
                                proxyURL?: string;
                                /** @description The max duration to hold a TLS handshake alive */
                                requestTimeout?: string;
                                /** @description The max duration to hold a TLS handshake alive */
                                tlsHandshakeTimeout?: string;
                            };
                            /** @description Webhooks only: A set of options to extract data from the first JSON input data in the incoming message. Only applies if withData=true */
                            input?: {
                                /** @description A top-level property of the first data input, to use for the request body. Default is the whole first body */
                                body?: string;
                                /** @description A top-level property of the first data input, to use for headers */
                                headers?: string;
                                /** @description A top-level property of the first data input, to use for a path to append with escaping to the webhook path */
                                path?: string;
                                /** @description A top-level property of the first data input, to use for query parameters */
                                query?: string;
                                /** @description A top-level property of the first data input, to use to dynamically set whether to pin the response (so the requester can choose) */
                                replytx?: string;
                            };
                            /** @description Webhooks only: Whether to assume the response body is JSON, regardless of the returned Content-Type */
                            json?: boolean;
                            /** @description Webhooks only: HTTP method to invoke. Default=POST */
                            method?: string;
                            /** @description Webhooks only: Static query params to set on the webhook request */
                            query?: {
                                [key: string]: string;
                            };
                            /** @description The number of events to stream ahead to your application, while waiting for confirmation of consumption of those events. At least once delivery semantics are used in FireFly, so if your application crashes/reconnects this is the maximum number of events you would expect to be redelivered after it restarts */
                            readAhead?: number;
                            /** @description Webhooks only: Whether to automatically send a reply event, using the body returned by the webhook */
                            reply?: boolean;
                            /** @description Webhooks only: The tag to set on the reply message */
                            replytag?: string;
                            /** @description Webhooks only: The transaction type to set on the reply message */
                            replytx?: string;
                            /** @description Webhooks only: a set of options for retrying the webhook call */
                            retry?: {
                                /** @description Number of times to retry the webhook call in case of failure */
                                count?: number;
                                /** @description Enables retry on HTTP calls, defaults to false */
                                enabled?: boolean;
                                /** @description Initial delay between retries when we retry the webhook call */
                                initialDelay?: string;
                                /** @description Max delay between retries when we retry the webhookcall */
                                maxDelay?: string;
                            };
                            /** @description The name of an existing TLS configuration associated to the namespace to use */
                            tlsConfigName?: string;
                            /** @description Webhooks only: HTTP url to invoke. Can be relative if a base URL is set in the webhook plugin config */
                            url?: string;
                            /** @description Whether message events delivered over the subscription, should be packaged with the full data of those messages in-line as part of the event JSON payload. Or if the application should make separate REST calls to download that data. May not be supported on some transports. */
                            withData?: boolean;
                        };
                        /** @description The transport plugin responsible for event delivery (WebSockets, Webhooks, JMS, NATS etc.) */
                        transport?: string;
                        /**
                         * Format: date-time
                         * @description Last time the subscription was updated
                         */
                        updated?: string;
                    }[];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    putSubscription: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description Server-side filter to apply to events */
                    filter?: {
                        /** @description Deprecated: Please use 'message.author' instead */
                        author?: string;
                        /** @description Filters specific to blockchain events. If an event is not a blockchain event, these filters are ignored */
                        blockchainevent?: {
                            /** @description Regular expression to apply to the blockchain event 'listener' field, which is the UUID of the event listener. So you can restrict your subscription to certain blockchain listeners. Alternatively to avoid your application need to know listener UUIDs you can set the 'topic' field of blockchain event listeners, and use a topic filter on your subscriptions */
                            listener?: string;
                            /** @description Regular expression to apply to the blockchain event 'name' field, which is the name of the event in the underlying blockchain smart contract */
                            name?: string;
                        };
                        /** @description Regular expression to apply to the event type, to subscribe to a subset of event types */
                        events?: string;
                        /** @description Deprecated: Please use 'message.group' instead */
                        group?: string;
                        /** @description Filters specific to message events. If an event is not a message event, these filters are ignored */
                        message?: {
                            /** @description Regular expression to apply to the message 'header.author' field */
                            author?: string;
                            /** @description Regular expression to apply to the message 'header.group' field */
                            group?: string;
                            /** @description Regular expression to apply to the message 'header.tag' field */
                            tag?: string;
                        };
                        /** @description Deprecated: Please use 'message.tag' instead */
                        tag?: string;
                        /** @description Regular expression to apply to the topic of the event, to subscribe to a subset of topics. Note for messages sent with multiple topics, a separate event is emitted for each topic */
                        topic?: string;
                        /** @description Deprecated: Please use 'topic' instead */
                        topics?: string;
                        /** @description Filters specific to events with a transaction. If an event is not associated with a transaction, this filter is ignored */
                        transaction?: {
                            /** @description Regular expression to apply to the transaction 'type' field */
                            type?: string;
                        };
                    };
                    /** @description The name of the subscription. The application specifies this name when it connects, in order to attach to the subscription and receive events that arrived while it was disconnected. If multiple apps connect to the same subscription, events are workload balanced across the connected application instances */
                    name?: string;
                    /** @description The namespace of the subscription. A subscription will only receive events generated in the namespace of the subscription */
                    namespace?: string;
                    /** @description Subscription options */
                    options?: {
                        /** @description Events are delivered in batches in an ordered array. The batch size is capped to the readAhead limit. The event payload is always an array even if there is a single event in the batch, allowing client-side optimizations when processing the events in a group. Available for both Webhooks and WebSockets. */
                        batch?: boolean;
                        /** @description When batching is enabled, the optional timeout to send events even when the batch hasn't filled. */
                        batchTimeout?: string;
                        /** @description Webhooks only: When true the event will be acknowledged before the webhook is invoked, allowing parallel invocations */
                        fastack?: boolean;
                        /** @description Whether your application would like to receive events from the 'oldest' event emitted by your FireFly node (from the beginning of time), or the 'newest' event (from now), or a specific event sequence. Default is 'newest' */
                        firstEvent?: string;
                        /** @description Webhooks only: Static headers to set on the webhook request */
                        headers?: {
                            [key: string]: string;
                        };
                        /** @description Webhooks only: a set of options for HTTP */
                        httpOptions?: {
                            /** @description The maximum amount of time that a connection is allowed to remain with no data transmitted. */
                            connectionTimeout?: string;
                            /** @description See [ExpectContinueTimeout in the Go docs](https://pkg.go.dev/net/http#Transport) */
                            expectContinueTimeout?: string;
                            /** @description The max duration to hold a HTTP keepalive connection between calls */
                            idleTimeout?: string;
                            /** @description The max number of idle connections to hold pooled */
                            maxIdleConns?: number;
                            /** @description HTTP proxy URL to use for outbound requests to the webhook */
                            proxyURL?: string;
                            /** @description The max duration to hold a TLS handshake alive */
                            requestTimeout?: string;
                            /** @description The max duration to hold a TLS handshake alive */
                            tlsHandshakeTimeout?: string;
                        };
                        /** @description Webhooks only: A set of options to extract data from the first JSON input data in the incoming message. Only applies if withData=true */
                        input?: {
                            /** @description A top-level property of the first data input, to use for the request body. Default is the whole first body */
                            body?: string;
                            /** @description A top-level property of the first data input, to use for headers */
                            headers?: string;
                            /** @description A top-level property of the first data input, to use for a path to append with escaping to the webhook path */
                            path?: string;
                            /** @description A top-level property of the first data input, to use for query parameters */
                            query?: string;
                            /** @description A top-level property of the first data input, to use to dynamically set whether to pin the response (so the requester can choose) */
                            replytx?: string;
                        };
                        /** @description Webhooks only: Whether to assume the response body is JSON, regardless of the returned Content-Type */
                        json?: boolean;
                        /** @description Webhooks only: HTTP method to invoke. Default=POST */
                        method?: string;
                        /** @description Webhooks only: Static query params to set on the webhook request */
                        query?: {
                            [key: string]: string;
                        };
                        /** @description The number of events to stream ahead to your application, while waiting for confirmation of consumption of those events. At least once delivery semantics are used in FireFly, so if your application crashes/reconnects this is the maximum number of events you would expect to be redelivered after it restarts */
                        readAhead?: number;
                        /** @description Webhooks only: Whether to automatically send a reply event, using the body returned by the webhook */
                        reply?: boolean;
                        /** @description Webhooks only: The tag to set on the reply message */
                        replytag?: string;
                        /** @description Webhooks only: The transaction type to set on the reply message */
                        replytx?: string;
                        /** @description Webhooks only: a set of options for retrying the webhook call */
                        retry?: {
                            /** @description Number of times to retry the webhook call in case of failure */
                            count?: number;
                            /** @description Enables retry on HTTP calls, defaults to false */
                            enabled?: boolean;
                            /** @description Initial delay between retries when we retry the webhook call */
                            initialDelay?: string;
                            /** @description Max delay between retries when we retry the webhookcall */
                            maxDelay?: string;
                        };
                        /** @description The name of an existing TLS configuration associated to the namespace to use */
                        tlsConfigName?: string;
                        /** @description Webhooks only: HTTP url to invoke. Can be relative if a base URL is set in the webhook plugin config */
                        url?: string;
                        /** @description Whether message events delivered over the subscription, should be packaged with the full data of those messages in-line as part of the event JSON payload. Or if the application should make separate REST calls to download that data. May not be supported on some transports. */
                        withData?: boolean;
                    };
                    /** @description The transport plugin responsible for event delivery (WebSockets, Webhooks, JMS, NATS etc.) */
                    transport?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description Creation time of the subscription
                         */
                        created?: string;
                        /** @description Ephemeral subscriptions only exist as long as the application is connected, and as such will miss events that occur while the application is disconnected, and cannot be created administratively. You can create one over over a connected WebSocket connection */
                        ephemeral?: boolean;
                        /** @description Server-side filter to apply to events */
                        filter?: {
                            /** @description Deprecated: Please use 'message.author' instead */
                            author?: string;
                            /** @description Filters specific to blockchain events. If an event is not a blockchain event, these filters are ignored */
                            blockchainevent?: {
                                /** @description Regular expression to apply to the blockchain event 'listener' field, which is the UUID of the event listener. So you can restrict your subscription to certain blockchain listeners. Alternatively to avoid your application need to know listener UUIDs you can set the 'topic' field of blockchain event listeners, and use a topic filter on your subscriptions */
                                listener?: string;
                                /** @description Regular expression to apply to the blockchain event 'name' field, which is the name of the event in the underlying blockchain smart contract */
                                name?: string;
                            };
                            /** @description Regular expression to apply to the event type, to subscribe to a subset of event types */
                            events?: string;
                            /** @description Deprecated: Please use 'message.group' instead */
                            group?: string;
                            /** @description Filters specific to message events. If an event is not a message event, these filters are ignored */
                            message?: {
                                /** @description Regular expression to apply to the message 'header.author' field */
                                author?: string;
                                /** @description Regular expression to apply to the message 'header.group' field */
                                group?: string;
                                /** @description Regular expression to apply to the message 'header.tag' field */
                                tag?: string;
                            };
                            /** @description Deprecated: Please use 'message.tag' instead */
                            tag?: string;
                            /** @description Regular expression to apply to the topic of the event, to subscribe to a subset of topics. Note for messages sent with multiple topics, a separate event is emitted for each topic */
                            topic?: string;
                            /** @description Deprecated: Please use 'topic' instead */
                            topics?: string;
                            /** @description Filters specific to events with a transaction. If an event is not associated with a transaction, this filter is ignored */
                            transaction?: {
                                /** @description Regular expression to apply to the transaction 'type' field */
                                type?: string;
                            };
                        };
                        /**
                         * Format: uuid
                         * @description The UUID of the subscription
                         */
                        id?: string;
                        /** @description The name of the subscription. The application specifies this name when it connects, in order to attach to the subscription and receive events that arrived while it was disconnected. If multiple apps connect to the same subscription, events are workload balanced across the connected application instances */
                        name?: string;
                        /** @description The namespace of the subscription. A subscription will only receive events generated in the namespace of the subscription */
                        namespace?: string;
                        /** @description Subscription options */
                        options?: {
                            /** @description Events are delivered in batches in an ordered array. The batch size is capped to the readAhead limit. The event payload is always an array even if there is a single event in the batch, allowing client-side optimizations when processing the events in a group. Available for both Webhooks and WebSockets. */
                            batch?: boolean;
                            /** @description When batching is enabled, the optional timeout to send events even when the batch hasn't filled. */
                            batchTimeout?: string;
                            /** @description Webhooks only: When true the event will be acknowledged before the webhook is invoked, allowing parallel invocations */
                            fastack?: boolean;
                            /** @description Whether your application would like to receive events from the 'oldest' event emitted by your FireFly node (from the beginning of time), or the 'newest' event (from now), or a specific event sequence. Default is 'newest' */
                            firstEvent?: string;
                            /** @description Webhooks only: Static headers to set on the webhook request */
                            headers?: {
                                [key: string]: string;
                            };
                            /** @description Webhooks only: a set of options for HTTP */
                            httpOptions?: {
                                /** @description The maximum amount of time that a connection is allowed to remain with no data transmitted. */
                                connectionTimeout?: string;
                                /** @description See [ExpectContinueTimeout in the Go docs](https://pkg.go.dev/net/http#Transport) */
                                expectContinueTimeout?: string;
                                /** @description The max duration to hold a HTTP keepalive connection between calls */
                                idleTimeout?: string;
                                /** @description The max number of idle connections to hold pooled */
                                maxIdleConns?: number;
                                /** @description HTTP proxy URL to use for outbound requests to the webhook */
                                proxyURL?: string;
                                /** @description The max duration to hold a TLS handshake alive */
                                requestTimeout?: string;
                                /** @description The max duration to hold a TLS handshake alive */
                                tlsHandshakeTimeout?: string;
                            };
                            /** @description Webhooks only: A set of options to extract data from the first JSON input data in the incoming message. Only applies if withData=true */
                            input?: {
                                /** @description A top-level property of the first data input, to use for the request body. Default is the whole first body */
                                body?: string;
                                /** @description A top-level property of the first data input, to use for headers */
                                headers?: string;
                                /** @description A top-level property of the first data input, to use for a path to append with escaping to the webhook path */
                                path?: string;
                                /** @description A top-level property of the first data input, to use for query parameters */
                                query?: string;
                                /** @description A top-level property of the first data input, to use to dynamically set whether to pin the response (so the requester can choose) */
                                replytx?: string;
                            };
                            /** @description Webhooks only: Whether to assume the response body is JSON, regardless of the returned Content-Type */
                            json?: boolean;
                            /** @description Webhooks only: HTTP method to invoke. Default=POST */
                            method?: string;
                            /** @description Webhooks only: Static query params to set on the webhook request */
                            query?: {
                                [key: string]: string;
                            };
                            /** @description The number of events to stream ahead to your application, while waiting for confirmation of consumption of those events. At least once delivery semantics are used in FireFly, so if your application crashes/reconnects this is the maximum number of events you would expect to be redelivered after it restarts */
                            readAhead?: number;
                            /** @description Webhooks only: Whether to automatically send a reply event, using the body returned by the webhook */
                            reply?: boolean;
                            /** @description Webhooks only: The tag to set on the reply message */
                            replytag?: string;
                            /** @description Webhooks only: The transaction type to set on the reply message */
                            replytx?: string;
                            /** @description Webhooks only: a set of options for retrying the webhook call */
                            retry?: {
                                /** @description Number of times to retry the webhook call in case of failure */
                                count?: number;
                                /** @description Enables retry on HTTP calls, defaults to false */
                                enabled?: boolean;
                                /** @description Initial delay between retries when we retry the webhook call */
                                initialDelay?: string;
                                /** @description Max delay between retries when we retry the webhookcall */
                                maxDelay?: string;
                            };
                            /** @description The name of an existing TLS configuration associated to the namespace to use */
                            tlsConfigName?: string;
                            /** @description Webhooks only: HTTP url to invoke. Can be relative if a base URL is set in the webhook plugin config */
                            url?: string;
                            /** @description Whether message events delivered over the subscription, should be packaged with the full data of those messages in-line as part of the event JSON payload. Or if the application should make separate REST calls to download that data. May not be supported on some transports. */
                            withData?: boolean;
                        };
                        /** @description The transport plugin responsible for event delivery (WebSockets, Webhooks, JMS, NATS etc.) */
                        transport?: string;
                        /**
                         * Format: date-time
                         * @description Last time the subscription was updated
                         */
                        updated?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postNewSubscription: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                'application/json': {
                    /** @description Server-side filter to apply to events */
                    filter?: {
                        /** @description Deprecated: Please use 'message.author' instead */
                        author?: string;
                        /** @description Filters specific to blockchain events. If an event is not a blockchain event, these filters are ignored */
                        blockchainevent?: {
                            /** @description Regular expression to apply to the blockchain event 'listener' field, which is the UUID of the event listener. So you can restrict your subscription to certain blockchain listeners. Alternatively to avoid your application need to know listener UUIDs you can set the 'topic' field of blockchain event listeners, and use a topic filter on your subscriptions */
                            listener?: string;
                            /** @description Regular expression to apply to the blockchain event 'name' field, which is the name of the event in the underlying blockchain smart contract */
                            name?: string;
                        };
                        /** @description Regular expression to apply to the event type, to subscribe to a subset of event types */
                        events?: string;
                        /** @description Deprecated: Please use 'message.group' instead */
                        group?: string;
                        /** @description Filters specific to message events. If an event is not a message event, these filters are ignored */
                        message?: {
                            /** @description Regular expression to apply to the message 'header.author' field */
                            author?: string;
                            /** @description Regular expression to apply to the message 'header.group' field */
                            group?: string;
                            /** @description Regular expression to apply to the message 'header.tag' field */
                            tag?: string;
                        };
                        /** @description Deprecated: Please use 'message.tag' instead */
                        tag?: string;
                        /** @description Regular expression to apply to the topic of the event, to subscribe to a subset of topics. Note for messages sent with multiple topics, a separate event is emitted for each topic */
                        topic?: string;
                        /** @description Deprecated: Please use 'topic' instead */
                        topics?: string;
                        /** @description Filters specific to events with a transaction. If an event is not associated with a transaction, this filter is ignored */
                        transaction?: {
                            /** @description Regular expression to apply to the transaction 'type' field */
                            type?: string;
                        };
                    };
                    /** @description The name of the subscription. The application specifies this name when it connects, in order to attach to the subscription and receive events that arrived while it was disconnected. If multiple apps connect to the same subscription, events are workload balanced across the connected application instances */
                    name?: string;
                    /** @description The namespace of the subscription. A subscription will only receive events generated in the namespace of the subscription */
                    namespace?: string;
                    /** @description Subscription options */
                    options?: {
                        /** @description Events are delivered in batches in an ordered array. The batch size is capped to the readAhead limit. The event payload is always an array even if there is a single event in the batch, allowing client-side optimizations when processing the events in a group. Available for both Webhooks and WebSockets. */
                        batch?: boolean;
                        /** @description When batching is enabled, the optional timeout to send events even when the batch hasn't filled. */
                        batchTimeout?: string;
                        /** @description Webhooks only: When true the event will be acknowledged before the webhook is invoked, allowing parallel invocations */
                        fastack?: boolean;
                        /** @description Whether your application would like to receive events from the 'oldest' event emitted by your FireFly node (from the beginning of time), or the 'newest' event (from now), or a specific event sequence. Default is 'newest' */
                        firstEvent?: string;
                        /** @description Webhooks only: Static headers to set on the webhook request */
                        headers?: {
                            [key: string]: string;
                        };
                        /** @description Webhooks only: a set of options for HTTP */
                        httpOptions?: {
                            /** @description The maximum amount of time that a connection is allowed to remain with no data transmitted. */
                            connectionTimeout?: string;
                            /** @description See [ExpectContinueTimeout in the Go docs](https://pkg.go.dev/net/http#Transport) */
                            expectContinueTimeout?: string;
                            /** @description The max duration to hold a HTTP keepalive connection between calls */
                            idleTimeout?: string;
                            /** @description The max number of idle connections to hold pooled */
                            maxIdleConns?: number;
                            /** @description HTTP proxy URL to use for outbound requests to the webhook */
                            proxyURL?: string;
                            /** @description The max duration to hold a TLS handshake alive */
                            requestTimeout?: string;
                            /** @description The max duration to hold a TLS handshake alive */
                            tlsHandshakeTimeout?: string;
                        };
                        /** @description Webhooks only: A set of options to extract data from the first JSON input data in the incoming message. Only applies if withData=true */
                        input?: {
                            /** @description A top-level property of the first data input, to use for the request body. Default is the whole first body */
                            body?: string;
                            /** @description A top-level property of the first data input, to use for headers */
                            headers?: string;
                            /** @description A top-level property of the first data input, to use for a path to append with escaping to the webhook path */
                            path?: string;
                            /** @description A top-level property of the first data input, to use for query parameters */
                            query?: string;
                            /** @description A top-level property of the first data input, to use to dynamically set whether to pin the response (so the requester can choose) */
                            replytx?: string;
                        };
                        /** @description Webhooks only: Whether to assume the response body is JSON, regardless of the returned Content-Type */
                        json?: boolean;
                        /** @description Webhooks only: HTTP method to invoke. Default=POST */
                        method?: string;
                        /** @description Webhooks only: Static query params to set on the webhook request */
                        query?: {
                            [key: string]: string;
                        };
                        /** @description The number of events to stream ahead to your application, while waiting for confirmation of consumption of those events. At least once delivery semantics are used in FireFly, so if your application crashes/reconnects this is the maximum number of events you would expect to be redelivered after it restarts */
                        readAhead?: number;
                        /** @description Webhooks only: Whether to automatically send a reply event, using the body returned by the webhook */
                        reply?: boolean;
                        /** @description Webhooks only: The tag to set on the reply message */
                        replytag?: string;
                        /** @description Webhooks only: The transaction type to set on the reply message */
                        replytx?: string;
                        /** @description Webhooks only: a set of options for retrying the webhook call */
                        retry?: {
                            /** @description Number of times to retry the webhook call in case of failure */
                            count?: number;
                            /** @description Enables retry on HTTP calls, defaults to false */
                            enabled?: boolean;
                            /** @description Initial delay between retries when we retry the webhook call */
                            initialDelay?: string;
                            /** @description Max delay between retries when we retry the webhookcall */
                            maxDelay?: string;
                        };
                        /** @description The name of an existing TLS configuration associated to the namespace to use */
                        tlsConfigName?: string;
                        /** @description Webhooks only: HTTP url to invoke. Can be relative if a base URL is set in the webhook plugin config */
                        url?: string;
                        /** @description Whether message events delivered over the subscription, should be packaged with the full data of those messages in-line as part of the event JSON payload. Or if the application should make separate REST calls to download that data. May not be supported on some transports. */
                        withData?: boolean;
                    };
                    /** @description The transport plugin responsible for event delivery (WebSockets, Webhooks, JMS, NATS etc.) */
                    transport?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description Creation time of the subscription
                         */
                        created?: string;
                        /** @description Ephemeral subscriptions only exist as long as the application is connected, and as such will miss events that occur while the application is disconnected, and cannot be created administratively. You can create one over over a connected WebSocket connection */
                        ephemeral?: boolean;
                        /** @description Server-side filter to apply to events */
                        filter?: {
                            /** @description Deprecated: Please use 'message.author' instead */
                            author?: string;
                            /** @description Filters specific to blockchain events. If an event is not a blockchain event, these filters are ignored */
                            blockchainevent?: {
                                /** @description Regular expression to apply to the blockchain event 'listener' field, which is the UUID of the event listener. So you can restrict your subscription to certain blockchain listeners. Alternatively to avoid your application need to know listener UUIDs you can set the 'topic' field of blockchain event listeners, and use a topic filter on your subscriptions */
                                listener?: string;
                                /** @description Regular expression to apply to the blockchain event 'name' field, which is the name of the event in the underlying blockchain smart contract */
                                name?: string;
                            };
                            /** @description Regular expression to apply to the event type, to subscribe to a subset of event types */
                            events?: string;
                            /** @description Deprecated: Please use 'message.group' instead */
                            group?: string;
                            /** @description Filters specific to message events. If an event is not a message event, these filters are ignored */
                            message?: {
                                /** @description Regular expression to apply to the message 'header.author' field */
                                author?: string;
                                /** @description Regular expression to apply to the message 'header.group' field */
                                group?: string;
                                /** @description Regular expression to apply to the message 'header.tag' field */
                                tag?: string;
                            };
                            /** @description Deprecated: Please use 'message.tag' instead */
                            tag?: string;
                            /** @description Regular expression to apply to the topic of the event, to subscribe to a subset of topics. Note for messages sent with multiple topics, a separate event is emitted for each topic */
                            topic?: string;
                            /** @description Deprecated: Please use 'topic' instead */
                            topics?: string;
                            /** @description Filters specific to events with a transaction. If an event is not associated with a transaction, this filter is ignored */
                            transaction?: {
                                /** @description Regular expression to apply to the transaction 'type' field */
                                type?: string;
                            };
                        };
                        /**
                         * Format: uuid
                         * @description The UUID of the subscription
                         */
                        id?: string;
                        /** @description The name of the subscription. The application specifies this name when it connects, in order to attach to the subscription and receive events that arrived while it was disconnected. If multiple apps connect to the same subscription, events are workload balanced across the connected application instances */
                        name?: string;
                        /** @description The namespace of the subscription. A subscription will only receive events generated in the namespace of the subscription */
                        namespace?: string;
                        /** @description Subscription options */
                        options?: {
                            /** @description Events are delivered in batches in an ordered array. The batch size is capped to the readAhead limit. The event payload is always an array even if there is a single event in the batch, allowing client-side optimizations when processing the events in a group. Available for both Webhooks and WebSockets. */
                            batch?: boolean;
                            /** @description When batching is enabled, the optional timeout to send events even when the batch hasn't filled. */
                            batchTimeout?: string;
                            /** @description Webhooks only: When true the event will be acknowledged before the webhook is invoked, allowing parallel invocations */
                            fastack?: boolean;
                            /** @description Whether your application would like to receive events from the 'oldest' event emitted by your FireFly node (from the beginning of time), or the 'newest' event (from now), or a specific event sequence. Default is 'newest' */
                            firstEvent?: string;
                            /** @description Webhooks only: Static headers to set on the webhook request */
                            headers?: {
                                [key: string]: string;
                            };
                            /** @description Webhooks only: a set of options for HTTP */
                            httpOptions?: {
                                /** @description The maximum amount of time that a connection is allowed to remain with no data transmitted. */
                                connectionTimeout?: string;
                                /** @description See [ExpectContinueTimeout in the Go docs](https://pkg.go.dev/net/http#Transport) */
                                expectContinueTimeout?: string;
                                /** @description The max duration to hold a HTTP keepalive connection between calls */
                                idleTimeout?: string;
                                /** @description The max number of idle connections to hold pooled */
                                maxIdleConns?: number;
                                /** @description HTTP proxy URL to use for outbound requests to the webhook */
                                proxyURL?: string;
                                /** @description The max duration to hold a TLS handshake alive */
                                requestTimeout?: string;
                                /** @description The max duration to hold a TLS handshake alive */
                                tlsHandshakeTimeout?: string;
                            };
                            /** @description Webhooks only: A set of options to extract data from the first JSON input data in the incoming message. Only applies if withData=true */
                            input?: {
                                /** @description A top-level property of the first data input, to use for the request body. Default is the whole first body */
                                body?: string;
                                /** @description A top-level property of the first data input, to use for headers */
                                headers?: string;
                                /** @description A top-level property of the first data input, to use for a path to append with escaping to the webhook path */
                                path?: string;
                                /** @description A top-level property of the first data input, to use for query parameters */
                                query?: string;
                                /** @description A top-level property of the first data input, to use to dynamically set whether to pin the response (so the requester can choose) */
                                replytx?: string;
                            };
                            /** @description Webhooks only: Whether to assume the response body is JSON, regardless of the returned Content-Type */
                            json?: boolean;
                            /** @description Webhooks only: HTTP method to invoke. Default=POST */
                            method?: string;
                            /** @description Webhooks only: Static query params to set on the webhook request */
                            query?: {
                                [key: string]: string;
                            };
                            /** @description The number of events to stream ahead to your application, while waiting for confirmation of consumption of those events. At least once delivery semantics are used in FireFly, so if your application crashes/reconnects this is the maximum number of events you would expect to be redelivered after it restarts */
                            readAhead?: number;
                            /** @description Webhooks only: Whether to automatically send a reply event, using the body returned by the webhook */
                            reply?: boolean;
                            /** @description Webhooks only: The tag to set on the reply message */
                            replytag?: string;
                            /** @description Webhooks only: The transaction type to set on the reply message */
                            replytx?: string;
                            /** @description Webhooks only: a set of options for retrying the webhook call */
                            retry?: {
                                /** @description Number of times to retry the webhook call in case of failure */
                                count?: number;
                                /** @description Enables retry on HTTP calls, defaults to false */
                                enabled?: boolean;
                                /** @description Initial delay between retries when we retry the webhook call */
                                initialDelay?: string;
                                /** @description Max delay between retries when we retry the webhookcall */
                                maxDelay?: string;
                            };
                            /** @description The name of an existing TLS configuration associated to the namespace to use */
                            tlsConfigName?: string;
                            /** @description Webhooks only: HTTP url to invoke. Can be relative if a base URL is set in the webhook plugin config */
                            url?: string;
                            /** @description Whether message events delivered over the subscription, should be packaged with the full data of those messages in-line as part of the event JSON payload. Or if the application should make separate REST calls to download that data. May not be supported on some transports. */
                            withData?: boolean;
                        };
                        /** @description The transport plugin responsible for event delivery (WebSockets, Webhooks, JMS, NATS etc.) */
                        transport?: string;
                        /**
                         * Format: date-time
                         * @description Last time the subscription was updated
                         */
                        updated?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getSubscriptionByID: {
        parameters: {
            query?: {
                /** @description When set, the API will return additional status information if available */
                fetchstatus?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The subscription ID */
                subid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description Creation time of the subscription
                         */
                        created?: string;
                        /** @description Ephemeral subscriptions only exist as long as the application is connected, and as such will miss events that occur while the application is disconnected, and cannot be created administratively. You can create one over over a connected WebSocket connection */
                        ephemeral?: boolean;
                        /** @description Server-side filter to apply to events */
                        filter?: {
                            /** @description Deprecated: Please use 'message.author' instead */
                            author?: string;
                            /** @description Filters specific to blockchain events. If an event is not a blockchain event, these filters are ignored */
                            blockchainevent?: {
                                /** @description Regular expression to apply to the blockchain event 'listener' field, which is the UUID of the event listener. So you can restrict your subscription to certain blockchain listeners. Alternatively to avoid your application need to know listener UUIDs you can set the 'topic' field of blockchain event listeners, and use a topic filter on your subscriptions */
                                listener?: string;
                                /** @description Regular expression to apply to the blockchain event 'name' field, which is the name of the event in the underlying blockchain smart contract */
                                name?: string;
                            };
                            /** @description Regular expression to apply to the event type, to subscribe to a subset of event types */
                            events?: string;
                            /** @description Deprecated: Please use 'message.group' instead */
                            group?: string;
                            /** @description Filters specific to message events. If an event is not a message event, these filters are ignored */
                            message?: {
                                /** @description Regular expression to apply to the message 'header.author' field */
                                author?: string;
                                /** @description Regular expression to apply to the message 'header.group' field */
                                group?: string;
                                /** @description Regular expression to apply to the message 'header.tag' field */
                                tag?: string;
                            };
                            /** @description Deprecated: Please use 'message.tag' instead */
                            tag?: string;
                            /** @description Regular expression to apply to the topic of the event, to subscribe to a subset of topics. Note for messages sent with multiple topics, a separate event is emitted for each topic */
                            topic?: string;
                            /** @description Deprecated: Please use 'topic' instead */
                            topics?: string;
                            /** @description Filters specific to events with a transaction. If an event is not associated with a transaction, this filter is ignored */
                            transaction?: {
                                /** @description Regular expression to apply to the transaction 'type' field */
                                type?: string;
                            };
                        };
                        /**
                         * Format: uuid
                         * @description The UUID of the subscription
                         */
                        id?: string;
                        /** @description The name of the subscription. The application specifies this name when it connects, in order to attach to the subscription and receive events that arrived while it was disconnected. If multiple apps connect to the same subscription, events are workload balanced across the connected application instances */
                        name?: string;
                        /** @description The namespace of the subscription. A subscription will only receive events generated in the namespace of the subscription */
                        namespace?: string;
                        /** @description Subscription options */
                        options?: {
                            /** @description Events are delivered in batches in an ordered array. The batch size is capped to the readAhead limit. The event payload is always an array even if there is a single event in the batch, allowing client-side optimizations when processing the events in a group. Available for both Webhooks and WebSockets. */
                            batch?: boolean;
                            /** @description When batching is enabled, the optional timeout to send events even when the batch hasn't filled. */
                            batchTimeout?: string;
                            /** @description Webhooks only: When true the event will be acknowledged before the webhook is invoked, allowing parallel invocations */
                            fastack?: boolean;
                            /** @description Whether your application would like to receive events from the 'oldest' event emitted by your FireFly node (from the beginning of time), or the 'newest' event (from now), or a specific event sequence. Default is 'newest' */
                            firstEvent?: string;
                            /** @description Webhooks only: Static headers to set on the webhook request */
                            headers?: {
                                [key: string]: string;
                            };
                            /** @description Webhooks only: a set of options for HTTP */
                            httpOptions?: {
                                /** @description The maximum amount of time that a connection is allowed to remain with no data transmitted. */
                                connectionTimeout?: string;
                                /** @description See [ExpectContinueTimeout in the Go docs](https://pkg.go.dev/net/http#Transport) */
                                expectContinueTimeout?: string;
                                /** @description The max duration to hold a HTTP keepalive connection between calls */
                                idleTimeout?: string;
                                /** @description The max number of idle connections to hold pooled */
                                maxIdleConns?: number;
                                /** @description HTTP proxy URL to use for outbound requests to the webhook */
                                proxyURL?: string;
                                /** @description The max duration to hold a TLS handshake alive */
                                requestTimeout?: string;
                                /** @description The max duration to hold a TLS handshake alive */
                                tlsHandshakeTimeout?: string;
                            };
                            /** @description Webhooks only: A set of options to extract data from the first JSON input data in the incoming message. Only applies if withData=true */
                            input?: {
                                /** @description A top-level property of the first data input, to use for the request body. Default is the whole first body */
                                body?: string;
                                /** @description A top-level property of the first data input, to use for headers */
                                headers?: string;
                                /** @description A top-level property of the first data input, to use for a path to append with escaping to the webhook path */
                                path?: string;
                                /** @description A top-level property of the first data input, to use for query parameters */
                                query?: string;
                                /** @description A top-level property of the first data input, to use to dynamically set whether to pin the response (so the requester can choose) */
                                replytx?: string;
                            };
                            /** @description Webhooks only: Whether to assume the response body is JSON, regardless of the returned Content-Type */
                            json?: boolean;
                            /** @description Webhooks only: HTTP method to invoke. Default=POST */
                            method?: string;
                            /** @description Webhooks only: Static query params to set on the webhook request */
                            query?: {
                                [key: string]: string;
                            };
                            /** @description The number of events to stream ahead to your application, while waiting for confirmation of consumption of those events. At least once delivery semantics are used in FireFly, so if your application crashes/reconnects this is the maximum number of events you would expect to be redelivered after it restarts */
                            readAhead?: number;
                            /** @description Webhooks only: Whether to automatically send a reply event, using the body returned by the webhook */
                            reply?: boolean;
                            /** @description Webhooks only: The tag to set on the reply message */
                            replytag?: string;
                            /** @description Webhooks only: The transaction type to set on the reply message */
                            replytx?: string;
                            /** @description Webhooks only: a set of options for retrying the webhook call */
                            retry?: {
                                /** @description Number of times to retry the webhook call in case of failure */
                                count?: number;
                                /** @description Enables retry on HTTP calls, defaults to false */
                                enabled?: boolean;
                                /** @description Initial delay between retries when we retry the webhook call */
                                initialDelay?: string;
                                /** @description Max delay between retries when we retry the webhookcall */
                                maxDelay?: string;
                            };
                            /** @description The name of an existing TLS configuration associated to the namespace to use */
                            tlsConfigName?: string;
                            /** @description Webhooks only: HTTP url to invoke. Can be relative if a base URL is set in the webhook plugin config */
                            url?: string;
                            /** @description Whether message events delivered over the subscription, should be packaged with the full data of those messages in-line as part of the event JSON payload. Or if the application should make separate REST calls to download that data. May not be supported on some transports. */
                            withData?: boolean;
                        };
                        /** @description The transport plugin responsible for event delivery (WebSockets, Webhooks, JMS, NATS etc.) */
                        transport?: string;
                        /**
                         * Format: date-time
                         * @description Last time the subscription was updated
                         */
                        updated?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    deleteSubscription: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The subscription ID */
                subid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': unknown;
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getSubscriptionEventsFiltered: {
        parameters: {
            query?: {
                /** @description The sequence ID in the raw event stream to start indexing through events from. Leave blank to start indexing from the most recent events */
                startsequence?: string;
                /** @description The sequence ID in the raw event stream to stop indexing through events at. Leave blank to start indexing from the most recent events */
                endsequence?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                correlator?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                created?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                id?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                reference?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                sequence?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                topic?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                tx?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                type?: string;
                /** @description Sort field. For multi-field sort use comma separated values (or multiple query values) with '-' prefix for descending */
                sort?: string;
                /** @description Ascending sort order (overrides all fields in a multi-field sort) */
                ascending?: string;
                /** @description Descending sort order (overrides all fields in a multi-field sort) */
                descending?: string;
                /** @description The number of records to skip (max: 1,000). Unsuitable for bulk operations */
                skip?: string;
                /** @description The maximum number of records to return (max: 1,000) */
                limit?: string;
                /** @description Return a total count as well as items (adds extra database processing) */
                count?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The subscription ID */
                subid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: uuid
                         * @description For message events, this is the 'header.cid' field from the referenced message. For certain other event types, a secondary object is referenced such as a token pool
                         */
                        correlator?: string;
                        /**
                         * Format: date-time
                         * @description The time the event was emitted. Not guaranteed to be unique, or to increase between events in the same order as the final sequence events are delivered to your application. As such, the 'sequence' field should be used instead of the 'created' field for querying events in the exact order they are delivered to applications
                         */
                        created?: string;
                        /**
                         * Format: uuid
                         * @description The UUID assigned to this event by your local FireFly node
                         */
                        id?: string;
                        /** @description The namespace of the event. Your application must subscribe to events within a namespace */
                        namespace?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of an resource that is the subject of this event. The event type determines what type of resource is referenced, and whether this field might be unset
                         */
                        reference?: string;
                        /**
                         * Format: int64
                         * @description A sequence indicating the order in which events are delivered to your application. Assure to be unique per event in your local FireFly database (unlike the created timestamp)
                         */
                        sequence?: number;
                        /** @description A stream of information this event relates to. For message confirmation events, a separate event is emitted for each topic in the message. For blockchain events, the listener specifies the topic. Rules exist for how the topic is set for other event types */
                        topic?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of a transaction that is event is part of. Not all events are part of a transaction
                         */
                        tx?: string;
                        /**
                         * @description All interesting activity in FireFly is emitted as a FireFly event, of a given type. The 'type' combined with the 'reference' can be used to determine how to process the event within your application
                         * @enum {string}
                         */
                        type?:
                            | 'transaction_submitted'
                            | 'message_confirmed'
                            | 'message_rejected'
                            | 'datatype_confirmed'
                            | 'identity_confirmed'
                            | 'identity_updated'
                            | 'token_pool_confirmed'
                            | 'token_pool_op_failed'
                            | 'token_transfer_confirmed'
                            | 'token_transfer_op_failed'
                            | 'token_approval_confirmed'
                            | 'token_approval_op_failed'
                            | 'contract_interface_confirmed'
                            | 'contract_api_confirmed'
                            | 'blockchain_event_received'
                            | 'blockchain_invoke_op_succeeded'
                            | 'blockchain_invoke_op_failed'
                            | 'blockchain_contract_deploy_op_succeeded'
                            | 'blockchain_contract_deploy_op_failed';
                    }[];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getTxns: {
        parameters: {
            query?: {
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                blockchainids?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                created?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                id?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                idempotencykey?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                type?: string;
                /** @description Sort field. For multi-field sort use comma separated values (or multiple query values) with '-' prefix for descending */
                sort?: string;
                /** @description Ascending sort order (overrides all fields in a multi-field sort) */
                ascending?: string;
                /** @description Descending sort order (overrides all fields in a multi-field sort) */
                descending?: string;
                /** @description The number of records to skip (max: 1,000). Unsuitable for bulk operations */
                skip?: string;
                /** @description The maximum number of records to return (max: 1,000) */
                limit?: string;
                /** @description Return a total count as well as items (adds extra database processing) */
                count?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description The blockchain transaction ID, in the format specific to the blockchain involved in the transaction. Not all FireFly transactions include a blockchain. FireFly transactions are extensible to support multiple blockchain transactions */
                        blockchainIds?: string[];
                        /**
                         * Format: date-time
                         * @description The time the transaction was created on this node. Note the transaction is individually created with the same UUID on each participant in the FireFly transaction
                         */
                        created?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly transaction
                         */
                        id?: string;
                        /** @description An optional unique identifier for a transaction. Cannot be duplicated within a namespace, thus allowing idempotent submission of transactions to the API */
                        idempotencyKey?: string;
                        /** @description The namespace of the FireFly transaction */
                        namespace?: string;
                        /**
                         * @description The type of the FireFly transaction
                         * @enum {string}
                         */
                        type?:
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
                    }[];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getTxnByID: {
        parameters: {
            query?: {
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                blockchainids?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                created?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                id?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                idempotencykey?: string;
                /** @description Data filter field. Prefixes supported: > >= < <= @ ^ ! !@ !^ */
                type?: string;
                /** @description Sort field. For multi-field sort use comma separated values (or multiple query values) with '-' prefix for descending */
                sort?: string;
                /** @description Ascending sort order (overrides all fields in a multi-field sort) */
                ascending?: string;
                /** @description Descending sort order (overrides all fields in a multi-field sort) */
                descending?: string;
                /** @description The number of records to skip (max: 1,000). Unsuitable for bulk operations */
                skip?: string;
                /** @description The maximum number of records to return (max: 1,000) */
                limit?: string;
                /** @description Return a total count as well as items (adds extra database processing) */
                count?: string;
            };
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The transaction ID */
                txnid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description The blockchain transaction ID, in the format specific to the blockchain involved in the transaction. Not all FireFly transactions include a blockchain. FireFly transactions are extensible to support multiple blockchain transactions */
                        blockchainIds?: string[];
                        /**
                         * Format: date-time
                         * @description The time the transaction was created on this node. Note the transaction is individually created with the same UUID on each participant in the FireFly transaction
                         */
                        created?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly transaction
                         */
                        id?: string;
                        /** @description An optional unique identifier for a transaction. Cannot be duplicated within a namespace, thus allowing idempotent submission of transactions to the API */
                        idempotencyKey?: string;
                        /** @description The namespace of the FireFly transaction */
                        namespace?: string;
                        /**
                         * @description The type of the FireFly transaction
                         * @enum {string}
                         */
                        type?:
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
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getTxnBlockchainEvents: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The transaction ID */
                txnid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: uuid
                         * @description The UUID assigned to the event by FireFly
                         */
                        id?: string;
                        /** @description Detailed blockchain specific information about the event, as generated by the blockchain connector */
                        info?: {
                            [key: string]: unknown;
                        };
                        /**
                         * Format: uuid
                         * @description The UUID of the listener that detected this event, or nil for built-in events in the system namespace
                         */
                        listener?: string;
                        /** @description The name of the event in the blockchain smart contract */
                        name?: string;
                        /** @description The namespace of the listener that detected this blockchain event */
                        namespace?: string;
                        /** @description The data output by the event, parsed to JSON according to the interface of the smart contract */
                        output?: {
                            [key: string]: unknown;
                        };
                        /** @description An alphanumerically sortable string that represents this event uniquely on the blockchain (convention for plugins is zero-padded values BLOCKNUMBER/TXN_INDEX/EVENT_INDEX) */
                        protocolId?: string;
                        /** @description The blockchain plugin or token service that detected the event */
                        source?: string;
                        /**
                         * Format: date-time
                         * @description The time allocated to this event by the blockchain. This is the block timestamp for most blockchain connectors
                         */
                        timestamp?: string;
                        /** @description If this blockchain event is coorelated to FireFly transaction such as a FireFly submitted token transfer, this field is set to the UUID of the FireFly transaction */
                        tx?: {
                            /** @description The blockchain transaction ID, in the format specific to the blockchain involved in the transaction. Not all FireFly transactions include a blockchain */
                            blockchainId?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the FireFly transaction
                             */
                            id?: string;
                            /** @description The type of the FireFly transaction */
                            type?: string;
                        };
                    }[];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getTxnOps: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The transaction ID */
                txnid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /**
                         * Format: date-time
                         * @description The time the operation was created
                         */
                        created?: string;
                        /** @description Operation.data */
                        data?: {
                            [key: string]: unknown;
                        };
                        /** @description Any error reported back from the plugin for this operation */
                        error?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the operation
                         */
                        id?: string;
                        /** @description The input to this operation */
                        input?: {
                            [key: string]: unknown;
                        };
                        /** @description The namespace of the operation */
                        namespace?: string;
                        /** @description Any output reported back from the plugin for this operation */
                        output?: {
                            [key: string]: unknown;
                        };
                        /** @description The plugin responsible for performing the operation */
                        plugin?: string;
                        /**
                         * Format: uuid
                         * @description If this operation was initiated as a retry to a previous operation, this field points to the UUID of the operation being retried
                         */
                        retry?: string;
                        /** @description The current status of the operation */
                        status?: string;
                        /**
                         * Format: uuid
                         * @description The UUID of the FireFly transaction the operation is part of
                         */
                        tx?: string;
                        /**
                         * @description The type of the operation
                         * @enum {string}
                         */
                        type?: 'blockchain_invoke' | 'user_operation_send';
                        /**
                         * Format: date-time
                         * @description The last update time of the operation
                         */
                        updated?: string;
                    }[];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getTxnStatus: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path: {
                /** @description The transaction ID */
                txnid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description A set of records describing the activities within the transaction known by the local FireFly node */
                        details?: {
                            /** @description If an error occurred related to the detail entry, it is included here */
                            error?: string;
                            /**
                             * Format: uuid
                             * @description The UUID of the entry referenced by this detail. The type of this record can be inferred from the entry type
                             */
                            id?: string;
                            /** @description Output details for this entry */
                            info?: {
                                [key: string]: unknown;
                            };
                            /** @description The status of the detail record. Cases where an event is required for completion, but has not arrived yet are marked with a 'pending' record */
                            status?: string;
                            /** @description A sub-type, such as an operation type, or an event type */
                            subtype?: string;
                            /**
                             * Format: date-time
                             * @description The time relevant to when the record was updated, such as the time an event was created, or the last update time of an operation
                             */
                            timestamp?: string;
                            /** @description The type of the transaction status detail record */
                            type?: string;
                        }[];
                        /** @description The overall computed status of the transaction, after analyzing the details during the API call */
                        status?: string;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getWebSockets: {
        parameters: {
            query?: never;
            header?: {
                /** @description Server-side request timeout (milliseconds, or set a custom suffix like 10s) */
                'Request-Timeout'?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        /** @description List of currently active websocket client connections */
                        connections?: {
                            /** @description The unique ID assigned to this client connection */
                            id?: string;
                            /** @description The remote address of the connected client (if available) */
                            remoteAddress?: string;
                            /** @description List of subscriptions currently started by this client */
                            subscriptions?: {
                                /** @description Indicates whether the subscription is ephemeral (vs durable) */
                                ephemeral?: boolean;
                                /** @description The subscription filter specification */
                                filter?: {
                                    /** @description Deprecated: Please use 'message.author' instead */
                                    author?: string;
                                    /** @description Filters specific to blockchain events. If an event is not a blockchain event, these filters are ignored */
                                    blockchainevent?: {
                                        /** @description Regular expression to apply to the blockchain event 'listener' field, which is the UUID of the event listener. So you can restrict your subscription to certain blockchain listeners. Alternatively to avoid your application need to know listener UUIDs you can set the 'topic' field of blockchain event listeners, and use a topic filter on your subscriptions */
                                        listener?: string;
                                        /** @description Regular expression to apply to the blockchain event 'name' field, which is the name of the event in the underlying blockchain smart contract */
                                        name?: string;
                                    };
                                    /** @description Regular expression to apply to the event type, to subscribe to a subset of event types */
                                    events?: string;
                                    /** @description Deprecated: Please use 'message.group' instead */
                                    group?: string;
                                    /** @description Filters specific to message events. If an event is not a message event, these filters are ignored */
                                    message?: {
                                        /** @description Regular expression to apply to the message 'header.author' field */
                                        author?: string;
                                        /** @description Regular expression to apply to the message 'header.group' field */
                                        group?: string;
                                        /** @description Regular expression to apply to the message 'header.tag' field */
                                        tag?: string;
                                    };
                                    /** @description Deprecated: Please use 'message.tag' instead */
                                    tag?: string;
                                    /** @description Regular expression to apply to the topic of the event, to subscribe to a subset of topics. Note for messages sent with multiple topics, a separate event is emitted for each topic */
                                    topic?: string;
                                    /** @description Deprecated: Please use 'topic' instead */
                                    topics?: string;
                                    /** @description Filters specific to events with a transaction. If an event is not associated with a transaction, this filter is ignored */
                                    transaction?: {
                                        /** @description Regular expression to apply to the transaction 'type' field */
                                        type?: string;
                                    };
                                };
                                /** @description The subscription name (for durable subscriptions only) */
                                name?: string;
                                /** @description The subscription namespace */
                                namespace?: string;
                                /**
                                 * Format: date-time
                                 * @description The time the subscription started (reset on dynamic namespace reload)
                                 */
                                startTime?: string;
                            }[];
                            /** @description The user agent of the connected client (if available) */
                            userAgent?: string;
                        }[];
                        /** @description Indicates whether the websockets plugin is enabled */
                        enabled?: boolean;
                    };
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
