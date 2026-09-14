import { CaseStudyLayout, CSSection, Figure, type TldrItem } from '@/components/case-study/CaseStudyLayout';
import { DecisionBlock } from '@/components/system/DecisionBlock';
import { Annotation } from '@/components/system/Annotation';
import { FlowDiagram } from '@/components/system/FlowDiagram';
import { HoverVideo } from '@/components/HoverVideo';
import { getProject } from '@/data/projects';

const project = getProject('hackhq')!;

const tldr: TldrItem[] = [
  {
    label: 'Problem',
    text: 'Hackathons are announced across university sites, Devpost, Discord servers, and word of mouth — people discover the best opportunities too late, or never.',
  },
  {
    label: 'Thesis',
    text: "Good opportunities shouldn't depend on already knowing where to look. Discovery is an information-distribution problem, and it's fixable with structure.",
  },
  {
    label: 'Decisions',
    text: 'One strict event schema across every source; deadlines modeled separately from event dates; open source so the community that needs the directory can also maintain it.',
  },
  {
    label: 'Outcome',
    text: 'A live, open-source directory — 62 hackathons across 58 organizers, in-person, virtual, and hybrid — with 70+ GitHub stars and growing.',
  },
];

const HackHQ = () => (
  <CaseStudyLayout
    project={project}
    tldr={tldr}
    credit="Co-built with the HackHQ team — I'm a founding open-source contributor"
  >
    <CSSection n={1} title="The problem" accent="oxblood">
      <p>
        Ask a first-year student how to find hackathons and the answer is a scavenger hunt:
        somebody&rsquo;s Discord, a Devpost page sorted by nothing useful, a flyer, a friend who
        &ldquo;knows about these things.&rdquo; The events exist. The information about them is
        fragmented, inconsistently structured, and constantly expiring. The students with the best
        networks find the best events — which is exactly backwards.
      </p>
    </CSSection>

    <CSSection n={2} title="The framing" accent="oxblood">
      <p>
        The trap was to build &ldquo;a list of hackathons.&rdquo; Lists rot. The real product
        question was: how does a fragmented ecosystem become <em>discoverable, current, structured,
        and trustworthy</em> — and stay that way without a full-time staff? That framing pushed
        every major decision toward schema and community rather than content.
      </p>
    </CSSection>

    <CSSection n={3} title="Key decisions" accent="oxblood">
      <div className="max-w-3xl space-y-10">
        <DecisionBlock
          n={1}
          accent="oxblood"
          title="One strict schema for every event"
          chose="A single structured event model — name, organizer, location, format (in-person / virtual / hybrid), event dates, application deadline — that every entry must satisfy, backed by Drizzle and Supabase."
          alternatives="Freeform listings that mirror however each organizer happened to announce their event."
          why="Comparison is the discovery superpower. You can only filter by format, sort by deadline, or map by location if every event answers the same questions. Structure is what turns a pile of announcements into a directory."
          tradeoff="Contribution friction — adding an event means filling the schema properly, not pasting a link. We accepted slower growth for higher trust."
        />
        <DecisionBlock
          n={2}
          accent="oxblood"
          title="Deadlines are not event dates"
          chose="Modeling the application deadline and the event dates as separate first-class fields, with the deadline given visual priority in the UI."
          alternatives="A single date range per event, the way most listings present it."
          why="The date that actually costs students opportunities is the application deadline — an event in October with apps closing next Friday is urgent today. Conflating the two is the most common failure of every source we aggregated."
          tradeoff="More data to collect and keep current, since deadlines shift more often than event dates."
        />
        <DecisionBlock
          n={3}
          accent="oxblood"
          title="Open source as the freshness strategy"
          chose="A public repository where the community contributes and corrects events through pull requests, with schema validation gating every merge."
          alternatives="A closed directory maintained by the core team, or a scraper pipeline."
          why="A directory of expiring information needs many eyes. The people who most want the data current — hackers looking for their next event — are the same people who can keep it current, if the contribution path is legible. Scrapers break silently; contributors complain loudly, which is better."
          tradeoff="Community data needs review, and pace depends on contributor energy. The schema validation is what keeps 'community-driven' from becoming 'noisy.'"
        />
      </div>
    </CSSection>

    <CSSection n={4} title="Keeping a directory alive" accent="oxblood">
      <Figure
        label="The freshness loop"
        accent="oxblood"
        caption="Expiry is a designed state, not a bug. Past-deadline events age out of default views instead of rotting in place."
      >
        <div className="p-5 md:p-8">
          <FlowDiagram
            accent="oxblood"
            steps={[
              { label: 'Contribution', note: 'Community PR with event data' },
              { label: 'Validation', note: 'Schema checks gate the merge', emphasis: true },
              { label: 'Directory', note: 'Live — filterable, mappable' },
              { label: 'Expiry', note: 'Deadlines pass; events age out' },
            ]}
          />
        </div>
      </Figure>
    </CSSection>

    <CSSection n={5} title="The shipped product" accent="oxblood">
      <div className="max-w-none space-y-10">
        <Figure
          label="Map view"
          accent="oxblood"
          caption="Geographic discovery — MapboxGL view of in-person events. 'Near me' is a different question than 'soonest deadline,' and the product answers both."
        >
          <img
            src="/projects/hackhq/map.jpg"
            alt="The HackHQ map view: hackathon locations plotted across North America with event detail cards."
            loading="lazy"
            width={1600}
            height={900}
            className="w-full object-cover"
          />
        </Figure>
        <Figure label="Live demo" accent="oxblood" caption="The live directory — hover to play.">
          <HoverVideo
            video={{
              mp4: '/projects/hackhq/demo.mp4',
              webm: '/projects/hackhq/demo.webm',
              poster: '/projects/hackhq/app.jpg',
            }}
            alt="Screen recording of HackHQ: filtering the directory by format, sorting by application deadline, and opening an event's detail view."
            autoPlayInView
            className="aspect-video"
          />
        </Figure>
      </div>
    </CSSection>

    <CSSection n={6} title="What I'd test next" accent="oxblood">
      <p>
        The open question is retention of trust: <em>after a student finds one stale event, do they
        come back?</em> I&rsquo;d measure the staleness rate directly (events whose details changed
        upstream before we caught it) and test whether surfacing &ldquo;last verified&rdquo;
        timestamps on each event increases or decreases user confidence. My hypothesis is that
        honest freshness metadata beats implied perfection.
      </p>
      <Annotation kind="note" accent="oxblood" className="max-w-none">
        Team credit: HackHQ is co-built and co-maintained with my hackathon team. The decisions
        above are the ones I drove or co-drove; the directory is shared work.
      </Annotation>
    </CSSection>
  </CaseStudyLayout>
);

export default HackHQ;
