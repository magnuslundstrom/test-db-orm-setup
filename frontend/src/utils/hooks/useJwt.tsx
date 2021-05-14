import { useState, useEffect } from 'react';

type JWT = string;

export const useJwt = () => {
  const [jwt, setJwt] = useState<JWT>('');

  useEffect(() => {
    retrieveJwt();
  }, []);

  const onSetJwt = (jwt: JWT) => {
    window.localStorage.setItem('jwt', jwt);
    setJwt(jwt);
  };

  const onRemoveJwt = () => {
    window.localStorage.removeItem('jwt');
    setJwt('');
  };

  const retrieveJwt = () => {
    const windowJwt = window.localStorage.getItem('jwt') || '';
    setJwt(windowJwt);
  };

  return {
    jwt,
    onSetJwt,
    onRemoveJwt,
  };
};
