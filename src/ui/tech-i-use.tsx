import clsx from 'clsx';
import { type IconType } from 'react-icons';

import { techUsed } from '@/data/tech-used';

export const TechIUse = () => {
  return (
    <section className="mt-10 px-4">
      <p className="text-xl">Tech I use</p>

      <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-5">
        {techUsed.map((tech) => (
          <TechCard key={tech.title} {...tech} />
        ))}
      </div>
    </section>
  );
};

type TechCardProps = {
  title: string;
  Icon: IconType;
};

const TechCard = ({ title, Icon }: TechCardProps) => {
  return (
    <div
      className={clsx(
        'h-22 flex flex-col items-center justify-center space-y-2 font-semibold',
        'rounded-lg border-[1px] border-none bg-white/5 p-4 text-sm',
        'rounded-md shadow-md',
        'hover:shadow-rose-500/40 active:translate-y-[2px]',
        'transition-all duration-300 ease-out'
      )}
    >
      {<Icon size={24} />}
      <span className="whitespace-nowrap">{title}</span>
    </div>
  );
};
