import clsx from 'clsx';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

export const ThingsIveBuilt = () => {
  return (
    <section className="mt-10 px-4">
      <p className="text-xl">Things I&apos;ve built</p>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

const ProjectCard = () => {
  return (
    <div
      className={clsx(
        'relative rounded-lg border-[1px] border-none bg-white/5 p-4',
        'shadow-md transition-all duration-300 ease-out',
        'hover:scale-[1.01]  hover:shadow-rose-500/10'
      )}
    >
      <div className="flex flex-col space-y-3">
        <Link
          href="#"
          target="_blank"
          className="flex w-fit items-center space-x-2 text-xl font-semibold"
        >
          <span>talentuzz</span>
          <FiExternalLink size={18} />
        </Link>
        <p className="text-base">Project description</p>

        <div className="flex flex-wrap items-center">
          {[
            'React',
            'Next.js',
            'Tailwind CSS',
            'TypeScript',
          ].map((tech) => (
            <span
              key={tech}
              className="mr-2 mt-2 inline-block rounded-md border-[1px] border-zinc-700 px-2 py-1 font-mono text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <Link
        href="#github"
        className={clsx(
          'group',
          'absolute top-4 right-4 rounded-lg px-2 py-1'
        )}
      >
        <AiFillGithub
          size={24}
          color="#ffe4e64d"
          className={clsx(
            'fill-rose-100/30',
            'transition-all duration-300 ease-out',
            'group-hover:scale-[1.2] group-hover:fill-white'
          )}
        />
      </Link>
    </div>
  );
};
