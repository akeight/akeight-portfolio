import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const entries = [
  {
    period: "2026 — now",
    org: "Itron",
    line: "Mobile engineer intern on Temetra — built and hardened 1,000+ unit tests; shipped a diagnostics feature that streamlined support handoff by 60%.",
  },
  {
    period: "2026",
    org: "Todd",
    line: "Frontend engineer intern — translated Figma-driven creative direction into production UI; mentored externship developers.",
  },
  {
    period: "2025 — 26",
    org: "Kahani",
    line: "Mobile engineer + PM intern — Flutter features, CI/CD pipeline, and the redesigned marketing site, solo from Figma to production.",
  },
  {
    period: "Programs",
    org: "MLT · Break Through Tech · AI4ALL · Udacity/AWS",
    line: "Career Prep fellow, AI fellowships with Cornell Tech, and a competitive AWS AI Engineer Nanodegree scholarship (~3% acceptance).",
  },
];

/**
 * Section 9 — credibility, compressed. Supporting evidence, not the argument.
 */
export const Credibility = () => (
  <section className="grid-col py-16 md:py-20" aria-label="Experience">
    <div className="mb-8 flex items-baseline justify-between">
      <span className="eyebrow">Experience</span>
      <Link
        to="/resume"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        Full résumé
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>

    <div className="grid gap-x-16 border-t border-foreground/15 md:grid-cols-2">
      {entries.map((e) => (
        <div key={e.org} className="grid grid-cols-[92px_1fr] gap-5 border-b border-foreground/10 py-6">
          <span className="annotation pt-1">{e.period}</span>
          <div className="space-y-1">
            <h3 className="font-medium tracking-tight">{e.org}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{e.line}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
