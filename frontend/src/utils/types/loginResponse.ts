import { RealisticUserFromServer } from './User';

export type loginResponse = {
  user: RealisticUserFromServer;
  jwt: string;
};
