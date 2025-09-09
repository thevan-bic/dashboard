import { Iframe } from '@/components/iframe';
import { ContainerLayout } from '@/layout';
import globalLogger from '@/lib/logger/global';
import type { AppRouteRecordRaw } from '@/router/types';
import { lazy } from 'react';
import { Outlet } from 'react-router';
import { addRouteIdByPath } from './add-route-id-by-path';

const ExceptionUnknownComponent = lazy(() => import('@/pages/exception/unknown-component'));

const pageModules = import.meta.glob(['/src/pages/**/*.tsx', '!/src/pages/exception/**/*.tsx']);

export async function generateRoutesFromBackend(backendRoutes: Array<AppRouteRecordRaw>) {
    const pageModulePaths = Object.keys(pageModules);
    if (!backendRoutes?.length) {
        return [];
    }

    const loadRouteComponent = async (route: AppRouteRecordRaw, componentPath: string) => {
        const modulePath = `/src/pages${componentPath}/index.tsx`;
        const moduleIndex = pageModulePaths.findIndex((path) => path === modulePath);

        if (moduleIndex !== -1) {
            const lazyComponent = pageModules[pageModulePaths[moduleIndex]];
            route.Component = lazy(lazyComponent as any);
        } else {
            globalLogger.warn(`[Frontend component not found]: ${componentPath}`);
            route.Component = ExceptionUnknownComponent;
        }
    };

    const transformRoute = async (
        route: AppRouteRecordRaw,
        parentPath?: string,
    ): Promise<AppRouteRecordRaw> => {
        const transformedRoute: AppRouteRecordRaw = {
            ...route,
            handle: {
                ...route.handle,
                backstage: true,
            },
        };

        if (transformedRoute.index === true && parentPath) {
            await loadRouteComponent(transformedRoute, parentPath);
        } else if (transformedRoute.handle?.iframeLink) {
            transformedRoute.Component = Iframe;
        } else if (transformedRoute.handle?.externalLink) {
        } else if (transformedRoute.children?.length) {
            transformedRoute.Component = parentPath ? Outlet : ContainerLayout;
        } else {
            await loadRouteComponent(transformedRoute, transformedRoute.path!);
        }

        if (transformedRoute.children?.length) {
            transformedRoute.children = await Promise.all(
                transformedRoute.children.map((child) =>
                    transformRoute(child, transformedRoute.path),
                ),
            );
        }

        return transformedRoute;
    };

    const normalizeRouteStructure = (route: AppRouteRecordRaw): AppRouteRecordRaw => {
        if (!route.children?.length) {
            return {
                ...route,
                children: [
                    {
                        index: true,
                        handle: { ...route.handle },
                    },
                ],
            } as AppRouteRecordRaw;
        }
        return route;
    };

    const normalizedRoutes = backendRoutes.map(normalizeRouteStructure);
    const transformedRoutes = await Promise.all(
        normalizedRoutes.map((route) => transformRoute(route)),
    );

    return addRouteIdByPath(transformedRoutes);
}
