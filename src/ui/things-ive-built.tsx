import clsx from 'clsx';
import NextLink from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

import { Link } from '@/components/link';
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
          external
          rightIcon={<FiExternalLink size={22} />}
          size="lg"
          className="w-fit font-semibold"
        >
          <span>{title}</span>
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

      <NextLink
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
      </NextLink>
    </div>
  );
};
