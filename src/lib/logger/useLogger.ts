import { useContext } from 'react';
import { Logger } from './console';
import { LoggerContext } from './provider';

export const useLogger = (component?: string): Logger => {
    const context = useContext(LoggerContext);
    if (!context) {
        throw new Error('useLogger must be used within a LoggerProvider');
    }
    if (component) {
        return new Logger({ ...context.logger['config'], component });
    }
    return context.logger;
};
