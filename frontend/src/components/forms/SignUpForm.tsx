import { useEffect, useState, ChangeEvent } from 'react';
import axios from 'axios';

import { defaultImageString } from '@constants';
import { onChangeFactory } from '@utils/helperFunctions/onChangeFactory';
import { ProfileImageWithChange } from '../profileImage/ProfileImageWithChange';
import { InputWithErrorMessage } from '@components/inputs/InputWithErrorMessage';
import {
  lengthValidation,
  numberValidation,
  emailValidation,
} from '@utils/helperFunctions/validations';
import { Form, Button } from '@elements';
import { generateFormData } from '@utils/helperFunctions/generateFormData';

export const SignUpForm = () => {
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

  // useEffect(() => {
  //   let everythingOK = false;
  //   if (lengthValidation(1, 20)(state.firstName)) everythingOK = false;
  //   console.log(lengthValidation(1, 20)(state.firstName));
  // }, [state]);
  return (
    <Form onSubmit={onSubmit} width="sm">
      <ProfileImageWithChange
        imageString={state.imageString}
        onImageChange={onImageChange}
        onImageReset={onImageReset}
      />
      <InputWithErrorMessage
        label
        type="email"
        placeholder="Email"
        errorMessage="Provide a valid email"
        value={state.email}
        errorHandler={emailValidation}
        onChange={onEmailChange}
      />
      <InputWithErrorMessage
        label
        type="text"
        placeholder="First name"
        errorMessage="First name must be between 1 and 20 characters"
        value={state.firstName}
        errorHandler={lengthValidation(1, 20)}
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
  );
};

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
