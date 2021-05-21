import request from 'supertest';
import TestSetup from '../../../testSetup/testSetup';

const testSetup = new TestSetup();

beforeAll(async () => {
  await testSetup.start();
});

afterAll(async () => {
  await testSetup.closeConnection();
});

describe('Sign up tests', () => {
  test('Sign up user', async () => {
    await request(testSetup.app)
      .post('/sign-up')
      .send({
        firstName: 'james',
        lastName: 'siguard',
        email: 'aa@aa.dk',
        password: '123',
        age: '14',
      })
      .expect(201);
  });
});
