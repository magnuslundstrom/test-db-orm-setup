import React, { useState } from 'react';
import axios from 'axios';
import { onChangeFactory } from '@utils/helperFunctions/onChangeFactory';
import { Layout } from 'src/components/global/layout/Layout';

interface State {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  age: string;
}

export default function SignUp() {
  const [state, setState] = useState<State>({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    age: '',
  });

  const factory = onChangeFactory(state, setState);

  const onEmailChange = factory('email');
  const onFirstNameChange = factory('firstName');
  const onLastNameChange = factory('lastName');
  const onPasswordChange = factory('password');
  const onAgeChange = factory('age');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_HOST}/sign-up`, {
          ...state,
        })
        .then((data) => {
          console.log(data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout title="Sign up">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Email" value={state.email} onChange={onEmailChange} />
        <input
          type="text"
          placeholder="First name"
          value={state.firstName}
          onChange={onFirstNameChange}
        />
        <input
          type="text"
          placeholder="Last name"
          value={state.lastName}
          onChange={onLastNameChange}
        />
        <input type="text" placeholder="Age" value={state.age} onChange={onAgeChange} />
        <input
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={onPasswordChange}
        />

        <button>Sign up</button>
      </form>
    </Layout>
  );
}
