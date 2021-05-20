import request from 'supertest';
import { User } from '../../../entity';
import TestSetup from '../../../testSetup';
import { signJwt } from './login';
const testSetup = new TestSetup();

beforeAll(async () => {
  await testSetup.start();
  const repo = testSetup.connection.getRepository(User);
  const user = User.createNewInstance({
    age: 13,
    firstName: 'Kaj',
    lastName: 'Larsen',
    email: 'K@K.dk',
    password: 'abc',
  });
  await repo.save(user);
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
    const res = await request(testSetup.app)
      .post('/login')
      .send({ email: 'a@a.dk', password: 'abx' })
      .expect(400);
  });
});
