import morgan from 'morgan';
import logger from '@/utils/logger';
import { HTTP_LOG_FORMAT } from '@/config';

export default morgan(
  HTTP_LOG_FORMAT,
  {
    stream: {
      write: (message: string) =>
        logger.info(message.substring(0, message.lastIndexOf('\n')))
    }
  }
);
