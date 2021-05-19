import request from 'supertest';
import TestSetup from '../../testSetup';

const testSetup = new TestSetup();

beforeEach(async () => {
  await testSetup.start();
});

afterEach(() => {
  testSetup.closeConnection();
});

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
