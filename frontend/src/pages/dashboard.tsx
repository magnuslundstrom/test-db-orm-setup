import React, { useState } from 'react';
import { Layout } from '@components/global/layout/Layout';
import { useUser } from '@hooks/useUser';
import { onChangeFactory } from '@utils/helperFunctions/onChangeFactory';

interface State {
  title: string;
}

export default function Dashboard() {
  const [state, setState] = useState<State>({
    title: '',
  });

  const { user } = useUser();

  const factory = onChangeFactory(state, setState);
  const onTitleChange = factory('title');
  return (
    <Layout title="Dashboard">
      <h1>
        Welcome to StudyPartnr {user?.firstName} {user?.lastName}
      </h1>
      <p>Here will be a list of your upcoming classes</p>
      <p>There will be a list of potential new classes that you could take</p>
    </Layout>
  );
}
