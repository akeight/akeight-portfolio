import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';
import { TechBadge } from './TechBadge';
import { Button } from './ui/button';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
    >
      {/* Project Image */}
      {project.cover && (
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground">{project.tagline}</p>
        </div>

        {/* Impact */}
        <div className="flex items-start gap-2">
          <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
          <p className="text-sm text-foreground/80">{project.impact}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map(tech => (
            <TechBadge key={tech} tech={tech} />
          ))}
          {project.stack.length > 4 && (
            <span className="text-xs text-muted-foreground self-center">
              +{project.stack.length - 4} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 pt-2">
          {project.links?.repo && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {project.links?.demo && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
          {project.links?.caseStudy && (
            <Button size="sm" asChild className="ml-auto">
              <Link to={project.links.caseStudy}>
                Case Study →
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};