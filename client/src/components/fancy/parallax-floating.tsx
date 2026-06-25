import { useEffect, useMemo, type ReactNode } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingProps {
  children: ReactNode;
  className?: string;
  /** Higher = stronger pointer parallax. */
  depth?: number;
  /** Ambient drift distance in pixels (continuous idle motion). */
  amplitude?: number;
}

/** Decorative element that drifts continuously and responds to pointer movement. */
export const Floating = ({ children, className, depth = 1, amplitude = 18 }: FloatingProps) => {
  const prefersReduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const x = useSpring(useTransform(mx, (v) => v * depth * 60), {
    stiffness: 60,
    damping: 18,
  });
  const y = useSpring(useTransform(my, (v) => v * depth * 60), {
    stiffness: 60,
    damping: 18,
  });

  // Randomize the idle loop slightly so accents don't move in unison.
  const drift = useMemo(
    () => ({
      duration: 6 + Math.random() * 4,
      delay: Math.random() * 2,
      rotate: 4 + Math.random() * 4,
    }),
    []
  );

  useEffect(() => {
    if (prefersReduced) return;
    const handle = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, [mx, my, prefersReduced]);

  if (prefersReduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div style={{ x, y }} className={cn(className)}>
      <motion.div
        animate={{
          y: [0, -amplitude, 0, amplitude * 0.6, 0],
          rotate: [0, drift.rotate, 0, -drift.rotate, 0],
        }}
        transition={{
          duration: drift.duration,
          delay: drift.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
