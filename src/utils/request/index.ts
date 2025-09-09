import { refreshTokenPath } from '@/api/user';
import type { Options } from 'ky';

import { loginPath } from '@/router/extra-info';
import { useAuthStore, usePreferencesStore } from '@/store';
import ky from 'ky';

import { AUTH_HEADER, LANG_HEADER } from './constants';
import { handleErrorResponse } from './error-response';
import { globalProgress } from './global-progress';
import { goLogin } from './go-login';
import { refreshTokenAndRetry } from './refresh';

const requestWhiteList = [loginPath];

const API_TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT) || 10000;

const defaultConfig: Options = {
    prefixUrl: import.meta.env.VITE_API_BASE_URL,
    timeout: API_TIMEOUT,
    retry: {
        limit: 3,
    },
    hooks: {
        beforeRequest: [
            (request, options) => {
                const ignoreLoading = options.ignoreLoading;
                if (!ignoreLoading) {
                    globalProgress.start();
                }
                const isWhiteRequest = requestWhiteList.some((url) => request.url.endsWith(url));
                if (!isWhiteRequest) {
                    const { token } = useAuthStore.getState();
                    request.headers.set(AUTH_HEADER, `Bearer ${token}`);
                }
                request.headers.set(LANG_HEADER, usePreferencesStore.getState().language);
            },
        ],
        afterResponse: [
            async (request, options, response) => {
                const ignoreLoading = options.ignoreLoading;
                if (!ignoreLoading) {
                    globalProgress.done();
                }
                if (!response.ok) {
                    if (response.status === 401) {
                        if ([`/${refreshTokenPath}`].some((url) => request.url.endsWith(url))) {
                            goLogin();
                            return response;
                        }
                        const { refreshToken } = useAuthStore.getState();
                        if (!refreshToken) {
                            if (location.pathname === loginPath) {
                                return response;
                            } else {
                                goLogin();
                                return response;
                            }
                        }

                        return refreshTokenAndRetry(request, options, refreshToken);
                    } else {
                        return handleErrorResponse(response);
                    }
                }
                return response;
            },
        ],
    },
};

export const request = ky.create(defaultConfig);
