import React from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
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
  return {
    props: {
      group: {
        id: 1,
        title: 'That cool math group',
        subject: 'Hello how are you',
      },
    },
  };
}
