interface AllUserProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number | string;
  password: string;
}

export type UserFromServer = Pick<AllUserProps, 'id' | 'firstName' | 'lastName' | 'age' | 'email'>;

export type RealisticUserFromServer = UserFromServer | null;

export type EditAbleUser = Pick<
  AllUserProps,
  'age' | 'email' | 'firstName' | 'lastName' | 'password'
>;
