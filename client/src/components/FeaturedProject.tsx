import { useRef } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../data/projects';
import { TechBadge } from './TechBadge';
import { HoverVideo } from './HoverVideo';
import { VariableFontHoverByLetter } from './fancy/variable-font-hover-by-letter';
import { AnimatedUnderline } from './fancy/underline-animation';

interface FeaturedProjectProps {
  project: Project;
  index: number;
}

/** Large editorial project panel used inside the stacking-cards section. */
export const FeaturedProject = ({ project, index }: FeaturedProjectProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const cover = project.media?.cover || project.media?.video?.poster;
  const video = project.media?.video;

  return (
    <article
      ref={panelRef}
      className="grid overflow-hidden rounded-2xl border border-foreground/10 bg-surface-elevated shadow-md lg:grid-cols-2"
    >
      {/* Text column */}
      <div className="order-2 flex flex-col justify-between gap-10 p-8 md:p-12 lg:order-1">
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm text-accent">
            ({String(index + 1).padStart(2, '0')})
          </span>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
            {project.category.join(' · ')}
          </span>
        </div>

        <div className="space-y-5">
          <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
            <VariableFontHoverByLetter label={project.title} fromWeight={600} toWeight={900} />
          </h3>
          <p className="max-w-md text-base text-muted-foreground">{project.tagline}</p>
          {project.impact && (
            <p className="flex items-start gap-2 text-sm text-foreground/75">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {project.impact}
            </p>
          )}
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 6).map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
          <div className="flex items-center gap-6 text-sm">
            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                <AnimatedUnderline>Code</AnimatedUnderline>
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
                <AnimatedUnderline>Live site</AnimatedUnderline>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Media column */}
      <div className="order-1 min-h-[260px] border-b border-foreground/10 lg:order-2 lg:border-b-0 lg:border-l">
        {video ? (
          <HoverVideo
            video={video}
            alt={project.title}
            hoverTargetRef={panelRef}
            className="h-full w-full"
          />
        ) : cover ? (
          <img
            src={cover}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>
    </article>
  );
};
