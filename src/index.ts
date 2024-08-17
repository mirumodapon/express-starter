import App from '@/app';
import { APP_PORT } from '@/config';

import mysql from '@/database';
import redis from '@/database/redis';

async function main() {
  await mysql.authenticate();
  await redis.connect();

  const app = new App({ routes: [] });
  app.listen(APP_PORT);
}

main();
