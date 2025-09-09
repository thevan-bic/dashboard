import { useCurrentRoute } from '@/hooks';
import { hideLoading, setupLoading } from '@/plugins';
import { exception403Path, exception500Path, loginPath } from '@/router/extra-info';
import { accessRoutes, whiteRouteNames } from '@/router/routes';
import { generateRoutesByFrontend } from '@/router/utils';
import { useAccessStore, useAuthStore, usePreferencesStore, useUserStore } from '@/store';

import { useEffect } from 'react';
import { Navigate, matchRoutes, useLocation, useNavigate, useSearchParams } from 'react-router';

import { removeDuplicateRoutes } from './utils';

const noLoginWhiteList = Array.from(whiteRouteNames).filter((item) => item !== loginPath);

interface AuthGuardProps {
    children?: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const currentRoute = useCurrentRoute();
    const { pathname, search } = useLocation();
    const isLogin = useAuthStore((state) => Boolean(state.token));
    const isAuthorized = useUserStore((state) => Boolean(state.id));
    const getUserInfo = useUserStore((state) => state.getUserInfo);
    const userRoles = useUserStore((state) => state.roles);
    const { setAccessStore, isAccessChecked, routeList } = useAccessStore();
    const { enableFrontendAceess } = usePreferencesStore((state) => state);

    const isPathInNoLoginWhiteList = noLoginWhiteList.includes(pathname);

    useEffect(() => {
        async function fetchUserInfoAndRoutes() {
            setupLoading();

            const promises = [];

            // @ts-ignore
            promises.push(getUserInfo());

            // if (enableBackendAccess && isSendRoutingRequest) {
            //     promises.push(fetchAsyncRoutes());
            // }

            const results = await Promise.allSettled(promises);
            // const [userInfoResult] = results;
            const routes = [];
            const latestRoles = ['admin'];
            // if ('fulfilled' === userInfoResult.status && 'roles' in userInfoResult.value) {
            //     latestRoles.push(...(userInfoResult.value?.roles ?? []));
            // }
            // if (
            //     enableBackendAccess &&
            //     !isSendRoutingRequest &&
            //     'fulfilled' === userInfoResult.status &&
            //     'menus' in userInfoResult.value
            // ) {
            //     routes.push(
            //         ...(await generateRoutesFromBackend(userInfoResult.value?.menus ?? [])),
            //     );
            // }
            // if (
            //     enableBackendAccess &&
            //     isSendRoutingRequest &&
            //     'fulfilled' === routeResult.status &&
            //     'result' in routeResult.value
            // ) {
            //     routes.push(...(await generateRoutesFromBackend(routeResult.value?.result ?? [])));
            // }

            if (enableFrontendAceess) {
                // @ts-ignore
                routes.push(...generateRoutesByFrontend(accessRoutes, latestRoles));
            }

            const uniqueRoutes = removeDuplicateRoutes(routes);
            setAccessStore(uniqueRoutes);

            const hasError = results.some((result) => result.status === 'rejected');
            if (hasError) {
                const unAuthorized = results.some(
                    (result: any) => result.reason.response.status === 401,
                );
                if (!unAuthorized) {
                    return navigate(exception500Path);
                }
            }

            navigate(`${pathname}${search}`, {
                replace: true,
                flushSync: true,
            });
        }

        if (!whiteRouteNames.includes(pathname) && isLogin && !isAuthorized) {
            fetchUserInfoAndRoutes();
        }
    }, [pathname, isLogin, isAuthorized]);

    if (isPathInNoLoginWhiteList) {
        hideLoading();
        return children;
    }

    if (!isLogin) {
        hideLoading();
        if (pathname !== loginPath) {
            const redirectPath =
                pathname.length > 1 ? `${loginPath}?redirect=${pathname}${search}` : loginPath;
            return <Navigate to={redirectPath} replace />;
        } else {
            return children;
        }
    }

    if (pathname === loginPath) {
        const redirectPath = searchParams.get('redirect');
        if (redirectPath?.length && redirectPath !== pathname) {
            return <Navigate to={redirectPath} replace />;
        }
        return <Navigate to={import.meta.env.VITE_BASE_HOME_PATH} replace />;
    }

    if (!isAuthorized) {
        return null;
    }
    if (!isAccessChecked) {
        return null;
    }

    hideLoading();

    if (pathname === '/') {
        return <Navigate to={import.meta.env.VITE_BASE_HOME_PATH} replace />;
    }

    const routeRoles = currentRoute?.handle?.roles;
    const ignoreAccess = currentRoute?.handle?.ignoreAccess;

    if (ignoreAccess === true) {
        return children;
    }

    const matches = matchRoutes(routeList, pathname) ?? [];

    // const hasChildren = matches[matches.length - 1]?.route?.children?.filter(
    //     (item) => !item.index,
    // )?.length;
    // if (hasChildren && hasChildren > 0) {
    //     return <Navigate to={exception404Path} replace />;
    // }

    const hasRoutePermission = userRoles.some((role) => routeRoles?.includes(role));
    if (routeRoles && routeRoles.length && !hasRoutePermission) {
        return <Navigate to={exception403Path} replace />;
    }

    return children;
}
