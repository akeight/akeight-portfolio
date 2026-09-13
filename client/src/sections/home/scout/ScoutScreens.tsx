import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Recreated Scout Society screens, built as coded compositions in the site's
 * own language. These are faithful abstractions of the Expo prototype —
 * annotated as recreations in the case study.
 */

export const Phone = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div
    className={cn(
      "flex aspect-[9/18.5] w-[220px] flex-col overflow-hidden rounded-[2rem] border border-foreground/20 bg-[hsl(39,40%,98%)] shadow-lg md:w-[240px]",
      className
    )}
  >
    {/* status bar */}
    <div className="flex items-center justify-between px-5 pb-1 pt-3">
      <span className="font-mono text-[8px] text-foreground/50">9:41</span>
      <span className="h-1 w-8 rounded-full bg-foreground/15" />
    </div>
    <div className="flex-1 overflow-hidden px-4 pb-4 pt-2">{children}</div>
  </div>
);

const ScreenLabel = ({ children }: { children: ReactNode }) => (
  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-ochre">{children}</p>
);

export const IntroScreen = () => (
  <div className="flex h-full flex-col justify-center gap-4 text-center">
    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">Scout</p>
    <p className="font-serif text-2xl leading-tight tracking-tight">
      Try on
      <br />
      your future.
    </p>
    <p className="text-[10px] leading-relaxed text-foreground/60">
      Experience the work before you choose the major.
    </p>
    <span className="mx-auto mt-2 rounded-full bg-foreground px-4 py-2 text-[10px] font-medium text-background">
      Start exploring
    </span>
  </div>
);

export const CalibrationScreen = () => (
  <div className="flex h-full flex-col gap-3">
    <ScreenLabel>Calibration · 2 of 6</ScreenLabel>
    <div className="rounded-xl border border-foreground/10 bg-background p-3">
      <p className="text-[11px] font-medium leading-snug">
        Your team just found a serious bug — two hours before launch.
      </p>
    </div>
    <p className="text-[10px] text-foreground/60">How does that feel?</p>
    <div className="flex justify-between px-1">
      {["😰", "😐", "🙂", "⚡"].map((e, i) => (
        <span
          key={e}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border text-base",
            i === 3 ? "border-ochre bg-ochre/10" : "border-foreground/10"
          )}
        >
          {e}
        </span>
      ))}
    </div>
    <p className="text-center font-mono text-[8px] uppercase tracking-[0.14em] text-foreground/40">
      no wrong answers
    </p>
    <div className="mt-auto flex justify-center gap-1.5">
      {[0, 1, 2, 3, 4, 5].map((d) => (
        <span key={d} className={cn("h-1 w-1 rounded-full", d <= 1 ? "bg-ochre" : "bg-foreground/15")} />
      ))}
    </div>
  </div>
);

export const DiscoverScreen = () => (
  <div className="flex h-full flex-col gap-3">
    <ScreenLabel>Discover · people first</ScreenLabel>
    <div className="rounded-xl border border-foreground/10 bg-background p-3">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ochre/15 font-serif text-sm text-ochre">
          M
        </span>
        <div>
          <p className="text-[11px] font-semibold">Maya Chen</p>
          <p className="text-[9px] text-foreground/60">UX Researcher</p>
        </div>
      </div>
      <div className="mt-2.5 flex flex-wrap gap-1">
        {["listens for a living", "8 interviews / week"].map((chip) => (
          <span key={chip} className="rounded-full bg-foreground/[0.06] px-2 py-0.5 text-[8px]">
            {chip}
          </span>
        ))}
      </div>
      <p className="mt-2.5 text-[10px] font-medium text-ochre">Spend a Tuesday with Maya →</p>
    </div>
    <div className="rounded-xl border border-foreground/10 bg-background p-3 opacity-50">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-dusty/15 font-serif text-sm text-dusty">
          D
        </span>
        <div>
          <p className="text-[11px] font-semibold">Devon Park</p>
          <p className="text-[9px] text-foreground/60">Data Analyst</p>
        </div>
      </div>
    </div>
    <p className="mt-auto text-center font-mono text-[8px] uppercase tracking-[0.14em] text-foreground/40">
      matched from your reactions
    </p>
  </div>
);

const tuesdayMoments = [
  { time: "9:00", text: "Standup — research questions for the week" },
  { time: "10:30", text: "Watching a user struggle with the new prototype" },
  { time: "1:00", text: "Synthesis wall — patterns start to appear" },
  { time: "3:30", text: "Debating a finding with the PM" },
];

export const TuesdayScreen = () => (
  <div className="flex h-full flex-col gap-2.5">
    <ScreenLabel>Maya&rsquo;s Tuesday</ScreenLabel>
    <div className="space-y-2">
      {tuesdayMoments.map((m) => (
        <div key={m.time} className="flex gap-2.5 rounded-lg border border-foreground/10 bg-background p-2">
          <span className="font-mono text-[8px] text-ochre">{m.time}</span>
          <p className="text-[9.5px] leading-snug">{m.text}</p>
        </div>
      ))}
    </div>
    <div className="mt-auto space-y-2">
      <p className="text-[10px] text-foreground/60">Could this be your Tuesday?</p>
      <div className="flex gap-1.5">
        <span className="flex-1 rounded-full bg-foreground py-1.5 text-center text-[9px] font-medium text-background">
          Save to shortlist
        </span>
        <span className="flex-1 rounded-full border border-foreground/15 py-1.5 text-center text-[9px]">
          Not for me
        </span>
      </div>
    </div>
  </div>
);
