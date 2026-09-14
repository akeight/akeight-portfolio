import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { GiantHeading } from '../components/GiantHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { FlowDiagram } from '../components/system/FlowDiagram';
import { kahaniStory, type StoryFigure } from '../data/stories/kahani';
import { useDocumentMeta } from '@/lib/useDocumentMeta';
import { cn } from '@/lib/utils';

/**
 * Kahani — flagship professional story.
 * Mode A (NDA-safe) renders labeled diagrams; if a figure gains `media`
 * (Mode B, with permission), the visual renders in place with no layout change.
 */

const StageList = ({ stages }: { stages: NonNullable<StoryFigure['stages']> }) => (
  <ol className="space-y-0">
    {stages.map((stage, i) => (
      <li key={stage.label} className="relative flex gap-4 pb-5 pl-1 last:pb-0">
        {/* connector */}
        {i < stages.length - 1 && (
          <span
            aria-hidden
            className="absolute left-[0.93rem] top-6 h-full w-px bg-foreground/15"
          />
        )}
        <span className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-foreground/20 bg-surface-elevated font-mono text-[0.65rem] text-muted-foreground">
          {i + 1}
        </span>
        <div className="space-y-0.5 pt-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-foreground/80">
            {stage.label}
          </p>
          {stage.note && <p className="text-xs leading-snug text-muted-foreground">{stage.note}</p>}
        </div>
      </li>
    ))}
  </ol>
);

const StoryFigureBlock = ({ figure }: { figure: StoryFigure }) => (
  <figure className="space-y-3">
    <span className="annotation text-plum">{figure.label}</span>
    <div className="overflow-hidden rounded-xl border border-foreground/10 bg-surface-elevated">
      {figure.media ? (
        <img src={figure.media.src} alt={figure.media.alt} loading="lazy" className="w-full" />
      ) : (
        <div className="p-5 md:p-7">
          {(figure.fallback === 'flow' || figure.fallback === 'architecture') && figure.flow ? (
            <FlowDiagram accent="plum" steps={figure.flow} />
          ) : figure.stages ? (
            <StageList stages={figure.stages} />
          ) : null}
        </div>
      )}
    </div>
    <figcaption className="caption max-w-prose normal-case tracking-normal">
      {figure.media?.caption ?? figure.caption}
    </figcaption>
  </figure>
);

const KahaniStory = () => {
  useDocumentMeta(
    'Kahani — Professional story — Allyson Keightley',
    kahaniStory.thesis
  );
  const figureById = new Map(kahaniStory.figures.map((f) => [f.id, f]));

  return (
    <div className="py-24 md:py-30">
      <div className="container max-w-6xl space-y-12 md:space-y-16">
        {/* Breadcrumb */}
        <Link
          to="/experience"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          Experience
        </Link>

        {/* Hero */}
        <header className="space-y-6">
          <span className="eyebrow">Professional story · {kahaniStory.role}</span>
          <GiantHeading as="h1" text={`${kahaniStory.title}.`} />
          <p className="max-w-2xl text-xl leading-relaxed text-foreground/90 md:text-2xl">
            {kahaniStory.thesis}
          </p>
          <p className="annotation max-w-prose normal-case tracking-[0.04em]">
            Product visuals are under NDA. Every diagram below is an honest abstraction of process
            and architecture — the public website at the end is real and live.
          </p>
        </header>

        {/* At a glance */}
        <ScrollReveal className="grid gap-px overflow-hidden rounded-xl border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {kahaniStory.atAGlance.map((item) => (
            <div key={item.label} className="space-y-1.5 bg-surface-elevated p-5 md:p-6">
              <span className="annotation text-plum">{item.label}</span>
              <p className="text-sm leading-relaxed text-foreground/85">{item.value}</p>
            </div>
          ))}
        </ScrollReveal>

        {/* Sections */}
        <div>
          {kahaniStory.sections.map((section, i) => {
            const figure = section.figureId ? figureById.get(section.figureId) : undefined;
            return (
              <ScrollReveal
                as="section"
                key={section.id}
                className={cn(
                  'grid gap-6 border-t border-foreground/10 py-10 md:grid-cols-[200px_1fr] md:gap-12 md:py-14'
                )}
              >
                <h2 className="flex items-baseline gap-3 md:block md:space-y-1.5">
                  <span className="annotation text-plum">{String(i + 1).padStart(2, '0')}</span>
                  <span className="block text-xl font-semibold tracking-tight">{section.title}</span>
                </h2>
                <div className="min-w-0 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="max-w-prose text-base leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {figure && (
                    <div className="pt-2">
                      <StoryFigureBlock figure={figure} />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Footer nav */}
        <div className="flex flex-col items-start gap-4 border-t border-foreground/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/experience"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to experience
          </Link>
          <a
            href="https://www.loom.com/share/566e4f38a29a478e99aa02e28f1281df"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Watch the recorded demo
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default KahaniStory;
