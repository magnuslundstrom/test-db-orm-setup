import React, { useState } from 'react';
import { Layout } from '@components/global/Layout';
import { useUser } from '@hooks/useUser';
import { onChangeFactory } from '@utils/helperFunctions/onChangeFactory';
import { EditAbleUser } from '@utils/types/User';
import { StyledForm, StyledButton, StyledFormInput, StyledLabel } from '@elements';
import { IdeaBox } from '@components/global/ideabox/IdeaBox';
export default function Profile() {
  const { user } = useUser();
  const [state, setState] = useState<EditAbleUser>({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    age: user?.age || '',
    email: user?.email || '',
    password: '',
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
      <StyledForm width="sm">
        <StyledLabel htmlFor="firstName">First name</StyledLabel>
        <StyledFormInput
          type="text"
          id="firstName"
          name="firstName"
          value={state.firstName}
          onChange={onFirstNameChange}
        />

        <StyledLabel htmlFor="lastName">Last name</StyledLabel>
        <StyledFormInput
          type="text"
          id="lastName"
          name="lastName"
          value={state.lastName}
          onChange={onLastNameChange}
        />

        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledFormInput
          type="text"
          id="email"
          name="email"
          value={state.email}
          onChange={onEmailChange}
        />

        <StyledLabel htmlFor="age">Age</StyledLabel>
        <StyledFormInput type="text" id="age" name="age" value={state.age} onChange={onAgeChange} />

        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledFormInput
          type="text"
          id="password"
          name="password"
          value={state.password}
          onChange={onPasswordChange}
        />
        <StyledButton backgroundColor="midGreen">Submit update</StyledButton>
      </StyledForm>

      <IdeaBox ideas={['Add profile image', 'Add Google Authentication']} />
    </Layout>
  );
}
