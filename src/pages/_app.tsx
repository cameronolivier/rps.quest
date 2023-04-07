import { type AppType } from 'next/app';

import { api } from '~/utils/api.utils';

import '../styles/globals.css';

import { Toaster } from 'react-hot-toast';

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
