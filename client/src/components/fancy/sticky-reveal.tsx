import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StickyRevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Pins a panel so its bottom rests against the viewport bottom *after* you've
 * scrolled through it, letting the next (opaque, higher z-index) panel roll up
 * and over it — the same reveal mechanic as the sticky footer, but usable for
 * mid-page sections of any height.
 *
 * The sticky `top` is computed as `viewportHeight - panelHeight` so tall panels
 * (taller than the viewport) pin only once fully read, instead of being pulled
 * up early the way `sticky bottom-0` would.
 */
export const StickyReveal = ({ children, className }: StickyRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => setTop(window.innerHeight - el.offsetHeight);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div ref={ref} className={cn('sticky', className)} style={{ top }}>
      {children}
    </div>
  );
};
