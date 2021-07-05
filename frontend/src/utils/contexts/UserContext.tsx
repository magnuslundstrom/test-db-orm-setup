import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useJwt } from '@hooks/useJwt/useJwt';
import { RealisticUserFromServer } from '@utils/types/User';

/*
CONCERNS OF THIS CONTEXT
-> Why should this attempt to login, when we in reality are already logging in in the serverside render.
-> In reality we should never really need this, because we will do checks for auth in the getServerSideProps

THOUGHTS: 
This is really more of a CSR approach
Should probably be considered deprecated even tho it still exists within the application
*/

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
    /**
     * Check if the user has JWT in a cookie
     */
    const attemptLogin = async () => {
      try {
        const response = await axios.post<RealisticUserFromServer>(
          `${process.env.NEXT_PUBLIC_API_HOST}/attempt-login`,
          {
            jwt,
          }
        );
        setUser(response.data);
      } catch (err) {
        if (isAuthenticatedRoute(router.pathname)) router.push('/login');
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
    router.push('/login');
  };

  const value = {
    jwt,
    user,
    onLogin,
    onLogout,
  };
  return <UserContext.Provider value={value} {...props} />;
};

const isAuthenticatedRoute = (pathname: string) => {
  switch (pathname) {
    case '/login':
    case '/sign-up':
    case '/':
      return false;
    default:
      return true;
  }
};
