import { authenticatedRequest } from '@utils/requests/authenticatedRequest';
import { Layout } from '@components/global/layout/Layout';
import { useUser } from '@utils/hooks/useUser';
export default function Home() {
  return (
    <div>
      <Layout title="Front page">
        <h3>Landing page</h3>
        <p>Create some nice landing page, maybe put some "students" and what they think</p>
      </Layout>
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
