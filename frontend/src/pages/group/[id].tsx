import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { authenticatedRequest } from '@utils/requests/authenticatedRequest';
import { Layout } from '@components/global/layout/Layout';
import { iGroup } from '@utils/types/Group';

const Group: React.FC<{ group: iGroup }> = ({ group: { title, subject } }) => {
  return (
    <Layout title="Group">
      <button>Maybe some back button</button>
      <h1>{title}</h1>
      <p>{subject}</p>
    </Layout>
  );
};

export default Group;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const authToken = context.req.cookies['JWT'] || '';

  // Change this mess later 🥴
  let id = context.query?.id;
  try {
    const res = await authenticatedRequest(authToken).get<iGroup>(
      `http://api:3080/get-group/${id}`
    );

    return {
      props: { group: res.data },
    };
  } catch (err) {
    return {
      redirect: {
        destination: '/groups/all',
      },
    };
  }
}
