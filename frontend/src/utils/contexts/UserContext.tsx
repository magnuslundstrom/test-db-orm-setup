import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useJwt } from '@utils/hooks/useJwt';
import { RealisticUserFromServer } from '@utils/types/User';

interface UserContext {
  jwt: string;
  user: RealisticUserFromServer;
  onLogin: (user: any, jwt: string) => void;
  onLogout: () => void;
}

// Have to instantiate this here for now... Kinda annoying.
export const UserContext = createContext<UserContext>({
  jwt: '',
  user: null,
  onLogin: () => {},
  onLogout: () => {},
});

export const UserContextProvider: React.FC<{}> = (props) => {
  const [user, setUser] = useState<RealisticUserFromServer>(null);
  const { jwt, onSetJwt, onRemoveJwt } = useJwt();
  const router = useRouter();

  useEffect(() => {
    // check if logged in on boot
    const attemptLogin = async () => {
      try {
        const response = await axios.post<RealisticUserFromServer>(
          `${process.env.NEXT_PUBLIC_API_HOST}/attempt-login`,
          {
            jwt,
          }
        );
        setUser(response.data);
        router.push('/dashboard');
      } catch (err) {
        router.push('/login');
      }
    };

    if (user === null && jwt !== '') attemptLogin();
  }, [jwt]);

  const onLogin = (user: RealisticUserFromServer, jwt: string) => {
    setUser(user);
    onSetJwt(jwt);
  };

  const onLogout = () => {
    setUser(null);
    onRemoveJwt();
  };

  const value = {
    jwt,
    user,
    onLogin,
    onLogout,
  };
  return <UserContext.Provider value={value} {...props} />;
};
