import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects';
import { HoverVideo } from './HoverVideo';
import { PhoneFan } from './PhoneFan';
import { CatalystShowcase } from './CatalystShowcase';
import { VariableFontHoverByLetter } from './fancy/variable-font-hover-by-letter';

interface FeaturedProjectProps {
  project: Project;
  index: number;
}

/**
 * Media-first editorial panel used inside the stacking-cards section.
 * The image/video is the composition; text is reduced to title, hook,
 * and role/context. The whole card links to the project's story page.
 */
export const FeaturedProject = ({ project, index }: FeaturedProjectProps) => {
  const panelRef = useRef<HTMLElement>(null);
  const cover = project.media?.cover || project.media?.video?.poster;
  const secondary = project.media?.secondary;
  const screens = project.media?.screens;
  const video = project.media?.video;
  const accentGround = `hsl(var(--${project.accent}) / 0.08)`;

  const media =
    project.mediaLayout === 'catalyst' ? (
      /* Recreated dashboard composition on an accent-tinted ground */
      <div className="h-full w-full" style={{ backgroundColor: accentGround }}>
        <CatalystShowcase />
      </div>
    ) : project.mediaLayout === 'phones' && screens?.length ? (
      /* Fanned deck of app screens on an accent-tinted ground */
      <div className="h-full w-full" style={{ backgroundColor: accentGround }}>
        <PhoneFan screens={screens} />
      </div>
    ) : project.mediaLayout === 'phones' && cover ? (
      /* Portrait app screens on an accent-tinted ground */
      <div
        className="flex h-full w-full items-end justify-center gap-4 px-8 pt-10 sm:gap-8 sm:px-14"
        style={{ backgroundColor: accentGround }}
      >
        <img
          src={cover}
          alt={`${project.title} — primary screen`}
          loading="lazy"
          className="h-[88%] w-auto max-w-[44%] self-end rounded-t-xl border border-b-0 border-foreground/15 object-cover object-top shadow-lg transition-transform duration-500 group-hover:-translate-y-1.5"
        />
        {secondary && (
          <img
            src={secondary}
            alt={`${project.title} — secondary screen`}
            loading="lazy"
            className="hidden h-[72%] w-auto max-w-[40%] self-end rounded-t-xl border border-b-0 border-foreground/15 object-cover object-top shadow-md transition-transform duration-500 group-hover:-translate-y-3 sm:block"
          />
        )}
      </div>
    ) : video ? (
      <HoverVideo
        video={video}
        alt={project.title}
        hoverTargetRef={panelRef}
        className="h-full w-full"
        videoClassName="transition-transform duration-700 group-hover:scale-[1.015]"
        objectPosition={project.objectPosition}
      />
    ) : cover ? (
      /* Desktop screenshot, optionally with a mobile screen overlaid bottom-right */
      <div className="relative h-full w-full" style={{ backgroundColor: accentGround }}>
        <img
          src={cover}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
          style={project.objectPosition ? { objectPosition: project.objectPosition } : undefined}
        />
        {secondary && (
          <img
            src={secondary}
            alt={`${project.title} — mobile`}
            loading="lazy"
            className="absolute bottom-4 right-4 w-[22%] max-w-[150px] rounded-lg border border-foreground/15 shadow-lg transition-transform duration-500 group-hover:-translate-y-1.5 sm:bottom-6 sm:right-6"
          />
        )}
      </div>
    ) : null;

  const inner = (
    <article
      ref={panelRef}
      className="overflow-hidden rounded-2xl border border-foreground/10 bg-surface-elevated shadow-md"
    >
      {/* Media — the point of the card */}
      <div className="aspect-[4/3] max-h-[62vh] w-full overflow-hidden border-b border-foreground/10 sm:aspect-[16/9]">
        {media}
      </div>

      {/* Slim editorial text bar */}
      <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5">
        <div className="min-w-0 space-y-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-mono text-xs text-dusty">
              ({String(index + 1).padStart(2, '0')})
            </span>
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
              <span className="hidden md:inline">
                <VariableFontHoverByLetter label={project.title} fromWeight={500} toWeight={700} />
              </span>
              <span className="md:hidden">{project.title}</span>
            </h3>
          </div>
          <p className="truncate text-sm text-muted-foreground sm:text-base">{project.hook}</p>
        </div>

        <div className="flex shrink-0 items-center gap-4 sm:gap-6">
          <div className="hidden text-right sm:block">
            <p className="text-sm text-foreground/80">{project.role}</p>
            <p
              className="mt-0.5 font-mono text-[0.65rem] uppercase tracking-[0.18em]"
              style={{ color: `hsl(var(--${project.accent}))` }}
            >
              {project.context}
            </p>
          </div>
          <span
            aria-hidden
            className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 transition-all group-hover:border-foreground group-hover:bg-foreground group-hover:text-background"
          >
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </article>
  );

  const label = `${project.title} — ${project.hook}`;
  const internalHref = project.links?.caseStudy;
  const externalHref = project.links?.demo || project.links?.repo;

  return internalHref ? (
    <Link to={internalHref} aria-label={label} className="group block">
      {inner}
    </Link>
  ) : externalHref ? (
    <a
      href={externalHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group block"
    >
      {inner}
    </a>
  ) : (
    <div className="group">{inner}</div>
  );
};
