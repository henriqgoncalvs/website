// import dynamic from 'next/dynamic';
import { type ReactNode } from 'react';

import Starfield from '@/components/starfield';

export const Layout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <>
      <div className="layout">
        <main>{children}</main>
      </div>

      <Starfield />
    </>
  );
};
