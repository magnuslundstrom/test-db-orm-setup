import React from 'react';
import { Layout } from '@components/global/Layout';
import { LoginForm } from '@components/forms/LoginForm/LoginForm';
import { H1 } from '@elements';
import { Container } from '@blocks';

export default function Login() {
  return (
    <Layout title="Login">
      <Container width="sm" backgroundColor="lightGray" padding="xl" marginTop="lg">
        <H1 marginBottom="md">Login</H1>
        <LoginForm />
      </Container>
    </Layout>
  );
}
