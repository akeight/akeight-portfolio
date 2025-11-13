import { cn } from '@/lib/utils';

interface TechBadgeProps {
  tech: string;
  className?: string;
}

export const TechBadge = ({ tech, className }: TechBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-mono font-medium rounded-md",
        "bg-primary/10 text-primary border border-primary/20",
        "hover:bg-primary/20 transition-colors",
        className
      )}
    >
      {tech}
    </span>
  );
};