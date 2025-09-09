import { LoggerFactory } from './factory';
import { LogLevel } from './types';

const globalLogger = LoggerFactory.createLogger({
    level: LogLevel.INFO,
    enableColors: true,
    component: 'GlobalApp',
    enableStorage: false,
});

export default globalLogger;
