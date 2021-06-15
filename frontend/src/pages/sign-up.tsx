import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { onChangeFactory } from '@utils/helperFunctions/onChangeFactory';
import { Layout } from '@components/global/Layout';
import { Form, Button, Input, Container, H1, Label } from '@elements';
import { ProfileImageWithChange } from '../components/profileImage/ProfileImageWithChange';

interface State {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  age: string;
  imageString: string;
  image: File | null;
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
  });

  const factory = onChangeFactory(state, setState);

  const onEmailChange = factory('email');
  const onFirstNameChange = factory('firstName');
  const onLastNameChange = factory('lastName');
  const onPasswordChange = factory('password');
  const onAgeChange = factory('age');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.image) return;
    const formData = new FormData();
    formData.append('image', state.image);
    formData.append('firstName', state.firstName);
    formData.append('lastName', state.lastName);
    formData.append('age', state.age);
    formData.append('email', state.email);
    formData.append('password', state.password);
    try {
      axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/sign-up`, formData).then((data) => {});
    } catch (e) {
      console.log(e);
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
          <Label>Email</Label>
          <Input type="text" placeholder="Email" value={state.email} onChange={onEmailChange} />
          <Label>First name</Label>
          <Input
            type="text"
            placeholder="First name"
            value={state.firstName}
            onChange={onFirstNameChange}
          />
          <Label>Last name</Label>
          <Input
            type="text"
            placeholder="Last name"
            value={state.lastName}
            onChange={onLastNameChange}
          />
          <Label>Age</Label>
          <Input type="text" placeholder="Age" value={state.age} onChange={onAgeChange} />
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={onPasswordChange}
          />
          <Button backgroundColor="midGreen">Sign up</Button>
        </Form>
      </Container>
    </Layout>
  );
}
