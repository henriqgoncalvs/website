import clsx from 'clsx';
import Link from 'next/link';
import { type ReactNode } from 'react';
import { BiMailSend } from 'react-icons/bi';
import { FaSpotify } from 'react-icons/fa';

import { Seo } from './seo';

// import Starfield from '@/ui/starfield';

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

      <Seo />

      <main className="mx-auto min-h-screen max-w-[640px] px-4 pb-10 pt-40">
        {children}
      </main>

      <Footer />

      {/* <Starfield /> */}
    </>
  );
};

const Footer = () => {
  return (
    <footer className="my-10 mx-auto max-w-[640px] px-4 pb-16">
      <div className="my-5 border-b border-rose-100/20" />

      <div className="flex flex-col flex-wrap items-center gap-10 py-5 px-4">
        <Link
          href="https://open.spotify.com/user/henriquesg09?si=596eb72b74c7402e"
          rel="noopener noreferrer"
          target="_blank"
          className="mr-auto flex w-fit items-center space-x-2 text-sm"
        >
          <FaSpotify className="fill-[#1DB954]" />
          <span className="font-bold">Not Playing</span>
          <span className="text-rose-200/50"> - Spotify</span>
        </Link>

        <div className="grid w-full grid-flow-col-dense grid-cols-2 items-start gap-4 text-rose-100/80">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="transition-all duration-300 ease-out hover:underline">
                Home
              </span>
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2"
            >
              <span className="transition-all duration-300 ease-out hover:underline">
                About
              </span>
            </Link>
            <Link
              href="/guestbook"
              className="flex items-center gap-2"
            >
              <span className="transition-all duration-300 ease-out hover:underline">
                Guestbook
              </span>
            </Link>
          </div>

          <div className="flex flex-col items-start gap-4">
            <a
              href="https://github.com/hnqg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="transition-all duration-300 ease-out hover:underline">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/henriiqueg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="transition-all duration-300 ease-out hover:underline">
                LinkedIn
              </span>
            </a>
          </div>

          <div className="flex flex-col items-start gap-4">
            <a
              href="mailto:henrique.dsgoncalves@gmail.com"
              className={clsx(
                'flex items-center gap-2 rounded-md bg-rose-100/30 p-2 font-semibold text-rose-100',
                'shadow-md transition-all duration-300 ease-out',
                'hover:scale-[1.05] hover:rounded-[10px] hover:shadow-rose-500/40'
              )}
            >
              <BiMailSend size={20} />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
