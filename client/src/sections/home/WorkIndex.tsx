import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { flagships } from "@/data/flagships";
import { accentText, accentBg } from "@/lib/accents";
import { StatusLabel } from "@/components/system/StatusLabel";
import { useMotionPreference } from "@/lib/useMotionPreference";
import { easeEditorial } from "@/lib/motion";

/**
 * Section 2 — the table of contents. The publication metaphor made functional:
 * five ruled rows, five different product questions, jump navigation to each feature.
 */
export const WorkIndex = () => {
  const { reduceMotion } = useMotionPreference();

  const handleJump = (slug: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(`feature-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      // Move focus for keyboard/screen-reader users
      el.setAttribute("tabindex", "-1");
      (el as HTMLElement).focus({ preventScroll: true });
    }
  };

  return (
    <section id="work-index" className="grid-col py-16 md:py-24" aria-label="Index of work">
      <div className="mb-10 space-y-3">
        <span className="eyebrow">Index</span>
        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
          Five products. Five questions.
        </h2>
      </div>

      <ol className="border-t border-foreground/15">
        {flagships.map((f, i) => (
          <motion.li
            key={f.slug}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.5, ease: easeEditorial }}
          >
            <a
              href={`#feature-${f.slug}`}
              onClick={handleJump(f.slug)}
              className="group relative grid gap-1.5 border-b border-foreground/15 py-6 transition-colors hover:bg-surface-elevated md:grid-cols-[56px_minmax(0,1.1fr)_minmax(0,1.6fr)_auto] md:items-baseline md:gap-6 md:py-7"
            >
              {/* Accent rule sliver that grows on hover */}
              <span
                aria-hidden
                className={cn(
                  "absolute -top-px left-0 h-px w-10 transition-all duration-500 group-hover:w-full",
                  accentBg[f.accent]
                )}
              />
              <span className={cn("annotation", accentText[f.accent])}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-2xl tracking-tight md:text-[1.75rem]">{f.title}</span>
              <span className="max-w-xl font-serif italic leading-snug text-muted-foreground">
                {f.question}
              </span>
              <StatusLabel accent={f.accent} className="md:text-right">
                {f.status}
              </StatusLabel>
            </a>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};
