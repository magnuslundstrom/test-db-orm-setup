import { Layout } from '@components/global/layout/Layout';
import { IdeaBox } from '@components/global/ideabox/IdeaBox';
export default function Home() {
  return (
    <div>
      <Layout title="Front page">
        <h3>Landing page</h3>
        <IdeaBox
          ideas={['Some nice site that will showcase the functionality']}
          improvements={[
            'Shall redirect to /dashboard if logged in',
            'Should have different header',
          ]}
        />
      </Layout>
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
