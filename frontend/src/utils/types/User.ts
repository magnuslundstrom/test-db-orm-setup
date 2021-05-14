export interface UserFromServer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number | string;
}

export type RealisticUserFromServer = UserFromServer | null;
