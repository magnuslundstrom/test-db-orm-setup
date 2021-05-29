import React from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { authenticatedRequest } from '@utils/requests/authenticatedRequest';
import { Layout } from '@components/global/layout/Layout';
import { groups } from '@utils/types/Group';
import { Pagination } from '@components/global/Pagination';
import { GroupList } from '@components/groups/GroupList';

const Dashboard = ({ groups, count }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout title="All groups">
      <h1>All groups</h1>
      {(groups.length && <GroupList groups={groups} title="Newest groups" />) || 'No groups'}

      <Pagination count={count} limit={6} page={0} />
    </Layout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const authToken = context.req.cookies['JWT'] || '';
  let page = context.query.page ? context.query.page[0] : '0';

  try {
    const res = await authenticatedRequest(authToken).get<[groups[], number]>(
      `http://api:3080/get-groups/${page}`
    );

    return {
      props: { groups: res.data[0], count: res.data[1], page: parseInt(page) },
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
