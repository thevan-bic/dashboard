import { usePreferencesStore } from '@/store/preferences';
import type { TabPaneProps } from 'antd';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface TabItemProps extends Omit<TabPaneProps, 'tab'> {
    key: string;
    label: React.ReactNode;
    draggable?: boolean;
    historyState?: Record<string, any>;
}

export interface TabStateType extends Omit<TabItemProps, 'label'> {
    label: string;
}

const initialState = {
    openTabs: new Map<string, TabStateType>([]),
    activeKey: '',
    isRefresh: false,
    isMaximize: false,
};

type TabsState = typeof initialState;

interface TabsAction {
    setIsRefresh: (state: boolean) => void;
    addTab: (routePath: string, tabProps: TabStateType) => void;
    insertBeforeTab: (routePath: string, tabProps: TabStateType) => void;
    removeTab: (routePath: string) => void;
    closeRightTabs: (routePath: string) => void;
    closeLeftTabs: (routePath: string) => void;
    closeOtherTabs: (routePath: string) => void;
    closeAllTabs: () => void;
    setActiveKey: (routePath: string) => void;
    resetTabs: () => void;
    changeTabOrder: (from: number, to: number) => void;
    toggleMaximize: (state: boolean) => void;
}

export const useTabsStore = create<TabsState & TabsAction>()(
    persist(
        (set) => ({
            ...initialState,

            setIsRefresh: (state: boolean) => {
                set({ isRefresh: state });
            },

            setActiveKey: (routePath: string) => {
                set({ activeKey: routePath });
            },

            insertBeforeTab: (routePath: string, tabProps: TabStateType) => {
                set((state) => {
                    if (routePath.length) {
                        const newMap = new Map([[routePath, tabProps]]);
                        for (const [key, value] of state.openTabs) {
                            newMap.set(key, value);
                        }
                        return { openTabs: newMap };
                    }
                    return state;
                });
            },

            addTab: (routePath: string, tabProps: TabStateType) => {
                set((state) => {
                    if (routePath.length) {
                        const newTabs = new Map(state.openTabs);
                        newTabs.set(routePath, { ...newTabs.get(routePath), ...tabProps });
                        return { openTabs: newTabs };
                    }
                    return state;
                });
            },

            removeTab: (routePath: string) => {
                set((state) => {
                    const homePath = import.meta.env.VITE_BASE_HOME_PATH;

                    if (routePath === homePath) {
                        return state;
                    }

                    const newTabs = new Map(state.openTabs);
                    newTabs.delete(routePath);
                    let newActiveKey = state.activeKey;

                    if (routePath === state.activeKey) {
                        const tabsArray = Array.from(newTabs.keys());
                        newActiveKey = tabsArray.at(-1) || homePath;
                    }

                    if (newTabs.size === 0) {
                        newTabs.set(homePath, state.openTabs.get(homePath)!);
                        newActiveKey = homePath;
                    }

                    return { openTabs: newTabs, activeKey: newActiveKey };
                });
            },

            closeRightTabs: (routePath: string) => {
                set((state) => {
                    const newTabs = new Map();
                    let found = false;
                    let activeKeyFound = false;
                    let newActiveKey = state.activeKey;

                    for (const [key, value] of state.openTabs) {
                        if (found) {
                            break;
                        }
                        newTabs.set(key, value);
                        if (key === routePath) {
                            found = true;
                        }
                        if (key === state.activeKey) {
                            activeKeyFound = true;
                        }
                    }

                    if (!activeKeyFound) {
                        newActiveKey = routePath;
                    }

                    return { openTabs: newTabs, activeKey: newActiveKey };
                });
            },

            closeLeftTabs: (routePath: string) => {
                set((state) => {
                    const newTabs = new Map();
                    const homePath = import.meta.env.VITE_BASE_HOME_PATH;
                    let found = false;
                    let newActiveKey = state.activeKey;
                    let activeKeyOnRight = false;

                    newTabs.set(homePath, state.openTabs.get(homePath)!);

                    for (const [key, value] of state.openTabs) {
                        if (key === homePath) {
                            continue;
                        }

                        if (found || key === routePath) {
                            newTabs.set(key, value);
                            found = true;
                        }

                        if (key === state.activeKey && found) {
                            activeKeyOnRight = true;
                        }
                    }

                    if (!activeKeyOnRight) {
                        newActiveKey = routePath;
                    }

                    return { openTabs: newTabs, activeKey: newActiveKey };
                });
            },

            closeOtherTabs: (routePath: string) => {
                set((state) => {
                    const newTabs = new Map();
                    const homePath = import.meta.env.VITE_BASE_HOME_PATH;

                    newTabs.set(homePath, state.openTabs.get(homePath)!);

                    if (routePath !== homePath && state.openTabs.has(routePath)) {
                        newTabs.set(routePath, state.openTabs.get(routePath)!);
                    }

                    let newActiveKey = state.activeKey;
                    if (!newTabs.has(state.activeKey)) {
                        newActiveKey = routePath;
                    }

                    return { openTabs: newTabs, activeKey: newActiveKey };
                });
            },

            closeAllTabs: () => {
                set((state) => {
                    const newTabs = new Map();
                    const homePath = import.meta.env.VITE_BASE_HOME_PATH;
                    newTabs.set(homePath, state.openTabs.get(homePath)!);
                    return { openTabs: newTabs, activeKey: homePath };
                });
            },

            changeTabOrder: (from: number, to: number) => {
                set((state) => {
                    const newTabs = Array.from(state.openTabs.entries());
                    const [movedTab] = newTabs.splice(from, 1);
                    newTabs.splice(to, 0, movedTab);

                    const newOpenTabs = new Map(newTabs);
                    return { openTabs: newOpenTabs };
                });
            },

            toggleMaximize: (state: boolean) => {
                set({ isMaximize: state });
            },

            resetTabs: () => {
                set(() => {
                    return { ...initialState };
                });
            },
        }),
        {
            name: 'tabbar',
            partialize: (state) => {
                return Object.fromEntries(
                    Object.entries(state).filter(([key]) => !['activeKey'].includes(key)),
                );
            },
            storage: {
                getItem: (name) => {
                    const str = sessionStorage.getItem(name);
                    const isPersist = usePreferencesStore.getState().tabbarPersist;
                    if (!str || !isPersist) {
                        return null;
                    }
                    const existingValue = JSON.parse(str);
                    return {
                        ...existingValue,
                        state: {
                            ...existingValue.state,
                            openTabs: new Map(existingValue.state.openTabs),
                        },
                    };
                },
                setItem: (name, newValue) => {
                    const str = JSON.stringify({
                        ...newValue,
                        state: {
                            ...newValue.state,
                            openTabs: Array.from(newValue.state.openTabs.entries()),
                        },
                    });
                    sessionStorage.setItem(name, str);
                },
                removeItem: (name) => sessionStorage.removeItem(name),
            },
        },
    ),
);
