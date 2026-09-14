import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import { GiantHeading } from '../components/GiantHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { TechBadge } from '../components/TechBadge';
import { FlowDiagram } from '../components/system/FlowDiagram';
import { experience } from '../data/experience';
import { useDocumentMeta } from '@/lib/useDocumentMeta';
import { easeEditorial } from '@/lib/motion';

const byId = (id: string) => experience.find((e) => e.id === id);

/** Sticky meta rail for a professional story. */
const StoryMeta = ({
  org,
  title,
  period,
  tech,
  href,
}: {
  org: string;
  title: string;
  period: string;
  tech?: string[];
  href?: string;
}) => (
  <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
    <div className="space-y-1">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-2xl font-semibold tracking-tight hover:text-foreground/80"
        >
          {org}
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ) : (
        <p className="text-2xl font-semibold tracking-tight">{org}</p>
      )}
      <p className="text-muted-foreground">{title}</p>
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">{period}</p>
    </div>
    {tech && (
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <TechBadge key={t} tech={t} />
        ))}
      </div>
    )}
  </div>
);

/** TODD — expandable professional story: summary now, full story on demand. */
const ToddStory = () => {
  const todd = byId('todd-swe')!;
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal as="section" className="scroll-mt-28 border-t border-foreground/15 pt-12">
      <span id="todd" className="sr-only" aria-hidden />
      <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
        <StoryMeta
          org="Todd"
          title={todd.displayTitle ?? todd.role}
          period={todd.period}
          tech={todd.tech}
          href="https://toddagriscience.com"
        />

        <div className="space-y-8">
          <p className="text-xl leading-relaxed text-foreground/90 md:text-2xl">
            I joined Todd, an agriscience startup, as a frontend engineering intern out of my love for regenerative gardening. From implementing
            Figma-driven UI, the role grew into something bigger. I've led a small team of interns andexterns,
            setting code-review standards, and helping carry the public site and Iris v1 to launch
            quality.
          </p>

          {/* Public-safe visuals — desktop + mobile of the live site */}
          <figure className="overflow-hidden rounded-xl border border-foreground/10 bg-surface-elevated">
            <div className="relative" style={{ backgroundColor: 'hsl(var(--sage) / 0.08)' }}>
              <img
                src="/projects/todd/desktop-home.png"
                alt="TODD public website — desktop homepage"
                loading="lazy"
                className="w-full object-cover"
              />
              <img
                src="/projects/todd/mobile-home.png"
                alt="TODD public website — mobile homepage"
                loading="lazy"
                className="absolute bottom-4 right-4 w-[20%] max-w-[140px] rounded-lg border border-foreground/15 shadow-lg sm:bottom-6 sm:right-6"
              />
            </div>
            <figcaption className="border-t border-foreground/10 px-5 py-3 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
              The public Todd site: desktop and mobile
            </figcaption>
          </figure>

          <ul className="space-y-2.5">
            {todd.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ochre" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Expandable full story */}
          <div className="rounded-xl border border-foreground/10 bg-surface-elevated">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-medium">The full story</span>
              <motion.span
                animate={{ rotate: expanded ? 45 : 0 }}
                transition={{ duration: 0.3, ease: easeEditorial }}
                className="shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
              >
                <Plus className="h-5 w-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: easeEditorial }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6 border-t border-foreground/10 px-6 py-6 text-sm leading-relaxed text-muted-foreground">
                    <div className="space-y-2">
                      <h3 className="font-medium text-foreground">Where it started</h3>
                      <p>
                        The initial scope was classic frontend internship work: take the design
                        team's Figma files and implement them faithfully in React and TailwindCSS, 
                        marketing site pages, the client dashboard, motion, and responsive behavior.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-foreground">Scope grew with trust</h3>
                      <p>
                        As the team saw the work, my responsibilities expanded past implementation:
                        translating founder direction into concrete features and engineering tasks,
                        breaking work into issues, and reviewing code across the frontend.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-foreground">Leading externs</h3>
                      <p>
                        When the company brought on the first cohort ofexternship participants, I onboarded my team and
                        owned their development workflow, branch strategy, PR process, and
                        code-review standards, so their output could safely land in a production
                        codebase.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-foreground">Launch-ready polish</h3>
                      <p>
                        My favorite phase: taking "functional but rough" output the last mile to
                        launch quality. Typography, hierarchy, spacing, color, and interaction
                        detail across the public marketing site and user dashboard, Iris v1. The details between
                        "it works" and "it's ready."
                      </p>
                    </div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em]">
                      This story keeps growing, the role is ongoing.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

/** Itron — the technical engineering anchor, with product + systems depth. */
const ItronStory = () => {
  const itron = byId('itron')!;

  return (
    <ScrollReveal as="section" className="scroll-mt-28 border-t border-foreground/15 pt-12">
      <span id="itron" className="sr-only" aria-hidden />
      <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
        <StoryMeta
          org="Itron"
          title={itron.displayTitle ?? itron.role}
          period={itron.period}
          tech={itron.tech}
          href="https://na.itron.com/company/landing/temetra"
        />

        <div className="space-y-10">
          <p className="text-xl leading-relaxed text-foreground/90 md:text-2xl">
            On the Temetra mobile team I work in a large production C#/.NET MAUI codebase used by
            utility field workers. It's where I've learned what shipping a feature really means:
            functional design, technical design, implementation, testing, and documentation, not
            just the code.
          </p>

          {/* Story 1 — Send Logs, end to end */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">
              Send Logs: owning a production feature
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A support pain point: getting diagnostic data from a field device to the support team
              took too many manual steps. I carried the fix through the full engineering workflow.
              That included investigating the problem, functional design through technical design, implementation, and a published
              design document and user guide documentation.
            </p>
            <FlowDiagram
              accent="dusty"
              steps={[
                { label: 'Problem', note: 'Manual, error-prone log retrieval' },
                { label: 'Functional design', note: 'What should the user experience be?' },
                { label: 'Technical design', note: 'Architecture + review', emphasis: true },
                { label: 'Implementation', note: 'C# / .NET MAUI' },
                { label: 'Design doc', note: 'Published for the team', emphasis: true },
              ]}
            />
          </div>

          {/* Story 2 — semantic color system */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">
              A semantic color system: design-systems thinking in a production app
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The app's colors were hard-coded throughout the codebase, which made theming
              impossible. I'm refactoring them into a reusable semantic token system designed to
              support light, dark, and system themes. Foundation work that's still in progress.
            </p>
            <FlowDiagram
              accent="dusty"
              steps={[
                { label: 'Hard-coded colors', note: 'Scattered across the app' },
                { label: 'Audit', note: 'Usage inventory' },
                { label: 'Semantic tokens', note: 'Roles, not hex values', emphasis: true },
                { label: 'Theme support', note: 'Light / dark / system — in progress' },
              ]}
            />
          </div>

          <ul className="space-y-2.5">
            {itron.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ochre" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
};

/** Kahani — summary block linking to the flagship full story. */
const KahaniSummary = () => {
  const swe = byId('kahani-swe')!;

  return (
    <ScrollReveal as="section" className="scroll-mt-28 border-t border-foreground/15 pt-12">
      <span id="kahani" className="sr-only" aria-hidden />
      <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
        <StoryMeta
          org="Kahani"
          title="Mobile Engineer Intern + Product Management"
          period={swe.period}
          tech={swe.tech}
          href="https://www.getkahani.com/"
        />

        <div className="space-y-8">
          <p className="text-xl leading-relaxed text-foreground/90 md:text-2xl">
            The internship where my role expanded unexpectedly. I joined as a Flutter/Dart mobile
            engineer. Due to churn, I also took on product management responsibilities. I helped carry the build through
            significant team change as one of three remaining engineers, and was the only intern
            offered an extension, during which I solo-built the new Kahani website.
          </p>

          <Link
            to="/experience/kahani"
            className="group flex items-center justify-between gap-6 rounded-xl border border-foreground/10 bg-surface-elevated p-6 transition-colors hover:border-foreground/30 md:p-8"
          >
            <div className="space-y-1">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-plum">
                Flagship professional story
              </p>
              <p className="text-lg font-medium tracking-tight md:text-xl">
                Kahani: engineering, product ownership, and shipping through change
              </p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-foreground/20 transition-all group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Experience = () => {
  useDocumentMeta(
    'Experience — Allyson Keightley',
    'Professional experience: TODD, Itron, and Kahani — engineering, product ownership, and shipping real software.'
  );

  return (
    <div className="py-24 md:py-30">
      <div className="container max-w-6xl space-y-16 md:space-y-20">
        {/* Header */}
        <header className="space-y-6">
          <span className="eyebrow">Experience</span>
          <GiantHeading as="h1" text="Where I've worked." />
          <p className="max-w-2xl text-lg text-muted-foreground">
            Professional roles only — the projects, programs, and experiments live on the{' '}
            <Link to="/projects" className="underline underline-offset-4 hover:text-foreground">
              Projects page
            </Link>
            . Each story here is about the same thing: owning more than just a ticket.
          </p>
        </header>

        <ToddStory />
        <ItronStory />
        <KahaniSummary />

        {/* CTA */}
        <ScrollReveal className="flex flex-col items-start gap-4 border-t border-foreground/15 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-muted-foreground">
            The full picture. Programs, education, and skills are on the resume.
          </p>
          <Link
            to="/resume"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/50"
          >
            View resume
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Experience;
