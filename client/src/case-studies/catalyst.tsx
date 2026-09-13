import { CaseStudyLayout, CSSection } from "@/components/case-study/CaseStudyLayout";
import { DecisionBlock } from "@/components/system/DecisionBlock";
import { Annotation } from "@/components/system/Annotation";
import { Figure } from "@/components/system/Figure";
import { FlowDiagram } from "@/components/system/FlowDiagram";
import { CatalystDataModel } from "@/components/diagrams/CatalystDataModel";
import { HoverVideo } from "@/components/HoverVideo";
import { getFlagship } from "@/data/flagships";

const flagship = getFlagship("catalyst")!;

const tldr = [
  {
    label: "Problem",
    text: "An internship search fragments across job boards, browser tabs, spreadsheets, deadlines, notes, and memory — the information architecture problem, not the applying, is what exhausts people.",
  },
  {
    label: "Thesis",
    text: "The entire journey — discovery to offer — should live in one workspace that models the search as a pipeline.",
  },
  {
    label: "Decisions",
    text: "A pipeline model instead of a to-do list; a relational schema designed for the whole journey up front; auth and persistence from day one so it was real software, not a demo.",
  },
  {
    label: "Outcome",
    text: "Shipped and live — a full-stack Next.js / Prisma / PostgreSQL workspace with authentication, deployed on Vercel.",
  },
];

const Catalyst = () => (
  <CaseStudyLayout flagship={flagship} tldr={tldr} credit="Solo — product, design, and engineering">
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
        offer</em> — and that if the product modeled that pipeline explicitly, most of the
        scattered artifacts would have an obvious place to live. Catalyst is not a nicer
        spreadsheet; it&rsquo;s a workspace whose structure matches the actual shape of the
        journey.
      </p>
      <Figure n={1} caption="The journey Catalyst models — each stage carries its own data and its own anxieties." width="grid" className="!px-0 pt-4">
        <FlowDiagram
          accent="plum"
          steps={[
            { label: "Discovery", note: "Roles found, saved, compared" },
            { label: "Application", note: "Submitted, waiting, nudging" },
            { label: "Interview", note: "Rounds, prep notes, people" },
            { label: "Offer", note: "Deadlines and decisions", emphasis: true },
          ]}
        />
      </Figure>
    </CSSection>

    <CSSection n={3} title="Key decisions" accent="plum" width="grid">
      <div className="space-y-10">
        <DecisionBlock
          n={1}
          accent="plum"
          title="A pipeline, not a to-do list"
          chose="Modeling every saved role as an entity that moves through explicit stages, with status history — not a flat checklist with tags."
          alternatives="A simpler task-list or kanban-only approach where status is a mutable label."
          why="The pipeline is what users actually reason about ('what's in interview right now? what's stalled?'). Status history also preserves the story of each application, which a mutable label destroys."
          tradeoff="More schema and more UI states up front. A flat list would have shipped a week sooner."
        />
        <DecisionBlock
          n={2}
          accent="plum"
          title="Design the schema for the whole journey up front"
          chose="Six relational Prisma models covering users, applications, status events, opportunities, favorites, and interviews — designed before the first screen was built."
          alternatives="Growing the schema screen-by-screen as features demanded it."
          why="The value of the product is the relationships — an interview belongs to an application, which belongs to a user and an opportunity. Getting those spine relationships right early meant every later feature was a query, not a migration."
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
      </div>
    </CSSection>

    <CSSection n={4} title="The system" accent="plum" width="grid">
      <p className="mb-8 max-w-prose">
        The relational core. Everything hangs off the user; applications carry their own status
        history and interviews; favorites connect users back to opportunities:
      </p>
      <Figure
        n={2}
        caption="Six relational models under one workflow — the spine relationships (User → Application → StatusEvent) carry the product."
        width="grid"
        className="!px-0"
      >
        <div className="bg-surface-elevated/50 p-6 md:p-10">
          <CatalystDataModel />
        </div>
      </Figure>
      <Annotation kind="implementation" accent="plum" className="mt-6 max-w-none">
        Next.js App Router + tRPC give end-to-end type safety: the Prisma schema types flow through
        the API layer into the components. A status change is one typed mutation.
      </Annotation>
    </CSSection>

    <CSSection n={5} title="The shipped product" accent="plum" width="grid">
      <Figure n={3} caption="The live workspace — hover to play." width="grid" keyline className="!px-0">
        <HoverVideo
          video={{
            mp4: "/projects/catalyst/demo.mp4",
            webm: "/projects/catalyst/demo.webm",
            poster: "/projects/catalyst/home.jpg",
          }}
          alt="Screen recording of the Catalyst workspace: browsing saved opportunities, moving an application between pipeline stages, and reviewing interview notes."
          autoPlayInView
          className="aspect-video"
        />
      </Figure>
    </CSSection>

    <CSSection n={6} title="What I'd test next" accent="plum">
      <p>
        The riskiest assumption is behavioral, not technical: <em>will an applicant actually keep
        the workspace current during the most stressful weeks of the search?</em> Every tracker
        dies when updating it becomes homework. I&rsquo;d instrument the time-to-update after
        real-world events (application sent, interview scheduled) and test whether lightweight
        capture — a browser action, an email-forwarding address — is what turns a tracker into a
        habit.
      </p>
    </CSSection>
  </CaseStudyLayout>
);

export default Catalyst;
