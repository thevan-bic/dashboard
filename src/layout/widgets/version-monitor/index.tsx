import { Button, Space } from 'antd';
import { createElement, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLogger } from '@/lib/logger';

interface AppVersionMonitorProps {
    checkUpdatesInterval?: number;
    checkUpdateUrl?: string;
}

export function AppVersionMonitor({
    checkUpdatesInterval = 1,
    checkUpdateUrl = import.meta.env.BASE_URL ?? '/',
}: AppVersionMonitorProps) {
    let isCheckingUpdates = false;
    const logger = useLogger(AppVersionMonitor.name);
    const { t } = useTranslation();
    const currentVersionTag = useRef('');
    const lastVersionTag = useRef('');
    const timer = useRef<ReturnType<typeof setInterval>>(undefined);

    function handleNotice(versionTag: string) {
        currentVersionTag.current = versionTag;
        window.$notification?.open({
            message: t('widgets.versionMonitorTitle'),
            description: t('widgets.versionMonitorContent'),
            duration: 0,
            actions: (() => {
                return createElement(Space, { size: 12 }, [
                    createElement(
                        Button,

                        {
                            onClick() {
                                window.$notification?.destroy();
                            },
                            key: 'cancel',
                        },
                        t('widgets.versionMonitorCancel'),
                    ),
                    createElement(
                        Button,
                        {
                            type: 'primary',
                            onClick() {
                                lastVersionTag.current = currentVersionTag.current;
                                location.reload();
                            },
                            key: 'ok',
                        },
                        t('widgets.versionMonitorConfirm'),
                    ),
                ]);
            })(),
        });
    }

    async function getVersionTag(isCache: boolean = false) {
        try {
            if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
                return null;
            }
            const response = await fetch(checkUpdateUrl, {
                cache: !isCache ? 'no-cache' : 'default',
                method: 'HEAD',
            });

            return response.headers.get('etag') || response.headers.get('last-modified');
        } catch {
            logger.error('Failed to fetch version tag');
            return null;
        }
    }

    async function checkForUpdates() {
        const versionTag = await getVersionTag();
        if (!versionTag) {
            return;
        }

        if (lastVersionTag.current !== versionTag) {
            clearInterval(timer.current);
            handleNotice(versionTag);
        }
    }

    function handleVisibilitychange() {
        if (document.hidden) {
            stop();
        } else {
            if (!isCheckingUpdates) {
                isCheckingUpdates = true;
                checkForUpdates().finally(() => {
                    isCheckingUpdates = false;
                    return start();
                });
            }
        }
    }

    async function start() {
        if (checkUpdatesInterval <= 0) {
            return;
        }

        if (!lastVersionTag.current) {
            const currentVersionTag = await getVersionTag(true);
            if (!currentVersionTag) {
                return;
            }
            lastVersionTag.current = currentVersionTag;
        }

        timer.current = setInterval(checkForUpdates, checkUpdatesInterval * 60 * 1000);
    }

    function stop() {
        clearInterval(timer.current);
        timer.current = undefined;
    }

    useEffect(() => {
        start().catch((err) => logger.error(err));
        document.addEventListener('visibilitychange', handleVisibilitychange);

        return () => {
            stop();
            document.removeEventListener('visibilitychange', handleVisibilitychange);
        };
    }, []);
    return null;
}
