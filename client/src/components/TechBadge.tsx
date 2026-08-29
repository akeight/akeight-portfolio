import { cn } from '@/lib/utils';

interface TechBadgeProps {
  tech: string;
  className?: string;
}

export const TechBadge = ({ tech, className }: TechBadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-foreground/15 px-2.5 py-1',
        'font-mono text-[0.7rem] tracking-tight text-dusty',
        'transition-colors hover:border-foreground/40 hover:text-foreground',
        className
      )}
    >
      {tech}
    </span>
  );
};
