import type { ReactNode } from 'react';

import { useAccess } from '@/hooks';

interface AccessControlProps {
    type?: 'code' | 'role';
    codes?: string | string[];
    children?: ReactNode;
    fallback?: ReactNode;
}

export function AccessControl({ type = 'code', codes, children, fallback }: AccessControlProps) {
    const { hasAccessByCodes, hasAccessByRoles } = useAccess();

    if (!children) {
        return null;
    }

    if (!type || type === 'code') {
        return hasAccessByCodes(codes) ? children : fallback;
    }

    if (type === 'role') {
        return hasAccessByRoles(codes) ? children : fallback;
    }

    return fallback;
}
