import { Atom, Cake, MapPin } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { type ReactElement } from 'react';

import { Layout } from '@/ui/layout';

const ProfileBanner = () => {
  return (
    <div className="flex flex-col items-start text-xl">
      <div className="h-40 w-full overflow-hidden rounded-2xl bg-midnight">
        <Image
          src="/images/hubble-wp.jpg"
          className="rounded-2xl"
          width="755"
          height="726"
          alt="A picture the hubble satellite took on March 20th, 1996"
        />
      </div>

      <div className="z-10 flex flex-col gap-4 px-4">
        <div className="flex w-full items-center justify-between">
          <div className="-mt-16 w-fit rounded-full bg-midnight p-2 ring-[5px] ring-zinc-600/10">
            <Image
              src="https://avatars.githubusercontent.com/u/25696006?v=4"
              className="h-32 w-32 rounded-full bg-midnight"
              width="160"
              height="160"
              alt="Profile picture"
            />
          </div>

          <div className="space-x-3 pb-10 text-sm font-bold">
            <Link href="/about" passHref>
              About
            </Link>
            <Link href="/about" passHref>
              Dashboard
            </Link>
            <Link href="/about" passHref>
              Blog
            </Link>
            <Link href="/about" passHref>
              Guestbook
            </Link>
          </div>
        </div>

        <h1 className="flex flex-col gap-1">
          <span className="text-3xl font-bold">
            Henrique Gonçalves
          </span>
          <code className="text-md font-mono font-medium">
            AKA @hnqg
          </code>
        </h1>

        <p className="flex flex-col gap-2 text-lg">
          Usual metalhead with an obsession for code. I like to
          build cool stuff for the web using top notch
          technologies.
        </p>

        <div className="flex w-full items-center justify-start gap-6 border-y-[1px] border-gray-600/20 py-3 text-sm">
          <div className="flex items-center gap-1">
            <Atom size={16} />
            <span>Front dev @ PagSeguro</span>
          </div>

          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>Pernambuco - Brazil</span>
          </div>

          <div className="flex items-center gap-1">
            <Cake size={16} />
            <span>March 20th 🐟</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <ProfileBanner />
    </>
  );
};

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
