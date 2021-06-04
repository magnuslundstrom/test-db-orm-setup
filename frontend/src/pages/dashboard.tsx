import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { Layout } from '@components/global/layout/Layout';
import { useUser } from '@hooks/useUser';
import { IdeaBox } from '@components/global/ideabox/IdeaBox';

const Dashboard = () => {
  const { user } = useUser();

  return (
    <Layout title="Dashboard">
      <h1>
        Welcome to StudyPartnr {user?.firstName} {user?.lastName}
      </h1>
      <IdeaBox
        ideas={[
          'Something that will show the next classes to attend',
          'Some Dashboard that shows attended classes',
        ]}
        improvements={['Mobile responsive across site']}
      />
    </Layout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // maybe should check authentication here
  return {
    props: {},
  };
}

export default Dashboard;
