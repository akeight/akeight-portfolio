import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '../components/ProjectsCard';
import { projects } from '@/data/projects';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract all unique categories from all projects (flatten arrays)
  const allCategories = projects.flatMap(p => p.category);
  const uniqueCategories = Array.from(new Set(allCategories)).sort();
  const categories = ['All', ...uniqueCategories];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Check if selectedCategory is in the project's category array
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || 
                           project.category.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="container space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-4xl lg:text-5xl font-bold">All Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of full-stack applications, AI demos, and product tools I've built. 
            Each project tackles real problems with measurable impact.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects or tech stack..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {categories.map((category: string) => (
              <Button
                key={category}
                variant={selectedCategory === category || (category === 'All' && !selectedCategory) ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* No results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground">No projects found matching your criteria.</p>
            <Button
              variant="ghost"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory(null);
              }}
              className="mt-4"
            >
              Clear filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;