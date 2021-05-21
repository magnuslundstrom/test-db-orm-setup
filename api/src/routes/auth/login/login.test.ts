import request from 'supertest';
import TestSetup from '../../../testSetup/testSetup';
import { signJwt } from './login';
const testSetup = new TestSetup();

beforeAll(async () => {
  await testSetup.start();
  await testSetup.userSetup.instantiateOne();
});

afterAll(async () => {
  await testSetup.closeConnection();
});

describe('Test Login', () => {
  test('Should login existing user', async () => {
    const res = await request(testSetup.app)
      .post('/login')
      .send({
        email: 'K@K.dk',
        password: 'abc',
      })
      .expect(200);

    const {
      body: { jwt, user },
    } = res;

    const generateJwtToAssert = signJwt(user);
    expect(jwt).toBe(generateJwtToAssert);
    expect(user.firstName).toBe('Kaj');
    expect(user.lastName).toBe('Larsen');
    expect(user.email).toBe('K@K.dk');
  });

  test('Should not login existing user', async () => {
    await request(testSetup.app)
      .post('/login')
      .send({ email: 'a@a.dk', password: 'abx' })
      .expect(400);
  });
});
