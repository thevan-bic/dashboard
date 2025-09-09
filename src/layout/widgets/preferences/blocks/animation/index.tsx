import { usePreferencesStore } from '@/store';
import { cn } from '@/utils';

import { useTranslation } from 'react-i18next';
import { SwitchItem } from '../../switch-item';

const transitionPreset = ['fade', 'fade-slide', 'fade-up', 'fade-down', 'fade-zoom'];

export function Animation() {
    const transitionEnable = usePreferencesStore((state) => state.transitionEnable);
    const transitionLoading = usePreferencesStore((state) => state.transitionLoading);
    const transitionProgress = usePreferencesStore((state) => state.transitionProgress);
    const transitionName = usePreferencesStore((state) => state.transitionName);
    const setPreferences = usePreferencesStore((state) => state.setPreferences);
    const { t } = useTranslation();

    function handleClick(value: string) {
        setPreferences('transitionName', value);
    }

    return (
        <>
            <SwitchItem
                name="transitionProgress"
                checked={transitionProgress}
                onChange={(name, value) => setPreferences(name, value)}
            >
                {t('preferences.animation.progress')}
            </SwitchItem>
            <SwitchItem
                name="transitionLoading"
                checked={transitionLoading}
                onChange={(name, value) => setPreferences(name, value)}
            >
                {t('preferences.animation.loading')}
            </SwitchItem>
            <SwitchItem
                name="transitionEnable"
                checked={transitionEnable}
                onChange={(name, value) => setPreferences(name, value)}
            >
                {t('preferences.animation.transition')}
            </SwitchItem>
            <ul className="w-full flex flex-wrap justify-between gap-x-3 gap-y-5 list-none px-0">
                {transitionPreset.map((item) => (
                    <li
                        key={item}
                        onClick={() => handleClick(item)}
                        className={cn(
                            'relative p-2 outline-solid outline-1 outline-gray-300 dark:outline-gray-700 cursor-pointer rounded-md',
                            "before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:h-0 before:w-0 before:rounded-xs before:opacity-0 before:outline-solid before:outline-2 before:outline-transparent",
                            item === transitionName
                                ? ''
                                : 'before:transition-all before:duration-300',
                            item === transitionName
                                ? ''
                                : 'hover:before:outline-blue-600 dark:hover:before:outline-blue-700 hover:before:left-0 hover:before:top-0 hover:before:h-full hover:before:w-full hover:before:p-1 hover:before:opacity-100',
                            {
                                'outline-2 outline-blue-600 dark:outline-blue-700':
                                    item === transitionName,
                            },
                        )}
                    >
                        <div
                            className={cn(
                                'dark:bg-gray-700',
                                'bg-gray-100 h-10 w-12 rounded-md text-xs flex items-center justify-center text-center',
                                {
                                    'fade-slide': item === 'fade-slide',
                                    fade: item === 'fade',
                                    'fade-up': item === 'fade-up',
                                    'fade-down': item === 'fade-down',
                                    'fade-zoom': item === 'fade-zoom',
                                },
                            )}
                        >
                            <span className="scale-75 text-opacity-75">{item}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
