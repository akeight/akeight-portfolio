import { CaseStudyLayout, CSSection, Figure, type TldrItem } from '@/components/case-study/CaseStudyLayout';
import { DecisionBlock } from '@/components/system/DecisionBlock';
import { Annotation } from '@/components/system/Annotation';
import { FlowDiagram } from '@/components/system/FlowDiagram';
import { CatalystDataModel } from '@/components/diagrams/CatalystDataModel';
import { CatalystResearchPipeline } from '@/components/diagrams/CatalystResearchPipeline';
import { PhoneShowcase, type PhoneScreen } from '@/components/case-study/PhoneShowcase';
import { catalyst } from '@/lib/catalystTokens';
import { HoverVideo } from '@/components/HoverVideo';
import { getProject } from '@/data/projects';

const project = getProject('careercatalyst')!;

const tldr: TldrItem[] = [
  {
    label: 'Problem',
    text: 'An internship search fragments across job boards, browser tabs, spreadsheets, deadlines, notes, and memory — the information architecture problem, not the applying, is what exhausts people.',
  },
  {
    label: 'Thesis',
    text: 'The entire journey — discovery to offer — should live in one workspace that models the search as a pipeline.',
  },
  {
    label: 'Decisions',
    text: 'A pipeline model instead of a to-do list; a relational schema designed for the whole journey up front; auth and persistence from day one; and research depth chosen by pipeline stage rather than generated for everything.',
  },
  {
    label: 'Outcome',
    text: 'Shipped and live — a full-stack Next.js / Prisma / PostgreSQL workspace with authentication, plus an AI Interview Prep pipeline that generates cited company snapshots and interview briefs.',
  },
];

/* Real Interview Prep screens from the live product, captured at mobile width. */
const interviewPrepScreens: PhoneScreen[] = [
  {
    src: '/projects/catalyst/interview-prep-queue.png',
    alt: 'Catalyst Interview Prep queue on mobile: applications under a Needs Attention heading, each row showing its pipeline status — saved, rejected, offer — beside a Not Researched badge.',
    label: 'Queue',
    caption:
      'Applications grouped by what they still need. Research state sits next to pipeline status, so "interviewing this week and not researched" is impossible to miss.',
  },
  {
    src: '/projects/catalyst/interview-prep-brief.png',
    alt: 'A Catalyst interview brief for a Google Software Engineering Intern role on mobile, showing the company snapshot, a 60-second brief with copyable questions, company overview, and role analysis broken into must-have and nice-to-have skills.',
    label: 'Brief',
    caption:
      "A brief for a Google internship. The anchor nav mirrors the brief's stored shape, and individual questions are copyable — the goal is getting the useful sentence into your notes, not reading a report.",
  },
];

