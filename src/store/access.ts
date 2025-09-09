import type { MenuItemType } from '@/layout/layout-menu/types';
import type { AppRouteRecordRaw } from '@/router/types';

import { rootRoute, router } from '@/router';
import { ROOT_ROUTE_ID } from '@/router/constants';
import { baseRoutes } from '@/router/routes';
import { ascending, flattenRoutes, generateMenuItemsFromRoutes } from '@/router/utils';

import { create } from 'zustand';

interface AccessState {
    wholeMenus: MenuItemType[];
    routeList: AppRouteRecordRaw[];
    flatRouteList: Record<string, AppRouteRecordRaw>;
    isAccessChecked: boolean;
}

const initialState: AccessState = {
    wholeMenus: generateMenuItemsFromRoutes(baseRoutes),
    routeList: baseRoutes,
    flatRouteList: flattenRoutes(baseRoutes),
    isAccessChecked: false,
};

interface AccessAction {
    setAccessStore: (routes: AppRouteRecordRaw[]) => AccessState;
    reset: () => void;
}

export const useAccessStore = create<AccessState & AccessAction>((set) => ({
    ...initialState,

    setAccessStore: (routes) => {
        const newRoutes = ascending([...baseRoutes, ...routes]);
        router.patchRoutes(ROOT_ROUTE_ID, routes);
        const flatRouteList = flattenRoutes(newRoutes);
        const wholeMenus = generateMenuItemsFromRoutes(newRoutes);
        const newState = {
            wholeMenus,
            routeList: newRoutes,
            flatRouteList,
            isAccessChecked: true,
        };
        set(() => newState);
        return newState;
    },

    reset: () => {
        router._internalSetRoutes(rootRoute);
        set(initialState);
    },
}));
