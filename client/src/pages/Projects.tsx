import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { ProjectCard } from '../components/ProjectsCard';
import { GiantHeading } from '../components/GiantHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const uniqueCategories = Array.from(new Set(projects.flatMap((p) => p.category))).sort();
  const categories = ['All', ...uniqueCategories];

  const filteredProjects = projects.filter((project) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(q) ||
      project.tagline.toLowerCase().includes(q) ||
      project.stack.some((tech) => tech.toLowerCase().includes(q));
    const matchesCategory =
      !selectedCategory || selectedCategory === 'All' || project.category.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-24 md:py-32">
      <div className="container space-y-14">
        {/* Header */}
        <header className="space-y-6">
          <span className="eyebrow">Portfolio — {filteredProjects.length} projects</span>
          <GiantHeading as="h1" text="All projects." />
          <ScrollReveal>
            <p className="max-w-2xl text-lg text-muted-foreground">
              A collection of full-stack applications, AI demos, and product tools I've built.
              Each tackles a real problem with measurable impact.
            </p>
          </ScrollReveal>
        </header>

        {/* Controls */}
        <div className="space-y-6 border-y border-foreground/15 py-6">
          <div className="relative max-w-md">
            <Search className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects or tech stack..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-b border-foreground/20 bg-transparent py-2 pl-7 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
            />
          </div>

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

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-24 text-center"
          >
            <p className="text-muted-foreground">No projects found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory(null);
              }}
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
