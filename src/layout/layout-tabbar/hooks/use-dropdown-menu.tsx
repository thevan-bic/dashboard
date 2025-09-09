import { useTabsStore } from '@/store';
import {
    CloseOutlined,
    RedoOutlined,
    SwapOutlined,
    VerticalAlignBottomOutlined,
    VerticalAlignMiddleOutlined,
    VerticalAlignTopOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useKeepAliveContext } from 'keepalive-for-react';
import { useCallback, useMemo } from 'react';

import { useTranslation } from 'react-i18next';

const homePath = import.meta.env.VITE_BASE_HOME_PATH;
export const TabActionKeys = {
    REFRESH: 'refresh',
    CLOSE: 'close',
    CLOSE_RIGHT: 'closeRight',
    CLOSE_LEFT: 'closeLeft',
    CLOSE_OTHERS: 'closeOthers',
    CLOSE_ALL: 'closeAll',
} as const;

export function useDropdownMenu() {
    const { t } = useTranslation();
    const {
        openTabs,
        activeKey,
        removeTab,
        closeLeftTabs,
        closeRightTabs,
        closeOtherTabs,
        closeAllTabs,
        setIsRefresh,
    } = useTabsStore();
    const { refresh } = useKeepAliveContext();
    const items = useCallback(
        (tabKey: string): MenuProps['items'] => {
            const isOnlyTab = openTabs.size === 2 && openTabs.has(homePath);
            const isLastTab = Array.from(openTabs.keys()).pop() === tabKey;
            return [
                {
                    key: TabActionKeys.REFRESH,
                    icon: <RedoOutlined rotate={270} />,
                    label: t('preferences.tabbar.contextMenu.refresh'),
                    disabled: activeKey !== tabKey,
                },
                {
                    key: TabActionKeys.CLOSE,
                    icon: <CloseOutlined />,
                    label: t('preferences.tabbar.contextMenu.close'),
                    disabled: tabKey === homePath,
                },
                { type: 'divider' },
                {
                    key: TabActionKeys.CLOSE_LEFT,
                    icon: <VerticalAlignBottomOutlined rotate={90} />,
                    label: t('preferences.tabbar.contextMenu.closeLeft'),
                    disabled: tabKey === homePath || isOnlyTab,
                },
                {
                    key: TabActionKeys.CLOSE_RIGHT,
                    icon: <VerticalAlignTopOutlined rotate={90} />,
                    label: t('preferences.tabbar.contextMenu.closeRight'),
                    disabled: tabKey === homePath || isOnlyTab || isLastTab,
                },
                { type: 'divider' },
                {
                    key: TabActionKeys.CLOSE_OTHERS,
                    icon: <VerticalAlignMiddleOutlined rotate={90} />,
                    label: t('preferences.tabbar.contextMenu.closeOthers'),
                    disabled: tabKey === homePath || isOnlyTab,
                },
                {
                    key: TabActionKeys.CLOSE_ALL,
                    icon: <SwapOutlined />,
                    label: t('preferences.tabbar.contextMenu.closeAll'),
                    disabled: tabKey === homePath,
                },
            ];
        },
        [t, activeKey, homePath, openTabs],
    );

    const actions = useMemo(
        () => ({
            [TabActionKeys.REFRESH]: (currentPath: string) => {
                refresh(currentPath);
                setIsRefresh(true);
            },
            [TabActionKeys.CLOSE]: removeTab,
            [TabActionKeys.CLOSE_RIGHT]: closeRightTabs,
            [TabActionKeys.CLOSE_LEFT]: closeLeftTabs,
            [TabActionKeys.CLOSE_OTHERS]: closeOtherTabs,
            [TabActionKeys.CLOSE_ALL]: closeAllTabs,
        }),
        [removeTab, closeRightTabs, closeLeftTabs, closeOtherTabs, closeAllTabs],
    );

    const onClickMenu = useCallback(
        (menuKey: string, nodeKey: string) => {
            const action = actions[menuKey as keyof typeof actions];
            if (action) {
                action(nodeKey);
            }
        },
        [actions],
    );

    return [items, onClickMenu] as const;
}
