import { join } from 'node:path';
import { config } from 'dotenv';

export const CWD = process.cwd();
export const { NODE_ENV } = process.env;

config({ path: join(CWD, '.env') });
config({ path: join(CWD, '.env.local'), override: true });
config({ path: join(CWD, `.env.${NODE_ENV}`), override: true });
config({ path: join(CWD, `.env.${NODE_ENV}.local`), override: true });

export const { APP_PORT, APP_TIMEZONE } = process.env;
export const { LOG_DIR } = process.env;
export const { HTTP_LOG_FORMAT, HTTP_CORS_ORIGIN, HTTP_CORS_CREDENTIALS } = process.env;
export const { MYSQL_URL } = process.env;
export const { REDIS_URL } = process.env;
