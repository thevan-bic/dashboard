import { LogLevel } from './types';

export class LoggerUtils {
    static formatTimestamp(date: Date, format: string): string {
        const pad = (num: number): string => num.toString().padStart(2, '0');

        const replacements: Record<string, string> = {
            YYYY: date.getFullYear().toString(),
            MM: pad(date.getMonth() + 1),
            DD: pad(date.getDate()),
            HH: pad(date.getHours()),
            mm: pad(date.getMinutes()),
            ss: pad(date.getSeconds()),
            SSS: date.getMilliseconds().toString().padStart(3, '0'),
        };

        return format.replace(/YYYY|MM|DD|HH|mm|ss|SSS/g, (match) => replacements[match]);
    }

    static getLevelName(level: LogLevel): string {
        return LogLevel[level];
    }

    static getLevelColor(level: LogLevel): string {
        const colors: Record<LogLevel, string> = {
            [LogLevel.DEBUG]: '#6B7280',
            [LogLevel.INFO]: '#3B82F6',
            [LogLevel.WARN]: '#F59E0B',
            [LogLevel.ERROR]: '#EF4444',
            [LogLevel.FATAL]: '#7C2D12',
        };
        return colors[level];
    }

    static serializeMetadata(metadata: Record<string, any>): string {
        try {
            return JSON.stringify(metadata, null, 2);
        } catch (error) {
            return `[Circular Reference]: ${error}`;
        }
    }

    static generateSessionId(): string {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    static getStackTrace(): string {
        const stack = new Error().stack;
        if (!stack) {
            return '';
        }
        const lines = stack.split('\n');
        return lines.slice(3, 6).join('\n');
    }
}
