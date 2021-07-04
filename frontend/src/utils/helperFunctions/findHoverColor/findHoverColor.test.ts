import { findHoverColor } from './findHoverColor';

describe('findHoverColor helper function tests', () => {
  test('getting a darker hoverColor from lightGreen', () => {
    const result = findHoverColor('lightGreen');
    expect(result).toBe('#46cc8c');
  });

  test('getting a darker hoverColor from midGreen', () => {
    const result = findHoverColor('midGreen');
    expect(result).toBe('#047857');
  });

  test('getting hoverColor from darkGreen should give darkGreen back since there is no darker nuance', () => {
    const result = findHoverColor('darkGreen');
    expect(result).toBe('#047857');
  });

  test('getting a hoverColor for "white" should return white', () => {
    const result = findHoverColor('white');
    expect(result).toBe('#fff');
  });
});
