import { getProperty } from '@/utils/get-property';
import { isValidElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useMatches } from 'react-router';

export function Iframe() {
    const matches = useMatches();
    const { t } = useTranslation();
    const currentRoute = matches[matches.length - 1];
    const iframeLink = currentRoute.handle?.iframeLink;
    const routeTitle = currentRoute.handle?.title;

    const title = (
        isValidElement(routeTitle)
            ? t(getProperty<string>(routeTitle?.props, 'children', 'common.unknown'))
            : routeTitle
    ) as string;

    return iframeLink ? (
        /**
         * use this tool https://iframegenerator.top/ to generate the iframe code
         */
        <iframe
            src={iframeLink}
            title={title}
            width="100%"
            height="100%"
            loading="lazy"
            className="p-4 rounded-xs"
        />
    ) : null;
}
