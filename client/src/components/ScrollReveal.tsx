import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeInUp, viewportOnce } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article' | 'header' | 'footer';
}

/** Fade + slide-up on scroll into view, using the shared editorial variant. */
export const ScrollReveal = ({
  children,
  className,
  delay = 0,
  as = 'div',
}: ScrollRevealProps) => {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
};
