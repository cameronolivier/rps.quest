import { type AppType } from 'next/app';

import { api } from '~/utils/api.utils';

import '../styles/globals.css';

import { Toaster } from 'react-hot-toast';

import PageWrapper from '../components/PageWrapper';
import { tw } from '../utils/tailwind.utils';

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            className: 'border rounder border-violet-500',
            style: {
              border: '1px solid rgb(5 46 22)',
              padding: '8px 16px',
              backgroundColor: 'rgb(21 128 61)',
              color: 'rgb(5 46 22)',
            },
          },
        }}
      />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </>
  );
};

export default api.withTRPC(MyApp);
