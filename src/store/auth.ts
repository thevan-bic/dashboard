import { fetchLogin, fetchLogout } from '@/api/user';
import type { AuthType } from '@/api/user/types';
import type { PasswordLoginFormType } from '@/pages/login/components/password-login';
import { useAccessStore, useTabsStore, useUserStore } from '@/store';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
    token: '',
    refreshToken: '',
};

type AuthState = AuthType;

interface AuthAction {
    login: (loginPayload: PasswordLoginFormType) => Promise<void>;
    logout: () => Promise<void>;
    reset: () => void;
}

export const useAuthStore = create<AuthState & AuthAction>()(
    persist(
        (set, get) => ({
            ...initialState,

            login: async (loginPayload) => {
                const response = await fetchLogin(loginPayload);
                return set({
                    ...response,
                });
            },

            logout: async () => {
                await fetchLogout();

                get().reset();
            },

            reset: () => {
                set({
                    ...initialState,
                });
                useUserStore.getState().reset();

                useAccessStore.getState().reset();

                useTabsStore.getState().resetTabs();
            },
        }),
        { name: 'access-token' },
    ),
);
