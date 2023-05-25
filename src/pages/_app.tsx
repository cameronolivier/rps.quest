import { type AppType } from 'next/app';

import { api } from '~/utils/api.utils';

import '../styles/globals.css';

import { Toaster } from 'react-hot-toast';

import PageWrapper from '../components/PageWrapper';

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <Toaster />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </>
  );
};

export default api.withTRPC(MyApp);
