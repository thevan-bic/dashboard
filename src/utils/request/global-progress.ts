import { useGlobalStore } from '@/store';

let requestCount = 0;

export const globalProgress = {
    start() {
        if (requestCount === 0) {
            useGlobalStore.getState().openGlobalSpin();
        }
        requestCount++;
    },

    done() {
        requestCount = Math.max(requestCount - 1, 0);
        if (requestCount === 0) {
            useGlobalStore.getState().closeGlobalSpin();
        }
    },

    forceFinish() {
        requestCount = 0;
        useGlobalStore.getState().closeGlobalSpin();
    },
};
