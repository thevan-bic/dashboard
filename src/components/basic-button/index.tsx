import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import type { ReactNode } from 'react';

interface BasicButtonProps extends ButtonProps {
    children?: ReactNode;
}

export function BasicButton(props: BasicButtonProps) {
    const { children } = props;

    const params: Partial<BasicButtonProps> = { ...props };

    return (
        <Button type="primary" {...params}>
            {children}
        </Button>
    );
}
