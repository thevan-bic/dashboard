import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Detail } from './components/detail';

export default function OperationDetail() {
    const navigate = useNavigate();
    const { operationId } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [operationID, setOperationId] = useState<any>(undefined);
    useEffect(() => {
        setIsOpen(!!operationId);
        setOperationId(operationId);
    }, [operationId]);

    const onCloseChange = useCallback(() => {
        setIsOpen(false);
        navigate(-1);
    }, []);

    return (
        operationID && (
            <Detail
                title={'Operation Detail'}
                open={isOpen}
                onCloseChange={onCloseChange}
                operationID={operationID}
            />
        )
    );
}
