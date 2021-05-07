import React, { useState } from 'react';
import axios from 'axios';
import { Layout } from '@components/global/layout/Layout';
import { StyledAuthForm } from '@components/forms/StyledAuthForm';
import { StyledButton } from '@components/buttons/StyledButton';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_HOST}/sign-up`, {
          email,
          password,
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
      <StyledAuthForm onSubmit={onSubmit}>
        <input type="text" placeholder="Email" value={email} onChange={onSetEmail} />
        <input type="password" placeholder="Password" value={password} onChange={onSetPassword} />
        <StyledButton>Sign up</StyledButton>
      </StyledAuthForm>
    </Layout>
  );
}
