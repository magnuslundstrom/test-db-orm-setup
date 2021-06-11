import React, { useState } from 'react';
import axios from 'axios';
import { onChangeFactory } from '@utils/helperFunctions/onChangeFactory';
import { Layout } from '@components/global/Layout';
import { StyledForm, StyledButton, StyledFormInput, StyledContainer } from '@elements';

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
      <StyledContainer width="sm">
        <h1>Sign up</h1>
        <StyledForm onSubmit={onSubmit} width="sm">
          <StyledFormInput
            type="text"
            placeholder="Email"
            value={state.email}
            onChange={onEmailChange}
          />
          <StyledFormInput
            type="text"
            placeholder="First name"
            value={state.firstName}
            onChange={onFirstNameChange}
          />
          <StyledFormInput
            type="text"
            placeholder="Last name"
            value={state.lastName}
            onChange={onLastNameChange}
          />
          <StyledFormInput type="text" placeholder="Age" value={state.age} onChange={onAgeChange} />
          <StyledFormInput
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={onPasswordChange}
          />
          <StyledButton backgroundColor="midGreen">Sign up</StyledButton>
        </StyledForm>
      </StyledContainer>
    </Layout>
  );
}
