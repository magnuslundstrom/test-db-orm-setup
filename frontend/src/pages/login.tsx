import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '@utils/hooks/useUser';
import { Layout } from '@components/global/layout/Layout';
import { loginResponse } from '@utils/types/loginResponse';
import { useRouter } from 'next/router';

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
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Email" value={email} onChange={onSetEmail} />
        <input type="password" placeholder="Password" value={password} onChange={onSetPassword} />
        <button>Login</button>
      </form>
    </Layout>
  );
}
