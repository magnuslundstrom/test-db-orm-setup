import request from 'supertest';
import TestSetup from '../../../testSetup/testSetup';

const testSetup = new TestSetup();

beforeAll(async () => {
  await testSetup.start();
  await testSetup.userSetup.instantiateOne();
});

afterAll(async () => {
  await testSetup.closeConnection();
});

describe('Test new Group route', () => {
  test('Create new group with correct body', async () => {
    const validJwt = await testSetup.userSetup.getValidJwt();
    await request(testSetup.app)
      .post('/new-group')
      .set('Authorization', `Bearer ${validJwt}`)
      .send({
        ...testSetup.groupSetup.data[0],
      })
      .expect(201);
  });
});
