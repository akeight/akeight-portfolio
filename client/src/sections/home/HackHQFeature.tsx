import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getFlagship } from "@/data/flagships";
import { Annotation } from "@/components/system/Annotation";
import { useMotionPreference } from "@/lib/useMotionPreference";
import { easeEditorial } from "@/lib/motion";
import { FeatureShell } from "./FeatureShell";

type Mode = "In-person" | "Remote" | "Hybrid";

type Event = {
  name: string;
  location: string;
  date: string;
  deadline: string;
  mode: Mode;
};

const events: Event[] = [
  { name: "HackMIT", location: "Cambridge, MA", date: "Sep 13–14", deadline: "Aug 20", mode: "In-person" },
  { name: "Hack the North", location: "Waterloo, ON", date: "Sep 12–14", deadline: "Jul 31", mode: "In-person" },
  { name: "Cal Hacks", location: "San Francisco, CA", date: "Oct 17–19", deadline: "Sep 26", mode: "In-person" },
  { name: "MLH Global Hack Week", location: "Anywhere", date: "Monthly", deadline: "Rolling", mode: "Remote" },
  { name: "TreeHacks", location: "Stanford, CA", date: "Feb 13–15", deadline: "Jan 12", mode: "Hybrid" },
  { name: "Hack the Valley", location: "Toronto, ON", date: "Oct 3–5", deadline: "Sep 12", mode: "Hybrid" },
];

const filters = ["All", "In-person", "Remote", "Hybrid"] as const;

/* The noise field — fragments of a fragmented ecosystem. Decorative only. */
const noise = [
  { text: "apps close friday??", x: 4, y: 8, r: -6 },
  { text: "devpost.com/hackathons — page 7", x: 58, y: 2, r: 3 },
  { text: "#hackathon-announcements", x: 26, y: 16, r: -2 },
  { text: "was it hybrid or in-person?", x: 72, y: 22, r: 5 },
  { text: "flight or train to Waterloo?", x: 10, y: 30, r: 4 },
  { text: "deadline ≠ event date", x: 48, y: 34, r: -4 },
  { text: "link expired · 404", x: 82, y: 40, r: -7 },
  { text: "heard about it too late", x: 30, y: 44, r: 2 },
];

/**
 * HackHQ — noise → signal → discovery.
 * The filter chips actually work: a functioning micro-product inside the portfolio.
 */
export const HackHQFeature = () => {
  const flagship = getFlagship("hackhq")!;
  const { reduceMotion } = useMotionPreference();
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible = events.filter((e) => active === "All" || e.mode === active);

  return (
    <FeatureShell
      flagship={flagship}
      index={4}
      srNarrative="A noisy field of fragments — expired links, buried Discord announcements, confused deadlines — settles into a clean, structured index of hackathons with name, location, event date, application deadline, and format. Working filter chips narrow the list by in-person, remote, or hybrid: a small functioning piece of the real product."
    >
      <div className="grid-col">
        {/* Noise field */}
        <div className="relative mb-6 h-32 overflow-hidden md:h-36" aria-hidden>
          {noise.map((n) => (
            <span
              key={n.text}
              className="absolute whitespace-nowrap font-mono text-[10px] text-foreground/30 md:text-[11px]"
              style={{ left: `${n.x}%`, top: `${n.y * 2}%`, transform: `rotate(${n.r}deg)` }}
            >
              {n.text}
            </span>
          ))}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-background" />
        </div>

        {/* The signal — a working index */}
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter events by format">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active === f}
                  onClick={() => setActive(f)}
                  className={cn(
                    "border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors",
                    active === f
                      ? "border-oxblood bg-oxblood text-background"
                      : "border-foreground/20 text-muted-foreground hover:border-foreground/50 hover:text-foreground"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
            <span className="annotation" aria-live="polite">
              {visible.length} of {events.length} shown
            </span>
          </div>

          {/* Header row */}
          <div
            className="hidden grid-cols-[1.4fr_1fr_0.8fr_0.8fr_0.7fr] gap-4 border-b border-foreground/20 pb-2 md:grid"
            aria-hidden
          >
            {["Event", "Location", "Event date", "Apps close", "Format"].map((h) => (
              <span key={h} className="annotation">
                {h}
              </span>
            ))}
          </div>

          <ul className="border-t border-foreground/15 md:border-t-0">
            <AnimatePresence initial={false}>
              {visible.map((e) => (
                <motion.li
                  key={e.name}
                  layout={!reduceMotion}
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.25, ease: easeEditorial }}
                  className="grid grid-cols-2 gap-x-4 gap-y-1 border-b border-foreground/10 py-3.5 md:grid-cols-[1.4fr_1fr_0.8fr_0.8fr_0.7fr] md:items-baseline md:gap-4"
                >
                  <span className="col-span-2 font-serif text-lg tracking-tight md:col-span-1 md:text-xl">
                    {e.name}
                  </span>
                  <span className="text-sm text-muted-foreground">{e.location}</span>
                  <span className="font-mono text-xs text-foreground/75">{e.date}</span>
                  <span className="font-mono text-xs text-oxblood">{e.deadline}</span>
                  <span className="annotation">{e.mode}</span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>

        {/* Annotations */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Annotation accent="oxblood" className="max-w-none">
            62 hackathons · 58 organizers · one schema. Universities, companies, and communities in
            a single reliable directory.
          </Annotation>
          <Annotation kind="decision" accent="oxblood" className="max-w-none">
            Application deadlines and event dates are different products — the index models both.
          </Annotation>
          <Annotation accent="oxblood" className="max-w-none">
            Open source — built to be contributed to, extended, and trusted.
          </Annotation>
        </div>
      </div>
    </FeatureShell>
  );
};
