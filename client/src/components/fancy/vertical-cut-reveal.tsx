import { useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { easeEditorial } from '@/lib/motion';

interface VerticalCutRevealProps {
  text: string;
  className?: string;
  staggerDuration?: number;
  splitBy?: 'word' | 'char';
}

/** Reveals text by sliding each word/char up from a clipped container on scroll.
 *  Uses an explicit in-view animate target so it works even when nested inside a
 *  parent that propagates Framer Motion variants.
 *  Overflow clipping is released after the reveal so deep Instrument Serif
 *  descenders (g, y, p) are never permanently cut off. */
export const VerticalCutReveal = ({
  text,
  className,
  staggerDuration = 0.05,
  splitBy = 'word',
}: VerticalCutRevealProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [revealed, setRevealed] = useState(false);

  const parts = useMemo(
    () => (splitBy === 'char' ? Array.from(text) : text.split(' ')),
    [text, splitBy]
  );

  return (
    <span ref={ref} className={cn('inline-flex flex-wrap', className)} aria-label={text}>
      {parts.map((part, i) => {
        const isLast = i === parts.length - 1;
        return (
          <span
            key={i}
            className={cn(
              'inline-block pb-[0.45em] -mb-[0.3em]',
              revealed ? 'overflow-visible' : 'overflow-hidden'
            )}
          >
            <motion.span
              className="inline-block"
              initial={{ y: '115%' }}
              animate={inView ? { y: 0 } : { y: '115%' }}
              transition={{ duration: 0.7, ease: easeEditorial, delay: i * staggerDuration }}
              onAnimationComplete={() => {
                if (isLast && inView) setRevealed(true);
              }}
            >
              {part}
              {splitBy === 'word' && i < parts.length - 1 ? '\u00A0' : ''}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
};
