import React from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { authenticatedRequest } from '@utils/requests/authenticatedRequest';
import { Layout } from '@components/global/layout/Layout';
import { groups } from '@utils/types/Group';
import { Pagination } from '@components/global/Pagination';
import { GroupList } from '@components/groups/GroupList';

const Dashboard = ({
  groups,
  count,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout title="All groups">
      <h1>All groups</h1>
      {(groups.length && <GroupList groups={groups} title="Newest groups" />) || 'No groups'}

      <Pagination count={count} limit={6} page={page} />
    </Layout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const authToken = context.req.cookies['JWT'] || '';

  // Change this mess later 🥴
  let page = context.query.page;
  if (page) {
    if (page[0] === 'all' || page[0] === '0') page = '1';
    else page = page[0];
  } else page = '1';

  const res = await authenticatedRequest(authToken).get<[groups, number]>(
    `http://api:3080/get-groups/${page}`
  );

  // Something should happen if we get 0 results obv.

  const [groups, count] = res.data;

  return {
    props: { groups, count, page },
  };
}

export default Dashboard;
