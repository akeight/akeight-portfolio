import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StickyFooterProps {
  children: ReactNode;
  className?: string;
}

/** Pins the footer to the bottom of the viewport so page content scrolls over it,
 *  revealing the footer as you reach the end. Requires the preceding content to be
 *  opaque and sit at a higher stacking context. */
export const StickyFooter = ({ children, className }: StickyFooterProps) => (
  <div className={cn('sticky bottom-0 z-0', className)}>{children}</div>
);
