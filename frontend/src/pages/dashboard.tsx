import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import axios from 'axios';
import { Layout } from '@components/global/layout/Layout';
import { useUser } from '@hooks/useUser';
import { groups } from '@utils/types/Group';
import { GroupList } from '@components/groups/GroupList';

const Dashboard = ({ groups }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { user } = useUser();

  return (
    <Layout title="Dashboard">
      <h1>
        Welcome to StudyPartnr {user?.firstName} {user?.lastName}
      </h1>
      <GroupList groups={groups} title="Newest groups" />
      <p>There will be a list of potential new classes that you could take</p>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await axios.get<groups>('http://api:3080/dashboard');

  return {
    props: { groups: res.data },
  };
}

export default Dashboard;
