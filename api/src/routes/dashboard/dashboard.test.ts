import request from 'supertest';
import { Group } from '../../entity';
import TestSetup from '../../testSetup';

const testSetup = new TestSetup();

beforeEach(async () => {
  await testSetup.start();
  const repo = testSetup.connection.getRepository(Group);
});
