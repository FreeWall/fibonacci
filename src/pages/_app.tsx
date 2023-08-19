import { AppProps, AppType } from 'next/app';
import { ReactElement, ReactNode } from 'react';

import Layout from '@/components/layout';
import '@/styles/tailwind.css';
import { trpc } from '@/utils/trpc';
import { NextPage } from 'next';

export type CustomPage<P = unknown> = NextPage<P> & {
  getLayout?: (page: ReactElement<P>) => ReactElement;
};

export type CustomAppProps<P = unknown> = AppProps & {
  Component: CustomPage<P>;
};

const App: AppType = ({ Component, pageProps }: CustomAppProps) => {
  const getLayout =
    Component.getLayout === undefined
      ? (component: ReactNode) => <Layout>{component}</Layout>
      : Component.getLayout
      ? Component.getLayout
      : (component: ReactNode) => component;

  return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default trpc.withTRPC(App);
