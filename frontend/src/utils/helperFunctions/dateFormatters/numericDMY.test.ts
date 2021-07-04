import { numericDMY } from './numericDMY';

describe('test the numericDMY formatter', () => {
  test('valid date', () => {
    const date = new Date(2020, 11, 23);
    const result = numericDMY(date);
    expect(result).toBe('23/12/2020');
  });

  test('invalid date will just go to the next valid date', () => {
    const date = new Date(2021, 3, 32);
    const result = numericDMY(date);
    expect(result).toBe('2/5/2021');
  });
});
