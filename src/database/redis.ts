import { createClient } from 'redis';
import logger from '@/utils/logger';
import { REDIS_URL } from '@/config';

export const client = createClient({ url: REDIS_URL });

client.on('connect', () => logger.info('Redis connected.'));
client.on('reconnect', () => logger.info('Redis reconnecting...'));
client.on('ready', () => logger.info('Redis client is ready!'));
client.on('error', err => logger.error(err));

export async function connect() {
  return await client.connect();
}

export default { client, connect };
