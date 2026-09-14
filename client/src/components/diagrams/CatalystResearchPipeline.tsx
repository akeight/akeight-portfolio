import { catalyst as C } from '@/lib/catalystTokens';

/**
 * The Interview Prep generation pipeline. Stages and terminal statuses are the
 * real ResearchRunStage and ResearchRunStatus enums from prisma/schema.prisma
 * in github.com/akeight/careercatalyst — the same values the progress UI reads.
 */

const STAGES = [
  { label: 'Reviewing position', note: 'Read the saved role and job description' },
  { label: 'Identifying company', note: 'Resolve a real company and domain' },
  { label: 'Researching official sources', note: 'Careers pages, docs, company site' },
  { label: 'Finding recent developments', note: 'Blogs, changelogs, announcements' },
  { label: 'Building role insights', note: 'Must-haves, responsibilities, stack signals' },
  { label: 'Connecting candidate context', note: "Tie it back to the applicant's own profile" },
  { label: 'Validating citations', note: 'Every claim must resolve to a stored source', emphasis: true },
  { label: 'Saving brief', note: 'Persisted against the application' },
];

const STATUSES = [
  { label: 'Pending', color: C.border, fg: C.mutedFg },
  { label: 'Running', color: C.primary, fg: C.card },
  { label: 'Completed', color: C.statusApplied, fg: C.fg },
  { label: 'Partial', color: C.secondary, fg: C.navActiveFg },
  { label: 'Failed', color: C.fg, fg: C.card },
];

export const CatalystResearchPipeline = () => (
  <div
    role="img"
    aria-label="The Catalyst research pipeline runs eight named stages, from reviewing the position through identifying the company, researching official sources, finding recent developments, building role insights, connecting candidate context, validating citations, and saving the brief. Every run ends as pending, running, completed, partial, or failed."
    className="p-5 md:p-8"
    style={{ backgroundColor: C.bg }}
  >
    <div aria-hidden>
      <ol className="grid gap-2 sm:grid-cols-2">
        {STAGES.map((stage, i) => (
          <li
            key={stage.label}
            className="flex items-start gap-2.5 rounded-lg border p-2.5 shadow-sm"
            style={{
              backgroundColor: C.card,
              borderColor: stage.emphasis ? C.primary : C.border,
              color: C.fg,
            }}
          >
            <span
              className="mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full font-mono text-[9px] font-semibold"
              style={{
                backgroundColor: stage.emphasis ? C.primary : C.muted,
                color: stage.emphasis ? C.card : C.mutedFg,
              }}
            >
              {i + 1}
            </span>
            <div className="min-w-0 leading-tight">
              <p
                className="font-mono text-[10.5px] font-medium uppercase tracking-[0.08em]"
                style={{ color: stage.emphasis ? C.primary : C.fg }}
              >
                {stage.label}
              </p>
              <p className="mt-0.5 text-[10.5px] leading-snug" style={{ color: C.mutedFg }}>
                {stage.note}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <p
          className="font-mono text-[10px] uppercase tracking-[0.12em]"
          style={{ color: C.mutedFg }}
        >
          Every run resolves to
        </p>
        {STATUSES.map((status) => (
          <span
            key={status.label}
            className="rounded-full px-2 py-0.5 font-mono text-[9.5px] font-medium uppercase tracking-[0.08em]"
            style={{ backgroundColor: status.color, color: status.fg }}
          >
            {status.label}
          </span>
        ))}
      </div>
    </div>
  </div>
);