const CareerCatalyst = () => (
  <CaseStudyLayout project={project} tldr={tldr} credit="Solo — product, design, and engineering">
    <CSSection n={1} title="The problem" accent="plum">
      <p>
        Watch anyone run an internship search and you see the same picture: twenty browser tabs, a
        spreadsheet named <span className="font-mono text-sm">tracker_v3</span>, deadlines in three
        places, interview notes in a doc, and a nagging feeling of having forgotten to follow up
        with someone. None of the individual tools are bad. The problem is that the journey has no
        home — every stage lives in a different medium, and the connective state lives in the
        applicant&rsquo;s head.
      </p>
    </CSSection>

    <CSSection n={2} title="The thesis" accent="plum">
      <p>
        I believed the search is really a pipeline — <em>discovery → application → interview →
        offer</em> — and that if the product modeled that pipeline explicitly, most of the scattered
        artifacts would have an obvious place to live. Catalyst is not a nicer spreadsheet;
        it&rsquo;s a workspace whose structure matches the actual shape of the journey.
      </p>
      <Figure
        label="The journey"
        accent="plum"
        caption="The journey Catalyst models — each stage carries its own data and its own anxieties."
      >
        <div className="p-5 md:p-8">
          <FlowDiagram
            accent="plum"
            steps={[
              { label: 'Discovery', note: 'Roles found, saved, compared' },
              { label: 'Application', note: 'Submitted, waiting, nudging' },
              { label: 'Interview', note: 'Rounds, prep notes, people' },
              { label: 'Offer', note: 'Deadlines and decisions', emphasis: true },
            ]}
          />
        </div>
      </Figure>
    </CSSection>

    <CSSection n={3} title="Key decisions" accent="plum">
      <div className="max-w-3xl space-y-10">
        <DecisionBlock
          n={1}
          accent="plum"
          title="A pipeline, not a to-do list"
          chose="Modeling every saved role as an Application entity that moves through explicit stages — saved, applied, interview, offer, rejected — surfaced on a drag-and-drop board, not a flat checklist with tags."
          alternatives="A simpler task-list approach where status is a free-text label."
          why="The pipeline is what users actually reason about ('what's in interview right now? what's stalled?'). Making the stage a typed enum on a real entity means every other view — the board, the dashboard counts, the research queue — is a query against one field instead of a convention someone has to maintain by hand."
          tradeoff="More schema and more UI states up front — every stage needs its own empty, loading, and transition behavior. A flat list would have shipped a week sooner."
        />
        <DecisionBlock
          n={2}
          accent="plum"
          title="Design the schema for the whole journey up front"
          chose="A relational Prisma schema built around one spine — user, application, company — with contacts, résumés, notes, and goals as first-class models, designed before the first screen was built."
          alternatives="Growing the schema screen-by-screen as features demanded it."
          why="The value of the product is the relationships — a note belongs to an application, which belongs to a user and a company. Getting those spine relationships right early meant every later feature, Interview Prep included, was new tables hanging off a stable core rather than a rewrite of it."
          tradeoff="Some modeled capacity is still ahead of the UI. I accepted carrying unused schema rather than repeatedly migrating a live database."
        />
        <DecisionBlock
          n={3}
          accent="plum"
          title="Real software from day one"
          chose="Auth.js authentication, per-user data isolation, and a production PostgreSQL database from the first commit — deployed continuously to Vercel."
          alternatives="A local-storage demo to validate the UI faster."
          why="A tracker is only trustworthy if the data survives — persistence isn't a feature of this product, it is the product. Building real from the start also made 'shipped and live' an honest status."
          tradeoff="Slower first iteration and real operational concerns (sessions, migrations) during design churn."
        />
        <DecisionBlock
          n={4}
          accent="plum"
          title="Two depths of research, chosen by pipeline stage"
          chose="A cheap Company Snapshot for anything saved or applied to, and a full Interview Brief only once an application reaches the interview stage. The level reached is stored on the research record."
          alternatives="One depth of research for every application, generated the moment it's saved."
          why="Deep research is slow and costs real money per application, and most saved roles never reach an interview — spending a full brief on all of them burns the budget on applications that go nowhere. Pipeline stage is already the product's best available signal of how much a role is worth knowing about."
          tradeoff="Two output shapes to design, version, and render, plus a promotion path between them. A single depth would have been roughly half the schema and half the prompt work."
        />
      </div>
    </CSSection>

    <CSSection n={4} title="The system" accent="plum">
      <p>
        The relational core, in the product&rsquo;s own palette. Everything is scoped to the user;
        an application belongs to a user and a company and carries its own notes; and each
        application has exactly one research record, which owns both its cited sources and the
        history of every generation run:
      </p>
      <Figure
        label="Data model"
        accent="plum"
        caption="The spine — User → Application → ApplicationResearch — is what carries the product. Entities, fields, and cardinalities here are the actual Prisma schema, not a simplification of it."
      >
        <CatalystDataModel />
      </Figure>
      <Annotation kind="implementation" accent="plum" className="max-w-none">
        Next.js App Router + tRPC give end-to-end type safety: the Prisma schema types flow through
        the API layer into the components. A status change is one typed mutation.
      </Annotation>
    </CSSection>

    <CSSection n={5} title="Interview Prep" accent="plum">
      <p>
        The part of the search I most wanted to take off the user is the part nobody puts on a
        résumé: the two hours before an interview spent re-reading a careers page, digging through
        an engineering blog for whatever shipped last quarter, and trying to infer what the role
        actually wants. Catalyst already knows which application you&rsquo;re interviewing for, so
        it has everything it needs to do that research once and keep it attached to the record.
      </p>
      <p>
        Depth is decided by pipeline stage. Anything saved or applied to gets a{' '}
        <em>Company Snapshot</em> — what the company ships, plus a few things worth knowing. Once an
        application reaches the interview stage it earns a full <em>Interview Brief</em>: a
        60-second summary, company overview, role analysis, recent developments, likely themes,
        questions to ask, and an honest list of the gaps the research couldn&rsquo;t close.
      </p>
      <Figure
        label="Interview Prep on a phone"
        accent="plum"
        caption="The queue and a generated brief at mobile width — the size you actually read a brief at, waiting somewhere before an interview."
      >
        <PhoneShowcase
          screens={interviewPrepScreens}
          accent="plum"
          aspectRatio="526 / 1024"
          background={catalyst.bg}
        />
      </Figure>
      <p>
        Generation is a tracked job, not a single request. Each run walks eight named stages that
        stream to the UI as it works, which matters because a brief takes long enough that an
        unexplained spinner reads as broken:
      </p>
      <Figure
        label="Generation pipeline"
        accent="plum"
        caption="Citations are validated before anything is persisted, so a brief that would cite a source it can't resolve fails loudly instead of quietly inventing one."
      >
        <CatalystResearchPipeline />
      </Figure>
      <p>
        Sources are stored as rows rather than as a bibliography string at the bottom of the text.
        Each one carries a normalized URL that&rsquo;s deduplicated per brief, a publisher, an
        evidence tier from primary down to anecdotal, and relevance and freshness scores — which is
        what makes it possible to show the reader <em>why</em> a claim should be trusted.
      </p>
      <Annotation kind="implementation" accent="plum" className="max-w-none">
        Every run is a row: mode, stage, attempt, provider metadata, token usage, and a unique
        idempotency key — so a double-clicked Generate button can&rsquo;t produce two briefs or two
        bills. <span className="font-mono">PARTIAL</span> is a first-class outcome, because a brief
        that got most of the way is still worth showing with its gaps labeled.
      </Annotation>
      <Annotation kind="note" accent="plum" className="max-w-none">
        Staleness is computed, not guessed: the research record stores a hash of the job description
        it was built from, so editing the posting marks the brief stale instead of silently serving
        research about a different role.
      </Annotation>
      <Annotation kind="constraint" accent="plum" className="max-w-none">
        The public demo ships with sample snapshots and briefs and generation switched off — each
        run costs real money, so an anonymous sandbox can show the output without funding it.
      </Annotation>
    </CSSection>

    <CSSection n={6} title="The shipped product" accent="plum">
      <Figure label="Live demo" accent="plum" caption="The live workspace — hover to play.">
        <HoverVideo
          video={{
            mp4: '/projects/catalyst/demo.mp4',
            webm: '/projects/catalyst/demo.webm',
            poster: '/projects/catalyst/home.jpg',
          }}
          alt="Screen recording of the Catalyst workspace: browsing saved opportunities, moving an application between pipeline stages, and reviewing interview notes."
          autoPlayInView
          className="aspect-video"
        />
      </Figure>
    </CSSection>

    <CSSection n={7} title="What I'd test next" accent="plum">
      <p>
        The riskiest assumption is behavioral, not technical: <em>will an applicant actually keep
        the workspace current during the most stressful weeks of the search?</em> Every tracker dies
        when updating it becomes homework. I&rsquo;d instrument the time-to-update after real-world
        events (application sent, interview scheduled) and test whether lightweight capture — a
        browser action, an email-forwarding address — is what turns a tracker into a habit.
      </p>
    </CSSection>
  </CaseStudyLayout>
);

export default CareerCatalyst;
