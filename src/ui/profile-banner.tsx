import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { FaDrum, FaReact } from 'react-icons/fa';
import { GoBook } from 'react-icons/go';
import { GrLinkedinOption } from 'react-icons/gr';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { MdOutlineCake } from 'react-icons/md';

export const ProfileBanner = () => {
  return (
    <div className="flex flex-col items-start text-xl">
      <div className="z-10 flex flex-col gap-4 px-4">
        <div
          className={clsx(
            'flex w-full flex-col-reverse items-start justify-between gap-7 pb-5 ',
            'sm:flex-row sm:gap-0'
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

          <div
            className={clsx(
              'flex items-center space-x-3 self-end text-sm font-bold',
              'sm:-mt-16 sm:self-auto'
            )}
          >
            <Link
              href="/about"
              passHref
              className="group flex items-center gap-2"
            >
              <HiOutlineDocumentText
                size={24}
                className={clsx(
                  'group-hover:scale-[1.2] group-hover:shadow-rose-500/40',
                  'shadow-md transition-all duration-300 ease-out',
                  'rounded-md bg-rose-100/30 p-1'
                )}
              />
              <span className="transition-all duration-300 ease-out group-hover:text-rose-200">
                About
              </span>
            </Link>
            <Link
              href="/guestbook"
              passHref
              className="group flex items-center gap-2"
            >
              <GoBook
                size={24}
                className={clsx(
                  'group-hover:scale-[1.2] group-hover:shadow-rose-500/40',
                  'shadow-md transition-all duration-300 ease-out',
                  'rounded-md bg-rose-100/30 p-1'
                )}
              />
              <span className="transition-all duration-300 ease-out group-hover:text-rose-200">
                Guestbook
              </span>
            </Link>
            <a
              href="https://github.com/hnqg"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'rounded-md bg-rose-100/30 p-1',
                'shadow-lg transition-all duration-300 ease-out',
                'hover:scale-[1.2] hover:rounded-[10px] hover:shadow-rose-500/40'
              )}
            >
              <AiFillGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/henriiqueg/"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'rounded-md bg-rose-100/30 p-1',
                'shadow-lg transition-all duration-300 ease-out',
                'hover:scale-[1.2] hover:rounded-[10px] hover:shadow-rose-500/40'
              )}
            >
              <GrLinkedinOption size={20} />
            </a>
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

        <div
          className={clsx(
            'flex flex-row flex-wrap items-center justify-start gap-5 border-y-[1px] border-gray-600/20',
            'w-full py-3 text-sm font-semibold text-neutral-400/80',
            'sm:justify-between sm:gap-3'
          )}
        >
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
