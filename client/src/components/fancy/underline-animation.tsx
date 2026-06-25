import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedUnderlineProps {
  children: ReactNode;
  className?: string;
  /** When true, the underline reacts to a parent `.group` hover instead of its own. */
  group?: boolean;
  /** Render the underline as always visible. */
  active?: boolean;
}

/** Inline wrapper that draws an underline left-to-right on hover. */
export const AnimatedUnderline = ({
  children,
  className,
  group = false,
  active = false,
}: AnimatedUnderlineProps) => {
  return (
    <span
      className={cn(
        'relative inline-block',
        'after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-current',
        'after:origin-right after:transition-transform after:duration-500 after:[transition-timing-function:cubic-bezier(0.22,1,0.36,1)]',
        active ? 'after:scale-x-100' : 'after:scale-x-0',
        group
          ? 'group-hover:after:origin-left group-hover:after:scale-x-100'
          : 'hover:after:origin-left hover:after:scale-x-100',
        className
      )}
    >
      {children}
    </span>
  );
};
