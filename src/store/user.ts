import { fetchUserInfo } from '@/api/user';
import type { UserInfoType } from '@/api/user/types';

import { create } from 'zustand';

const initialState = {
    id: '',
    avatar: '',
    username: '',
    email: '',
    phoneNumber: '',
    description: '',
    roles: [],
    // menus: [],
};

type UserState = UserInfoType;

interface UserAction {
    getUserInfo: () => Promise<UserInfoType>;
    reset: () => void;
}

export const useUserStore = create<UserState & UserAction>()((set) => ({
    ...initialState,

    getUserInfo: async () => {
        const response = await fetchUserInfo();
        set({
            ...response,
        });
        return response;
    },

    reset: () => {
        return set({
            ...initialState,
        });
    },
}));
