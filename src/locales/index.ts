import type { InitOptions } from 'i18next';

import enUS from 'antd/locale/en_US';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import globalLogger from '@/lib/logger/global';
import { getEnUsLang } from './helper';

export * from './t';

export type LanguageType = 'en-US';

export const ANT_DESIGN_LOCALE = {
    'en-US': enUS,
};

export const i18nResources = {
    'en-US': {
        translation: getEnUsLang(),
    },
};

export const i18nInitOptions: InitOptions = {
    lng: 'en-US',
    resources: i18nResources,
    saveMissing: import.meta.env.DEV,
    missingKeyHandler: async (_languages, _namespace, translationKey) => {
        if (import.meta.env.PROD) {
            return;
        }
        const currentLanguage = i18next.language;
        if (!['404'].includes(translationKey) && import.meta.env.DEV) {
            globalLogger.warn(
                `[i18n] Not found '${translationKey}' key in '${currentLanguage}' locale messages.`,
            );
        }
    },
};

export const i18n = i18next.use(initReactI18next);

export function setupI18n() {
    i18n.init(i18nInitOptions);
    i18next.on('languageChanged', (lng) => {
        document.documentElement.lang = lng;
    });
}
