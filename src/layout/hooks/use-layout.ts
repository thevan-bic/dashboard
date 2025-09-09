import { useDeviceType } from '@/hooks';
import {
    MIXED_NAVIGATION,
    SIDE_NAVIGATION,
    TOP_NAVIGATION,
    TWO_COLUMN_NAVIGATION,
} from '@/layout/widgets/preferences/blocks/layout/constants';
import { usePreferencesStore } from '@/store';

import { useMemo } from 'react';

export function useLayout() {
    const { isMobile } = useDeviceType();
    const navigationStyle = usePreferencesStore((state) => state.navigationStyle);
    const sidebarWidth = usePreferencesStore((state) => state.sidebarWidth);
    const sideCollapsedWidth = usePreferencesStore((state) => state.sideCollapsedWidth);
    const firstColumnWidthInTwoColumnNavigation = usePreferencesStore(
        (state) => state.firstColumnWidthInTwoColumnNavigation,
    );

    const currentLayout = useMemo(
        () => (isMobile ? SIDE_NAVIGATION : navigationStyle),
        [isMobile, navigationStyle],
    );

    const isSideNav = useMemo(() => currentLayout === SIDE_NAVIGATION, [currentLayout]);

    const isTopNav = useMemo(() => currentLayout === TOP_NAVIGATION, [currentLayout]);

    const isTwoColumnNav = useMemo(() => currentLayout === TWO_COLUMN_NAVIGATION, [currentLayout]);

    const isMixedNav = useMemo(() => currentLayout === MIXED_NAVIGATION, [currentLayout]);

    return {
        currentLayout,
        isSideNav,
        isTopNav,
        isMixedNav,
        isTwoColumnNav,
        sidebarWidth,
        sideCollapsedWidth,
        firstColumnWidthInTwoColumnNavigation,
    };
}
