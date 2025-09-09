import { CopyButton } from '@/components/buttons/copy';
import { LinkButton } from '@/components/buttons/link';
import { StatusChip } from '@/components/views/status';
import React from 'react';

type RowInfoProps = { label: string; value: string; link?: string; showCopy?: boolean };

export const RowInfo: React.FC<RowInfoProps> = ({ label, value, showCopy = true, link }) => (
    <div className="flex items-center justify-between mb-4">
        <div className="flex-1 grid grid-cols-12 items-center">
            <div className="col-span-3">
                <span className=" text-sm">{label}</span>
            </div>
            <div className="col-span-5">
                <span className="font-mono text-xs break-all">{value}</span>
            </div>
            <div className="col-span-2 flex justify-end space-x-2">
                {link && <LinkButton url={link} />}
                {showCopy && <CopyButton value={value || ''} showNotification />}
            </div>
        </div>
    </div>
);

export const RowStatusInfo: React.FC<
    Omit<RowInfoProps, 'showCopy' | 'link'> & { retry: string }
> = ({ label, value, retry }) => (
    <div className="flex items-center justify-between mb-4">
        <div className="flex-1 grid grid-cols-12 items-center">
            <div className="col-span-3">
                <span className=" text-sm">{label}</span>
            </div>
            <div className="col-span-5">
                <StatusChip retry={!!retry} status={value} />
            </div>
        </div>
    </div>
);
