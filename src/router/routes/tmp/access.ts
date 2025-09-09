import type { AppRouteRecordRaw } from '@/router/types';

import { ContainerLayout } from '@/layout';
import { $t } from '@/locales';
import { access } from '@/router/extra-info';
import { accessControlCodes } from '@/hooks/use-access/constants';

import { lazy } from 'react';

const PageControl = lazy(() => import('@/pages/access/page-control'));
const ButtonControl = lazy(() => import('@/pages/access/button-control'));
const AdminVisible = lazy(() => import('@/pages/access/admin-visible'));
const CommonVisible = lazy(() => import('@/pages/access/common-visible'));

const routes: AppRouteRecordRaw[] = [
    {
        path: '/access',
        Component: ContainerLayout,
        handle: {
            icon: 'SafetyOutlined',
            title: $t('common.menu.access'),
            order: access,
        },
        children: [
            {
                path: '/access/page-control',
                Component: PageControl,
                handle: {
                    icon: 'FileTextOutlined',
                    title: $t('common.menu.pageControl'),
                    permissions: [accessControlCodes.get],
                },
            },
            {
                path: '/access/button-control',
                Component: ButtonControl,
                handle: {
                    icon: 'LockOutlined',
                    title: $t('common.menu.buttonControl'),
                },
            },
            {
                path: '/access/admin-visible',
                Component: AdminVisible,
                handle: {
                    icon: 'EyeOutlined',
                    title: $t('common.menu.adminVisible'),
                    roles: ['admin'],
                },
            },
            {
                path: '/access/common-visible',
                Component: CommonVisible,
                handle: {
                    icon: 'EyeOutlined',
                    title: $t('common.menu.commonVisible'),
                    roles: ['common'],
                },
            },
        ],
    },
];

export default routes;
