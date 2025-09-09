import type { TabItemProps } from '@/store';
import type { TabsProps } from 'antd';

import { useCurrentRoute } from '@/hooks';
import { removeTrailingSlash } from '@/router/utils';
import { useAccessStore, usePreferencesStore, useTabsStore } from '@/store';
import { isString } from '@/utils';

import { RedoOutlined } from '@ant-design/icons';
import { Button, Tabs } from 'antd';
import { clsx } from 'clsx';
import { isValidElement, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';

import { getProperty } from '@/utils/get-property';
import { tabbarHeight } from '../constants';
import { DraggableTabBar } from './components/draggable-tab-bar';
import { TabMaximize } from './components/tab-maximize';
import { TabOptions } from './components/tab-options';
import { TabActionKeys, useDropdownMenu } from './hooks/use-dropdown-menu';
import { useStyles } from './style';

export default function LayoutTabbar() {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const currentRoute = useCurrentRoute();

    const { tabbarStyleType, tabbarShowMaximize, tabbarShowMore } = usePreferencesStore();
    const { flatRouteList } = useAccessStore();
    const { activeKey, isRefresh, setActiveKey, setIsRefresh, openTabs, addTab, insertBeforeTab } =
        useTabsStore();
    const [items, onClickMenu] = useDropdownMenu();

    const tabItems: TabItemProps[] = Array.from(openTabs.values()).map((item) => ({
        ...item,
        label: (
            <div className="relative flex items-center gap-1">
                {isString(item.label) ? t(item.label) : item.label}
            </div>
        ),
    }));

    useEffect(() => {
        if (isRefresh) {
            const timer = setTimeout(() => {
                setIsRefresh(false);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [isRefresh, setIsRefresh]);

    const handleChangeTabs = useCallback(
        (key: string) => {
            const historyState = openTabs.get(key)?.historyState || { search: '', hash: '' };
            navigate(key + historyState.search + historyState.hash);
        },
        [openTabs],
    );

    const handleEditTabs = useCallback<Required<TabsProps>['onEdit']>(
        (key, action) => {
            if (action === 'remove') {
                onClickMenu(TabActionKeys.CLOSE, key as string);
            }
        },
        [onClickMenu],
    );

    const renderTabBar = useCallback<Required<TabsProps>['renderTabBar']>(
        (tabBarProps, DefaultTabBar) => {
            return (
                <DraggableTabBar
                    DefaultTabBar={DefaultTabBar}
                    tabBarProps={tabBarProps}
                    items={items}
                    tabItems={tabItems}
                    onClickMenu={onClickMenu}
                />
            );
        },
        [tabItems, items, onClickMenu],
    );

    const tabBarExtraContent = useMemo(
        () => ({
            right: (
                <div className="flex items-center" style={{ height: tabbarHeight }}>
                    <Button
                        icon={
                            <RedoOutlined
                                rotate={270}
                                className={clsx({ 'animate-spin': isRefresh })}
                            />
                        }
                        size="middle"
                        type="text"
                        className={clsx(
                            'rounded-none h-full border-l border-l-color-border-secondary',
                        )}
                        onClick={() => onClickMenu(TabActionKeys.REFRESH, activeKey)}
                    />
                    {tabbarShowMaximize ? (
                        <TabMaximize className="h-full border-l rounded-none border-l-color-border-secondary" />
                    ) : null}
                    {tabbarShowMore ? (
                        <TabOptions
                            activeKey={activeKey}
                            className="h-full border-l rounded-none border-l-color-border-secondary"
                        />
                    ) : null}
                </div>
            ),
        }),
        [isRefresh, activeKey, onClickMenu, tabbarShowMore, tabbarShowMaximize],
    );

    useEffect(() => {
        const historyState = openTabs.get(activeKey)?.historyState || { search: '', hash: '' };
        const activeFullPath = activeKey + historyState.search + historyState.hash;
        const currentFullpath = location.pathname + location.search + location.hash;
        if (activeKey.length > 0 && activeFullPath !== currentFullpath) {
            navigate(activeFullPath);
        }
    }, [activeKey]);

    useEffect(() => {
        const isDefaultTabMissing = !Array.from(openTabs.keys()).includes(
            import.meta.env.VITE_BASE_HOME_PATH,
        );

        if (isDefaultTabMissing) {
            const routeTitle = flatRouteList[import.meta.env.VITE_BASE_HOME_PATH]?.handle?.title;
            insertBeforeTab(import.meta.env.VITE_BASE_HOME_PATH, {
                key: import.meta.env.VITE_BASE_HOME_PATH,
                label: isValidElement(routeTitle)
                    ? getProperty<string>(routeTitle?.props, 'children', 'common.unknown')
                    : (routeTitle as string),
                closable: false,
                draggable: false,
            });
        }
    }, [openTabs, insertBeforeTab, flatRouteList]);

    useEffect(() => {
        const activePath = location.pathname;
        const normalizedPath = removeTrailingSlash(activePath);
        if (normalizedPath !== activeKey) {
            setActiveKey(normalizedPath);

            const routeTitle = currentRoute.handle?.title;

            addTab(normalizedPath, {
                key: normalizedPath,
                label: isValidElement(routeTitle)
                    ? getProperty<string>(routeTitle?.props, 'children', 'common.unknown')
                    : (routeTitle as string),
                historyState: { search: location.search, hash: location.hash },
                closable: normalizedPath !== import.meta.env.VITE_BASE_HOME_PATH,
                draggable: normalizedPath !== import.meta.env.VITE_BASE_HOME_PATH,
            });
        }
    }, [location, currentRoute, setActiveKey, addTab]);

    return (
        <div className={classes.tabsContainer}>
            <Tabs
                className={clsx(
                    classes.resetTabs,
                    tabbarStyleType === 'brisk' ? classes.brisk : '',
                    tabbarStyleType === 'plain' ? classes.plain : '',
                    tabbarStyleType === 'chrome' ? classes.chrome : '',
                    tabbarStyleType === 'card' ? classes.card : '',
                )}
                size="small"
                hideAdd
                animated
                onChange={handleChangeTabs}
                activeKey={removeTrailingSlash(activeKey)}
                type="editable-card"
                onEdit={handleEditTabs}
                items={tabItems}
                renderTabBar={renderTabBar}
                tabBarExtraContent={tabBarExtraContent}
            />
        </div>
    );
}
