import React, { useState, ChangeEvent, useEffect } from 'react';
import axios from 'axios';
import { onChangeFactory } from '@utils/helperFunctions/onChangeFactory';
import { Layout } from '@components/global/Layout';
import { Form, Button, Container, H1 } from '@elements';
import { ProfileImageWithChange } from '../components/profileImage/ProfileImageWithChange';
import { InputWithErrorMessage } from '@components/global/inputs/InputWithErrorMessage';
import {
  lengthValidation,
  numberValidation,
  emailValidation,
} from '@utils/helperFunctions/validations';
import { generateFormData } from '@utils/helperFunctions/generateFormData';

interface State {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  age: string;
  imageString: string;
  image: File | null;
  error: string;
}

const defaultImageString = '/images/blank-profile.png';

export default function SignUp() {
  const [state, setState] = useState<State>({
    email: '',
    firstName: 'a',
    lastName: 'a',
    password: 'a',
    age: '13',
    image: null,
    imageString: defaultImageString,
    error: '',
  });

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    let everythingOK = false;
    if (lengthValidation(1, 20)(state.firstName)) everythingOK = false;
    console.log(lengthValidation(1, 20)(state.firstName));
  }, [state]);

  const factory = onChangeFactory(state, setState);
  const onEmailChange = factory('email');
  const onFirstNameChange = factory('firstName');
  const onLastNameChange = factory('lastName');
  const onPasswordChange = factory('password');
  const onAgeChange = factory('age');
  const onError = factory('error');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.image === null) return;
    const formData = generateFormData(state as any); // doesn't work without assertion
    try {
      axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/sign-up`, formData);
    } catch (e) {
      onError(e.message);
    }
  };

  const onImageReset = () => {
    setState({ ...state, image: null, imageString: defaultImageString });
  };

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      const image = e.target.files[0];
      if (image) {
        const imageString = URL.createObjectURL(image);
        setState({
          ...state,
          image,
          imageString,
        });
        return;
      }
    }
    onImageReset();
  };

  return (
    <Layout title="Sign up">
      <Container width="sm" backgroundColor="lightGray" padding="xl" marginTop="lg">
        <H1 marginBottom="lg">Sign up</H1>
        <Form onSubmit={onSubmit} width="sm">
          <ProfileImageWithChange
            imageString={state.imageString}
            onImageChange={onImageChange}
            onImageReset={onImageReset}
          />
          <InputWithErrorMessage
            errorHandler={emailValidation}
            errorMessage="Provide a valid email"
            placeholder="Email"
            label
            value={state.email}
            type="email"
            onChange={onEmailChange}
          />
          <InputWithErrorMessage
            errorHandler={lengthValidation(1, 20)}
            errorMessage="First name must be between 1 and 20 characters"
            placeholder="First name"
            label
            value={state.firstName}
            type="text"
            onChange={onFirstNameChange}
          />
          <InputWithErrorMessage
            errorHandler={lengthValidation(1, 20)}
            errorMessage="Last name must be between 1 and 20 characters"
            placeholder="Last name"
            label
            value={state.lastName}
            type="text"
            onChange={onLastNameChange}
          />
          <InputWithErrorMessage
            errorHandler={numberValidation}
            errorMessage="You must be between 1-110 years old"
            placeholder="Age"
            label
            value={state.age}
            type="text"
            onChange={onAgeChange}
          />
          <InputWithErrorMessage
            errorHandler={lengthValidation(1, 20)}
            errorMessage="Password must be between 1 and 20 characters"
            placeholder="Password"
            label
            value={state.password}
            type="password"
            onChange={onPasswordChange}
          />
          <Button backgroundColor="midGreen" disabled={disabled}>
            Sign up
          </Button>
        </Form>
      </Container>
    </Layout>
  );
}
