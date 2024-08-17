import Express from 'express';
import logger from '@/utils/logger';

import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from '@/middleware/cors';
import httpLogger from '@/middleware/logger';

import { NODE_ENV } from '@/config';
import type { AppOptions, Port, Routes } from '@/types/app';

class App {
  private app: Express.Application;
  private env: string;

  constructor({ routes }: AppOptions) {
    this.app = Express();
    this.env = NODE_ENV || 'development';

    this.initMiddleware();
    this.initRoutes(routes);
    this.initErrorHandling();
  }

  public listen(port: Port = 3000) {
    this.app.listen(port, () => {
      logger.info(`ENV: ${this.env}`);
      logger.info(`App listening on the port ${port}...`);
    });
  }

  public getApp() {
    return this.app;
  }

  private initMiddleware() {
    this.app.use(httpLogger);
    this.app.use(cors);
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(Express.json());
    this.app.use(Express.urlencoded({ extended: true }));
  }

  private initRoutes(routes: Routes[]) {
    routes.forEach(({ path, router }) => this.app.use(path, router));
  }

  private initErrorHandling() {
  }
}

export default App;
