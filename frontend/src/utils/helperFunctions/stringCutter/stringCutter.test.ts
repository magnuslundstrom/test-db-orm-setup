import { stringCutter } from './stringCutter';

describe('test stringCutter', () => {
  test('empty string', () => {
    expect(() => {
      stringCutter('one', 0);
    }).toThrow('maxLength cannot be 0 or less');
  });
  test('one word less than max length', () => {
    const result = stringCutter('one', 14);
    expect(result).toBe('one');
  });

  test('one word less bigger than maxlength', () => {
    const result = stringCutter('one', 2);
    expect(result).toBe('one');
  });

  test('two words with max length in the middle of the second word', () => {
    const result = stringCutter('one two', 4);
    expect(result).toBe('one...');
  });
});
