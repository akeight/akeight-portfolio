import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { recommendations } from '../data/recommendations';
import { GiantHeading } from './GiantHeading';
import { easeEditorial } from '@/lib/motion';

const ROTATE_MS = 7000;

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

export const Recommendations = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = recommendations.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, total, index]);

  if (total === 0) return null;
  const current = recommendations[index];

  return (
    <section
      className="bg-foreground text-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container py-20 md:py-28">
        {/* Top row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <span className="eyebrow">Recommendations</span>
          </div>
          <p className="max-w-xl text-2xl font-semibold tracking-tight md:text-right md:text-3xl">
            What people say about me.
          </p>
        </div>

        {/* Giant heading */}
        <GiantHeading text="Kind words." className="mt-10 md:mt-14" />

        {/* Body */}
        <div className="grid gap-10 pt-12 md:grid-cols-[120px_1fr] md:gap-16">
          <div className="font-mono text-sm text-background/50">
            {String(index + 1).padStart(2, '0')} — {String(total).padStart(2, '0')}
          </div>

          <div className="min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: easeEditorial }}
                className="space-y-10"
              >
                <blockquote className="max-w-4xl text-3xl font-medium leading-snug tracking-tight md:text-4xl md:leading-[1.15]">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                    {current.avatar ? (
                      <img
                        src={current.avatar}
                        alt={current.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      initials(current.name)
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{current.name}</div>
                    <div className="text-sm text-background/60">{current.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        {total > 1 && (
          <div className="mt-12 flex items-center justify-between border-t border-background/15 pt-6">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous recommendation"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-background/30 transition-colors hover:bg-background hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next recommendation"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-background/30 transition-colors hover:bg-background hover:text-foreground"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {recommendations.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to recommendation ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-8 bg-accent' : 'w-2 bg-background/30 hover:bg-background/50'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
