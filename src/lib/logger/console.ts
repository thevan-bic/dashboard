import { ILogger, LogEntry, LogLevel, LoggerConfig } from './types';
import { LoggerUtils } from './utils';

export class Logger implements ILogger {
    private config: LoggerConfig;
    private logs: LogEntry[] = [];
    private readonly sessionId: string;
    private userId?: string;

    constructor(config: Partial<LoggerConfig> = {}) {
        this.config = {
            level: LogLevel.INFO,
            enableConsole: true,
            enableStorage: true,
            maxStorageEntries: 1000,
            timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS',
            includeStackTrace: false,
            enableColors: true,
            ...config,
        };

        this.sessionId = LoggerUtils.generateSessionId();
        this.loadStoredLogs();
    }

    private loadStoredLogs(): void {
        if (!this.config.enableStorage) {
            return;
        }

        try {
            const stored = localStorage.getItem('app_logs');
            if (stored) {
                const parsedLogs = JSON.parse(stored);
                this.logs = parsedLogs.map((log: any) => ({
                    ...log,
                    timestamp: new Date(log.timestamp),
                }));
            }
        } catch (error) {
            // biome-ignore lint/suspicious/noConsole: <explanation>
            console.warn('Failed to load stored logs:', error);
        }
    }

    private saveToStorage(): void {
        if (!this.config.enableStorage) {
            return;
        }

        try {
            const logsToStore = this.logs.slice(-this.config.maxStorageEntries);
            localStorage.setItem('app_logs', JSON.stringify(logsToStore));
        } catch (error) {
            // biome-ignore lint/suspicious/noConsole: <explanation>
            console.warn('Failed to save logs to storage:', error);
        }
    }

    private createLogEntry(
        level: LogLevel,
        message: string,
        metadata?: Record<string, any>,
    ): LogEntry {
        return {
            timestamp: new Date(),
            level,
            message,
            metadata,
            component: this.config.component,
            userId: this.userId,
            sessionId: this.sessionId,
        };
    }

    private shouldLog(level: LogLevel): boolean {
        return level >= this.config.level;
    }

    private formatConsoleMessage(entry: LogEntry): { message: string; styles: string[] } {
        const timestamp = LoggerUtils.formatTimestamp(entry.timestamp, this.config.timestampFormat);
        const levelName = LoggerUtils.getLevelName(entry.level).padEnd(5);
        const component = entry.component ? `[${entry.component}]` : '';

        if (!this.config.enableColors) {
            return {
                message: `${timestamp} ${levelName} ${component} ${entry.message}`,
                styles: [],
            };
        }

        const levelColor = LoggerUtils.getLevelColor(entry.level);
        return {
            message: `%c${timestamp} %c${levelName}%c ${component} ${entry.message}`,
            styles: ['color: #6B7280', `color: ${levelColor}; font-weight: bold`, 'color: inherit'],
        };
    }

    private logToConsole(entry: LogEntry): void {
        if (!this.config.enableConsole) {
            return;
        }

        const { message, styles } = this.formatConsoleMessage(entry);
        const consoleMethod = this.getConsoleMethod(entry.level);

        consoleMethod(message, ...styles);

        if (entry.metadata && Object.keys(entry.metadata).length > 0) {
            // biome-ignore lint/suspicious/noConsole: <explanation>
            console.groupCollapsed('Metadata');
            // biome-ignore lint/suspicious/noConsole: <explanation>
            console.table(entry.metadata);
            // biome-ignore lint/suspicious/noConsole: <explanation>
            console.groupEnd();
        }

        if (this.config.includeStackTrace && entry.level >= LogLevel.ERROR) {
            const stackTrace = LoggerUtils.getStackTrace();
            if (stackTrace) {
                // biome-ignore lint/suspicious/noConsole: <explanation>
                console.groupCollapsed('Stack Trace');
                // biome-ignore lint/suspicious/noConsole: <explanation>
                console.log(stackTrace);
                // biome-ignore lint/suspicious/noConsole: <explanation>
                console.groupEnd();
            }
        }
    }

    private getConsoleMethod(level: LogLevel): typeof console.log {
        switch (level) {
            case LogLevel.DEBUG:
                return console.debug;
            case LogLevel.INFO:
                return console.info;
            case LogLevel.WARN:
                return console.warn;
            case LogLevel.ERROR:
            case LogLevel.FATAL:
                return console.error;
            default:
                return console.log;
        }
    }

    private log(level: LogLevel, message: string, metadata?: Record<string, any>): void {
        if (!this.shouldLog(level)) {
            return;
        }
        const entry = this.createLogEntry(level, message, metadata);
        this.logs.push(entry);
        if (this.logs.length > this.config.maxStorageEntries) {
            this.logs = this.logs.slice(-this.config.maxStorageEntries);
        }
        this.logToConsole(entry);
        this.saveToStorage();
    }

    debug(message: string, metadata?: Record<string, any>): void {
        this.log(LogLevel.DEBUG, message, metadata);
    }

    info(message: string, metadata?: Record<string, any>): void {
        this.log(LogLevel.INFO, message, metadata);
    }

    warn(message: string, metadata?: Record<string, any>): void {
        this.log(LogLevel.WARN, message, metadata);
    }

    error(message: string, metadata?: Record<string, any>): void {
        this.log(LogLevel.ERROR, message, metadata);
    }

    fatal(message: string, metadata?: Record<string, any>): void {
        this.log(LogLevel.FATAL, message, metadata);
    }

    setLevel(level: LogLevel): void {
        this.config.level = level;
    }

    setComponent(component: string): void {
        this.config.component = component;
    }

    setUserId(userId: string): void {
        this.userId = userId;
    }

    getLogs(): LogEntry[] {
        return [...this.logs];
    }

    getLogsByLevel(level: LogLevel): LogEntry[] {
        return this.logs.filter((log) => log.level === level);
    }

    getLogsByComponent(component: string): LogEntry[] {
        return this.logs.filter((log) => log.component === component);
    }

    clearLogs(): void {
        this.logs = [];
        if (this.config.enableStorage) {
            localStorage.removeItem('app_logs');
        }
    }

    exportLogs(): string {
        return JSON.stringify(this.logs, null, 2);
    }

    downloadLogs(filename: string = 'app-logs.json'): void {
        const dataStr = this.exportLogs();
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    }

    updateConfig(newConfig: Partial<LoggerConfig>): void {
        this.config = { ...this.config, ...newConfig };
    }
}
