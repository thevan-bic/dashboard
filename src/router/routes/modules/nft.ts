import { ContainerLayout } from '@/layout';
import { about } from '@/router/extra-info';
import type { AppRouteRecordRaw } from '@/router/types';

import { lazy } from 'react';

const History = lazy(() => import('@/pages/payment/history'));

const routes: AppRouteRecordRaw[] = [
    {
        path: '/nft',
        Component: ContainerLayout,
        handle: {
            icon: 'ShopOutlined',
            title: 'common.menu.nft',
            order: about,
            roles: ['admin'],
        },
        children: [
            {
                path: '/nft/histories',
                Component: History,
                handle: {
                    icon: 'HistoryOutlined',
                    title: 'common.menu.history',
                    roles: ['admin'],
                    permissions: [
                        'permission:button:add',
                        'permission:button:update',
                        'permission:button:delete',
                    ],
                },
            },
        ],
    },
];

export default routes;
