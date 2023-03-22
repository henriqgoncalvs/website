import clsx from 'clsx';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

import { projects } from '@/data/projects';

export const ThingsIveBuilt = () => {
  return (
    <section className="mt-10 px-4">
      <p className="text-xl">Things I&apos;ve built</p>

      <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

type ProjectCardProps = (typeof projects)[0];

const ProjectCard = ({
  title,
  description,
  gitLink,
  prodLink,
  techStack,
}: ProjectCardProps) => {
  return (
    <div
      className={clsx(
        'relative rounded-lg border-[1px] border-none bg-white/5 p-4',
        'transition-all duration-500 ease-out',
        'hover:bg-white/10'
      )}
    >
      <div className="flex flex-col space-y-3">
        <Link
          href={prodLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-fit items-center space-x-2 text-xl font-semibold"
        >
          <span>{title}</span>
          <FiExternalLink
            size={22}
            className={clsx(
              'group-hover:scale-[1.2] group-hover:shadow-rose-500/40',
              'shadow-md transition-all duration-300 ease-out',
              'rounded-md bg-rose-100/30 p-1'
            )}
          />
        </Link>
        <p className="text-base">{description}</p>

        <div className="flex flex-wrap items-center">
          {techStack.map((tech) => (
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
        href={gitLink}
        target="_blank"
        rel="noopener noreferrer"
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
