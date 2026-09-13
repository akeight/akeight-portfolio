import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { flagships, caseStudyPath } from "@/data/flagships";
import { archiveProjects } from "@/data/archive";
import { accentText } from "@/lib/accents";
import { StatusLabel } from "@/components/system/StatusLabel";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

const Work = () => {
  useDocumentMeta(
    "Work — Allyson Keightley",
    "Five feature stories and a quiet archive of everything else I've built."
  );

  return (
    <div className="py-16 md:py-24">
      <div className="grid-col space-y-16">
        <header className="space-y-6">
          <h1 className="display text-display">Selected work.</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Five products, five different questions. Everything else lives in the archive below.
          </p>
        </header>

        {/* Flagships — compact feature rows */}
        <section aria-label="Featured case studies" className="border-t border-foreground/15">
          {flagships.map((f, i) => (
            <Link
              key={f.slug}
              to={caseStudyPath(f.slug)}
              className="group grid gap-2 border-b border-foreground/15 py-7 transition-colors hover:bg-surface-elevated md:grid-cols-[56px_1fr_auto] md:items-baseline md:gap-6"
            >
              <span className={cn("annotation", accentText[f.accent])}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="space-y-1.5">
                <span className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl tracking-tight md:text-3xl">{f.title}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 self-center opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
                <span className="block max-w-2xl font-serif italic text-muted-foreground">
                  {f.question}
                </span>
              </span>
              <StatusLabel accent={f.accent} className="md:text-right">
                {f.status}
              </StatusLabel>
            </Link>
          ))}
        </section>

        {/* Archive — the quiet index */}
        <section aria-label="More things I've built" className="space-y-8">
          <div className="space-y-3">
            <span className="eyebrow">Archive</span>
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              More things I&rsquo;ve built.
            </h2>
          </div>

          <div className="border-t border-foreground/15">
            {archiveProjects.map((p) => (
              <div
                key={p.slug}
                className="grid gap-2 border-b border-foreground/10 py-6 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8"
              >
                <div className="space-y-1.5">
                  <h3 className="flex items-baseline gap-3 text-lg font-medium tracking-tight">
                    {p.title}
                    <span className="annotation">{p.year}</span>
                  </h3>
                  <p className="max-w-2xl text-sm text-muted-foreground">{p.description}</p>
                  <p className="annotation pt-1">{p.stack.join(" · ")}</p>
                </div>
                <div className="flex items-center gap-5 text-sm md:justify-end">
                  {p.links?.repo && (
                    <a
                      href={p.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {p.links?.demo && (
                    <a
                      href={p.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;
