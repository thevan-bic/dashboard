import { BasicButton } from '@/components';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import type { ButtonProps } from 'antd';
import type { RefObject } from 'react';

import { useFullscreen } from 'ahooks';

export interface FullscreenButtonProps extends Omit<ButtonProps, 'target'> {
    target: HTMLElement | (() => Element) | RefObject<Element>;
    fullscreenIcon?: React.ReactNode;
    fullscreenExitIcon?: React.ReactNode;
}

export const FullscreenButton: React.FC<FullscreenButtonProps> = ({
    target,
    fullscreenIcon,
    fullscreenExitIcon,
    ...restProps
}) => {
    const [isFullscreen, { toggleFullscreen }] = useFullscreen(target);

    return (
        <BasicButton
            type="text"
            {...restProps}
            icon={
                !isFullscreen
                    ? (fullscreenIcon ?? <FullscreenOutlined />)
                    : (fullscreenExitIcon ?? <FullscreenExitOutlined />)
            }
            onClick={toggleFullscreen}
        />
    );
};
