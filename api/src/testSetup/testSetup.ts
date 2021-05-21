import { Router } from 'express';
import app from '../app';
import { allRoutes } from '../routes/allRoutes';
import { Connection, createConnection, getConnection } from 'typeorm';
import { UserSetup } from './userSetup/userSetup';
import { GroupSetup } from './groupSetup/groupSetup';

/** TestSetup class will make it easy to make a connection and setup test routes in beforeEach calls */
class TestSetup {
  app = app;
  private router: Router | null = null;
  connection: Connection | null = null;
  userSetup: UserSetup | null = null;
  groupSetup: GroupSetup | null = null;
  async start() {
    await this.createTestConnection();
    this.setupRouter();
    this.consumeRouter();
    this.userSetup = new UserSetup(this.connection);
    this.groupSetup = new GroupSetup(this.connection);
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
      migrationsRun: false,
      logging: false,
      entities: ['src/entity/**/!(*.test.ts)'],
      migrations: ['src/migration/**/*.ts'],
      subscribers: ['src/subscriber/**/*.ts'],
    });
    this.connection = connection;
  }

  async closeConnection() {
    if (this.connection) {
      await this.connection.close();
    }
  }
}

export default TestSetup;
