import { renderHook, act } from '@testing-library/react-hooks';
import { getCookie } from '@helperFunctions/cookies/getCookie';
import { useJwt, JWT_KEY } from './useJwt';

describe('useJWT hook tests', () => {
  test('should set a jwt cookie', () => {
    const { result } = renderHook(() => useJwt());
    act(() => {
      result.current.onSetJwt('123');
    });

    expect(result.current.jwt).toBe('123');
    const cookieJwt = getCookie(JWT_KEY);
    expect(cookieJwt).toBe(result.current.jwt);
  });

  test('should remove jwt cookie', () => {
    const { result } = renderHook(() => useJwt());
    // just want to set it again so we can test removal succesfully
    act(() => {
      result.current.onSetJwt('123');
    });

    act(() => {
      result.current.onRemoveJwt();
    });

    expect(result.current.jwt).toBe('');
    const cookieJwt = getCookie(JWT_KEY);
    expect(cookieJwt).toBe(null);
  });
});
