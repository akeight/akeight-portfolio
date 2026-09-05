import { VerticalCutReveal } from './fancy/vertical-cut-reveal';
import { cn } from '@/lib/utils';

interface GiantHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2';
  staggerDuration?: number;
  /** Keep the full heading on one line. */
  singleLine?: boolean;
}

/** Oversized editorial heading in Lora. */
export const GiantHeading = ({
  text,
  className,
  as = 'h2',
  staggerDuration,
  singleLine = false,
}: GiantHeadingProps) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        'font-serif font-normal tracking-[-0.03em] text-[clamp(2.875rem,9.5vw,7.25rem)] leading-[0.95]',
        singleLine && 'whitespace-nowrap',
        className
      )}
    >
      <VerticalCutReveal text={text} staggerDuration={staggerDuration} nowrap={singleLine} />
    </Tag>
  );
};
