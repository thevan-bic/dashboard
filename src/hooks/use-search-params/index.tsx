import { useCallback, useEffect, useRef } from 'react';

export const useSearchParams = () => {
    const searchParamsRef = useRef(new URLSearchParams(window.location.search));

    useEffect(() => {
        const handlePopState = () => {
            searchParamsRef.current = new URLSearchParams(window.location.search);
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const getSearchParams = useCallback(() => {
        return new URLSearchParams(window.location.search);
    }, []);

    const setSearchParams = useCallback((params: Record<string, any>) => {
        const newParams = new URLSearchParams(searchParamsRef.current);

        Object.entries(params).forEach(([key, value]) => {
            if (value === null || value === undefined) {
                newParams.delete(key);
            } else {
                newParams.set(key, value);
            }
        });

        const newUrl = new URL(window.location.href);
        newUrl.search = newParams.toString();

        window.history.replaceState(null, '', newUrl.toString());
        searchParamsRef.current = newParams;
    }, []);

    return [getSearchParams, setSearchParams] as const;
};
