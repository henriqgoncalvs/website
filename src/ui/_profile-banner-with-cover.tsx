import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import {
  FaDrum,
  FaLinkedinIn,
  FaReact,
  FaExternalLinkAlt,
  FaCaretDown,
  FaCaretUp,
} from 'react-icons/fa';
import { MdOutlineCake } from 'react-icons/md';

export const ProfileBannerWithCover = () => {
  const [bannerExpanded, setBannerExpanded] = useState(false);

  return (
    <div className="flex flex-col items-start text-xl">
      <div
        className={clsx(
          'relative w-full overflow-hidden rounded-2xl bg-midnight',
          bannerExpanded ? 'h-96' : 'h-40'
        )}
      >
        <Image
          src="/images/hubble-wp.jpg"
          className="absolute top-0 -translate-y-[130px] rounded-2xl"
          width="755"
          height="726"
          alt="A picture the hubble satellite took on March 20th, 1996"
        />

        {bannerExpanded && (
          <Link
            href="https://hubblesite.org/contents/media/images/2000/34/1007-Image.html"
            className="absolute top-6 left-6 flex items-center gap-2 rounded-2xl bg-neutral-900/40 p-4 text-sm text-white"
          >
            <FaExternalLinkAlt size={16} />
            <span>Colliding Galaxies NGC 6745</span>
          </Link>
        )}
      </div>

      <div className="z-10 flex flex-col gap-4 px-4">
        <div
          className={clsx(
            'flex w-full items-center justify-between',
            bannerExpanded && 'pb-5'
          )}
        >
          <div className="flex items-end gap-2">
            <div
              className={clsx(
                '-mt-16 w-fit rounded-full bg-midnight p-2  ring-zinc-600/10',
                bannerExpanded ? 'ring-[5px]' : 'ring-4'
              )}
            >
              <Image
                src="https://avatars.githubusercontent.com/u/25696006?v=4"
                className={clsx(
                  'h-32 w-32 rounded-full bg-midnight',
                  bannerExpanded ? 'h-32 w-32' : 'h-24 w-24'
                )}
                width="160"
                height="160"
                alt="Profile picture"
              />
            </div>

            <Link
              href="https://github.com/henriqgoncalvs"
              target="_blank"
              className="rounded-xl bg-zinc-700 p-2"
            >
              <AiFillGithub size={bannerExpanded ? 24 : 20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/henriiqueg/"
              target="_blank"
              className="rounded-xl bg-zinc-700 p-2"
            >
              <FaLinkedinIn size={bannerExpanded ? 24 : 20} />
            </Link>
          </div>

          <div className="-mt-5 flex flex-col items-end justify-between gap-3">
            <button
              className="rounded-full bg-zinc-700 p-3"
              onClick={() => setBannerExpanded((prev) => !prev)}
            >
              {bannerExpanded ? (
                <FaCaretUp size={16} />
              ) : (
                <FaCaretDown size={16} />
              )}
            </button>

            <div
              className={clsx(
                'gap-2 space-x-3  pb-5 font-bold',
                bannerExpanded ? 'text-base' : 'text-sm'
              )}
            >
              <Link href="/about" passHref>
                About
              </Link>
              <Link href="/dashboard" passHref>
                Dashboard
              </Link>
              <Link href="/blog" passHref>
                Blog
              </Link>
              <Link href="/guestbook" passHref>
                Guestbook
              </Link>
            </div>
          </div>
        </div>

        <h1 className="flex flex-col gap-1">
          <span className="text-3xl font-bold">
            Henrique Gonçalves
          </span>
          <code className="text-md font-mono font-medium">
            AKA @henriqgoncalvs
          </code>
        </h1>

        <p
          className={clsx(
            bannerExpanded ? 'text-lg' : 'text-base'
          )}
        >
          <span className="underline decoration-neutral-700 decoration-wavy decoration-2">
            Usual metalhead
          </span>{' '}
          with an obsession for code. I like to build cool stuff
          for the web using top notch technologies.
        </p>

        <div className="flex w-full items-center justify-between gap-3 border-y-[1px] border-gray-600/20 py-3 text-sm font-semibold">
          <div className="flex items-center gap-1">
            <FaReact size={16} />
            <span>Front dev @ PagSeguro</span>
          </div>

          <div className="flex items-center gap-1">
            <BiMap size={16} />
            <span>Pernambuco - Brazil</span>
          </div>

          <div className="flex items-center gap-1">
            <MdOutlineCake size={16} />
            <span>March 20th</span>
          </div>

          <div className="flex items-center gap-1">
            <FaDrum size={16} />
            <span>Drummer</span>
          </div>
        </div>
      </div>
    </div>
  );
};
