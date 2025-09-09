export enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    FATAL = 4,
}

export interface LogEntry {
    timestamp: Date;
    level: LogLevel;
    message: string;
    metadata?: Record<string, any>;
    component?: string;
    userId?: string;
    sessionId?: string;
}

export interface LoggerConfig {
    level: LogLevel;
    enableConsole: boolean;
    enableStorage: boolean;
    maxStorageEntries: number;
    timestampFormat: string;
    includeStackTrace: boolean;
    enableColors: boolean;
    component?: string;
}

export interface ILogger {
    debug(message: string, metadata?: Record<string, any>): void;
    info(message: string, metadata?: Record<string, any>): void;
    warn(message: string, metadata?: Record<string, any>): void;
    error(message: string, metadata?: Record<string, any>): void;
    fatal(message: string, metadata?: Record<string, any>): void;
    setLevel(level: LogLevel): void;
    setComponent(component: string): void;
    getLogs(): LogEntry[];
    clearLogs(): void;
    exportLogs(): string;
}
