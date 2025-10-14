import log, { type LogLevelDesc, type Logger } from 'loglevel';

import { env } from '@ruyyaan/reBiz/util-env';

/**
  TRACE: 0;
  DEBUG: 1;
  INFO: 2;
  WARN: 3;
  ERROR: 4;
  SILENT: 5;
 */

const level = (env.NEXT_PUBLIC_LOG_LEVEL as LogLevelDesc) || 'WARN';
// console.log('Setting log level:', level);

log.setDefaultLevel(level);

const loggers: Record<string, Logger> = {};

/**
 * Easily get a singleton logger for your domain
 *
 *
 * https://github.com/pimterry/loglevel#loggetloggerloggername
 */
const getLogger = (name: string) => {
  if (loggers[name]) {
    return loggers[name];
  }

  loggers[name] = log.getLogger(name);

  return loggers[name];
};

export { log, getLogger };
