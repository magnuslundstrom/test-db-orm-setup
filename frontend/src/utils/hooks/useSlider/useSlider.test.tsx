import { renderHook, act } from '@testing-library/react-hooks';
import { useSlider } from './useSlider';

describe('unit test useSlider', () => {
  test('throw error if start is bigger than or equal to array length', () => {
    renderHook(() => {
      expect(useSlider(0, 0, 4)).toThrow('startingIndex cannot be bigger than arrayLength');
    });
  });

  test('ensure starting index default to 0', () => {
    const { result } = renderHook(() => useSlider(3, 5));
    expect(result.current.start).toBe(0);
  });

  test('attempt to go below 0', () => {
    const { result } = renderHook(() => useSlider(3, 5));
    expect(result.current.start).toBe(0);
    act(() => {
      result.current.changeDirection(-1);
    });
    expect(result.current.start).toBe(0);
  });

  test('attempt to go above cap', () => {
    const { result } = renderHook(() => useSlider(3, 5, 4));
    expect(result.current.start).toBe(4);
    act(() => {
      result.current.changeDirection(1);
    });
    // the starting index correctly goes to 2 (limit - arrayLength);
    expect(result.current.start).toBe(2);
  });
});
