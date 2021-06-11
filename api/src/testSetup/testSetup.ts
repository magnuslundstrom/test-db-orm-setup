import { Router } from 'express';
import app from '../app';
import { allRoutes } from '../routes/allRoutes';
import { Connection, createConnection, EntityMetadata } from 'typeorm';
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
    this.app.use(this.router);
    this.userSetup = new UserSetup(this.connection);
    this.groupSetup = new GroupSetup(this.connection);
  }

  async closeConnection() {
    if (this.connection) {
      await this.connection.manager.query('SET FOREIGN_KEY_CHECKS = 0;');
      await this.dropEntities(await this.getEntities());
      await this.connection.manager.query('SET FOREIGN_KEY_CHECKS = 1;');
      await this.connection.close();
    }
  }

  async dropEntities(entities: EntityMetadata[]) {
    try {
      for (let entity of entities) {
        const { tableName } = entity;
        const sql = `TRUNCATE TABLE ${tableName};`;
        await this.connection.manager.query(sql);
      }
    } catch (err) {
      // UNCOMMENT THIS FOR FURTHER DEBUGGING
      // console.log(err);
      // right now it gives an truncate table error that I can't seem to solve, but it is however not causing troubles
    }
  }

  async getEntities() {
    const promised = [];
    this.connection.entityMetadatas.forEach((entity) => promised.push(entity));
    const entities = await Promise.all(promised);
    return entities;
  }

  private setupRouter() {
    const router = Router();
    allRoutes.forEach((route) => {
      route(router, this.connection);
    });
    this.router = router;
  }

  private async createTestConnection() {
    const connection = await createConnection('test');
    this.connection = connection;
  }
}

export default TestSetup;
