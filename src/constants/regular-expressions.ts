export const USERNAME_REGEXP = /^[\w-]{4,16}$/;

export const ALPHA_NUMERIC_ONLY_REGEXP = /^[A-Z0-9]+$/i;

export const UNIFIED_SOCIAL_CREDIT_CODE_REGEXP =
    /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/;

export const MOBILE_PHONE_REGEXP = /^(?:(?:\+|00)86)?1\d{10}$/;

export const TELEPHONE_REGEXP = /^(?:(?:\d{3}-)?\d{8}|(?:\d{4}-)?\d{7,8})(?:-\d+)?$/;

export const EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
