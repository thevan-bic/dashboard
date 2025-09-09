import type { AppRouteRecordRaw } from '@/router/types';

import { filterTree } from '@/utils';

export function generateRoutesByFrontend(routes: AppRouteRecordRaw[], roles: string[]) {
    return filterTree(routes, (route) => {
        return hasAuthority(route, roles);
    });
}

function hasAuthority(route: AppRouteRecordRaw, accesses: string[]) {
    const authority = route.handle?.roles;
    if (!authority) {
        return true;
    }
    return accesses.some((value) => authority.includes(value));
}
