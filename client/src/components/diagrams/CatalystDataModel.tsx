import { Fragment } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { catalyst as C } from '@/lib/catalystTokens';

/**
 * Catalyst's relational core, drawn in the product's own palette rather than
 * the site's ink-on-paper language. Entities, fields, and cardinalities are
 * taken from prisma/schema.prisma in github.com/akeight/careercatalyst.
 */

interface Entity {
  name: string;
  /** Cardinality note describing how this entity attaches to the spine. */
  relation?: string;
  fields: string[];
}

interface Band {
  label: string;
  note: string;
  /** The model the band is built around. */
  spine: Entity;
  satellites: Entity[];
}

const BANDS: Band[] = [
  {
    label: 'Identity',
    note: 'Everything is scoped to one user',
    spine: {
      name: 'User',
      fields: ['email @unique', 'targetRole', 'weeklyGoal', 'isDemo'],
    },
    satellites: [
      { name: 'Company', relation: '1 — n', fields: ['@@unique([userId, name])'] },
      { name: 'Contact', relation: '1 — n', fields: ['type: ContactType'] },
      { name: 'Resume', relation: '1 — n', fields: ['private blob pathname'] },
      { name: 'Goal', relation: '1 — n', fields: ['targetDate, completed'] },
    ],
  },
  {
    label: 'The pipeline',
    note: 'The record that moves through stages',
    spine: {
      name: 'Application',
      relation: 'User 1 — n',
      fields: ['status: Status', 'type: ApplicationType', 'roleFamily, favorite', 'deadline, jobDescription'],
    },
    satellites: [
      { name: 'Note', relation: '1 — n', fields: ['markdown, timestamped'] },
      { name: '→ Company', relation: 'n — 1', fields: ['required'] },
      { name: '→ Resume / Contact', relation: 'n — 1', fields: ['optional, SetNull'] },
    ],
  },
  {
    label: 'Research',
    note: 'Generated once, cached, and cited',
    spine: {
      name: 'ApplicationResearch',
      relation: 'Application 1 — 1',
      fields: ['highestLevel: ResearchLevel', 'snapshotContent Json', 'briefContent Json', 'jobDescriptionHash'],
    },
    satellites: [
      {
        name: 'ApplicationResearchSource',
        relation: '1 — n',
        fields: ['evidenceTier', 'relevance / freshness score'],
      },
      {
        name: 'ApplicationResearchRun',
        relation: '1 — n',
        fields: ['mode, status, stage', 'idempotencyKey @unique'],
      },
    ],
  },
];

const cardBase = {
  backgroundColor: C.card,
  borderColor: C.border,
  color: C.fg,
};

const EntityCard = ({ entity, spine }: { entity: Entity; spine?: boolean }) => (
  <div
    className="rounded-lg border p-2.5 shadow-sm"
    style={
      spine
        ? { ...cardBase, borderLeftWidth: 3, borderLeftColor: C.primary }
        : cardBase
    }
  >
    <div className="flex items-baseline justify-between gap-2">
      <p
        className="font-mono text-[11px] font-medium tracking-tight"
        style={{ color: spine ? C.primary : C.fg }}
      >
        {entity.name}
      </p>
      {entity.relation && (
        <span className="shrink-0 font-mono text-[9px]" style={{ color: C.mutedFg }}>
          {entity.relation}
        </span>
      )}
    </div>
    <ul className="mt-1 space-y-px">
      {entity.fields.map((field) => (
        <li key={field} className="font-mono text-[9.5px] leading-snug" style={{ color: C.mutedFg }}>
          {field}
        </li>
      ))}
    </ul>
  </div>
);

export const CatalystDataModel = () => (
  <div
    role="img"
    aria-label="Catalyst data model: a User owns companies, contacts, resumes, and goals; each Application belongs to a user and a company and carries notes; each Application has one ApplicationResearch record, which owns its cited sources and its generation runs."
    className="p-5 md:p-8"
    style={{ backgroundColor: C.bg }}
  >
    <div aria-hidden className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2">
      {BANDS.map((band, i) => (
        <Fragment key={band.label}>
          <div className="flex-1 space-y-2">
            <div className="space-y-0.5">
              <p
                className="font-mono text-[10px] font-medium uppercase tracking-[0.12em]"
                style={{ color: C.primary }}
              >
                {band.label}
              </p>
              <p className="text-[10.5px] leading-snug" style={{ color: C.mutedFg }}>
                {band.note}
              </p>
            </div>
            <EntityCard entity={band.spine} spine />
            <div className="space-y-1.5 md:pl-3">
              {band.satellites.map((satellite) => (
                <EntityCard key={satellite.name} entity={satellite} />
              ))}
            </div>
          </div>
          {i < BANDS.length - 1 && (
            <span
              className="flex shrink-0 items-center justify-center self-center"
              style={{ color: C.primary }}
            >
              <ArrowRight className="hidden h-4 w-4 md:block" />
              <ArrowDown className="h-4 w-4 md:hidden" />
            </span>
          )}
        </Fragment>
      ))}
    </div>
    <p className="mt-4 text-[10.5px] leading-snug" style={{ color: C.mutedFg }}>
      Auth.js contributes three more models — Account, Session, and VerificationToken — kept
      separate from the domain schema.
    </p>
  </div>
);
