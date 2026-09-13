import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/experience";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

const principles = [
  {
    n: "01",
    title: "Start from the product problem, not the feature list.",
    body: "The interesting work begins before the ticket exists — noticing what's broken about a workflow, forming a hypothesis, and deciding what's actually worth building.",
  },
  {
    n: "02",
    title: "Prototype to answer questions, not to decorate decks.",
    body: "A prototype earns its existence by resolving a real uncertainty: does this interaction feel right, does this flow hold up, does this idea survive contact with a user.",
  },
  {
    n: "03",
    title: "The static design is the beginning of the design.",
    body: "Figma shows one viewport, one dataset, one ideal condition. Production introduces loading, errors, empty states, long labels, and real data. Engineering has to keep answering the questions the frame stopped answering.",
  },
  {
    n: "04",
    title: "Ship, then learn.",
    body: "Working software in front of real people beats a perfect plan. I'd rather ship the honest version and iterate than polish an assumption.",
  },
];

const currently = [
  "Interning at Itron on the Temetra mobile software team (C# / .NET MAUI)",
  "Studying for my B.S. in Software Engineering at WGU",
  "Break Through Tech AI Fellow, in partnership with Cornell Tech",
  "MLT Career Prep Fellow",
];

const About = () => {
  useDocumentMeta(
    "About — Allyson Keightley",
    "Product engineer working across product, design, and code."
  );

  return (
    <div className="py-16 md:py-24">
      <div className="space-y-20">
        {/* Intro */}
        <header className="grid-col space-y-8">
          <h1 className="display text-display max-w-4xl">
            An engineer who cares about the whole product.
          </h1>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&rsquo;m Allyson, a product engineer working across product, design, and code.
              Engineering is my primary craft — and increasingly, my work lives in the territory
              between identifying a product problem, making the interaction and visual decisions,
              and building the system that ships.
            </p>
            <p>
              I like the part of building where an idea has to survive contact with real users,
              real data, and real constraints. That&rsquo;s where the interesting decisions live.
            </p>
          </div>
        </header>

        {/* How I build */}
        <section className="prose-col space-y-10" aria-label="How I build">
          <div className="space-y-3">
            <span className="eyebrow">How I build</span>
          </div>
          <ol className="space-y-10">
            {principles.map((p) => (
              <li key={p.n} className="space-y-2">
                <h2 className="flex items-baseline gap-4 font-serif text-xl italic tracking-tight md:text-2xl">
                  <span className="annotation not-italic text-ochre">{p.n}</span>
                  {p.title}
                </h2>
                <p className="pl-10 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Currently */}
        <section className="grid-col space-y-6" aria-label="Currently">
          <span className="eyebrow">
            <span className="sr-only">Section:</span>Currently
          </span>
          <ul className="max-w-2xl space-y-3 border-t border-foreground/15 pt-6">
            {currently.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-foreground/85">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ochre" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section className="grid-col space-y-8" aria-label="Experience">
          <div className="flex items-baseline justify-between border-b border-foreground/15 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
            <Link
              to="/resume"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Full résumé
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="grid gap-3 border-b border-foreground/10 py-6 md:grid-cols-[220px_1fr] md:gap-10"
              >
                <div className="space-y-1">
                  <span className="annotation block">{exp.period}</span>
                  <p className="font-medium text-foreground/85">{exp.organization}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight">{exp.role}</h3>
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {exp.highlights[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
