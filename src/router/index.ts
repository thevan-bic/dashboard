import { LayoutRoot } from '@/layout';
import { usePreferencesStore } from '@/store';
import { NProgress } from '@/utils';
import type { RouteObject } from 'react-router';

import { createBrowserRouter, createHashRouter } from 'react-router';
import { ROOT_ROUTE_ID } from './constants';
import { baseRoutes } from './routes';

const loadedPaths = new Set<string>();

export const rootRoute: RouteObject[] = [
    {
        path: '/',
        id: ROOT_ROUTE_ID,
        Component: LayoutRoot,
        children: baseRoutes,
        loader: ({ request }) => {
            const { transitionProgress } = usePreferencesStore.getState();
            if (transitionProgress) {
                NProgress.start();
                const relativePath = new URL(request.url).pathname;
                loadedPaths.add(relativePath);
            }
            return null;
        },
        shouldRevalidate: ({ nextUrl, currentUrl }) => {
            if (nextUrl.pathname === currentUrl.pathname) {
                return false;
            }
            const { transitionProgress } = usePreferencesStore.getState();
            const isLoaded = loadedPaths.has(nextUrl.pathname);
            if (transitionProgress && !isLoaded) {
                NProgress.start();
                loadedPaths.add(nextUrl.pathname);
            }
            return false;
        },
    },
];

function createRouter() {
    if (import.meta.env.VITE_ROUTER_MODE === 'hash') {
        return createHashRouter(rootRoute, {});
    }
    return createBrowserRouter(rootRoute, {
        basename: import.meta.env.BASE_URL,
    });
}

export const router = createRouter();

export default router;
