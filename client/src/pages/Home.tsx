import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { getFeaturedProjects } from '../data/projects';
import { FeaturedProject } from '../components/FeaturedProject';
import { Recommendations } from '../components/Recommendations';
import { ExperienceAccordion } from '../components/ExperienceAccordion';
import { GiantHeading } from '../components/GiantHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { TextRotate } from '../components/fancy/text-rotate';
import { VerticalCutReveal } from '../components/fancy/vertical-cut-reveal';
import { SimpleMarquee } from '../components/fancy/simple-marquee';
import { StackingCards, StackingCard } from '../components/fancy/stacking-cards';
import { StickyReveal } from '../components/fancy/sticky-reveal';
import { Floating } from '../components/fancy/parallax-floating';
import { fadeInUp, stagger, easeEditorial } from '@/lib/motion';

const stats = [
  { label: 'Internships', value: '3' },
  { label: 'Projects shipped', value: '10+' },
  { label: 'Prototypes live', value: '5' },
];

const techStack = [
  'TypeScript', 'Python', 'React', 'Next.js', 'Node.js', 'FastAPI', 'C#', '.NET MAUI', 'JavaScript',
  'PostgreSQL', 'Express', 'Flutter', 'TailwindCSS', 'Supabase', 'Firebase', 'Figma', 'GCP', 'Vercel', 
  'GitHub', 'Docker', 'CI/CD', 'GitHub Actions', 'Azure DevOps',
];

const Home = () => {
  const featured = getFeaturedProjects();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Floating decorative accents */}
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <Floating depth={2.6} amplitude={28} className="absolute right-[8%] top-[18%]">
            <div className="h-24 w-24 rounded-full border border-foreground/15 md:h-40 md:w-40" />
          </Floating>
          <Floating depth={4} amplitude={40} className="absolute right-[22%] top-[55%]">
            <div className="h-4 w-4 rounded-full bg-accent" />
          </Floating>
          <Floating depth={1.8} amplitude={24} className="absolute right-[14%] bottom-[8%]">
            <div className="h-16 w-16 rotate-12 border border-foreground/10 md:h-24 md:w-24" />
          </Floating>
        </div>

        <div className="container flex min-h-[88vh] flex-col justify-center py-24">
          <motion.div variants={stagger(0.12)} initial="hidden" animate="visible" className="space-y-12">
            <motion.span variants={fadeInUp} className="eyebrow">
              Software Engineer · Product Builder
            </motion.span>

            <h1 className="text-display font-semibold tracking-tightest leading-[0.85] max-w-[15ch]">
              <span className="block">
                <VerticalCutReveal text="Crafting" />
              </span>
              <span className="block font-serif font-medium italic text-accent">
                <TextRotate
                  texts={['human-centered', 'beautiful', 'creative', 'practical AI']}
                  className="leading-[1.1] pr-[0.12em]"
                />
              </span>
              <span className="block">
                <VerticalCutReveal text="digital products." staggerDuration={0.04} />
              </span>
            </h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-xl text-lg text-muted-foreground"
            >
              Hey, I'm Allyson! A curious, coffee-fueled self-starter with 800+ GitHub
              contributions this year, I learn, build, and ship beautiful full-stack web and AI tools... <span className="font-serif italic text-accent">for the plot.</span>
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                View selected work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-medium transition-colors hover:border-foreground/50"
              >
                Resume
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid max-w-xl grid-cols-3 gap-8 border-t border-foreground/15 pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-semibold tracking-tight md:text-4xl">{stat.value}</div>
                  <div className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            <ArrowDown className="h-4 w-4 animate-bounce" />
            Scroll
          </motion.div>
        </div>
      </section>

      {/* Skills marquee */}
      <section className="border-y border-foreground/15 py-6">
        <SimpleMarquee speed={50} pauseOnHover>
          {techStack.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-10 px-8 font-mono text-base font-bold uppercase tracking-[0.15em] text-muted-foreground"
            >
              {tech}
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </SimpleMarquee>
      </section>

      {/* Scroll-over reveal — each panel pins once read, then the next rolls up
          over it (same mechanic as the sticky footer). */}
      {/* Experience (base layer) */}
      <StickyReveal className="z-0 bg-background">
        <ExperienceAccordion />
      </StickyReveal>

      {/* Recommendations rolls up over Experience */}
      <StickyReveal className="z-10 overflow-hidden rounded-t-[2rem] md:rounded-t-[3rem]">
        <Recommendations />
      </StickyReveal>

      {/* Everything after rolls up over Recommendations */}
      <div className="relative z-20 rounded-t-[2rem] bg-background md:rounded-t-[3rem]">
      {/* Selected work — stacking cards */}
      <section className="container py-24 md:py-32">
        <ScrollReveal className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <span className="eyebrow">Selected work</span>
            <GiantHeading text="Things I've built." className="max-w-[10ch]" />
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>

        <StackingCards className="space-y-8">
          {featured.map((project, index) => (
            <StackingCard key={project.slug} index={index} total={featured.length}>
              <FeaturedProject project={project} index={index} />
            </StackingCard>
          ))}
        </StackingCards>
      </section>

      {/* Now teaser */}
      <section className="container py-24 md:py-32 mb-20">
        <ScrollReveal className="rounded-2xl border border-foreground/10 bg-surface-elevated p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                Now
              </span>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Currently building & learning
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>→ Interning at Itron on the Temetra mobile team</li>
                <li>→ B.S. Software Engineering at WGU</li>
                <li>→ AI Fellow with Break Through Tech & Cornell Tech</li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeEditorial }}
            >
              <Link
                to="/now"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/50"
              >
                See full update
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </section>
      </div>
    </div>
  );
};

export default Home;
