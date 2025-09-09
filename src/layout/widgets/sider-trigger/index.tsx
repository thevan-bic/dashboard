import { BasicButton } from '@/components';

import { usePreferences } from '@/hooks';
import { cn } from '@/utils';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { siderTriggerHeight } from '../../constants';

interface SiderTriggerProps {
    className?: string;
}

export function SiderTrigger({ className }: SiderTriggerProps) {
    const { sidebarCollapsed, setPreferences, sidebarTheme } = usePreferences();

    return (
        <BasicButton
            type="text"
            style={{
                boxShadow: '0px -3px 5px 0 rgb(29, 35, 41, 0.05)',
                height: siderTriggerHeight,
            }}
            icon={sidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setPreferences('sidebarCollapsed', !sidebarCollapsed)}
            className={cn(
                'w-full! rounded-none border-t',
                className,
                sidebarTheme === 'dark' ? 'border-t-[#303030]' : 'border-t-color-border-secondary',
            )}
        />
    );
}
