import { ContainerLayout } from '@/layout';
import { $t } from '@/locales';
import { about } from '@/router/extra-info';
import type { AppRouteRecordRaw } from '@/router/types';

import { CopyrightOutlined } from '@ant-design/icons';
import { createElement, lazy } from 'react';

const About = lazy(() => import('@/pages/about'));

const routes: AppRouteRecordRaw[] = [
    {
        path: '/about',
        Component: ContainerLayout,
        handle: {
            order: about,
            title: $t('common.menu.about'),
            icon: createElement(CopyrightOutlined),
        },
        children: [
            {
                index: true,
                Component: About,
                // lazy: async () => {
                // 	const About = await import("@/pages/about");
                // 	return { Component: About.default };
                // },
                handle: {
                    // roles: ["common"],
                    title: $t('common.menu.about'),
                    icon: createElement(CopyrightOutlined),
                },
            },
        ],
    },
];

export default routes;
