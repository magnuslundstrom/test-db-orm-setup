import React, { useState } from 'react';
import { Layout } from '@components/global/layout/Layout';
import { NotificationBox } from '@components/global/notificationBoxes/NotificationBox';
import { useUser } from '@hooks/useUser';
import { onChangeFactory } from '@utils/helperFunctions/onChangeFactory';
import { authenticatedRequest } from '@utils/requests/authenticatedRequest';

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
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Title" onChange={onTitleChange} value={title} />
        <input type="text" placeholder="Subject" onChange={onSubjectChange} value={subject} />
        <button>Submit</button>
      </form>
      <NotificationBox message={message} />
    </Layout>
  );
}
