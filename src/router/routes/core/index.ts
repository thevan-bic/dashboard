import type { RouteObject } from 'react-router';

import { addRouteIdByPath } from '@/router/utils';

import authRoutes from './auth';
import fallbackRoute from './fallback';

export const coreRoutes: any = [
    ...addRouteIdByPath([...authRoutes]), //exceptionRoutes
    ...fallbackRoute,
] satisfies RouteObject[];
