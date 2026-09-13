import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { VerticalCutReveal } from "@/components/fancy/vertical-cut-reveal";
import { useMotionPreference } from "@/lib/useMotionPreference";
import { easeEditorial } from "@/lib/motion";

const marginalia = [
  { label: "Currently", value: "Itron — mobile software" },
  { label: "Previously", value: "Todd · Kahani" },
  { label: "Open to", value: "Summer 2027 internships" },
];

/**
 * Section 1 — the quiet, typographic hero.
 * One confident statement on open paper. The restraint is the signal.
 */
export const Hero = () => {
  const { reduceMotion } = useMotionPreference();

  return (
    <section className="grid-col flex min-h-[82vh] flex-col justify-center py-20" aria-label="Introduction">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="space-y-10 lg:col-span-9">
          <h1 className="display text-display max-w-[16ch]">
            <VerticalCutReveal text="I turn early ideas into working software." />
          </h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: easeEditorial }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            I work across product, design, and code — from the ambiguous first sketch of a
            problem to the shipped, production thing.
          </motion.p>

          <motion.a
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            href="#work-index"
            className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
          >
            <ArrowDown className="h-4 w-4" />
            Read the work
          </motion.a>
        </div>

        {/* Marginalia — the only résumé facts above the fold */}
        <motion.aside
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-row flex-wrap gap-x-10 gap-y-4 self-end lg:col-span-3 lg:flex-col lg:gap-6"
          aria-label="Current status"
        >
          {marginalia.map((m) => (
            <div key={m.label} className="space-y-1 lg:border-l lg:border-foreground/15 lg:pl-4">
              <span className="annotation block">{m.label}</span>
              <span className="block text-sm text-foreground/80">{m.value}</span>
            </div>
          ))}
        </motion.aside>
      </div>
    </section>
  );
};
