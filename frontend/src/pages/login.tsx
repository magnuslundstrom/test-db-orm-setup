import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useForm } from 'react-hook-form';
import { useUser } from '@utils/hooks/useUser';
import { Layout } from '@components/global/Layout';
import { loginResponse } from '@utils/types/loginResponse';
import { useRouter } from 'next/router';
import { Button, Form, Input, Label, H1 } from '@elements';
import { Container } from '@elements';
import { tryCatch } from '@utils/helperFunctions/tryCatch';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
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
    const [res, err] = await tryCatch<AxiosResponse<loginResponse>>(
      axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/login`, {
        email,
        password,
      }),
      'No user with provided credentials'
    );

    if (res && res.status === 200) {
      const { user, jwt } = res.data;
      onLogin(user, jwt);
      return router.push('/dashboard');
    }
    if (err) {
      setError(err);
    }
  };

  return (
    <Layout title="Login">
      <Container width="sm" backgroundColor="lightGray" padding="xl" marginTop="lg">
        <H1 marginBottom="md">Login</H1>
        <Form onSubmit={onSubmit} width="sm">
          <Label>Email</Label>
          <Input type="text" placeholder="Email" value={email} onChange={onSetEmail} />
          <Label>Password</Label>
          <Input type="password" placeholder="Password" value={password} onChange={onSetPassword} />
          {error && <p>{error}</p>}
          <Button backgroundColor="midGreen">Login</Button>
        </Form>
      </Container>
    </Layout>
  );
}
