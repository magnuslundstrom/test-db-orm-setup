import React, { useState, useEffect } from 'react';
import { Layout } from '@components/global/Layout';
import { NotificationBox } from '@components/global/messages/NotificationBox';
import { useUser } from '@hooks/useUser';
import { onChangeFactory } from '@utils/helperFunctions/onChangeFactory';
import { authenticatedRequest } from '@utils/requests/authenticatedRequest';
import { StyledForm, StyledButton, StyledFormInput, StyledLabel } from 'src/styles/elements';

interface State {
  title: string;
  subject: string;
}

export default function NewGroup() {
  const [state, setState] = useState<State>({
    title: '',
    subject: '',
  });
  const [message, setMessage] = useState('');

  const { jwt } = useUser();

  const factory = onChangeFactory(state, setState);
  const onTitleChange = factory('title');
  const onSubjectChange = factory('subject');

  const cleanState = () => {
    setState({ title: '', subject: '' });
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage('');
    }, 3000);
  }, [message]);

  const { title, subject } = state;
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postData = JSON.stringify({ title, subject });
    authenticatedRequest(jwt)
      .post(`${process.env.NEXT_PUBLIC_API_HOST}/new-group`, postData)
      .then(() => {
        setMessage('Successfully created a new group');
        cleanState();
      })
      .catch((err) => {
        console.log(err);
        setMessage('Something went wrong');
      });
  };

  return (
    <Layout title="Start new study group">
      <h1>Start a new study group</h1>
      <StyledForm onSubmit={onSubmit} width="sm">
        <StyledLabel htmlFor="title">Title</StyledLabel>
        <StyledFormInput type="text" placeholder="Title" onChange={onTitleChange} value={title} />
        <StyledLabel htmlFor="subject">Subject</StyledLabel>
        <StyledFormInput
          type="text"
          placeholder="Subject"
          onChange={onSubjectChange}
          value={subject}
        />
        <StyledButton backgroundColor="midGreen">Submit</StyledButton>
      </StyledForm>
      <NotificationBox message={message} />
    </Layout>
  );
}
