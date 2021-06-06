import request from 'supertest';
import TestSetup from '../../../testSetup/testSetup';

const testSetup = new TestSetup();

beforeAll(async () => {
  await testSetup.start();
  await testSetup.userSetup.instantiateOne();
  await testSetup.groupSetup.instantiateOne();
});

afterAll(async () => {
  await testSetup.closeConnection();
});

describe('get group test suite', () => {
  test('not logged in', async () => {
    const response = await request(testSetup.app).get('/get-group/1');
    expect(response.statusCode).toBe(403);
  });

  test('id that exists', async () => {
    const validJwt = await testSetup.userSetup.getValidJwt();
    const response = await request(testSetup.app)
      .get('/get-group/1')
      .set('Authorization', `Bearer ${validJwt}`);
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain(testSetup.groupSetup.data[0].title);
    expect(response.text).toContain(testSetup.groupSetup.data[0].subject);
  });

  test("id that doesn't exist", async () => {
    const validJwt = await testSetup.userSetup.getValidJwt();
    const response = await request(testSetup.app)
      .get('/get-group/2')
      .set('Authorization', `Bearer ${validJwt}`);
    expect(response.statusCode).toBe(404);
  });

  test("id that isn't a number", async () => {
    const validJwt = await testSetup.userSetup.getValidJwt();
    const response = await request(testSetup.app)
      .get('/get-group/ee2')
      .set('Authorization', `Bearer ${validJwt}`);
    expect(response.statusCode).toBe(404);
  });
});
