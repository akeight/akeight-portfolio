import { principles } from "@/data/principles";

/**
 * Section 8 — the method, briefly. A quiet zone after five visual features.
 * Stillness after choreography is the design.
 */
export const HowIBuild = () => (
  <section className="prose-col py-20 md:py-28" aria-label="How I build">
    <span className="eyebrow mb-10 block">How I build</span>
    <ol className="space-y-9">
      {principles.map((p) => (
        <li key={p.n} className="space-y-2">
          <h3 className="flex items-baseline gap-4 font-serif text-xl italic tracking-tight md:text-2xl">
            <span className="annotation not-italic text-ochre">{p.n}</span>
            <span className="font-normal">{p.title}</span>
          </h3>
          <p className="pl-10 text-[0.9375rem] leading-relaxed text-muted-foreground">{p.body}</p>
        </li>
      ))}
    </ol>
  </section>
);
