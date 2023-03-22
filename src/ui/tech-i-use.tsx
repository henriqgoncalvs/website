import clsx from 'clsx';
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
        <TechCard name="React" Icon={TbBrandReact} />
        <TechCard name="Next.js" Icon={TbBrandNextjs} />
        <TechCard name="Typescript" Icon={TbBrandTypescript} />
        <TechCard name="TailwindCSS" Icon={TbBrandTailwind} />
        <TechCard
          name="React Native"
          Icon={TbBrandReactNative}
        />
        <TechCard name="Node.js" Icon={IoLogoNodejs} />
        <TechCard name="Prisma" Icon={TbBrandPrisma} />
        <TechCard name="NestJS" Icon={SiNestjs} />
        <TechCard name="Git" Icon={TbBrandGit} />
        <TechCard name="Docker" Icon={TbBrandDocker} />
      </div>
    </section>
  );
};

type TechCardProps = {
  name: string;
  Icon: IconType;
};

const TechCard = ({ name, Icon }: TechCardProps) => {
  return (
    <div
      className={clsx(
        'h-22 flex flex-col items-center justify-center space-y-2 font-semibold',
        'rounded-lg border-[1px] border-none bg-white/5 p-4 text-sm'
      )}
    >
      {<Icon size={24} />}
      <span className="whitespace-nowrap">{name}</span>
    </div>
  );
};
