import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { accentBg, accentText, type ProjectAccent } from '@/lib/accents';
import { easeEditorial } from '@/lib/motion';
import { useMotionPreference } from '@/lib/useMotionPreference';
import { cn } from '@/lib/utils';

export interface PhoneScreen {
  src: string;
  alt: string;
  /** Short name shown in the screen switcher, e.g. "Dashboard". */
  label: string;
  /** One-line caption shown under the phone while this screen is active. */
  caption: string;
}

interface PhoneShowcaseProps {
  screens: PhoneScreen[];
  accent?: ProjectAccent;
  /** Milliseconds each screen holds before auto-advancing. */
  interval?: number;
  /**
   * The narrowest capture ratio in this project's screen set. Phone height is
   * fixed across every case study, so width follows from this — every phone
   * reads as the same size, and using the narrowest ratio means no screen is
   * ever cropped, only padded with `background`.
   */
  aspectRatio?: string;
  /** The app's own page background, filling any sub-pixel gap under a screen. */
  background?: string;
  className?: string;
}

/**
 * A phone-framed motion showcase: mobile screenshots crossfade on a timed
 * cycle while in view, with a clickable screen switcher. Hover, focus, or a
 * manual selection pauses the cycle; reduced-motion users get a static
 * composition they page through by hand.
 */
export const PhoneShowcase = ({
  screens,
  accent = 'ochre',
  interval = 3800,
  aspectRatio = '530 / 1024',
  background,
  className,
}: PhoneShowcaseProps) => {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  /** Set once the reader picks a screen, and never cleared — a deliberate choice shouldn't be animated away. */
  const [locked, setLocked] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { amount: 0.4 });
  const { reduceMotion } = useMotionPreference();

  const cycling = inView && !hovered && !locked && !reduceMotion;

  useEffect(() => {
    if (!cycling) return;
    const timer = window.setInterval(
      () => setActive((i) => (i + 1) % screens.length),
      interval
    );
    return () => window.clearInterval(timer);
  }, [cycling, interval, screens.length]);

  const select = (i: number) => {
    setActive(i);
    setLocked(true);
  };

  return (
    <div
      ref={containerRef}
      className={cn('flex flex-col items-center gap-6 p-6 md:p-10', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Phone frame — fixed height, width derived from the capture ratio. */}
      <div className="rounded-[2.4rem] border border-foreground/15 bg-foreground/[0.04] p-2 shadow-lg">
        <div
          className="relative h-[440px] overflow-hidden rounded-[1.9rem] border border-foreground/10 bg-muted sm:h-[506px]"
          style={{ aspectRatio, ...(background ? { backgroundColor: background } : {}) }}
        >
          {screens.map((screen, i) => (
            <motion.img
              key={screen.src}
              src={screen.src}
              alt={i === active ? screen.alt : ''}
              loading="lazy"
              aria-hidden={i !== active}
              initial={false}
              animate={
                reduceMotion
                  ? { opacity: i === active ? 1 : 0 }
                  : { opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.03 }
              }
              transition={
                reduceMotion ? { duration: 0 } : { duration: 0.65, ease: easeEditorial }
              }
              className="absolute inset-x-0 top-0 w-full"
            />
          ))}
        </div>
      </div>

      {/* Screen switcher */}
      <div
        className="flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Mobile screens"
      >
        {screens.map((screen, i) => (
          <button
            key={screen.src}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => select(i)}
            className={cn(
              'rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors',
              i === active
                ? cn('border-transparent text-background', accentBg[accent])
                : 'border-foreground/15 text-muted-foreground hover:border-foreground/30 hover:text-foreground'
            )}
          >
            {screen.label}
          </button>
        ))}
      </div>

      {/* Active caption */}
      <p className="min-h-[2.5rem] max-w-md text-center text-sm leading-relaxed text-muted-foreground">
        <span className={cn('font-mono text-[11px] uppercase tracking-[0.14em]', accentText[accent])}>
          {String(active + 1).padStart(2, '0')} / {String(screens.length).padStart(2, '0')}
        </span>{' '}
        — {screens[active].caption}
      </p>
    </div>
  );
};
