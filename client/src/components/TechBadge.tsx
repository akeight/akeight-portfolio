import { cn } from '@/lib/utils';

interface TechBadgeProps {
  tech: string;
  className?: string;
}

export const TechBadge = ({ tech, className }: TechBadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center bg-dusty rounded-lg border border-foreground/15 px-2.5 py-1',
        'font-mono uppercase font-medium text-[0.7rem] tracking-tight text-white',
        'transition-colors hover:border-foreground/40 hover:text-foreground',
        className
      )}
    >
      {tech}
    </span>
  );
};
