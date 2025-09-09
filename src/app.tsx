import { AntdApp, JSSThemeProvider } from '@/components';
import { usePreferences, useScrollToHash } from '@/hooks';
import { AppVersionMonitor } from '@/layout/widgets/version-monitor';
import { ANT_DESIGN_LOCALE } from '@/locales';

import { ConfigProvider, theme as antdTheme } from 'antd';
import dayjs from 'dayjs';
import { Suspense, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RouterProvider } from 'react-router/dom';

import { LogLevel, LoggerProvider } from '@/lib/logger';
import { router } from './router';
import { customAntdDarkTheme, customAntdLightTheme } from './styles/theme/antd/antd-theme';

export default function App() {
    const { i18n } = useTranslation();
    const {
        language,
        isDark,
        theme,
        themeColorPrimary,
        colorBlindMode,
        colorGrayMode,
        themeRadius,
        changeSiteTheme,

        enableCheckUpdates,
        checkUpdatesInterval,
        sideCollapsedWidth,
    } = usePreferences();

    useScrollToHash();

    const getAntdLocale = () => {
        return ANT_DESIGN_LOCALE[language];
    };

    useEffect(() => {
        if (language === 'en-US') {
            dayjs.locale('en');
        }
    }, [language]);

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, i18n.changeLanguage]);

    const setEmulateTheme = useCallback(
        (_dark?: boolean) => {
            changeSiteTheme('auto');
        },
        [changeSiteTheme],
    );

    useEffect(() => {
        if (theme === 'auto') {
            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

            function matchMode(e: MediaQueryListEvent) {
                setEmulateTheme(e.matches);
            }

            setEmulateTheme(darkModeMediaQuery.matches);
            darkModeMediaQuery.addEventListener('change', matchMode);
            return () => {
                darkModeMediaQuery.removeEventListener('change', matchMode);
            };
        }
    }, [theme, setEmulateTheme]);

    const updateColorMode = () => {
        const dom = document.documentElement;
        const COLOR_BLIND = 'color-blind-mode';
        const COLOR_GRAY = 'gray-mode';
        colorBlindMode ? dom.classList.add(COLOR_BLIND) : dom.classList.remove(COLOR_BLIND);
        colorGrayMode ? dom.classList.add(COLOR_GRAY) : dom.classList.remove(COLOR_GRAY);
    };

    useEffect(() => {
        updateColorMode();
    }, [colorBlindMode, colorGrayMode]);

    return (
        <ConfigProvider
            input={{ autoComplete: 'off' }}
            locale={getAntdLocale()}
            theme={{
                cssVar: true,
                hashed: false,
                algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
                ...(isDark ? customAntdDarkTheme : customAntdLightTheme),
                token: {
                    ...(isDark ? customAntdDarkTheme.token : customAntdLightTheme.token),
                    borderRadius: themeRadius,
                    colorPrimary: themeColorPrimary,
                },
                components: {
                    ...(isDark ? customAntdDarkTheme.components : customAntdLightTheme.components),
                    Menu: {
                        darkItemBg: '#141414',
                        itemBg: '#fff',
                        ...(isDark
                            ? customAntdDarkTheme.components?.Menu
                            : customAntdLightTheme.components?.Menu),
                        collapsedWidth: sideCollapsedWidth,
                    },
                },
            }}
        >
            <LoggerProvider
                config={{
                    enableColors: true,
                    level: process.env.NODE_ENV === 'production' ? LogLevel.WARN : LogLevel.DEBUG,
                    enableConsole: true,
                    enableStorage: false,
                }}
            >
                <AntdApp>
                    <JSSThemeProvider>
                        <Suspense fallback={null}>
                            {enableCheckUpdates ? (
                                <AppVersionMonitor checkUpdatesInterval={checkUpdatesInterval} />
                            ) : null}
                            <RouterProvider router={router} />
                        </Suspense>
                    </JSSThemeProvider>
                </AntdApp>
            </LoggerProvider>
        </ConfigProvider>
    );
}
