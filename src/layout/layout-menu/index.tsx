import type { MenuProps } from 'antd';
import type { MenuItemType } from './types';

import { useDeviceType, usePreferences } from '@/hooks';

import { Menu } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useMatches } from 'react-router';

import { findChildrenLen } from './utils';

interface LayoutMenuProps {
    mode?: MenuProps['mode'];
    autoExpandCurrentMenu?: boolean;
    menus?: MenuItemType[];
    handleMenuSelect?: (key: string, mode: MenuProps['mode']) => void;
}

const emptyArray: MenuItemType[] = [];
export default function LayoutMenu({
    mode = 'inline',
    autoExpandCurrentMenu,
    handleMenuSelect,
    menus = emptyArray,
}: LayoutMenuProps) {
    const matches = useMatches();
    const { sidebarCollapsed, sidebarTheme, isDark, accordion } = usePreferences();
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const { isMobile } = useDeviceType();

    const getSelectedKeys = useMemo(() => matches.map((item) => item.id), [matches]);

    const menuInlineCollapsedProp = useMemo(() => {
        if (mode === 'inline') {
            return { inlineCollapsed: isMobile ? false : sidebarCollapsed };
        }
        return {};
    }, [mode, isMobile, sidebarCollapsed]);

    const handleOpenChange: MenuProps['onOpenChange'] = (keys) => {
        if (accordion || sidebarCollapsed) {
            const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
            const shouldKeepOpen = latestOpenKey
                ? Boolean(findChildrenLen(menus, latestOpenKey))
                : false;

            setOpenKeys(shouldKeepOpen ? [latestOpenKey!] : []);
        } else {
            setOpenKeys(keys);
        }
    };

    const menuOpenProps = useMemo(() => {
        if (autoExpandCurrentMenu) {
            return {
                openKeys,
                onOpenChange: handleOpenChange,
            };
        }
        return {};
    }, [autoExpandCurrentMenu, openKeys, handleOpenChange]);

    useEffect(() => {
        if (!sidebarCollapsed) {
            setOpenKeys((prevOpenKeys) => {
                if (!accordion && prevOpenKeys.length !== 0) {
                    return prevOpenKeys;
                }
                return matches.map((item) => item.id);
            });
        }
    }, [matches, sidebarCollapsed]);

    return (
        <Menu
            className="border-none! min-w-0 flex-auto"
            inlineIndent={16}
            {...menuInlineCollapsedProp}
            style={{ height: isMobile ? '100%' : 'initial' }}
            mode={mode}
            theme={isDark ? 'dark' : sidebarTheme}
            items={menus}
            {...menuOpenProps}
            selectedKeys={getSelectedKeys}
            onClick={({ key }) => handleMenuSelect?.(key, mode)}
        />
    );
}
