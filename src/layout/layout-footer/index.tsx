import { usePreferencesStore } from '@/store';
import { cn } from '@/utils';

interface LayoutFooterProps {
    className?: string;
}
export default function LayoutFooter({ className }: LayoutFooterProps) {
    const { enableFooter, companyName, companyWebsite, copyrightDate, ICPNumber, ICPLink } =
        usePreferencesStore();
    if (!enableFooter) {
        return null;
    }

    return (
        <footer
            className={cn(
                'h-10 flex flex-wrap shrink-0 items-center justify-center text-xs md:text-sm text-color-text-secondary',
                className,
            )}
        >
            {ICPNumber ? (
                <span>
                    <a href={ICPLink} rel="noreferrer noopener" target="_blank">
                        {ICPNumber}
                    </a>
                    &nbsp;
                </span>
            ) : null}
            Copyright &copy;&nbsp;
            {copyrightDate}
            {copyrightDate ? <>&nbsp;</> : ''}
            {companyName ? (
                <span>
                    <a href={companyWebsite} rel="noreferrer noopener" target="_blank">
                        {companyName}
                        &nbsp;
                    </a>
                </span>
            ) : null}
            All right reserved
        </footer>
    );
}
