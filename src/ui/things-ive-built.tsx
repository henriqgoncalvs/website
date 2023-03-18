import {
  ArrowSquareOut,
  GithubLogo,
} from '@phosphor-icons/react';
import Link from 'next/link';

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
    <div className="relative rounded-lg border-[1px] border-zinc-700 p-4">
      <div className="flex flex-col space-y-3">
        <Link
          href="#"
          target="_blank"
          className="flex items-center space-x-2 text-xl font-semibold"
        >
          <span>talentuzz</span>
          <ArrowSquareOut size={18} weight="thin" />
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
        href="#"
        className="absolute top-4 right-4 rounded-xl bg-zinc-700 p-2"
      >
        <GithubLogo size={18} weight="fill" />
      </Link>
    </div>
  );
};
