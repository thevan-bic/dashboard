import type { AppRouteRecordRaw } from '@/router/types';

export function addRouteIdByPath(routes: AppRouteRecordRaw[], parentId = '') {
    return routes.map((route) => {
        const newRoute = { ...route, id: route.index ? `${parentId}/` : route.path };

        if (newRoute.children && newRoute.children.length > 0) {
            newRoute.children = addRouteIdByPath(newRoute.children, route.path);
        }

        return newRoute;
    });
}
