export function getProperty<T = any>(
    source: any,
    property: string | number | symbol,
    defaultValue: T,
): T {
    if (!source || !source.hasOwnProperty(property)) {
        return defaultValue;
    }
    return source[property] as unknown as T;
}
