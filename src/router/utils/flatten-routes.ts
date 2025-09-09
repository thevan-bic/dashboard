import type { AppRouteRecordRaw } from '@/router/types';

export function flattenRoutes(routes: AppRouteRecordRaw[]) {
    const result: Record<string, AppRouteRecordRaw> = {};

    function traverse(items: AppRouteRecordRaw[], parent?: AppRouteRecordRaw) {
        items.forEach((item) => {
            if (item.index && parent?.path) {
                result[`${parent.path}/`] = item;
            }
            if (item.path) {
                result[item.path] = item;
            }
            if (item.children && item.children.length > 0) {
                traverse(item.children, item);
            }
        });
    }

    traverse(routes);
    return result;
}
