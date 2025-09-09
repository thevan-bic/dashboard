import { Logger } from './console';
import { LogLevel, LoggerConfig } from './types';

export class LoggerFactory {
    private static instances: Map<string, Logger> = new Map();
    private static defaultConfig: LoggerConfig = {
        level: LogLevel.INFO,
        enableConsole: true,
        enableStorage: true,
        maxStorageEntries: 1000,
        timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS',
        includeStackTrace: false,
        enableColors: true,
    };

    static setDefaultConfig(config: Partial<LoggerConfig>): void {
        this.defaultConfig = { ...this.defaultConfig, ...config };
    }

    static getLogger(name: string, config?: Partial<LoggerConfig>): Logger {
        if (!this.instances.has(name)) {
            const loggerConfig = { ...this.defaultConfig, component: name, ...config };
            this.instances.set(name, new Logger(loggerConfig));
        }
        return this.instances.get(name)!;
    }

    static createLogger(config?: Partial<LoggerConfig>): Logger {
        return new Logger({ ...this.defaultConfig, ...config });
    }

    static getAllLoggers(): Map<string, Logger> {
        return new Map(this.instances);
    }

    static clearAllLogs(): void {
        this.instances.forEach((logger) => logger.clearLogs());
    }
}
