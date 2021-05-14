import { useContext } from 'react';
import { UserContext } from '@utils/contexts/UserContext';

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};
