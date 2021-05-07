import { authenticatedRequest } from '@requests/authenticatedRequest';
import { Layout } from '@components/global/layout/Layout';
import { useUser } from '@hooks/useUser';
export default function Home() {
  const { user, jwt } = useUser();

  const onClick = async () => {
    const res = await authenticatedRequest(jwt).get('/dashboard');
  };

  return (
    <div>
      <Layout title="Front page">
        <h3>Hi {user && user.name}</h3>
        <div>Welcome to StudyPartnr. Find a partner for your subject!</div>

        <button onClick={onClick}>Test Auth button</button>
      </Layout>
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
