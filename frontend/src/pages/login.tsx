import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '@utils/hooks/useUser';
import { Layout } from '@components/global/layout/Layout';
import { loginResponse } from '@utils/types/loginResponse';
import { useRouter } from 'next/router';
import { StyledButton, StyledForm, StyledFormInput, StyledContainer } from '@elements';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin } = useUser();

  const router = useRouter();
  const onSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await axios.post<loginResponse>(`${process.env.NEXT_PUBLIC_API_HOST}/login`, {
      email,
      password,
    });
    if (res.status === 200) {
      const { user, jwt } = res.data;
      onLogin(user, jwt);
      return router.push('/dashboard');
    }
  };

  return (
    <Layout title="Login">
      <StyledContainer width="sm">
        <h1>Login</h1>
        <StyledForm onSubmit={onSubmit} width="sm">
          <StyledFormInput type="text" placeholder="Email" value={email} onChange={onSetEmail} />
          <StyledFormInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={onSetPassword}
          />
          <StyledButton backgroundColor="midGreen">Login</StyledButton>
        </StyledForm>
      </StyledContainer>
    </Layout>
  );
}
