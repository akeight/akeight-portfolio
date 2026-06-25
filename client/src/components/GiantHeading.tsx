import { VerticalCutReveal } from './fancy/vertical-cut-reveal';
import { cn } from '@/lib/utils';

interface GiantHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2';
  staggerDuration?: number;
}

/** Oversized, bold, uppercase editorial heading (matches the "EXPERIENCE" wordmark style). */
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
        'font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(3.5rem,16vw,13rem)]',
        className
      )}
    >
      <VerticalCutReveal text={text} staggerDuration={staggerDuration} />
    </Tag>
  );
};
