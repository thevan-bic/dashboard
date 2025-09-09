import { useDeviceType, useLayoutFooterStyle, useLayoutHeaderStyle } from '@/hooks';
import { usePreferencesStore, useTabsStore } from '@/store';
import { cn } from '@/utils';

import { RocketOutlined } from '@ant-design/icons';
import { FloatButton, Grid, Watermark } from 'antd';
import { useEffect, useMemo } from 'react';

import { ELEMENT_ID_MAIN_CONTENT, footerHeight, headerHeight, tabbarHeight } from '../constants';
import { useLayout } from '../hooks';
import LayoutContent from '../layout-content';
import LayoutFooter from '../layout-footer';
import LayoutHeader from '../layout-header';
import LayoutMenu from '../layout-menu';
import { useMenu } from '../layout-menu/use-menu';
import LayoutMixedSidebar from '../layout-mixed-sidebar';
import LayoutMobileMenu from '../layout-mobile-menu';
import LayoutSidebar from '../layout-sidebar';
import LayoutTabbar from '../layout-tabbar';
import { BreadcrumbViews, Logo } from '../widgets';

const { useBreakpoint } = Grid;

export default function ContainerLayout() {
    const screens = useBreakpoint();
    const {
        isTopNav,
        isTwoColumnNav,
        isMixedNav,
        sidebarWidth,
        sideCollapsedWidth,
        firstColumnWidthInTwoColumnNavigation,
    } = useLayout();
    const isMaximize = useTabsStore((state) => state.isMaximize);
    const {
        watermark,
        watermarkContent,
        enableFooter,
        fixedFooter,
        enableBackTopButton,
        tabbarEnable,
        sidebarEnable,
        sidebarCollapsed,
        setPreferences,
    } = usePreferencesStore();
    const { isMobile } = useDeviceType();
    const { sideNavItems, topNavItems, handleMenuSelect } = useMenu();

    const { setLayoutHeaderHeight } = useLayoutHeaderStyle();
    const { setLayoutFooterHeight } = useLayoutFooterStyle();

    useEffect(() => {
        if (screens.lg && !screens.xl) {
            setPreferences('sidebarCollapsed', true);
        } else if (screens.xl) {
            setPreferences('sidebarCollapsed', false);
        } else if (screens.xs || (screens.sm && !screens.md)) {
            setPreferences('sidebarCollapsed', false);
        }
    }, [screens]);

    const sidebarEnableState = useMemo(() => !isTopNav && sidebarEnable, [isTopNav, sidebarEnable]);
    const computedSidebarWidth = useMemo(() => {
        if (isMaximize || isMobile) {
            return 0;
        }
        const currentSidebarWidth = sidebarCollapsed ? sideCollapsedWidth : sidebarWidth;
        if (isTwoColumnNav) {
            return currentSidebarWidth + (firstColumnWidthInTwoColumnNavigation ?? 0);
        }
        if (sidebarEnableState) {
            return currentSidebarWidth;
        }
        return 0;
    }, [
        isMobile,
        isMaximize,
        isTwoColumnNav,
        sidebarEnableState,
        sidebarWidth,
        sidebarCollapsed,
        sideCollapsedWidth,
        firstColumnWidthInTwoColumnNavigation,
    ]);

    const headerWrapperHeight = useMemo(() => {
        let height = headerHeight;
        if (tabbarEnable) {
            height += tabbarHeight;
        }
        return height;
    }, [tabbarEnable, tabbarHeight]);

    useEffect(() => {
        setLayoutHeaderHeight(isMaximize ? tabbarHeight : headerWrapperHeight);
    }, [headerWrapperHeight, isMaximize]);

    useEffect(() => {
        setLayoutFooterHeight(footerHeight);
    }, []);

    return (
        <Watermark content={watermark ? watermarkContent : ''}>
            <section
                style={{
                    paddingLeft: computedSidebarWidth,
                }}
                className={cn('transition-all flex flex-col h-screen')}
            >
                <LayoutHeader>
                    {isTopNav || isMixedNav ? (
                        <>
                            {isTopNav ? <Logo sidebarCollapsed={false} className="mr-8" /> : null}
                            <LayoutMenu
                                mode="horizontal"
                                menus={topNavItems}
                                handleMenuSelect={handleMenuSelect}
                            />
                        </>
                    ) : (
                        <BreadcrumbViews />
                    )}
                </LayoutHeader>
                {tabbarEnable ? <LayoutTabbar /> : null}

                {}
                <LayoutMobileMenu />

                {}
                {sidebarEnableState && !isTwoColumnNav ? (
                    <LayoutSidebar computedSidebarWidth={computedSidebarWidth}>
                        <LayoutMenu
                            autoExpandCurrentMenu
                            menus={sideNavItems}
                            handleMenuSelect={handleMenuSelect}
                        />
                    </LayoutSidebar>
                ) : null}
                {isTwoColumnNav ? (
                    <LayoutMixedSidebar
                        computedSidebarWidth={computedSidebarWidth}
                        sideNavItems={sideNavItems}
                        topNavItems={topNavItems}
                        handleMenuSelect={handleMenuSelect}
                    />
                ) : null}

                <LayoutContent />

                {enableFooter && fixedFooter ? (
                    <LayoutFooter className="bg-color-bg-container" />
                ) : null}
                {enableBackTopButton ? (
                    <FloatButton.BackTop
                        icon={<RocketOutlined />}
                        target={() =>
                            (document.querySelector(
                                `#${ELEMENT_ID_MAIN_CONTENT} .simplebar-content-wrapper`,
                            ) as HTMLElement) || document
                        }
                    />
                ) : null}
            </section>
        </Watermark>
    );
}
