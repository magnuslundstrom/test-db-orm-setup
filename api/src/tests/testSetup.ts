import { Router } from 'express';
import app from '../app';
import { allRoutes } from '../routes/allRoutes';
import { Connection, createConnection, getConnection } from 'typeorm';

/** TestSetup class will make it easy to make a connection and setup test routes in beforeEach calls */
class TestSetup {
  app = app;
  private router: Router | null = null;
  private connection: Connection | null = null;

  async start() {
    await this.createTestConnection();
    this.setupRouter();
    this.consumeRouter();
  }

  private setupRouter() {
    const router = Router();
    allRoutes.forEach((route) => {
      route(router, this.connection);
    });
    this.router = router;
  }

  private consumeRouter() {
    this.app.use(this.router);
  }

  private async createTestConnection() {
    const connection = await createConnection({
      name: 'test',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'test',
      database: 'test',
      type: 'mysql',
      synchronize: true,
      dropSchema: true,
      logging: false,
      entities: ['src/entity/**/!(*.test.ts)'],
      migrations: ['src/migration/**/*.ts'],
      subscribers: ['src/subscriber/**/*.ts'],
    });
    this.connection = connection;
  }

  closeConnection() {
    getConnection('test').close();
  }
}

export default TestSetup;
