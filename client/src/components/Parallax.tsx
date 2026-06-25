import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Vertical travel in pixels across the element's scroll range. Positive moves up. */
  offset?: number;
}

/** Wraps children in a scroll-linked vertical parallax translation. */
export const Parallax = ({ children, className, offset = 80 }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref} className={cn(className)}>
      <motion.div style={prefersReduced ? undefined : { y }}>{children}</motion.div>
    </div>
  );
};
