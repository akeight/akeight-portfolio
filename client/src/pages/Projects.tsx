import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { GiantHeading } from '../components/GiantHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { HoverVideo } from '../components/HoverVideo';
import { getMosaicProjects, type Project } from '@/data/projects';
import { useDocumentMeta } from '@/lib/useDocumentMeta';
import { cn } from '@/lib/utils';

/**
 * Visible masonry column count (1 / sm:2 / lg:3). Tiles are distributed
 * round-robin so array order reads left-to-right, top-to-bottom — case
 * studies stay visually first instead of sinking down the first column.
 */
const useColumnCount = () => {
  const [cols, setCols] = useState(3);
  useEffect(() => {
    const sm = window.matchMedia('(min-width: 640px)');
    const lg = window.matchMedia('(min-width: 1024px)');
    const update = () => setCols(lg.matches ? 3 : sm.matches ? 2 : 1);
    update();
    sm.addEventListener('change', update);
    lg.addEventListener('change', update);
    return () => {
      sm.removeEventListener('change', update);
      lg.removeEventListener('change', update);
    };
  }, []);
  return cols;
};

/** Media aspect ratio per tile size — drives the varied heights of the masonry columns. */
const tileAspects: Record<NonNullable<Project['tile']>, string> = {
  large: 'aspect-[4/5]',
  wide: 'aspect-[16/9]',
  tall: 'aspect-[2/3]',
  small: 'aspect-square',
};

const MosaicTile = ({ project, index }: { project: Project; index: number }) => {
  const tileRef = useRef<HTMLDivElement>(null);
  const cover = project.media?.cover || project.media?.video?.poster;
  const video = project.media?.video;
  const internalHref = project.links?.caseStudy;
  const externalHref = project.links?.demo || project.links?.repo;

  const inner = (
    <motion.div
      ref={tileRef}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
      className="flex flex-col overflow-hidden rounded-xl border border-foreground/10 bg-surface-elevated transition-colors duration-300 group-hover:border-foreground/30"
    >
      {/* Media at a tile-driven aspect ratio — varied heights across the columns */}
      <div
        className={cn(
          'relative overflow-hidden border-b border-foreground/10',
          tileAspects[project.tile]
        )}
        style={{ backgroundColor: `hsl(var(--${project.accent}) / 0.08)` }}
      >
        {video ? (
          <HoverVideo
            // Prefer the dedicated card cover as the static poster; hover still plays the demo.
            video={{ ...video, poster: cover || video.poster }}
            alt={project.title}
            hoverTargetRef={tileRef}
            className="h-full w-full"
            objectPosition={project.objectPosition}
          />
        ) : cover ? (
          <img
            src={cover}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            style={project.objectPosition ? { objectPosition: project.objectPosition } : undefined}
          />
        ) : null}
      </div>

      {/* Slim text strip */}
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <div className="flex items-baseline gap-2">
            <h3 className="truncate text-sm font-semibold tracking-tight md:text-base">
              {project.title}
            </h3>
            <span
              className="shrink-0 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
              style={{ color: `hsl(var(--${project.accent}))` }}
            >
              {project.context}
            </span>
          </div>
          <p className="truncate text-xs text-muted-foreground md:text-sm">{project.hook}</p>
        </div>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
    </motion.div>
  );

  const label = `${project.title} — ${project.hook}`;
  const spanClass = 'group block';

  return internalHref ? (
    <Link to={internalHref} aria-label={label} className={spanClass}>
      {inner}
    </Link>
  ) : externalHref ? (
    <a
      href={externalHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={spanClass}
    >
      {inner}
    </a>
  ) : (
    <div className={spanClass}>{inner}</div>
  );
};

const Projects = () => {
  useDocumentMeta(
    'Projects — Allyson Keightley',
    'Case studies, product stories, and experiments — full-stack web, mobile, and AI tools.'
  );

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const columnCount = useColumnCount();

  const mosaicProjects = getMosaicProjects();
  const uniqueCategories = Array.from(new Set(mosaicProjects.flatMap((p) => p.category))).sort();
  const categories = ['All', ...uniqueCategories];

  const filteredProjects = mosaicProjects.filter((project) => {
    return (
      !selectedCategory ||
      selectedCategory === 'All' ||
      project.category.includes(selectedCategory)
    );
  });

  /* Round-robin distribution: tile i lands in column i % columnCount. */
  const columns = Array.from({ length: columnCount }, (_, c) =>
    filteredProjects
      .map((project, index) => ({ project, index }))
      .filter(({ index }) => index % columnCount === c)
  );

  return (
    <div className="py-24 md:py-30">
      <div className="container space-y-14">
        {/* Header */}
        <header className="space-y-6">
          <span className="eyebrow">Projects</span>
          <GiantHeading as="h1" text="Things I've made." />
          <ScrollReveal>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Case studies, product stories, and experiments — each labeled with its honest
              context. Professional work lives on the{' '}
              <Link to="/experience" className="underline underline-offset-4 hover:text-foreground">
                Experience page
              </Link>
              .
            </p>
          </ScrollReveal>
        </header>

        {/* Controls */}
        <div className="border-y border-foreground/15 py-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const active =
                selectedCategory === category || (category === 'All' && !selectedCategory);
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                  className={cn(
                    'rounded-full border px-4 py-1.5 text-sm transition-colors',
                    active
                      ? 'border-foreground bg-foreground text-background'
                      : 'border-foreground/20 text-muted-foreground hover:border-foreground/50 hover:text-foreground'
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry — Pinterest-style columns of varied heights, case studies leading */}
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {columns.map((column, c) => (
            <div key={c} className="flex flex-col gap-4 md:gap-5">
              {column.map(({ project, index }) => (
                <MosaicTile key={project.slug} project={project} index={index} />
              ))}
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-24 text-center"
          >
            <p className="text-muted-foreground">No projects in this category.</p>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mt-4 text-sm font-medium underline underline-offset-4"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
