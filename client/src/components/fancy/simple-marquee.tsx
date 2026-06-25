import { useRef, type ReactNode } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SimpleMarqueeProps {
  children: ReactNode;
  className?: string;
  /** Pixels per second. */
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

/** Seamless infinite marquee that duplicates its children to loop. */
export const SimpleMarquee = ({
  children,
  className,
  speed = 40,
  direction = 'left',
  pauseOnHover = false,
}: SimpleMarqueeProps) => {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const halfWidthRef = useRef(0);
  const pausedRef = useRef(false);

  useAnimationFrame((_, delta) => {
    const track = trackRef.current;
    if (!track) return;
    if (!halfWidthRef.current) halfWidthRef.current = track.scrollWidth / 2;
    if (pausedRef.current) return;

    const half = halfWidthRef.current;
    const move = ((speed * delta) / 1000) * (direction === 'left' ? -1 : 1);
    let next = x.get() + move;

    if (half > 0) {
      if (next <= -half) next += half;
      if (next >= 0) next -= half;
    }
    x.set(next);
  });

  return (
    <div
      className={cn('overflow-hidden', className)}
      onMouseEnter={() => pauseOnHover && (pausedRef.current = true)}
      onMouseLeave={() => pauseOnHover && (pausedRef.current = false)}
    >
      <motion.div ref={trackRef} style={{ x }} className="flex w-max">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
};
