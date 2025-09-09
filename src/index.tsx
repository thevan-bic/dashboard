import '@ant-design/v5-patch-for-react-19';
import { TanstackQuery } from '@/components';
import { setupI18n } from '@/locales';
import { setupLoading } from '@/plugins';

import { createRoot } from 'react-dom/client';

import App from './app';
import './styles/index.css';

async function setupApp() {
    setupI18n();

    setupLoading();

    const rootElement = document.getElementById('root');
    if (!rootElement) {
        return;
    }
    const root = createRoot(rootElement);

    root.render(
        <TanstackQuery>
            <App />
        </TanstackQuery>,
    );
}

setupApp();
