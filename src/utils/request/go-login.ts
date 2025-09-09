import { useAuthStore } from '@/store';
import { rememberRoute } from '@/utils';

export function goLogin() {
    useAuthStore.getState().reset();
    window.location.href = `${import.meta.env.BASE_URL}login${rememberRoute()}`;
}
