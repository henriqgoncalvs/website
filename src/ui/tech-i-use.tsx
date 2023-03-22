import clsx from 'clsx';
import Link from 'next/link';
import { type IconType } from 'react-icons';
import { IoLogoNodejs } from 'react-icons/io5';
import { SiNestjs } from 'react-icons/si';
import {
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandReactNative,
  TbBrandPrisma,
  TbBrandGit,
  TbBrandDocker,
} from 'react-icons/tb';

export const TechIUse = () => {
  return (
    <section className="mt-10 px-4">
      <p className="text-xl">Tech I use</p>

      <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-5">
        <TechCard
          name="React"
          link="https://reactjs.org"
          Icon={TbBrandReact}
        />
        <TechCard
          name="Next.js"
          link="https://reactjs.org"
          Icon={TbBrandNextjs}
        />
        <TechCard
          name="Typescript"
          link="https://reactjs.org"
          Icon={TbBrandTypescript}
        />
        <TechCard
          name="TailwindCSS"
          link="https://reactjs.org"
          Icon={TbBrandTailwind}
        />
        <TechCard
          name="React Native"
          link="https://reactjs.org"
          Icon={TbBrandReactNative}
        />
        <TechCard
          name="Node.js"
          link="https://reactjs.org"
          Icon={IoLogoNodejs}
        />
        <TechCard
          name="Prisma"
          link="https://reactjs.org"
          Icon={TbBrandPrisma}
        />
        <TechCard
          name="NestJS"
          link="https://reactjs.org"
          Icon={SiNestjs}
        />
        <TechCard
          name="Git"
          link="https://reactjs.org"
          Icon={TbBrandGit}
        />
        <TechCard
          name="Docker"
          link="https://reactjs.org"
          Icon={TbBrandDocker}
        />
      </div>
    </section>
  );
};

type TechCardProps = {
  name: string;
  link: string;
  Icon: IconType;
};

const TechCard = ({ name, link, Icon }: TechCardProps) => {
  return (
    <Link href={link} passHref legacyBehavior>
      <a
        target="_blank"
        className={clsx(
          'h-22 flex flex-col items-center justify-center space-y-2 font-semibold',
          'rounded-lg border-[1px] border-none bg-white/5 p-4 text-sm'
        )}
      >
        <>
          {<Icon size={24} />}
          <span className="whitespace-nowrap">{name}</span>
        </>
      </a>
    </Link>
  );
};
