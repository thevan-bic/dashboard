import { refreshTokenPath } from '@/api/user';
import { loginPath } from '@/router/extra-info';
import { useAuthStore, usePreferencesStore } from '@/store';
import { AUTH_HEADER, LANG_HEADER } from './constants';
import { handleErrorResponse } from './error-response';
import { globalProgress } from './global-progress';
import { goLogin } from './go-login';
import { refreshTokenAndRetry } from './refresh';

const requestWhiteList = [loginPath];
const API_TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT) || 10000;

interface FetchOptions extends RequestInit {
    ignoreLoading?: boolean;
}

export const customFetch = async (
    input: RequestInfo | URL,
    init?: FetchOptions,
): Promise<Response> => {
    const url = input.toString();
    const options = init || {};
    const ignoreLoading = options.ignoreLoading;

    // Before Request Hook
    if (!ignoreLoading) {
        globalProgress.start();
    }

    // Setup headers
    const headers = new Headers(options.headers);

    // Add auth header if not in whitelist
    const isWhiteRequest = requestWhiteList.some((path) => url.endsWith(path));
    if (!isWhiteRequest) {
        const { token } = useAuthStore.getState();
        if (token) {
            headers.set(AUTH_HEADER, `Bearer ${token}`);
        }
    }

    // Add language header
    headers.set(LANG_HEADER, usePreferencesStore.getState().language);

    // Setup timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

    try {
        const response = await fetch(input, {
            ...options,
            headers,
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        // After Response Hook
        if (!ignoreLoading) {
            globalProgress.done();
        }

        // Handle errors
        if (!response.ok) {
            if (response.status === 401) {
                // Handle refresh token endpoints
                if ([`/${refreshTokenPath}`].some((path) => url.endsWith(path))) {
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

                // Attempt to refresh token
                const refreshedResponse = await refreshTokenAndRetry(
                    { url, ...options, headers } as any,
                    options,
                    refreshToken,
                );

                if (!ignoreLoading) {
                    globalProgress.done();
                }

                return refreshedResponse;
            } else {
                // Handle other errors
                return handleErrorResponse(response);
            }
        }

        return response;
    } catch (error) {
        clearTimeout(timeoutId);

        if (!ignoreLoading) {
            globalProgress.done();
        }

        if (error instanceof Error && error.name === 'AbortError') {
            throw new Error(`Request timeout after ${API_TIMEOUT}ms`);
        }

        throw error;
    }
};
