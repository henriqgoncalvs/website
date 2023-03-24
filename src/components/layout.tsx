import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { type ReactNode } from 'react';
import { BiMailSend } from 'react-icons/bi';
import { FaSpotify } from 'react-icons/fa';

import { useNavContext } from '@/providers/nav-provider';
import { api } from '@/utils/api';

import { Link } from './link';
import { Navigation } from './navigation';
import { ProfileImage } from './profile-image';
import { Seo } from './seo';
import Starfield from './starfield';

export const Layout = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { isNavOpen } = useNavContext();

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

      <div className="pointer-events-none fixed top-6 z-30 grid w-full grid-cols-[1fr,min(640px,100%),1fr] px-4">
        <Transition
          className="shadow-surface-glass pointer-events-auto col-start-2 -mx-px rounded-2xl bg-gray-800/95 px-4 py-2.5 backdrop-blur will-change-transform [@supports(backdrop-filter:blur(0px))]:bg-white/[5%]"
          show={isNavOpen}
          enter="transition duration-100 ease-in-out"
          enterFrom="opacity-0 scale-90"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in-out"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/" className="rounded-full">
                <ProfileImage size="sm" isInteractive />
              </Link>
            </div>
            <Navigation />
          </div>
        </Transition>
      </div>

      <main className="mx-auto min-h-screen max-w-[640px] px-4 pb-10 pt-40">
        {children}
      </main>

      <Footer />

      <Starfield />
    </>
  );
};

const Footer = () => {
  const { data: spotifyCurrentPlaying } =
    api.spotify.getCurrentPlaying.useQuery();

  return (
    <footer className="my-10 mx-auto max-w-[640px] px-4 pb-16">
      <div className="my-5 border-b border-rose-100/20" />

      <div className="flex flex-col flex-wrap items-center gap-10 py-5 px-4">
        <Link
          href="https://open.spotify.com/user/henriquesg09?si=596eb72b74c7402e"
          external
          size="sm"
          className="mr-auto"
          leftIcon={
            <FaSpotify size={16} className="fill-[#1DB954]" />
          }
        >
          {spotifyCurrentPlaying ? (
            <>
              <span className="font-bold">
                {spotifyCurrentPlaying.name}
              </span>
              <span className="text-rose-200/50">
                {' '}
                - {spotifyCurrentPlaying.artist}
              </span>
            </>
          ) : (
            <>
              <span className="font-bold">Not Playing</span>
              <span className="text-rose-200/50">
                {' '}
                - Spotify
              </span>
            </>
          )}
        </Link>

        <div className="grid w-full grid-flow-col-dense grid-cols-2 items-start gap-4 text-rose-100/80">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" variant="link">
              Home
            </Link>
            <Link href="/about" variant="link">
              About
            </Link>
            <Link href="/guestbook" variant="link">
              Guestbook
            </Link>
          </div>

          <div className="flex flex-col items-start gap-4">
            <Link
              href="https://github.com/hnqg"
              external
              variant="link"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/henriiqueg/"
              external
              variant="link"
            >
              LinkedIn
            </Link>
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
