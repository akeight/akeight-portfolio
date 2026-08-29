import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { easeEditorial } from '@/lib/motion';

interface TextRotateProps {
  texts: string[];
  rotationInterval?: number;
  staggerDuration?: number;
  className?: string;
}

/** Cycles through a list of words, animating each letter up into view. */
export const TextRotate = ({
  texts,
  rotationInterval = 2600,
  staggerDuration = 0.025,
  className,
}: TextRotateProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % texts.length),
      rotationInterval
    );
    return () => clearInterval(id);
  }, [texts.length, rotationInterval]);

  const chars = useMemo(() => Array.from(texts[index] ?? ''), [texts, index]);

  return (
    <span className={cn('relative inline-flex overflow-hidden whitespace-nowrap py-[0.18em]', className)}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={index} className="inline-flex" aria-label={texts[index]}>
          {chars.map((char, i) => (
            <motion.span
              key={`${index}-${i}`}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              exit={{ y: '-110%' }}
              transition={{ duration: 0.45, ease: easeEditorial, delay: i * staggerDuration }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
