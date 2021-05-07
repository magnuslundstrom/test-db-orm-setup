import { useState } from 'react';

type JWT = string;

export const useJwt = () => {
  const [jwt, setJwt] = useState<JWT>('');

  const onSetJwt = (jwt: JWT) => {
    window.localStorage.setItem('jwt', jwt);
    setJwt(jwt);
  };

  const onRemoveJwt = () => {
    window.localStorage.removeItem('jwt');
    setJwt('');
  };

  return {
    jwt,
    onSetJwt,
    onRemoveJwt,
  };
};
