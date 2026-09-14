import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Calendar, Compass, Heart, Home, Laptop, Plus } from 'lucide-react';
import { catalyst as C } from '@/lib/catalystTokens';
import { easeEditorial } from '@/lib/motion';
import { useMotionPreference } from '@/lib/useMotionPreference';

/**
 * Recreated Catalyst dashboard for the Selected Work card, styled with the
 * real product's design tokens (globals.css + DashboardMockup.tsx in
 * github.com/akeight/careercatalyst): IBM Plex-style neutrals, purple primary,
 * yellow secondary, and per-status colors on stat cards.
 */

const NAV_ITEMS = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: Compass, label: 'Applications Board' },
  { icon: Laptop, label: 'Search Opportunities' },
  { icon: Bookmark, label: 'Saved for Later' },
  { icon: Heart, label: 'Favorites' },
];

const STATS = [
  { label: 'Saved', value: '8', color: C.statusSaved },
  { label: 'Applied', value: '94', color: C.statusApplied },
  { label: 'Interviews', value: '5', color: C.statusInterview },
  { label: 'Offers', value: '2', color: C.statusOffer },
];

/** Weekly "Applications Submitted" line chart points (viewBox 0 0 320 110). */
const CHART_POINTS: [number, number][] = [
  [40, 60],
  [110, 37],
  [180, 44],
  [250, 13],
  [308, 84],
];

const BOARD = {
  applied: [
    { role: 'Frontend Intern', company: 'Google' },
    { role: 'SWE Intern', company: 'Airbnb' },
  ],
  interview: [{ role: 'Frontend Intern', company: 'Figma' }],
};

/** Entrance + idle-bob wrapper for the floating fragments. */
const FloatingFragment = ({
  className,
  delay,
  bobDuration,
  reduceMotion,
  children,
}: {
  className: string;
  delay: number;
  bobDuration: number;
  reduceMotion: boolean;
  children: ReactNode;
}) => (
  <div className={className}>
    {reduceMotion ? (
      children
    ) : (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay, ease: easeEditorial }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: bobDuration, repeat: Infinity, ease: 'easeInOut' }}
        >
          {children}
        </motion.div>
      </motion.div>
    )}
  </div>
);

/** White Catalyst card with the product's border + radius. */
const catCard = { backgroundColor: C.card, borderColor: C.border, color: C.fg };

