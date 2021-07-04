import { getCookie } from './getCookie';

describe('test getCookie functionality', () => {
  test('retrieving a set cookie', () => {
    document.cookie = 'JWT=123';
    const result = getCookie('JWT');
    expect(result).toBe('123');
  });

  test('attempt to retrive an unset cookie', () => {
    const result = getCookie('DOESNT_EXIT');
    expect(result).toBe(null);
  });
});
