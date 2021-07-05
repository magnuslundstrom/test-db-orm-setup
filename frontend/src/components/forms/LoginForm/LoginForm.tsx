import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useUser } from '@hooks/useUser';
import { tryCatch } from '@utils/helperFunctions/tryCatch/tryCatch';
import { Label, Form, Button, Input, FormErrorMessage } from '../../../styles/elements';
import { emailInputOptions, passwordInputOptions } from '../inputOptions';

interface Props {}

interface FormState {
  email: string;
  password: string;
}

export const LoginForm: React.FC<Props> = () => {
  const [error, setError] = useState('');
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormState>({
    mode: 'onTouched',
  });

  const router = useRouter();
  const { onLogin } = useUser();

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSubmit(async (data) => {
      const [res, err] = await tryCatch(axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/login`, data));
      if (err) {
        return setError('No account with provided credentials');
      } else {
        onLogin(res?.data.user, res?.data.jwt);
        router.push('/dashboard');
      }
    })();
  };

  return (
    <Form onSubmit={onSubmit} width="sm" data-testid="login-form">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="text" {...register('email', emailInputOptions)} placeholder="Enter email" />
      {errors.email && <FormErrorMessage data-testid="email-error">{errors.email.message}</FormErrorMessage>}

      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        type="text"
        {...register('password', passwordInputOptions)}
        placeholder="Enter password"
      />
      {errors.password && (
        <FormErrorMessage data-testid="password-error">{errors.password.message}</FormErrorMessage>
      )}

      <Button backgroundColor="midGreen" disabled={!isValid}>
        Login
      </Button>
      {error && <FormErrorMessage marginTop="lg">{error}</FormErrorMessage>}
    </Form>
  );
};