export const CatalystShowcase = () => {
  const { reduceMotion } = useMotionPreference();

  const reveal = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-80px' as const },
          transition: { duration: 0.7, delay, ease: easeEditorial },
        };

  const ringRadius = 32;
  const ringCircumference = 2 * Math.PI * ringRadius;

  return (
    <div
      role="img"
      aria-label="Recreated Catalyst dashboard: application stats by status, a weekly submissions chart, a weekly goal ring, a kanban applications board, and follow-up reminders."
      className="relative h-full w-full overflow-hidden"
    >
      <div aria-hidden className="h-full w-full">
        {/* App window — the dashboard */}
        <div className="absolute left-1/2 top-1/2 w-[84%] -translate-x-1/2 -translate-y-1/2 sm:w-[66%]">
          <motion.div
            {...reveal(0)}
            className="flex overflow-hidden rounded-2xl border shadow-2xl transition-transform duration-500 group-hover:-translate-y-1"
            style={{ ...catCard, backgroundColor: C.bg }}
          >
            {/* Sidebar */}
            <aside
              className="hidden w-[31%] shrink-0 flex-col justify-between border-r p-2 sm:flex sm:p-2.5"
              style={{ backgroundColor: C.sidebar, borderColor: C.border }}
            >
              <div className="space-y-2.5">
                <div className="px-1.5">
                  <p className="font-serif text-[11px] font-semibold" style={{ color: C.fg }}>
                    Catalyst
                  </p>
                  <p className="text-[7px]" style={{ color: C.mutedFg }}>
                    Turn opportunities into offers.
                  </p>
                </div>
                <div className="space-y-0.5">
                  <p
                    className="px-1.5 text-[6px] font-medium uppercase tracking-wider"
                    style={{ color: C.mutedFg }}
                  >
                    Navigation
                  </p>
                  {NAV_ITEMS.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-1.5 rounded px-1.5 py-[3px] text-[7.5px]"
                      style={
                        item.active
                          ? {
                              backgroundColor: `color-mix(in srgb, ${C.secondary} 40%, transparent)`,
                              color: C.navActiveFg,
                              fontWeight: 500,
                            }
                          : { color: C.mutedFg }
                      }
                    >
                      <item.icon className="h-2 w-2 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div
                  className="flex items-center justify-center gap-1 rounded px-1.5 py-1 text-[7px] font-medium text-white"
                  style={{ backgroundColor: C.primary }}
                >
                  <Plus className="h-2 w-2" />
                  Add Application
                </div>
              </div>
              <div
                className="mt-2 flex items-center gap-1.5 border-t pt-1.5"
                style={{ borderColor: C.border }}
              >
                <span
                  className="flex h-3.5 w-3.5 items-center justify-center rounded-full text-[6px] font-semibold text-white"
                  style={{ backgroundColor: C.fg }}
                >
                  A
                </span>
                <div className="min-w-0 leading-tight">
                  <p className="truncate text-[7px] font-medium" style={{ color: C.fg }}>
                    Aiden
                  </p>
                  <p className="truncate text-[6px]" style={{ color: C.mutedFg }}>
                    user@gmail.com
                  </p>
                </div>
              </div>
            </aside>

            {/* Main */}
            <div className="min-w-0 flex-1 space-y-2 p-2.5 sm:space-y-2.5 sm:p-3.5">
              {/* Header */}
              <div className="leading-tight">
                <p className="text-[7px] sm:text-[8px]" style={{ color: C.mutedFg }}>
                  Sunday, July 5
                </p>
                <p className="font-serif text-[13px] sm:text-lg" style={{ color: C.fg }}>
                  Good evening, Aiden.
                </p>
                <p className="text-[7px] sm:text-[8px]" style={{ color: C.mutedFg }}>
                  Here's where your job search stands today.
                </p>
              </div>

              {/* Stat cards — 3px status-colored left border, like the real product */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border p-1.5 shadow-sm sm:rounded-xl sm:p-2"
                    style={{ ...catCard, borderLeftWidth: 3, borderLeftColor: stat.color }}
                  >
                    <p className="text-[6px] sm:text-[8px]" style={{ color: C.mutedFg }}>
                      {stat.label}
                    </p>
                    <p className="text-[11px] font-semibold sm:text-base" style={{ color: C.fg }}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart + weekly goal */}
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                <div
                  className="col-span-3 rounded-lg border p-2 shadow-sm sm:rounded-xl sm:p-2.5"
                  style={catCard}
                >
                  <div className="flex items-start justify-between">
                    <div className="leading-tight">
                      <p className="text-[8px] font-semibold sm:text-[10px]" style={{ color: C.fg }}>
                        Applications Submitted
                      </p>
                      <p className="text-[6px] sm:text-[7px]" style={{ color: C.mutedFg }}>
                        19 submitted in July 2026.
                      </p>
                    </div>
                    <span
                      className="rounded border px-1 py-px text-[6px]"
                      style={{ borderColor: C.border, color: C.mutedFg }}
                    >
                      Weekly
                    </span>
                  </div>
                  <svg viewBox="0 0 320 110" className="mt-1 w-full" fill="none">
                    {[0, 1, 2, 3].map((i) => (
                      <line
                        key={i}
                        x1="24"
                        x2="316"
                        y1={12 + i * 24}
                        y2={12 + i * 24}
                        stroke={C.border}
                        strokeWidth="1"
                      />
                    ))}
                    <motion.polyline
                      points={CHART_POINTS.map((p) => p.join(',')).join(' ')}
                      stroke={C.primary}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      {...(reduceMotion
                        ? {}
                        : {
                            initial: { pathLength: 0 },
                            whileInView: { pathLength: 1 },
                            viewport: { once: true, margin: '-80px' as const },
                            transition: { duration: 1.1, delay: 0.35, ease: easeEditorial },
                          })}
                    />
                    {CHART_POINTS.map(([x, y], i) => (
                      <motion.circle
                        key={`${x}-${y}`}
                        cx={x}
                        cy={y}
                        r="3.5"
                        fill={C.primary}
                        {...(reduceMotion
                          ? {}
                          : {
                              initial: { opacity: 0 },
                              whileInView: { opacity: 1 },
                              viewport: { once: true, margin: '-80px' as const },
                              transition: { duration: 0.3, delay: 0.4 + i * 0.18 },
                            })}
                      />
                    ))}
                  </svg>
                  <div
                    className="flex justify-between px-2 text-[6px]"
                    style={{ color: C.mutedFg }}
                  >
                    {['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Wk 5'].map((w) => (
                      <span key={w}>{w}</span>
                    ))}
                  </div>
                </div>

                {/* Weekly goal — yellow radial ring, like the real product */}
                <div
                  className="col-span-2 flex flex-col rounded-lg border p-2 shadow-sm sm:rounded-xl sm:p-2.5"
                  style={catCard}
                >
                  <p className="text-[8px] font-semibold leading-tight sm:text-[10px]" style={{ color: C.fg }}>
                    Weekly Goal
                  </p>
                  <p className="text-[6px] leading-tight sm:text-[7px]" style={{ color: C.mutedFg }}>
                    4 more to hit your target.
                  </p>
                  <div className="flex flex-1 items-center justify-center py-1">
                    <div className="relative">
                      <svg viewBox="0 0 80 80" className="h-10 w-10 sm:h-14 sm:w-14" fill="none">
                        <circle cx="40" cy="40" r={ringRadius} stroke={C.muted} strokeWidth="8" />
                        <motion.circle
                          cx="40"
                          cy="40"
                          r={ringRadius}
                          stroke={C.secondary}
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray={ringCircumference}
                          transform="rotate(-90 40 40)"
                          {...(reduceMotion
                            ? { strokeDashoffset: ringCircumference * 0.5 }
                            : {
                                initial: { strokeDashoffset: ringCircumference },
                                whileInView: { strokeDashoffset: ringCircumference * 0.5 },
                                viewport: { once: true, margin: '-80px' as const },
                                transition: { duration: 1, delay: 0.5, ease: easeEditorial },
                              })}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                        <span className="text-[10px] font-semibold sm:text-[13px]" style={{ color: C.fg }}>
                          4
                        </span>
                        <span className="text-[5px] sm:text-[7px]" style={{ color: C.mutedFg }}>
                          of 8
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Applications board fragment — bottom left */}
        <FloatingFragment
          className="absolute bottom-[7%] left-[3%] w-[42%] sm:left-[5%] sm:w-[25%]"
          delay={0.2}
          bobDuration={6}
          reduceMotion={reduceMotion}
        >
          <div
            className="rounded-xl border p-2 shadow-xl transition-transform duration-500 group-hover:-translate-y-2 sm:p-2.5"
            style={catCard}
          >
            <p className="mb-1.5 text-[7px] font-semibold sm:text-[9px]" style={{ color: C.fg }}>
              Applications Board
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-[6px] font-medium sm:text-[7px]" style={{ color: C.mutedFg }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: C.statusApplied }} />
                  Applied
                </div>
                {BOARD.applied.map((app) => (
                  <div
                    key={app.company}
                    className="rounded-md border p-1 text-[6px] leading-tight sm:text-[7.5px]"
                    style={{ borderColor: C.border, color: C.fg }}
                  >
                    <span className="font-medium">{app.role}</span>
                    <span className="block" style={{ color: C.mutedFg }}>
                      {app.company}
                    </span>
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-[6px] font-medium sm:text-[7px]" style={{ color: C.mutedFg }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: C.statusInterview }} />
                  Interview
                </div>
                {BOARD.interview.map((app) => (
                  <div
                    key={app.company}
                    className="rounded-md border p-1 text-[6px] leading-tight sm:text-[7.5px]"
                    style={{
                      borderColor: C.statusInterview,
                      backgroundColor: `color-mix(in srgb, ${C.statusInterview} 8%, ${C.card})`,
                      color: C.fg,
                    }}
                  >
                    <span className="font-medium">{app.role}</span>
                    <span className="block" style={{ color: C.mutedFg }}>
                      {app.company}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FloatingFragment>

        {/* Saved applications fragment — top right */}
        <FloatingFragment
          className="absolute right-[3%] top-[7%] hidden w-[24%] sm:right-[5%] sm:block"
          delay={0.3}
          bobDuration={7}
          reduceMotion={reduceMotion}
        >
          <div
            className="rounded-xl border p-2.5 shadow-xl transition-transform duration-500 group-hover:-translate-y-2"
            style={catCard}
          >
            <p className="text-[9px] font-semibold" style={{ color: C.fg }}>
              Saved Applications
            </p>
            <p className="text-[6.5px]" style={{ color: C.mutedFg }}>
              Pick up where you left off.
            </p>
            <div className="mt-1.5 space-y-1">
              {[
                { role: 'SWE Intern', meta: 'Pinterest · Seattle' },
                { role: 'PM Intern', meta: 'Figma · New York' },
                { role: 'Frontend Intern', meta: 'Vercel · SF' },
              ].map((app) => (
                <div
                  key={app.role}
                  className="rounded-md border px-1.5 py-1 text-[7px] leading-tight"
                  style={{ borderColor: C.border, color: C.fg }}
                >
                  <span className="block truncate font-medium">{app.role}</span>
                  <span className="block truncate" style={{ color: C.mutedFg }}>
                    {app.meta}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FloatingFragment>

        {/* Hover chips — the product's own floating accents */}
        <div className="absolute left-[6%] top-[9%] translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none">
          <div
            className="flex items-center gap-1.5 rounded-xl border px-2 py-1 shadow-lg sm:px-2.5 sm:py-1.5"
            style={catCard}
          >
            <span
              className="h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2"
              style={{ backgroundColor: C.statusApplied }}
            />
            <span className="text-[7px] font-medium sm:text-[9px]">Applied to Figma</span>
          </div>
        </div>
        <div className="absolute bottom-[10%] right-[4%] hidden translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none sm:block">
          <div className="flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 shadow-lg" style={catCard}>
            <Calendar className="h-2.5 w-2.5" style={{ color: C.primary }} />
            <span className="text-[9px] font-medium">Follow up with Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};
