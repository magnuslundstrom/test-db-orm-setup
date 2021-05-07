import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '@hooks/useUser';
import { Layout } from '@components/global/layout/Layout';
import { StyledAuthForm } from '@components/forms/StyledAuthForm';
import { StyledButton } from '@components/buttons/StyledButton';
import { loginResponse } from '@customTypes/loginResponse';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin } = useUser();

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
      console.log(res.data);
      const { user, newjwt } = res.data;
      onLogin(user, newjwt);

      console.log(user);
    }
  };

  return (
    <Layout title="Login">
      <StyledAuthForm onSubmit={onSubmit}>
        <input type="text" placeholder="Email" value={email} onChange={onSetEmail} />
        <input type="password" placeholder="Password" value={password} onChange={onSetPassword} />
        <StyledButton>Login</StyledButton>
      </StyledAuthForm>
    </Layout>
  );
}
