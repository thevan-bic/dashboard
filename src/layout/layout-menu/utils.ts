import type { MenuItemType } from './types';

import { isString } from '@/utils';
import { getProperty } from '@/utils/get-property';
import { cloneElement, isValidElement } from 'react';

export function translateMenus(menus: MenuItemType[], t: (key: string) => string): MenuItemType[] {
    return menus.map((menu) => {
        let translatedLabel: React.ReactNode = menu.label;
        if (isValidElement(menu.label)) {
            translatedLabel = cloneElement(
                menu.label,
                {},
                t(getProperty<string>(menu.label.props, 'children', 'common.unknown')),
            );
        }
        if (isString(menu.label)) {
            translatedLabel = t(menu.label);
        }
        const translatedMenu = {
            ...menu,
            label: translatedLabel,
        };

        if (menu.children && menu.children.length > 0) {
            translatedMenu.children = translateMenus(menu.children, t);
        }

        return translatedMenu;
    });
}

export function findMenuByPath(list: MenuItemType[], path?: string): MenuItemType | null {
    for (const menu of list) {
        if (menu.key === path) {
            return menu;
        }
        const findMenu = menu.children && findMenuByPath(menu.children, path);
        if (findMenu) {
            return findMenu;
        }
    }
    return null;
}

export function findRootMenuByPath(
    menus: MenuItemType[],
    path?: string,
): {
    findMenu: MenuItemType | null;
    rootMenu: MenuItemType | null;
    rootMenuPath: string | null;
} {
    let findMenu: MenuItemType | null = null;
    let rootMenu: MenuItemType | null = null;
    let rootMenuPath: string | null = null;

    if (!path) {
        return {
            findMenu: null,
            rootMenu: null,
            rootMenuPath: null,
        };
    }

    const find = (
        list: MenuItemType[],
        targetPath: string,
        parents: MenuItemType[] = [],
    ): boolean => {
        for (const menu of list) {
            if (menu.key === targetPath) {
                findMenu = menu;
                if (parents.length === 0) {
                    rootMenu = menu;
                    rootMenuPath = menu.key;
                } else {
                    rootMenu = parents[0];
                    rootMenuPath = parents[0].key;
                }
                return true;
            }

            if (menu.children && menu.children.length > 0) {
                const found = find(menu.children, targetPath, [...parents, menu]);
                if (found) {
                    return true;
                }
            }
        }
        return false;
    };

    find(menus, path);

    return {
        findMenu,
        rootMenu,
        rootMenuPath,
    };
}

export function findDeepestFirstItem(splitSideNavItems: MenuItemType[]): MenuItemType | null {
    if (!splitSideNavItems || splitSideNavItems.length === 0) {
        return null;
    }

    const firstItem = splitSideNavItems[0];

    if (firstItem.children && firstItem.children.length > 0) {
        return findDeepestFirstItem(firstItem.children);
    }

    return firstItem;
}

export function findChildrenLen(menuItems: MenuItemType[], targetKey: string) {
    const subRouteChildren: string[] = [];

    for (const { children, key } of menuItems) {
        if (Array.isArray(children) && children.length) {
            subRouteChildren.push(key);
        }
    }

    return subRouteChildren.includes(targetKey);
}
