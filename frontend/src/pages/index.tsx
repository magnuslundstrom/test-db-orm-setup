import { authenticatedRequest } from '@utils/requests/authenticatedRequest';
import { Layout } from '@components/global/layout/Layout';
import { useUser } from '@utils/hooks/useUser';
export default function Home() {
  const { user, jwt } = useUser();

  const onClick = async () => {
    const res = await authenticatedRequest(jwt).get('/get-groups');
  };

  return (
    <div>
      <Layout title="Front page">
        <h3>
          Hi {user && user.firstName} {user && user.lastName}
        </h3>
        <p>
          I gotta be honest, I do not know what to put here. Maybe should redirect depending on auth
          situation. Or maybe should contain some sort of a dashboard or something.
        </p>
      </Layout>
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
