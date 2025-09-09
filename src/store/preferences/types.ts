import type {
    MIXED_NAVIGATION,
    SIDE_NAVIGATION,
    TOP_NAVIGATION,
    TWO_COLUMN_NAVIGATION,
} from '@/layout/widgets/preferences/blocks/layout/constants';

import type { LanguageType } from '@/locales';
import type { MenuProps } from 'antd';

export type PageLayoutType = 'layout-left' | 'layout-center' | 'layout-right';
export type TabsStyleType = 'brisk' | 'card' | 'chrome' | 'plain';

export type ThemeType = 'dark' | 'light' | 'auto';

interface AnimationState {
    transitionProgress: boolean;
    transitionLoading: boolean;
    transitionEnable: boolean;
    transitionName: string;
}

export type NavigationType =
    | typeof SIDE_NAVIGATION
    | typeof TOP_NAVIGATION
    | typeof TWO_COLUMN_NAVIGATION
    | typeof MIXED_NAVIGATION;
export type BuiltinThemeType =
    | 'red'
    | 'volcano'
    | 'orange'
    | 'gold'
    | 'yellow'
    | 'lime'
    | 'green'
    | 'cyan'
    | 'blue'
    | 'geekblue'
    | 'purple'
    | 'magenta'
    | 'gray'
    | 'custom';

interface LayoutState {
    navigationStyle: NavigationType;
}

export interface GeneralState {
    watermark: boolean;
    watermarkContent: string;
    enableBackTopButton: boolean;
    pageLayout: PageLayoutType;
    enableFrontendAceess: boolean;
    enableBackendAccess: boolean;

    language: LanguageType;
    enableDynamicTitle: boolean;
    enableCheckUpdates: boolean;
    checkUpdatesInterval: number;
}

export interface SidebarState {
    sidebarEnable?: boolean;
    sidebarWidth: number;
    sideCollapsedWidth: number;
    sidebarCollapsed: boolean;
    sidebarCollapseShowTitle: boolean;
    sidebarExtraCollapsedWidth: number;
    firstColumnWidthInTwoColumnNavigation: number;
    sidebarTheme: MenuProps['theme'];
    accordion: boolean;
}

export interface FooterState {
    enableFooter: boolean;
    fixedFooter: boolean;
    companyName: string;
    companyWebsite: string;
    copyrightDate: string;
    ICPNumber: string;
    ICPLink: string;
}

export interface PreferencesState
    extends AnimationState,
        LayoutState,
        GeneralState,
        SidebarState,
        FooterState {
    theme: ThemeType;
    colorBlindMode: boolean;
    colorGrayMode: boolean;
    themeRadius: number;
    themeColorPrimary: string;
    builtinTheme: BuiltinThemeType;

    tabbarStyleType: TabsStyleType;
    tabbarEnable: boolean;
    tabbarShowIcon: boolean;
    tabbarPersist: boolean;
    tabbarDraggable: boolean;
    tabbarShowMore: boolean;
    tabbarShowMaximize: boolean;
}
