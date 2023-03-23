import { clsx } from 'clsx';
import Image from 'next/image';

export const ProfileImage = ({
  size = 'lg',
  isInteractive = false,
}: {
  size?: 'sm' | 'lg';
  isInteractive?: boolean;
}) => {
  return (
    <div
      className={clsx(
        'rounded-full bg-gradient-to-tl from-midnight/60 to-rose-400/60 shadow-lg',
        {
          'p-[2px]': size === 'sm',
          'p-[3px]': size === 'lg',
          'group transform transition ease-out hover:scale-105 hover:from-midnight hover:to-rose-400 hover:shadow-rose-500/25 active:translate-y-[2px]':
            isInteractive,
          'ring-[5px] ring-rose-700/10': !isInteractive,
        }
      )}
    >
      <div
        className={clsx('rounded-full p-px', {
          'h-10 w-10': size === 'sm',
          'h-24 w-24': size === 'lg',
          'transition duration-300 group-hover:scale-105':
            isInteractive,
        })}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/25696006?v=4"
          alt="A picture of Henrique"
          priority
          className="rounded-full"
          width={size === 'sm' ? 40 : 96}
          height={size === 'sm' ? 40 : 96}
        />
      </div>
    </div>
  );
};
