import request from 'supertest';
import TestSetup from '../../../testSetup/testSetup';

const testSetup = new TestSetup();

beforeAll(async () => {
  await testSetup.start();
  await testSetup.groupSetup.instatiateAll();
  await testSetup.userSetup.instantiateOne();
});

afterAll(async () => {
  await testSetup.closeConnection();
});

describe('Test if getting correct groups', () => {
  test('Test if we get all the groups back in response', async () => {
    const validJwt = await testSetup.userSetup.getValidJwt();
    const response = await request(testSetup.app)
      .get('/get-groups')
      .set('Authorization', `Bearer ${validJwt}`);
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain(JSON.stringify(testSetup.groupSetup.data[0].subject));
  });
});
