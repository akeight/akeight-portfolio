import { VerticalCutReveal } from './fancy/vertical-cut-reveal';
import { cn } from '@/lib/utils';

interface GiantHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2';
  staggerDuration?: number;
}

/** Oversized editorial heading in Instrument Serif. */
export const GiantHeading = ({
  text,
  className,
  as = 'h2',
  staggerDuration,
}: GiantHeadingProps) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        'font-serif font-normal tracking-[-0.03em] text-[clamp(3.25rem,11vw,8.5rem)] leading-[0.95]',
        className
      )}
    >
      <VerticalCutReveal text={text} staggerDuration={staggerDuration} />
    </Tag>
  );
};
