import React, { useState } from 'react';
import styled from 'styled-components';
import { profileImageRootUrl } from '@constants';
import { useUser } from '@hooks/useUser';
import { EditAbleUser } from '@utils/types/User';
import { onChangeFactory } from '@utils/helperFunctions/onChangeFactory';

import { Layout } from '@components/global/Layout';
import { Form, Button, Input, Label } from '@elements';
import { IdeaBox } from '@components/global/ideabox/IdeaBox';

export default function Profile() {
  const { user } = useUser();
  const [state, setState] = useState<EditAbleUser>({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    age: user?.age || '',
    email: user?.email || '',
    password: '',
    profileImage: user?.profileImage || '',
  });

  const factory = onChangeFactory(state, setState);
  const onFirstNameChange = factory('firstName');
  const onLastNameChange = factory('lastName');
  const onAgeChange = factory('age');
  const onPasswordChange = factory('password');
  const onEmailChange = factory('email');

  return (
    <Layout title="Profile">
      <h1>Edit your profile</h1>
      <ProfileImage src={profileImageRootUrl + state.profileImage} />
      <Form width="sm">
        <Label htmlFor="firstName">First name</Label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          value={state.firstName}
          onChange={onFirstNameChange}
        />

        <Label htmlFor="lastName">Last name</Label>
        <Input
          type="text"
          id="lastName"
          name="lastName"
          value={state.lastName}
          onChange={onLastNameChange}
        />

        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" name="email" value={state.email} onChange={onEmailChange} />

        <Label htmlFor="age">Age</Label>
        <Input type="text" id="age" name="age" value={state.age} onChange={onAgeChange} />

        <Label htmlFor="password">Password</Label>
        <Input
          type="text"
          id="password"
          name="password"
          value={state.password}
          onChange={onPasswordChange}
        />
        <Button backgroundColor="midGreen">Submit update</Button>
      </Form>

      <IdeaBox ideas={['Add profile image', 'Add Google Authentication']} />
    </Layout>
  );
}

const ProfileImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 100%;
  object-fit: cover;
`;
