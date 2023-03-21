import { type ReactNode } from 'react';

import Starfield from '@/ui/starfield';

export const Layout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <>
      <svg
        className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
        width="100%"
        height="100%"
        id="texture"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.99"
            numOctaves="24"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#noise)"
        ></rect>
      </svg>

      <main className="mx-auto min-h-screen max-w-[640px] px-4 pb-10 pt-40">
        {children}
      </main>

      <Starfield />
    </>
  );
};
