import { Layout } from '@components/global/Layout';
import { Container, H1 } from '@elements';
import { SignUpForm } from '@components/forms/SignUpForm';

export default function SignUp() {
  return (
    <Layout title="Sign up">
      <Container width="sm" backgroundColor="lightGray" padding="xl" marginTop="lg">
        <H1 marginBottom="lg">Sign up</H1>
        <SignUpForm />
      </Container>
    </Layout>
  );
}
