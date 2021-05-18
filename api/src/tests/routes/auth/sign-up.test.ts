import request from 'supertest';
import app from '../../../server';

test('Sign up user', async () => {
  await request(app)
    .post('/sign-up')
    .send({
      firstName: 'james',
      lastName: 'siguard',
      email: 'a@a.dk',
      password: '123',
      age: '14',
    })
    .expect(201);
});
