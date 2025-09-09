import { BasicContent } from '@/components';
import { EventsList } from '@/pages/activity/event/components/list';
import { useTranslation } from 'react-i18next';

export default function EventActivity() {
    const { t } = useTranslation();
    return (
        <BasicContent>
            <h1>{t('common.menu.event')}</h1>
            <EventsList namespace={'payment'} />
        </BasicContent>
    );
}
