import type { PasswordLoginFormType } from '@/pages/login/components/password-login';
import type { AppRouteRecordRaw } from '@/router/types';
import { request } from '@/utils';
import type { AuthType, UserInfoType } from './types';

export * from './types';

export function fetchLogin(data: PasswordLoginFormType) {
    return request.post('admins/login', { json: data }).json<AuthType>();
}

export function fetchLogout() {
    return request.post('logout').json();
}

export function fetchAsyncRoutes() {
    return request.get('get-async-routes').json<ApiResponse<AppRouteRecordRaw[]>>();
}

export function fetchUserInfo() {
    return {
        id: 1,
        avatar: 'https://avatars.githubusercontent.com/u/47056890',
        username: 'Admin',
        email: '<EMAIL>',
        phoneNumber: '1234567890',
        description: 'manager',
        roles: ['admin'],
    } as unknown as UserInfoType;
    //return request.get('user-info').json<ApiResponse<UserInfoType>>();
}

export interface RefreshTokenResult {
    token: string;
    refreshToken: string;
}

export const refreshTokenPath = 'refresh-token';
export function fetchRefreshToken(data: { readonly refreshToken: string }) {
    return request.post(refreshTokenPath, { json: data }).json<ApiResponse<RefreshTokenResult>>();
}
