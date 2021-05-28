import React from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { Layout } from '@components/global/layout/Layout';
import { useUser } from '@hooks/useUser';

const Dashboard = () => {
  const { user } = useUser();

  return (
    <Layout title="Dashboard">
      <h1>
        Welcome to StudyPartnr {user?.firstName} {user?.lastName}
      </h1>
      <p>I dont know what to put here tbh.</p>
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
