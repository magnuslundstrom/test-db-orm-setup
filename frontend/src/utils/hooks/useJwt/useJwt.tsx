import { useState, useEffect } from 'react';
import { getCookie } from '@helperFunctions/cookies/getCookie';

export const JWT_KEY = 'JWT';

export const useJwt = () => {
  const [jwt, setJwt] = useState<string>('');

  useEffect(() => {
    retrieveJwt();
  }, []);

  const onSetJwt = (jwt: string) => {
    document.cookie = `${JWT_KEY}=${jwt}`;
    setJwt(jwt);
  };

  const onRemoveJwt = () => {
    document.cookie = `${JWT_KEY}=; Max-Age=-99999999`;
    setJwt('');
  };

  const retrieveJwt = () => {
    const windowJwt = getCookie(JWT_KEY) || '';
    setJwt(windowJwt);
  };

  return {
    jwt,
    onSetJwt,
    onRemoveJwt,
  };
};
