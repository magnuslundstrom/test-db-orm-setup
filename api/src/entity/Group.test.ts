import { Group } from './Group';
import { createConnection, getConnection, Entity, Connection } from 'typeorm';

let dbConnection: null | Connection = null;
beforeEach(async () => {
  await createConnection({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [Group],
    synchronize: true,
    logging: false,
  }).then((connection) => {
    dbConnection = connection;
  });
});

test('store a group and fetch it', async () => {
  const repo = dbConnection.getRepository(Group);
  await repo.insert({
    title: 'Math',
    subject: 'Something mathy',
  });

  const group = await repo.find({ title: 'Math' });
  expect(group[0].id).toBe(1);
});

afterEach(() => {
  if (dbConnection) {
    dbConnection.close();
  }
});
