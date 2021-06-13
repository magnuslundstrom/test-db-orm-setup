import React from 'react';
import styled from 'styled-components';
import { Header } from './header/Header';
import { CustomHead } from './Head';
import { Footer } from './Footer';
import { spacing, widths } from '@variables';

interface Props {
  title: string;
}

export const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <CustomHead title={title} />
      <>
        <Header />
        <ContentLayout>
          <main>{children}</main>
          <Footer />
        </ContentLayout>
      </>
    </>
  );
};

// Be aware of the min-height that might change on mobile
// The min height is based on the height of the header
const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 90px);
  justify-content: space-between;
  main {
    width: ${widths.lg};
    margin: ${spacing.lg} auto;
  }
`;
