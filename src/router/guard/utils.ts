import globalLogger from '@/lib/logger/global';
import type { AppRouteRecordRaw } from '@/router/types';

export function removeDuplicateRoutes(routes: AppRouteRecordRaw[]) {
    const pathSet = new Set<string>();
    return routes.filter((route) => {
        if (pathSet.has(route.path!)) {
            if (import.meta.env.DEV) {
                globalLogger.warn(`[auth-guard]: Duplicate route path: ${route.path}`);
            }
            return false;
        }
        pathSet.add(route.path!);
        return true;
    });
}
