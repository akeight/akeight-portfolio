import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StackingCardsProps {
  children: ReactNode;
  className?: string;
}

/** Container for a set of StackingCard items. */
export const StackingCards = ({ children, className }: StackingCardsProps) => (
  <div className={cn('relative', className)}>{children}</div>
);

interface StackingCardProps {
  index: number;
  total: number;
  children: ReactNode;
  className?: string;
  /** Base distance from the top of the viewport (px) where cards pin. */
  topBase?: number;
  /** Per-card incremental top offset (px). */
  topStep?: number;
}

/** A single sticky card that scales down slightly as the next one scrolls over it. */
export const StackingCard = ({
  index,
  total,
  children,
  className,
  topBase = 96,
  topStep = 28,
}: StackingCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const isLast = index === total - 1;
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.9]);
  const top = topBase + index * topStep;

  return (
    <div ref={ref} className="sticky" style={{ top }}>
      <motion.div style={{ scale }} className={cn(className)}>
        {children}
      </motion.div>
    </div>
  );
};
