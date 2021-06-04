import request from 'supertest';
import TestSetup from '../../../testSetup/testSetup';
import { pageCount } from './get-groups';

const testSetup = new TestSetup();

beforeAll(async () => {
  await testSetup.start();
  await testSetup.userSetup.instantiateOne();
  await testSetup.groupSetup.instantiateAll();
});

afterAll(async () => {
  await testSetup.closeConnection();
});

describe('Test if getting correct groups', () => {
  test('Page one', async () => {
    const firstPageGroups = testSetup.groupSetup.data.slice(2, pageCount + 2);
    const validJwt = await testSetup.userSetup.getValidJwt();

    const response = await request(testSetup.app)
      .get('/get-groups/1')
      .set('Authorization', `Bearer ${validJwt}`);
    expect(response.statusCode).toBe(200);

    firstPageGroups.forEach((group) => {
      expect(response.text).toContain(group.subject);
      expect(response.text).toContain(group.title);
    });
  });

  test('Results page two', async () => {
    const { data } = testSetup.groupSetup;
    const secondPageGroups = data.slice(0, 2);
    const validJwt = await testSetup.userSetup.getValidJwt();

    const response = await request(testSetup.app)
      .get('/get-groups/2')
      .set('Authorization', `Bearer ${validJwt}`);

    expect(response.statusCode).toBe(200);
    secondPageGroups.forEach((group) => {
      expect(response.text).toContain(group.subject);
      expect(response.text).toContain(group.title);
    });
  });

  test('Results page three (DOESN"T EXIST)', async () => {
    const validJwt = await testSetup.userSetup.getValidJwt();

    const response = await request(testSetup.app)
      .get('/get-groups/3')
      .set('Authorization', `Bearer ${validJwt}`);
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('[]');
  });
});
