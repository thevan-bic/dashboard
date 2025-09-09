import { PageError } from '@/components';
import { usePreferences } from '@/hooks';
import { AuthGuard } from '@/router/guard';
import { whiteRouteNames } from '@/router/routes';
import { useAuthStore, useUserStore } from '@/store';
import { NProgress, isString, toggleHtmlClass } from '@/utils';

import { getProperty } from '@/utils/get-property';
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useMatches } from 'react-router';

export default function LayoutRoot() {
    const matches = useMatches();
    const { t } = useTranslation();
    const location = useLocation();
    const { language, isDark, enableDynamicTitle } = usePreferences();
    const isLogin = useAuthStore((state) => Boolean(state.token));
    const isAuthorized = useUserStore((state) => Boolean(state.id));

    useEffect(() => {
        if (!enableDynamicTitle) {
            return;
        }
        const authGuardDependencies =
            !whiteRouteNames.includes(location.pathname) && isLogin && !isAuthorized;
        if (!authGuardDependencies) {
            const currentRoute = matches[matches.length - 1];
            const documentTitle = currentRoute.handle?.title as React.ReactElement | string;
            const newTitle = isString(documentTitle)
                ? documentTitle
                : getProperty<string>(documentTitle?.props, 'children', 'common.unknown');
            document.title = t(newTitle) || document.title;
        }
    }, [enableDynamicTitle, language, location]);

    useEffect(() => {
        if (isDark) {
            toggleHtmlClass('dark').add();
        } else {
            toggleHtmlClass('dark').remove();
        }
    }, [isDark]);

    useEffect(() => {
        NProgress.done();
    }, [location.pathname]);

    return (
        <ErrorBoundary FallbackComponent={PageError}>
            <AuthGuard>
                <Outlet />
            </AuthGuard>
        </ErrorBoundary>
    );
}
