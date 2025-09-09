import { getShortString } from '@/utils/short-hash';

export const isBoolean = (data: any): data is boolean => {
    return typeof data === 'boolean' || data instanceof Boolean;
};

export const isNumber = (data: any): data is number => {
    return typeof data === 'number' || data instanceof Number;
};

export const isBigInt = (data: any): data is bigint => {
    return typeof data === 'bigint' || data instanceof BigInt;
};

export const isDate = (data: unknown): data is Date => {
    return !!data && data instanceof Date;
};

export const isString = (data: any): data is string => {
    return typeof data === 'string' || data instanceof String;
};

export const isArray = (data: any): data is Array<any> => {
    return Array.isArray(data);
};

export const isObject = (data: any): data is Record<any, any> => {
    return typeof data === 'object' && data !== null;
};

export const isNull = (data: any): data is null => {
    return data === null;
};

export const isUndefined = (data: any): data is undefined => {
    return data === undefined;
};

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export const isFunction = (data: unknown): data is Function => {
    return !!data && data instanceof Object && typeof data === 'function';
};

// Check if string is a hex string (starts with 0x or contains only hex characters)
// Common hex patterns:
// - Ethereum addresses: 0x followed by 40 hex chars
// - Transaction hashes: 0x followed by 64 hex chars
// - Other hashes: 32, 64, 128 hex chars (MD5, SHA256, etc)
// - UUIDs: 32 hex chars with dashes
export function isHexString(str: string): boolean {
    // Check if it starts with 0x or 0X
    if (str.toLowerCase().startsWith('0x')) {
        return /^0x[0-9a-fA-F]+$/.test(str);
    }
    // Check if it's a hex string without 0x prefix
    // Common patterns: addresses (40 chars), hashes (64 chars), or other hex strings (min 8 chars)
    if (str.length >= 8 && /^[0-9a-fA-F]+$/.test(str)) {
        return true;
    }
    // Also check for hex strings with dashes or colons (like UUIDs or MAC addresses)
    if (str.length >= 8 && /^[0-9a-fA-F-:]+$/.test(str)) {
        const hexOnly = str.replace(/[-:]/g, '');
        return /^[0-9a-fA-F]+$/.test(hexOnly) && hexOnly.length >= 8;
    }
    return false;
}

// Truncate string - for hex strings, show beginning and end
// Examples:
// - "0x1234567890abcdef..." -> "0x12345...bcdef"
// - "a1b2c3d4e5f6a7b8..." -> "a1b2c3...a7b8"
// - "regular string..." -> "regular string..."
export function truncateString(str: string, maxLength: number): string {
    if (str.length <= maxLength) {
        return str;
    }

    if (isHexString(str)) {
        // For hex strings, show beginning and end
        const hasPrefix = str.toLowerCase().startsWith('0x');
        const effectiveStr = hasPrefix ? str.slice(2) : str;
        const prefix = hasPrefix ? '0x' : '';
        const availableLength = maxLength - prefix.length - 3; // -3 for "..."

        if (availableLength < 4) {
            // If we can't show at least 2 chars on each side, just truncate normally
            return str.substring(0, maxLength) + '...';
        }

        const keepLength = Math.floor(availableLength / 2);
        const start = effectiveStr.substring(0, keepLength);
        const end = effectiveStr.substring(effectiveStr.length - keepLength);
        return `${prefix}${start}...${end}`;
    }

    return getShortString(str, 20);
}

export function isPrimitive(value: any) {
    return !isArray(value) && !isObject(value) && !isFunction(value);
}
