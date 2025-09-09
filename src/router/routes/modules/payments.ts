import { ContainerLayout } from '@/layout';
import { system } from '@/router/extra-info';
import type { AppRouteRecordRaw } from '@/router/types';

import { lazy } from 'react';

const History = lazy(() => import('@/pages/payment/history'));

const routes: AppRouteRecordRaw[] = [
    {
        path: '/payments',
        Component: ContainerLayout,
        handle: {
            icon: 'DollarOutlined',
            title: 'common.menu.payment',
            order: system,
            roles: ['admin'],
        },
        children: [
            {
                path: '/payments/histories',
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
