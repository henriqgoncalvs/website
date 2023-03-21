import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { FaDrum, FaReact } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdOutlineCake } from 'react-icons/md';

export const ProfileBanner = () => {
  return (
    <div className="flex flex-col items-start text-xl">
      <div className="z-10 flex flex-col gap-4 px-4">
        <div
          className={clsx(
            'flex w-full items-start justify-between pb-5'
          )}
        >
          <div className="flex items-center space-x-4">
            <div className="h-24 w-24 min-w-fit rounded-full bg-midnight ring-4 ring-zinc-600/30">
              <Image
                src="https://avatars.githubusercontent.com/u/25696006?v=4"
                className="h-24 w-24 rounded-full bg-midnight"
                width="160"
                height="160"
                alt="Profile picture"
              />
            </div>
            <h1 className="flex flex-col gap-1">
              <span className="text-3xl font-bold">
                Henrique Gonçalves
              </span>
              <code className="font-mono text-base font-medium">
                AKA @hnqg
              </code>
            </h1>
          </div>

          <div className="-mt-5 flex items-center space-x-3 text-sm font-bold">
            <Link href="/writing" passHref>
              Writing
            </Link>
            <Link href="/guestbook" passHref>
              Guestbook
            </Link>
            <Link
              href="https://github.com/hnqg"
              target="_blank"
              className={clsx(
                'rounded-md bg-rose-100/30 p-1',
                'shadow-lg transition-all duration-300 ease-out',
                'hover:scale-[1.2] hover:rounded-[10px] hover:shadow-rose-500/40'
              )}
            >
              <AiFillGithub size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/henriiqueg/"
              target="_blank"
              className={clsx(
                'rounded-md bg-rose-100/30 p-1',
                'shadow-lg transition-all duration-300 ease-out',
                'hover:scale-[1.2] hover:rounded-[10px] hover:shadow-rose-500/40'
              )}
            >
              <GrLinkedinOption size={20} />
            </Link>
          </div>
        </div>

        <p className="text-base">
          Healthily obsessed with designing and coding awesome
          stuff. Ardent in music, movies, and improving
          consistently through learning.
        </p>
        <p className="text-base">
          Currently interested in React environment and
          TypeScript. Experimenting Backend. Studying Software
          Engineer.
        </p>

        <div className="flex w-full items-center justify-between gap-3 border-y-[1px] border-gray-600/20 py-3 text-sm font-semibold">
          <div className="flex items-center gap-1">
            <FaReact size={16} className="fill-rose-100/50" />
            <span>Frontend @ PagSeguro</span>
          </div>

          <div className="flex items-center gap-1">
            <BiMap size={16} color="fill-rose-100/50" />
            <span>Pernambuco - Brazil</span>
          </div>

          <div className="flex items-center gap-1">
            <MdOutlineCake size={16} color="fill-rose-100/50" />
            <span>March 20th</span>
          </div>

          <div className="flex items-center gap-1">
            <FaDrum size={16} color="fill-rose-100/50" />
            <span>Drummer</span>
          </div>
        </div>
      </div>
    </div>
  );
};
