import type { TFunction } from 'i18next';

export const TOKEN = 'admin_token';
export const LANG = 'lang';
export const EMPTY_VALUE = '-';

export const MAX_TAG_COUNT = 'responsive';

export const DATE_FORMAT = 'YYYY-MM-DD';
export const TIME_FORMAT = 'YYYY-MM-DD hh:mm:ss';

export const INITIAL_PAGINATION = {
    current: 1,
    pageSize: 20,
};

export const ADD_TITLE = (t: TFunction, title?: string) =>
    t('public.createTitle', { title: title ?? '' });
export const EDIT_TITLE = (t: TFunction, name: string, title?: string) =>
    `${t('public.editTitle', { title: title ?? '' })}${name ? `(${name})` : ''}`;
