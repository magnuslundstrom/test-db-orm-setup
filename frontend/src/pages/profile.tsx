import React, { useState } from 'react';
import { Layout } from '@components/global/layout/Layout';
import { useUser } from '@hooks/useUser';
import { onChangeFactory } from '@utils/helperFunctions/onChangeFactory';
import { EditAbleUser } from '@utils/types/User';

export default function Profile() {
  const { user } = useUser();
  const [state, setState] = useState<EditAbleUser>({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    age: user?.age || '',
    email: user?.email || '',
    password: '',
  });

  const factory = onChangeFactory(state, setState);

  const onFirstNameChange = factory('firstName');
  const onLastNameChange = factory('lastName');
  const onAgeChange = factory('age');
  const onPasswordChange = factory('password');
  const onEmailChange = factory('email');

  return (
    <Layout title="Profile">
      <h1>Edit your profile</h1>
      <form>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={state.firstName}
          onChange={onFirstNameChange}
        />

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={state.lastName}
          onChange={onLastNameChange}
        />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" value={state.email} onChange={onEmailChange} />

        <label htmlFor="age">Age</label>
        <input type="text" id="age" name="age" value={state.age} onChange={onAgeChange} />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          value={state.password}
          onChange={onPasswordChange}
        />
        <button>Submit update</button>
      </form>
    </Layout>
  );
}
