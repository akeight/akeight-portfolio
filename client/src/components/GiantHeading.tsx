import { VerticalCutReveal } from './fancy/vertical-cut-reveal';
import { cn } from '@/lib/utils';

interface GiantHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2';
  staggerDuration?: number;
}

/** Oversized, bold, uppercase editorial heading. */
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
        'font-bold uppercase tracking-tight text-[clamp(3.5rem,16vw,12rem)] leading-[100px] md:leading-[150px] lg:leading-[200px]',
        className
      )}
    >
      <VerticalCutReveal text={text} staggerDuration={staggerDuration} />
    </Tag>
  );
};
