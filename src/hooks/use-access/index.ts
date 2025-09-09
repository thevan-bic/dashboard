import { useUserStore } from '@/store';
import { isString } from '@/utils';

import globalLogger from '@/lib/logger/global';
import { useMatches } from 'react-router';
import { AccessControlRoles, accessControlCodes } from './constants';

export * from './constants';

export function useAccess() {
    const matches = useMatches();
    const { roles: userRoles } = useUserStore();
    const currentRoute = matches[matches.length - 1];

    const hasAccessByCodes = (permission?: string | Array<string>) => {
        if (!permission) {
            return false;
        }
        const metaAuth = currentRoute?.handle?.permissions;
        if (!metaAuth) {
            return false;
        }
        permission = isString(permission) ? [permission] : permission;
        permission = permission.map((item) => item.toLowerCase());
        if (import.meta.env.DEV) {
            for (const code of permission) {
                if (!Object.values(accessControlCodes).includes(code)) {
                    globalLogger.warn(
                        `[hasAccessByCodes]: '${code}' is not a valid permission code`,
                    );
                }
            }
        }
        const isAuth = metaAuth.some((item) => permission.includes(item.toLowerCase()));
        return isAuth;
    };

    const hasAccessByRoles = (roles?: string | Array<string>) => {
        if (!roles || !userRoles) {
            return false;
        }
        roles = isString(roles) ? [roles] : roles;
        roles = roles.map((item) => item.toLowerCase());
        if (import.meta.env.DEV) {
            for (const roleItem of roles) {
                if (!Object.values(AccessControlRoles).includes(roleItem)) {
                    globalLogger.warn(`[hasAccessByRoles]: '${roleItem}' is not a valid role`);
                }
            }
        }
        const isAuth = userRoles.some((item) => roles.includes(item.toLowerCase()));
        return isAuth;
    };

    return { hasAccessByCodes, hasAccessByRoles };
}
