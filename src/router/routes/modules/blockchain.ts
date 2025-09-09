import { ContainerLayout } from '@/layout';
import { system } from '@/router/extra-info';
import type { AppRouteRecordRaw } from '@/router/types';

import { lazy } from 'react';

const ABI = lazy(() => import('@/pages/blockchain/abi'));
const Listener = lazy(() => import('@/pages/blockchain/listener'));
const Subscription = lazy(() => import('@/pages/blockchain/subscription'));

const routes: AppRouteRecordRaw[] = [
    {
        path: '/blockchains',
        Component: ContainerLayout,
        handle: {
            icon: 'DeploymentUnitOutlined',
            title: 'common.menu.blockchain',
            order: system,
            roles: ['admin'],
        },
        children: [
            {
                path: '/blockchains/abis',
                Component: ABI,
                handle: {
                    icon: 'FileDoneOutlined',
                    title: 'common.menu.contractABI',
                    roles: ['admin'],
                    permissions: [
                        'permission:button:add',
                        'permission:button:update',
                        'permission:button:delete',
                    ],
                },
            },
            {
                path: '/blockchains/listeners',
                Component: Listener,
                handle: {
                    icon: 'VideoCameraOutlined',
                    title: 'common.menu.listener',
                    roles: ['admin'],
                    permissions: [
                        'permission:button:add',
                        'permission:button:update',
                        'permission:button:delete',
                    ],
                },
            },
            {
                path: '/blockchains/subscriptions',
                Component: Subscription,
                handle: {
                    icon: 'PushpinOutlined',
                    title: 'common.menu.subscription',
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
