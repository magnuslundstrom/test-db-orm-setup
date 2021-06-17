import request from 'supertest';
import TestSetup from '../../../testSetup/testSetup';

/*
So... There is a few issues here right now:
- We cannot test this correctly due to the fact that we cannot upload any image from here.
- Well we could but then we would in fact pollute the upload folder everytime that we run the tests
- ALSO if cannot track which image that has been generated unless we query the db and check the profile image name
and write a util function that will delete the image for us.
*/

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
      .expect(404);
  });
});
