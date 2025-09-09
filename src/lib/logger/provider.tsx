import { ReactNode, createContext } from 'react';
import { Logger } from './console';
import { LoggerConfig } from './types';

interface LoggerContextType {
    logger: Logger;
}

export const LoggerContext = createContext<LoggerContextType | undefined>(undefined);

interface LoggerProviderProps {
    children: ReactNode;
    config?: Partial<LoggerConfig>;
}

export const LoggerProvider: React.FC<LoggerProviderProps> = ({ children, config }) => {
    const logger = new Logger(config);
    return <LoggerContext.Provider value={{ logger }}>{children}</LoggerContext.Provider>;
};
