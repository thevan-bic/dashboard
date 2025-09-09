import { BasicContent } from '@/components';
import { useTranslation } from 'react-i18next';
import { OperationsList } from './components/list';

export default function EventActivity() {
    const { t } = useTranslation();
    return (
        <BasicContent>
            <h1>{t('common.menu.operation')}</h1>
            <OperationsList namespace={'payment'} />
        </BasicContent>
    );
}
