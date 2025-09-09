import type { dependencies, devDependencies } from '../../package.json';

import type { ThemeType } from '@/store';
import type { GlobalToken } from 'antd';

declare global {
    const __APP_INFO__: {
        pkg: {
            name: string;
            version: string;
            license: string;
            author: string;
            dependencies: typeof dependencies;
            devDependencies: typeof devDependencies;
        };
        lastBuildTime: string;
    };

    interface Window {
        $message?: import('antd/es/message/interface').MessageInstance;
        $modal?: Omit<import('antd/es/modal/confirm').ModalStaticFunctions, 'warn'>;
        $notification?: import('antd/es/notification/interface').NotificationInstance;
    }

    // biome-ignore lint/style/noNamespace: <explanation>
    namespace Jss {
        export interface Theme {
            theme: ThemeType;

            token: GlobalToken;

            isDark: boolean;

            isLight: boolean;
            prefixCls: string;
        }
    }
}
