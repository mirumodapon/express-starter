import { join } from 'node:path';
import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';
import { CWD, LOG_DIR } from '@/config';

const path = join(CWD, LOG_DIR);

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(
      ({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`
    )
  ),
  transports: [
    new winstonDaily({
      level: 'debug',
      format: winston.format.uncolorize(),
      datePattern: 'YYYY-MM-DD',
      dirname: `${path}/debug`,
      filename: `%DATE%.log`,
      maxFiles: 30,
      json: false,
      zippedArchive: true
    }),
    new winstonDaily({
      level: 'error',
      format: winston.format.uncolorize(),
      datePattern: 'YYYY-MM-DD',
      dirname: `${path}/error`,
      filename: `%DATE%.log`,
      handleExceptions: true,
      json: false,
      zippedArchive: true
    }),
    new winston.transports.Console({ format: winston.format.splat() })
  ]
});

export default logger;
