import { Download, ArrowUpRight } from "lucide-react";
import { experience } from "@/data/experience";
import { engineeringSkills } from "@/data/skills";
import { TechBadge } from "@/components/TechBadge";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

const resumePdf = `${import.meta.env.BASE_URL}site/AllysonKeightleyResume_26.pdf`;

const Resume = () => {
  useDocumentMeta("Résumé — Allyson Keightley");

  return (
    <div className="py-16 md:py-24">
      <div className="grid-col max-w-5xl space-y-16">
        {/* Header */}
        <header className="space-y-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <h1 className="display text-display">The story so far.</h1>
            <a
              href={resumePdf}
              download
              className="group inline-flex shrink-0 items-center gap-2 self-start border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-foreground sm:self-auto"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>
        </header>

        {/* Experience */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-foreground/15 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight">Experience & development</h2>
            <span className="annotation">{experience.length} entries</span>
          </div>

          <div>
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="grid gap-4 border-b border-foreground/10 py-7 md:grid-cols-[220px_1fr] md:gap-10"
              >
                <div className="space-y-1">
                  <span className="annotation block">{exp.period}</span>
                  <p className="font-medium text-foreground/85">{exp.organization}</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold tracking-tight">{exp.role}</h3>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ochre" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills — the badge walls live here, and only here */}
        <section className="space-y-6">
          <h2 className="border-b border-foreground/15 pb-4 text-2xl font-semibold tracking-tight">
            Engineering skills
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {engineeringSkills.map((category) => (
              <div key={category.category} className="space-y-3">
                <h3 className="annotation">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <TechBadge key={skill} tech={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PDF viewer */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-foreground/15 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight">Full résumé</h2>
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
          <div className="overflow-hidden border border-foreground/15">
            <iframe
              src={`${resumePdf}#toolbar=1&navpanes=1&scrollbar=1`}
              className="w-full"
              style={{ minHeight: "820px" }}
              title="Résumé PDF"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
