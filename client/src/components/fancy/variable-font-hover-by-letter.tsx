import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { easeEditorial } from '@/lib/motion';

interface VariableFontHoverByLetterProps {
  label: string;
  className?: string;
  fromWeight?: number;
  toWeight?: number;
  staggerDuration?: number;
}

/** On hover, ripples each letter's variable-font weight from light to heavy. */
export const VariableFontHoverByLetter = ({
  label,
  className,
  fromWeight = 400,
  toWeight = 900,
  staggerDuration = 0.03,
}: VariableFontHoverByLetterProps) => {
  const letters = useMemo(() => Array.from(label), [label]);

  return (
    <motion.span
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={cn('inline-block', className)}
      aria-label={label}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            rest: { fontVariationSettings: `"wght" ${fromWeight}` },
            hover: { fontVariationSettings: `"wght" ${toWeight}` },
          }}
          transition={{ duration: 0.3, ease: easeEditorial, delay: i * staggerDuration }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
