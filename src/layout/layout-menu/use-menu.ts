import type { MenuProps } from 'antd';

import { useCurrentRoute } from '@/hooks';
import { removeTrailingSlash } from '@/router/utils';
import { useAccessStore } from '@/store';

import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { useLayout } from '../hooks';
import { findDeepestFirstItem, findRootMenuByPath, translateMenus } from './utils';

export function useMenu() {
    const wholeMenus = useAccessStore((state) => state.wholeMenus);
    const { isMixedNav, isTwoColumnNav } = useLayout();
    const [rootMenuKey, setRootMenuKey] = useState('');
    const navigate = useNavigate();
    const { t } = useTranslation();
    const translatedMenus = translateMenus(wholeMenus, t);

    const { pathname } = useCurrentRoute();
    const shouldSplitMenuItems = useMemo(
        () => isMixedNav || isTwoColumnNav,
        [isMixedNav, isTwoColumnNav],
    );
    const splitSideNavItems = useMemo(() => {
        const foundMenu = translatedMenus.find((item) => item?.key === rootMenuKey);
        if (!foundMenu) {
            return [];
        }
        return foundMenu?.children ?? [foundMenu];
    }, [rootMenuKey, translatedMenus]);

    const topNavItems = useMemo(() => {
        if (!shouldSplitMenuItems) {
            return translatedMenus;
        }
        return translatedMenus.map((item) => {
            return {
                ...item,
                children: undefined,
            };
        });
    }, [shouldSplitMenuItems, translatedMenus]);

    const sideNavItems = useMemo(() => {
        return shouldSplitMenuItems ? splitSideNavItems : translatedMenus;
    }, [shouldSplitMenuItems, splitSideNavItems, translatedMenus]);

    const handleMenuSelect = (key: string, mode: MenuProps['mode']) => {
        if (key === removeTrailingSlash(pathname)) {
            return;
        }
        if (!shouldSplitMenuItems || mode !== 'horizontal') {
            if (/http(s)?:/.test(key)) {
                window.open(key);
            } else {
                navigate(key);
            }
        } else {
            const rootMenu = translatedMenus.find((item) => item?.key === key);
            const targetMenu = findDeepestFirstItem(rootMenu?.children ?? []);
            if (!targetMenu) {
                navigate(key);
            } else {
                navigate(targetMenu.key);
            }
        }
    };

    useEffect(() => {
        if (shouldSplitMenuItems) {
            const { rootMenuPath } = findRootMenuByPath(
                translatedMenus,
                removeTrailingSlash(pathname),
            );
            if (rootMenuPath) {
                setRootMenuKey(rootMenuPath);
            }
        }
    }, [shouldSplitMenuItems, pathname]);

    return {
        handleMenuSelect,
        topNavItems,
        sideNavItems,
    };
}
