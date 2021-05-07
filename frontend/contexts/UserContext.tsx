import React, { createContext, useState } from 'react';
import { useJwt } from '@hooks/useJwt';

type UserProps = {
  name: string;
  age: number;
};

type User = UserProps | null;

interface UserContext {
  jwt: string;
  user: User;
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
  const [user, setUser] = useState<User>(null);
  const { jwt, onSetJwt, onRemoveJwt } = useJwt();

  const onLogin = (user: User, jwt: string) => {
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
