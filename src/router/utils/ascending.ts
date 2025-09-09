import type { AppRouteRecordRaw } from '@/router/types';

export function ascending(arr: AppRouteRecordRaw[]) {
    return arr
        .map((routeItem, routeIndex) => ({
            ...routeItem,
            handle: {
                ...routeItem.handle,
                order: routeItem?.handle?.order || routeIndex + 2,
            },
        }))
        .sort((a, b) => {
            return a?.handle?.order - b?.handle?.order;
        });
}
