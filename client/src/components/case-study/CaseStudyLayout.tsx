import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github, PlayCircle } from 'lucide-react';
import { GiantHeading } from '../GiantHeading';
import { ScrollReveal } from '../ScrollReveal';
import { TechBadge } from '../TechBadge';
import { Annotation } from '../system/Annotation';
import { accentText, type ProjectAccent } from '@/lib/accents';
import type { Project } from '@/data/projects';
import { useDocumentMeta } from '@/lib/useDocumentMeta';
import { cn } from '@/lib/utils';

export interface TldrItem {
  label: string;
  text: string;
}

interface CSSectionProps {
  n: number;
  title: string;
  accent?: ProjectAccent;
  children: ReactNode;
  className?: string;
}

/** A numbered case-study section — mono label rail, readable prose column. */
export const CSSection = ({ n, title, accent = 'ochre', children, className }: CSSectionProps) => (
  <ScrollReveal
    as="section"
    className={cn('grid gap-6 border-t border-foreground/10 py-10 md:grid-cols-[200px_1fr] md:gap-12 md:py-14', className)}
  >
    <h2 className="flex items-baseline gap-3 md:block md:space-y-1.5">
      <span className={cn('annotation', accentText[accent])}>{String(n).padStart(2, '0')}</span>
      <span className="block text-xl font-semibold tracking-tight">{title}</span>
    </h2>
    <div className="min-w-0 space-y-5 text-base leading-relaxed text-muted-foreground [&_em]:text-foreground/80 [&_p]:max-w-prose">
      {children}
    </div>
  </ScrollReveal>
);

interface FigureProps {
  caption?: string;
  /** Honest label, e.g. "PROCESS DIAGRAM" or "SCREENS — FROM THE REPO". */
  label?: string;
  accent?: ProjectAccent;
  children: ReactNode;
  className?: string;
}

/** A labeled case-study figure with a mono caption. */
export const Figure = ({ caption, label, accent = 'ochre', children, className }: FigureProps) => (
  <figure className={cn('max-w-none space-y-3', className)}>
    {label && <span className={cn('annotation', accentText[accent])}>{label}</span>}
    <div className="overflow-hidden rounded-xl border border-foreground/10 bg-surface-elevated">
      {children}
    </div>
    {caption && <figcaption className="caption max-w-prose normal-case tracking-normal">{caption}</figcaption>}
  </figure>
);

interface CaseStudyLayoutProps {
  project: Project;
  tldr: TldrItem[];
  credit?: string;
  children: ReactNode;
}

/** Shared shell for Tier 1 and Tier 2 case studies. */
export const CaseStudyLayout = ({ project, tldr, credit, children }: CaseStudyLayoutProps) => {
  useDocumentMeta(`${project.title} — Case study — Allyson Keightley`, project.hook);
  const accent = project.accent;

  return (
    <div className="py-24 md:py-30">
      <div className="container max-w-6xl space-y-12 md:space-y-16">
        {/* Breadcrumb */}
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          All projects
        </Link>

        {/* Hero */}
        <header className="space-y-6">
          <span className="eyebrow">{project.context}</span>
          <GiantHeading as="h1" text={`${project.title}.`} />
          <p className="max-w-2xl text-xl leading-relaxed text-foreground/90 md:text-2xl">
            {project.hook}
          </p>
          <div className="flex flex-col gap-5 border-t border-foreground/15 pt-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <p className="text-sm text-foreground/80">{project.role}</p>
              {credit && <Annotation kind="credit" accent={accent}>{credit}</Annotation>}
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <div className="flex max-w-md flex-wrap gap-2 md:justify-end">
                {project.stack.slice(0, 7).map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
              <div className="flex items-center gap-5 text-sm">
                {project.links?.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                )}
                {project.links?.demoVideo && (
                  <a
                    href={project.links.demoVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <PlayCircle className="h-4 w-4" />
                    Demo video
                  </a>
                )}
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    Live site
                  </a>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* TL;DR */}
        <ScrollReveal className="grid gap-px overflow-hidden rounded-xl border border-foreground/10 bg-foreground/10 sm:grid-cols-2">
          {tldr.map((item) => (
            <div key={item.label} className="space-y-2 bg-surface-elevated p-6 md:p-8">
              <span className={cn('annotation', accentText[accent])}>{item.label}</span>
              <p className="text-sm leading-relaxed text-foreground/85">{item.text}</p>
            </div>
          ))}
        </ScrollReveal>

        {/* Sections */}
        <div>{children}</div>

        {/* Footer nav */}
        <div className="flex flex-col items-start gap-4 border-t border-foreground/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to all projects
          </Link>
          {(project.links?.demo || project.links?.demoVideo) && (
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              {project.links?.demoVideo && (
                <a
                  href={project.links.demoVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
                >
                  <PlayCircle className="h-4 w-4" />
                  Watch the demo
                </a>
              )}
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  Visit the live product
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
