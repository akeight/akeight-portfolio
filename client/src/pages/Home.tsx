import { useEffect } from 'react';
import { motion } from 'framer-motion';
//import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
//import { ProjectCard } from '@/components/ProjectCard';
//import { TechBadge } from '@/components/TechBadge';
//import { getProjectsByAudience, getFeaturedProjects } from '@/data/projects';
//import { Audience, getStoredAudience } from '@/lib/audience';
import heroBg from '@/assets/hero-bg.jpg';

const Home = () => {
  //const [audience, setAudience] = useState<Audience>(getStoredAudience());
  //const [orderedProjects, setOrderedProjects] = useState(getFeaturedProjects());

  useEffect(() => {
    //const handleAudienceChange = (e?: CustomEvent<Audience>) => {
    //  const newAudience = e?.detail || getStoredAudience();
    //  setAudience(newAudience);
    //  setOrderedProjects(getProjectsByAudience(newAudience).filter(p => p.featured));
    //};

    // Listen for custom event (same tab) and storage event (other tabs)
    //window.addEventListener('audienceChange', handleAudienceChange as EventListener);
    //window.addEventListener('storage', handleAudienceChange as EventListener);
    
    // Initial load
    //handleAudienceChange();

    return () => {
      //window.removeEventListener('audienceChange', handleAudienceChange as EventListener);
      //window.removeEventListener('storage', handleAudienceChange as EventListener);
    };
  }, []);

  const heroContent = {
    SWE: {
      headline: "Software Engineer & Product Manager in training",
      subtitle: "Building fast, accessible web apps and practical AI demos. I love turning ambiguous ideas into shipped, measurable products.",
    },
    PM: {
      headline: "Leading student squads to ship lean MVPs",
      subtitle: "I bridge engineering and product with clear metrics, customer discovery, and rapid iteration—delivering outcomes that matter.",
    }
  };

  const stats = [
    { label: "Projects Shipped", value: "10+" },
    { label: "Prototypes Live", value: "3" },
    { label: "CI/CD Pipelines", value: "5" },
  ];

  const techStack = [
    "React", "Next.js", "TypeScript", "Python", "FastAPI", 
    "PostgreSQL", "Flutter", "Tailwind", "Docker"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <img 
            src={heroBg} 
            alt="" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
        </div>

        <div className="container py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
                >
                  <Sparkles className="h-4 w-4" />
                  Available for SWE & PM internships
                </motion.div>

                {/* <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  {heroContent[audience].headline}
                </h1>

                <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
                  {heroContent[audience].subtitle}
                </p> */}
              </div>

              {/* CTAs */}
              {/* <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/projects">
                    Explore Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/resume">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Link>
                </Button>
              </div> */}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Tech Stack & Now */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Tech Stack */}
              <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-semibold">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    >
                      {/* <TechBadge tech={tech} /> */}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Now */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Now
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>→ Building Vertex AI demo with React frontend</li>
                  <li>→ Completing Web103 course at WGU</li>
                  <li>→ Seeking PM internship for Summer 2025</li>
                </ul>
                <Button variant="ghost" size="sm" asChild className="mt-2">
                  {/* <Link to="/now">
                    See full update →
                  </Link> */}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
              {/* <p className="text-muted-foreground">
                {audience === 'SWE' 
                  ? "Full-stack applications with focus on performance and architecture"
                  : "Product-driven projects with measurable user impact and clear metrics"}
              </p> */}
            </div>
            <Button variant="ghost" asChild className="hidden lg:flex">
              {/* <Link to="/projects">
                View All →
              </Link> */}
            </Button>
          </div>

          {/* <div className="grid md:grid-cols-2 gap-6">
            {orderedProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div> */}

          <div className="flex justify-center lg:hidden">
            <Button asChild>
              {/* <Link to="/projects">
                View All Projects →
              </Link> */}
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;