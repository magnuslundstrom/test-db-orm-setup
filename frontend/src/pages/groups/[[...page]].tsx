import React from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { authenticatedRequest } from '@utils/requests/authenticatedRequest';
import { Layout } from '@components/global/Layout';
import { Pagination } from '@components/global/Pagination';
import { GroupList } from '@components/groups/GroupList';

// TODO in this file
// CHANGE THE MESS DEFINED DOWN BELOW
// DO ERROR HANDLING ON THE FETCH
// CHANGE DON'T LOOK FOR "/all" just look for /1 and change the header to /1 instead of /all

const Dashboard = ({
  groups,
  count,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout title="All groups">
      <h1>All groups</h1>
      {groups.length && <GroupList groups={groups} />}
      <Pagination count={count} limit={6} page={page} />
    </Layout>
  );
};

export interface ListGroupData {
  groupId: number;
  groupTitle: string;
  groupSubject: string;
  groupCreatedAt: Date;
  createdById: number;
  createdByName: string;
  createdByProfileImage: string;
}

type Response = [ListGroupData[], number];

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const authToken = context.req.cookies['JWT'] || '';

  // Change this mess later 🥴
  let page = context.query.page;
  if (page) {
    if (page[0] === '0') page = '1';
    else page = page[0];
  } else page = '1';

  const res = await authenticatedRequest(authToken).get<Response>(
    `http://api:3080/get-groups/${page}`
  );

  // Something should happen if we get 0 results obv.
  const [groups, count] = res.data;

  return {
    props: { groups, count, page },
  };
}

export default Dashboard;
