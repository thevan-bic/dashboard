import { useCallback } from 'react';
import { ListenerDetail } from './drawer';

export function View({
    id,
    isOpen,
    onClose,
    fetchStatus,
}: { id: string; isOpen: boolean; onClose: () => void; fetchStatus: boolean }) {
    const onCloseChange = useCallback(() => {
        const url = new URL(window.location.href);
        url.searchParams.delete('slideID');
        url.searchParams.delete('fetchStatus');
        window.history.pushState(null, '', url.toString());
        onClose();
    }, []);

    return (
        isOpen &&
        id && (
            <ListenerDetail
                fetchStatus={fetchStatus}
                open={isOpen}
                onCloseChange={onCloseChange}
                operationID={id}
            />
        )
    );
}
