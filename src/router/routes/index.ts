import type { AppRouteRecordRaw, RouteFileModule } from '@/router/types';

import { loginPath } from '@/router/extra-info';
import { ascending, mergeRouteModules } from '@/router/utils';
import { coreRoutes } from './core';

export const dynamicRouteFiles: RouteFileModule = import.meta.glob('./modules/**/*.ts', {
    eager: true,
});

export const dynamicRoutes: AppRouteRecordRaw[] = mergeRouteModules(dynamicRouteFiles);

const baseRoutes = ascending([...coreRoutes]);

const accessRoutes = [...dynamicRoutes];

const whiteRouteNames = [loginPath]; // ...traverseTreeValues(externalRoutes, (route) => route.path)

export { accessRoutes, baseRoutes, whiteRouteNames };
