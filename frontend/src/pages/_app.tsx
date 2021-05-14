import React from 'react';

import { UserContextProvider } from '@utils/contexts/UserContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </>
  );
}

export default MyApp;
