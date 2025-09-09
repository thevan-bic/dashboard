import type { LanguageType } from '@/locales';
import type { PreferencesState, ThemeType } from './types';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const DEFAULT_PREFERENCES = {
    watermark: false,
    watermarkContent: 'bic-chain-explorer',
    enableBackTopButton: true,
    pageLayout: 'layout-right',
    enableBackendAccess: false,
    enableFrontendAceess: true,
    language: 'en-US',
    enableDynamicTitle: true,
    enableCheckUpdates: false,
    checkUpdatesInterval: 1,
    theme: 'light',
    colorBlindMode: false,
    colorGrayMode: false,
    themeRadius: 4,
    builtinTheme: 'orange',
    themeColorPrimary: '#fa8c16',
    transitionProgress: true,
    transitionLoading: true,
    transitionEnable: false,
    transitionName: 'fade-slide',
    navigationStyle: 'top-navigation',
    tabbarEnable: false,
    tabbarShowIcon: true,
    tabbarPersist: true,
    tabbarDraggable: true,
    tabbarStyleType: 'chrome',
    tabbarShowMore: true,
    tabbarShowMaximize: true,
    sidebarEnable: true,
    sidebarWidth: 210,
    sideCollapsedWidth: 56,
    sidebarCollapsed: false,
    sidebarCollapseShowTitle: true,
    sidebarExtraCollapsedWidth: 48,
    firstColumnWidthInTwoColumnNavigation: 80,
    sidebarTheme: 'dark',
    accordion: true,
    enableFooter: false,
    fixedFooter: true,
    companyName: 'Beincom',
    companyWebsite: 'https://www.beincom.com/',
    copyrightDate: '2025',
    ICPNumber: '',
    ICPLink: '',
} satisfies PreferencesState;

interface PreferencesAction {
    reset: () => void;
    changeSiteTheme: (theme: ThemeType) => void;
    changeLanguage: (language: LanguageType) => void;
    setPreferences: {
        <T>(key: string, value: T): void;
        <T extends Partial<PreferencesState>>(preferences: T): void;
    };
}

export const usePreferencesStore = create<PreferencesState & PreferencesAction>()(
    persist(
        (set) => ({
            ...DEFAULT_PREFERENCES,

            setPreferences: (...args: any[]) => {
                if (args.length === 1) {
                    const preferences = args[0];
                    set(() => {
                        return { ...preferences };
                    });
                } else if (args.length === 2) {
                    const [key, value] = args;
                    set(() => {
                        return { [key]: value };
                    });
                }
            },

            changeSiteTheme: (theme) => {
                set(() => {
                    return { theme };
                });
            },

            changeLanguage: (language) => {
                set(() => {
                    return { language };
                });
            },

            reset: () => {
                set(() => {
                    return { ...DEFAULT_PREFERENCES };
                });
            },
        }),
        { name: 'preferences' },
    ),
);
