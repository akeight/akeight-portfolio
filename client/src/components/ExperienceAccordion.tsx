import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { featuredExperience } from '../data/experience';
import { TechBadge } from './TechBadge';
import { ScrollReveal } from './ScrollReveal';
import { easeEditorial } from '@/lib/motion';

export const ExperienceAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const items = featuredExperience;

  if (items.length === 0) return null;

  return (
    <section className="bg-background py-24 md:py-32 pb-52 md:pb-64">
      <div className="container space-y-12 md:space-y-16">
        {/* Top row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <span className="eyebrow">Experience</span>
          </div>
          <p className="max-w-xl text-2xl font-semibold tracking-tight md:text-right md:text-3xl">
            Where I've been building, shipping, and learning.
          </p>
        </div>

        {/* Giant word */}
        <h2 className="select-none text-[clamp(3.5rem,16vw,13rem)] font-bold uppercase leading-[0.82] tracking-tighter">
          Experience
        </h2>

        {/* Accordion */}
        <div className="ml-auto max-w-3xl">
          <p className="mb-2 text-sm text-muted-foreground">Roles and the tools I used:</p>
          <div className="border-t border-foreground/15">
            {items.map((exp, i) => {
              const open = openIndex === i;
              return (
                <ScrollReveal key={exp.id} delay={(i % 5) * 0.04}>
                  <div className="border-b border-foreground/15">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      aria-expanded={open}
                      className="group flex w-full items-center gap-5 py-6 text-left"
                    >
                      <span className="w-6 shrink-0 font-mono text-sm text-muted-foreground">
                        {i + 1}
                      </span>
                      <span className="flex-1 text-lg font-medium tracking-tight md:text-xl">
                        {exp.organization}< br/>
                        <span className="text-muted-foreground text-base">{exp.role}</span>
                      </span>
                      <motion.span
                        animate={{ rotate: open ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: easeEditorial }}
                        className="shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                      >
                        <Plus className="h-5 w-5" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: easeEditorial }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-5 pb-8 pl-11 pr-1">
                            <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                              {exp.period}
                            </span>
                            <ul className="space-y-2">
                              {exp.highlights.map((highlight, h) => (
                                <li
                                  key={h}
                                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                                >
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                            {exp.tech && (
                              <div className="flex flex-wrap gap-2 pt-1">
                                {exp.tech.map((tool) => (
                                  <TechBadge
                                    key={tool}
                                    tech={tool}
                                    className="border-accent/40 bg-accent/5 text-accent hover:border-accent/70 hover:text-accent"
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
