import React from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { authenticatedRequest } from '@utils/requests/authenticatedRequest';
import { Layout } from '@components/global/layout/Layout';
import { useUser } from '@hooks/useUser';
import { groups } from '@utils/types/Group';
import { GroupList } from '@components/groups/GroupList';

const Dashboard = ({ groups }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { user } = useUser();

  return (
    <Layout title="All groups">
      <h1>All groups</h1>
      <GroupList groups={groups} title="Newest groups" />
    </Layout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const authToken = context.req.cookies['JWT'] || '';
  try {
    const res = await authenticatedRequest(authToken).get<groups>('http://api:3080/get-groups');

    return {
      props: { groups: res.data },
    };
  } catch (err) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
}

export default Dashboard;