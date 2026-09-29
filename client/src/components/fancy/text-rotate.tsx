import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { easeEditorial } from '@/lib/motion';

interface TextRotateProps {
  texts: string[];
  rotationInterval?: number;
  staggerDuration?: number;
  className?: string;
  /** 'word' rises each word as one block, matching VerticalCutReveal. */
  splitBy?: 'word' | 'char';
}

/** Cycles through a list of words, animating each letter (or whole word) up into view. */
export const TextRotate = ({
  texts,
  rotationInterval = 2600,
  staggerDuration = 0.025,
  className,
  splitBy = 'char',
}: TextRotateProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % texts.length),
      rotationInterval
    );
    return () => clearInterval(id);
  }, [texts.length, rotationInterval]);

  const parts = useMemo(() => {
    const current = texts[index] ?? '';
    return splitBy === 'word' ? current.split(' ') : Array.from(current);
  }, [texts, index, splitBy]);

  return (
    <span className={cn('relative inline-flex overflow-hidden whitespace-nowrap py-[0.18em]', className)}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={index} className="inline-flex" aria-label={texts[index]}>
          {parts.map((part, i) => (
            <motion.span
              key={`${index}-${i}`}
              initial={{ y: '130%' }}
              animate={{ y: 0 }}
              exit={{ y: '-130%' }}
              transition={{ duration: 0.45, ease: easeEditorial, delay: i * staggerDuration }}
              className="inline-block"
            >
              {part === ' ' ? '\u00A0' : part}
              {splitBy === 'word' && i < parts.length - 1 ? '\u00A0' : ''}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
