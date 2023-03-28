import { clsx } from 'clsx';
import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { StarField } from 'starfield-react';

const Starfield: React.FC<{
  speed?: number;
  className?: string;
}> = ({ speed = 0.5, className }) => {
  const { width, height } = useWindowSize();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={clsx(
        'pointer-events-none fixed left-0 top-0 -z-10 h-full w-full select-none overflow-hidden',
        className
      )}
    >
      {mounted && (
        <StarField
          fps={60}
          width={width}
          height={height}
          speed={shouldReduceMotion ? 0 : speed}
          noBackground
        />
      )}
    </div>
  );
};

export default Starfield;
