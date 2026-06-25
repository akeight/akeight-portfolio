import { Download, ArrowUpRight } from 'lucide-react';
import { experience } from '../data/experience';
import { engineeringSkills } from '../data/skills';
import { TechBadge } from '@/components/TechBadge';
import { GiantHeading } from '../components/GiantHeading';
import { ScrollReveal } from '../components/ScrollReveal';

const resumePdf = `${import.meta.env.BASE_URL}AllysonKeightleyResume_26.pdf`;

const Resume = () => {
  return (
    <div className="py-24 md:py-32">
      <div className="container max-w-5xl space-y-20">
        {/* Header */}
        <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-5">
            <span className="eyebrow">Resume</span>
            <GiantHeading as="h1" text="The story so far." className="max-w-[12ch]" />
            <p className="max-w-xl text-lg text-muted-foreground">
              Software Engineer & Product Builder — full-stack development and user-centered
              product strategy.
            </p>
          </div>
          <a
            href={resumePdf}
            download
            className="mx-auto group inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </header>

        {/* Experience */}
        <section className="space-y-8">
          <div className="flex items-baseline justify-between border-b border-foreground/15 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight">Experience & Development</h2>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {experience.length} entries
            </span>
          </div>

          <div>
            {experience.map((exp, index) => (
              <ScrollReveal
                key={exp.id}
                delay={(index % 4) * 0.05}
                className="grid gap-4 border-b border-foreground/10 py-8 md:grid-cols-[200px_1fr] md:gap-10"
              >
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {exp.period}
                  </span>
                  <p className="font-medium text-foreground/80">{exp.organization}</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight">{exp.role}</h3>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-8">
          <h2 className="border-b border-foreground/15 pb-4 text-2xl font-semibold tracking-tight">
            Engineering skills
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {engineeringSkills.map((category) => (
              <div key={category.category} className="space-y-3">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <TechBadge key={skill} tech={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PDF Viewer */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-foreground/15 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight">Full resume</h2>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Open in new tab
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="overflow-hidden rounded-xl border border-foreground/10">
            <iframe
              src={`${resumePdf}#toolbar=1&navpanes=1&scrollbar=1`}
              className="w-full"
              style={{ minHeight: '820px' }}
              title="Resume PDF Viewer"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
