import { Download, ArrowUpRight } from 'lucide-react';
import {
  programExperience,
  educationExperience,
  experience,
  type Experience,
} from '../data/experience';
import { engineeringSkills } from '../data/skills';
import { TechBadge } from '@/components/TechBadge';
import { GiantHeading } from '../components/GiantHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { useDocumentMeta } from '@/lib/useDocumentMeta';

const resumePdf = `${import.meta.env.BASE_URL}AllysonKeightleyResume_26.pdf`;

/** One resume entry row (shared across the three sections). */
const ResumeEntry = ({ exp, index }: { exp: Experience; index: number }) => (
  <ScrollReveal
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
      <h3 className="text-xl font-semibold tracking-tight">{exp.displayTitle ?? exp.role}</h3>
      <ul className="space-y-2">
        {exp.highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ochre" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  </ScrollReveal>
);

/** A titled resume section. */
const ResumeSection = ({ title, entries }: { title: string; entries: Experience[] }) => (
  <section className="space-y-2">
    <div className="flex items-baseline justify-between border-b border-foreground/15 pb-4">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {entries.length} {entries.length === 1 ? 'entry' : 'entries'}
      </span>
    </div>
    <div>
      {entries.map((exp, index) => (
        <ResumeEntry key={exp.id} exp={exp} index={index} />
      ))}
    </div>
  </section>
);

const Resume = () => {
  useDocumentMeta(
    'Resume — Allyson Keightley',
    'Professional experience, programs and fellowships, education, and engineering skills.'
  );
  /* Open-source project roles (e.g. HackHQ) read best alongside professional work. */
  const workEntries = experience.filter((e) => e.type === 'work' || e.type === 'project');

  return (
    <div className="py-24 md:py-30">
      <div className="container max-w-5xl space-y-20">
        {/* Header */}
        <header className="space-y-5">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <span className="eyebrow">Resume</span>
            <a
              href={resumePdf}
              download
              className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90 sm:self-auto"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>
          <GiantHeading as="h1" text="The story so far." singleLine />
          <p className="max-w-xl text-lg text-muted-foreground">
            Software Engineer & Product Builder | Full-stack development and user-centered
            product strategy.
          </p>
        </header>

        {/* Professional experience, then programs, then education — no more blending */}
        <ResumeSection title="Professional experience" entries={workEntries} />
        <ResumeSection title="Programs & fellowships" entries={programExperience} />
        <ResumeSection title="Education" entries={educationExperience} />

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
