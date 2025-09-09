export const mapType = (type: unknown): string => {
    switch (type) {
        case 'transaction_submitted':
            return 'Transaction submitted';
        case 'contract_interface_confirmed':
            return 'Contract interface confirmed';
        case 'contract_api_confirmed':
            return 'Contract api confirmed';
        case 'blockchain_event_received':
            return 'Blockchain event received';
        case 'blockchain_invoke_op_succeeded':
            return 'Blockchain invoke op succeeded';
        case 'blockchain_invoke_op_failed':
            return 'Blockchain invoke op failed';
        case 'user_operation_send':
            return 'User operation send';
        default:
            return 'Unknown';
    }
};
