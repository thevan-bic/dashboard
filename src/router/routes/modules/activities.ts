import { ContainerLayout } from '@/layout';
import { system } from '@/router/extra-info';
import type { AppRouteRecordRaw } from '@/router/types';

import { lazy } from 'react';

const EventActivity = lazy(() => import('@/pages/activity/event'));
const OperationActivity = lazy(() => import('@/pages/activity/operation'));

const routes: AppRouteRecordRaw[] = [
    {
        path: '/activities',
        Component: ContainerLayout,
        handle: {
            icon: 'ProjectOutlined',
            title: 'common.menu.activity',
            order: system,
            roles: ['admin'],
        },
        children: [
            {
                path: '/activities/events',
                Component: EventActivity,
                handle: {
                    icon: 'MailOutlined',
                    title: 'common.menu.event',
                    roles: ['admin'],
                    permissions: [
                        'permission:button:add',
                        'permission:button:update',
                        'permission:button:delete',
                    ],
                },
            },
            {
                path: '/activities/operations',
                Component: OperationActivity,
                handle: {
                    icon: 'DeliveredProcedureOutlined',
                    title: 'common.menu.operation',
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
