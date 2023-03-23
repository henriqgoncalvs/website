import type { NextComponentType } from 'next';
import {
  type AppContext,
  type AppInitialProps,
  type AppLayoutProps,
} from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { NavProvider } from '@/providers/nav-provider';
import { api } from '@/utils/api';

import '@/styles/globals.css';

const MyApp: NextComponentType<
  AppContext,
  AppInitialProps,
  AppLayoutProps<{ session: Session | null }>
> = ({ Component, pageProps: { session, ...pageProps } }) => {
  const getLayout =
    Component.getLayout ?? ((component) => component);

  const pageContent = getLayout(<Component {...pageProps} />);

  return (
    <SessionProvider session={session}>
      <NavProvider>{pageContent}</NavProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
