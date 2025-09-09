import { fetchRefreshToken } from '@/api/user';
import type { KyResponse, Options } from 'ky';

import { useAuthStore } from '@/store';
import ky from 'ky';
import { AUTH_HEADER } from './constants';
import { goLogin } from './go-login';

let isRefreshing = false;

export async function refreshTokenAndRetry(
    request: Request,
    options: Options,
    refreshToken: string,
) {
    if (!isRefreshing) {
        isRefreshing = true;
        try {
            const freshResponse = await fetchRefreshToken({ refreshToken });
            const newToken = freshResponse.result.token;
            const newRefreshToken = freshResponse.result.refreshToken;
            useAuthStore.setState({ token: newToken, refreshToken: newRefreshToken });
            onRefreshed(newToken);

            request.headers.set(AUTH_HEADER, `Bearer ${newToken}`);
            return ky(request, options);
        } catch (error) {
            onRefreshFailed(error);
            goLogin();
            throw error;
        } finally {
            isRefreshing = false;
        }
    } else {
        return new Promise<KyResponse>((resolve, reject) => {
            addRefreshSubscriber({
                resolve: async (newToken) => {
                    request.headers.set(AUTH_HEADER, `Bearer ${newToken}`);
                    resolve(ky(request, options));
                },
                reject,
            });
        });
    }
}

let refreshSubscribers: Array<{
    resolve: (token: string) => void;
    reject: (error: any) => void;
}> = [];

function onRefreshed(token: string) {
    refreshSubscribers.forEach((subscriber) => subscriber.resolve(token));
    refreshSubscribers = [];
}

function onRefreshFailed(error: any) {
    refreshSubscribers.forEach((subscriber) => subscriber.reject(error));
    refreshSubscribers = [];
}

function addRefreshSubscriber(subscriber: {
    resolve: (token: string) => void;
    reject: (error: any) => void;
}) {
    refreshSubscribers.push(subscriber);
}
