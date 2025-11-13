import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { experience } from '../data/experience';
import { engineeringSkills, productSkills } from '../data/skills';
// import { TechBadge } from '@/components/TechBadge';

const Resume = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Resume</h1>
              <p className="text-lg text-muted-foreground">
                Software Engineer & Product Manager | Full-stack development & user-centered product strategy
              </p>
            </div>
            <Button asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/30"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                
                <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.organization}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-accent mt-1.5">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-bold">Skills</h2>
          
          {/* Engineering Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">Engineering</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {engineeringSkills.map((category) => (
                <div key={category.category} className="space-y-3">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
                    {category.category}
                  </h4>
                  {/* <div className="flex flex-wrap gap-2">
                    {category.items.map(skill => (
                      <TechBadge key={skill} tech={skill} />
                    ))}
                  </div> */}
                </div>
              ))}
            </div>
          </div>

          {/* Product Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-accent">Product</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {productSkills.map((category) => (
                <div key={category.category} className="space-y-3">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
                    {category.category}
                  </h4>
                  {/* <div className="flex flex-wrap gap-2">
                    {category.items.map(skill => (
                      <TechBadge key={skill} tech={skill} className="bg-accent/10 text-accent border-accent/20" />
                    ))}
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* PDF Embed Placeholder */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card border border-border rounded-2xl p-12 text-center space-y-4"
        >
          <p className="text-muted-foreground">
            PDF resume viewer would appear here
          </p>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open PDF in new tab
            </a>
          </Button>
        </motion.section>
      </div>
    </div>
  );
};

export default Resume;