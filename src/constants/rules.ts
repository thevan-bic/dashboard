import type { TFunction } from 'i18next';

import {
    ALPHA_NUMERIC_ONLY_REGEXP,
    EMAIL_REGEXP,
    MOBILE_PHONE_REGEXP,
    TELEPHONE_REGEXP,
    UNIFIED_SOCIAL_CREDIT_CODE_REGEXP,
    USERNAME_REGEXP,
} from './regular-expressions';

export const FORM_REQUIRED = [{ required: true }];

export function USERNAME_RULES(t: TFunction<'translation', undefined>) {
    return [
        {
            required: true,
            message: t('form.username.required'),
        },
        {
            pattern: USERNAME_REGEXP,
            message: t('form.username.invalid'),
        },
    ];
}

export function PASSWORD_RULES(t: TFunction<'translation', undefined>) {
    return [
        {
            required: true,
            message: t('form.password.required'),
        },
        {
            pattern: /^(?=.*\d)(?=.*[a-z])[\w~!@#$%^&*+.\-]{8,16}$/i,
            message: t('form.password.invalid'),
        },
    ];
}

export function ALPHA_NUMERIC_ONLY_RULES(t: TFunction<'translation', undefined>) {
    return [
        {
            required: true,
            message: t('form.alphanumeric.required'),
        },
        {
            pattern: ALPHA_NUMERIC_ONLY_REGEXP,
            message: t('form.alphanumeric.invalid'),
        },
    ];
}

export function UNIFIED_SOCIAL_CREDIT_CODE_RULES(t: TFunction<'translation', undefined>) {
    return [
        {
            required: true,
            message: t('form.unifiedSocialCreditCode.required'),
        },
        {
            pattern: UNIFIED_SOCIAL_CREDIT_CODE_REGEXP,
            message: t('form.unifiedSocialCreditCode.invalid'),
        },
    ];
}

export function MOBILE_PHONE_RULES(t: TFunction<'translation', undefined>) {
    return [
        {
            required: true,
            message: t('form.mobile.required'),
        },
        {
            pattern: MOBILE_PHONE_REGEXP,
            message: t('form.mobile.invalid'),
        },
    ];
}

export function TELEPHONE_RULES(t: TFunction<'translation', undefined>) {
    return [
        {
            required: true,
            message: t('form.telephone.required'),
        },
        {
            pattern: TELEPHONE_REGEXP,
            message: t('form.telephone.invalid'),
        },
    ];
}

export function PHONE_RULE(t: TFunction<'translation', undefined>) {
    return {
        validator: (_: unknown, value: string) => {
            if (!value) {
                return Promise.resolve();
            }

            if (MOBILE_PHONE_REGEXP.test(value) || TELEPHONE_REGEXP.test(value)) {
                return Promise.resolve();
            } else {
                return Promise.reject(t('form.mobile.invalid'));
            }
        },
    };
}

export function EMAIL_RULES(t: TFunction<'translation', undefined>) {
    return [
        {
            required: true,
            message: t('form.email.required'),
        },
        {
            pattern: EMAIL_REGEXP,
            message: t('form.email.invalid'),
        },
    ];
}

export function ETH_ADDRESS_RULES(t: TFunction<'translation', undefined>) {
    return [
        {
            required: true,
            message: t('form.contractAddress.required'),
        },
        {
            pattern: /^(0x)?[0-9a-fA-F]{40}$/i,
            message: t('form.contractAddress.invalid'),
        },
    ];
}
