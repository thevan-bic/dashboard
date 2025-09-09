import { Scrollbar } from '@/components';
import { useLayoutContentStyle } from '@/hooks';
import { LayoutFooter } from '@/layout';
import { CSS_VARIABLE_LAYOUT_CONTENT_HEIGHT, ELEMENT_ID_MAIN_CONTENT } from '@/layout/constants';
import { useAccessStore, usePreferencesStore, useTabsStore } from '@/store';

import { theme } from 'antd';
import KeepAlive, { useKeepAliveRef } from 'keepalive-for-react';
import { useEffect, useMemo } from 'react';

import { useLocation, useOutlet } from 'react-router';

export default function LayoutContent() {
    const {
        token: { colorBgLayout },
    } = theme.useToken();
    const { pathname, search } = useLocation();
    const outlet = useOutlet();
    const { contentElement } = useLayoutContentStyle();

    const aliveRef = useKeepAliveRef();
    const isRefresh = useTabsStore((state) => state.isRefresh);
    const openTabs = useTabsStore((state) => state.openTabs);
    const tabbarEnable = usePreferencesStore((state) => state.tabbarEnable);
    const flatRouteList = useAccessStore((state) => state.flatRouteList);
    const transitionName = usePreferencesStore((state) => state.transitionName);
    const transitionEnable = usePreferencesStore((state) => state.transitionEnable);
    const enableFooter = usePreferencesStore((state) => state.enableFooter);
    const fixedFooter = usePreferencesStore((state) => state.fixedFooter);

    const cacheKey = useMemo(() => {
        return pathname + search;
    }, [pathname, search]);

    useEffect(() => {
        const cacheNodes = aliveRef.current?.getCacheNodes?.();
        cacheNodes?.forEach((node) => {
            if (!openTabs.has(node.cacheKey)) {
                aliveRef.current?.destroy(node.cacheKey);
            }
        });
    }, [openTabs]);

    useEffect(() => {
        if (!tabbarEnable) {
            const cacheNodes = aliveRef.current?.getCacheNodes?.();
            cacheNodes?.forEach((node) => {
                if (node.cacheKey !== cacheKey) {
                    aliveRef.current?.destroy(node.cacheKey);
                }
            });
        }
    }, [tabbarEnable]);

    useEffect(() => {
        if (tabbarEnable && isRefresh) {
            aliveRef.current?.refresh();
        }
    }, [isRefresh]);

    const keepAliveExclude = useMemo(() => {
        if (!tabbarEnable) {
            return Object.keys(flatRouteList);
        }
        return Object.entries(flatRouteList).reduce<string[]>((acc, [key, value]) => {
            if (value.handle.keepAlive === false) {
                acc.push(key);
            }
            return acc;
        }, []);
    }, [flatRouteList, tabbarEnable]);

    return (
        <main
            id={ELEMENT_ID_MAIN_CONTENT}
            ref={contentElement}
            className="relative overflow-y-auto overflow-x-hidden grow"
            style={{
                backgroundColor: colorBgLayout,
            }}
        >
            <Scrollbar>
                {/*<GlobalSpin>*/}
                <div className="flex flex-col h-full">
                    <div
                        style={{
                            height: `var(${CSS_VARIABLE_LAYOUT_CONTENT_HEIGHT})`,
                        }}
                    >
                        <KeepAlive
                            max={20}
                            transition
                            duration={300}
                            cacheNodeClassName={
                                transitionEnable ? `keepalive-${transitionName}` : undefined
                            }
                            exclude={keepAliveExclude}
                            activeCacheKey={cacheKey}
                            aliveRef={aliveRef}
                        >
                            {outlet}
                        </KeepAlive>
                    </div>
                    {enableFooter && !fixedFooter ? <LayoutFooter /> : null}
                </div>
                {/*</GlobalSpin>*/}
            </Scrollbar>
        </main>
    );
}
