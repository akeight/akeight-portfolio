import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../data/projects';
import { TechBadge } from './TechBadge';
import { HoverVideo } from './HoverVideo';
import { AnimatedUnderline } from './fancy/underline-animation';
import { fadeInUp, viewportOnce } from '@/lib/motion';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const coverImage = project.media?.cover || project.media?.video?.poster;
  const video = project.media?.video;

  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-foreground/10 bg-surface-elevated transition-colors duration-300 hover:border-foreground/30"
    >
      {/* Media */}
      {(video || coverImage) && (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-foreground/10">
          {video ? (
            <HoverVideo
              video={video}
              alt={project.title}
              hoverTargetRef={cardRef}
              className="h-full w-full"
            />
          ) : (
            <img
              src={coverImage}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
            <span className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              {project.category[0]}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{project.tagline}</p>
        </div>

        {project.impact && (
          <div className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            <p className="text-sm text-foreground/75">{project.impact}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
          {project.stack.length > 4 && (
            <span className="self-center text-xs text-muted-foreground">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center gap-5 pt-2 text-sm">
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
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowUpRight className="h-4 w-4" />
              <AnimatedUnderline>Live demo</AnimatedUnderline>
            </a>
          )}
          {project.links?.caseStudy && (
            <Link
              to={project.links.caseStudy}
              className="ml-auto inline-flex items-center gap-1.5 font-medium text-foreground"
            >
              <AnimatedUnderline>Case study</AnimatedUnderline>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};
