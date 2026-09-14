import { CaseStudyLayout, CSSection, Figure, type TldrItem } from '@/components/case-study/CaseStudyLayout';
import { DecisionBlock } from '@/components/system/DecisionBlock';
import { Annotation } from '@/components/system/Annotation';
import { FlowDiagram } from '@/components/system/FlowDiagram';
import { HoverVideo } from '@/components/HoverVideo';
import { PhoneShowcase, type PhoneScreen } from '@/components/case-study/PhoneShowcase';
import { getProject } from '@/data/projects';

const project = getProject('mova-graph')!;

const tldr: TldrItem[] = [
  {
    label: 'Problem',
    text: "Career systems open with 'what do you want to become?' — the one question a student who doesn't know cannot answer.",
  },
  {
    label: 'Thesis',
    text: 'Start from where the student already is. Read their real evidence — courses, projects, work — and let possible directions emerge from it.',
  },
  {
    label: 'Decisions',
    text: 'Evidence in, paths out; the model proposes and the student decides; every AI suggestion grounded in a schema and traceable back to specific evidence.',
  },
  {
    label: 'Outcome',
    text: 'A live graph-based readiness engine built for the Stellic Pathfinder Challenge — gap analysis, ranked next moves, and what-if simulation.',
  },
];

/* Real mobile screens from the live product, in dark mode. */
const mobileScreens: PhoneScreen[] = [
  {
    src: '/projects/mova/mobile-dashboard.png',
    alt: 'Mova mobile dashboard showing 47% readiness for Full-Stack Engineer with a recommended next move',
    label: 'Dashboard',
    caption: 'Readiness at a glance — the score, the breakdown, and the single next move that matters most.',
  },
  {
    src: '/projects/mova/mobile-career-map.png',
    alt: 'Mova career map on mobile: the node graph inside a scrollable canvas with Reset layout and Focus mode controls above it',
    label: 'Career Map',
    caption: 'The graph is the one surface that could not simply reflow — on a phone it becomes a pannable canvas with a Focus mode for a larger view.',
  },
  {
    src: '/projects/mova/mobile-skill-gaps.png',
    alt: 'Mova skill gaps screen marking each competency as demonstrated, developing, or missing',
    label: 'Skill Gaps',
    caption: 'Every competency marked demonstrated, developing, or missing — with the evidence that could close each gap.',
  },
  {
    src: '/projects/mova/mobile-next-steps.png',
    alt: 'Mova next steps screen ranking the highest-impact moves toward Full-Stack Engineer',
    label: 'Next Steps',
    caption: 'Moves ranked by impact, each one explaining why it matters and what it is worth in points.',
  },
  {
    src: '/projects/mova/mobile-what-if.png',
    alt: 'Mova what-if screen where a sample internship is scored by the real scenario engine',
    label: 'What If?',
    caption: 'Scenario simulation — a prospective internship scored by the real engine, not a hard-coded result.',
  },
  {
    src: '/projects/mova/mobile-nav.png',
    alt: 'Mova mobile navigation drawer with dashboard, profile, path pages, and a light mode toggle',
    label: 'Navigation',
    caption: 'The drawer collapses the full sidebar for small screens, theme toggle and demo state included.',
  },
];

const MovaGraph = () => (
  <CaseStudyLayout project={project} tldr={tldr} credit="Solo build for the Stellic Pathfinder Challenge">
    <CSSection n={1} title="The problem" accent="dusty">
      <p>
        Almost every career tool begins with a search box or a goal picker: <em>what do you want to
        become?</em> For the students who most need help, that question is the blocker — they
        don&rsquo;t know, and being asked makes the not-knowing feel like failure. Meanwhile the
        student already has real signal: completed courses, an internship, side projects, skills.
        The tools just don&rsquo;t read it.
      </p>
    </CSSection>

    <CSSection n={2} title="Why AI, specifically" accent="dusty">
      <p>
        The interesting design question was never &ldquo;can I integrate an LLM?&rdquo; It was:
        what ambiguity is the model actually resolving? Here, it&rsquo;s the mapping from messy,
        idiosyncratic evidence (&ldquo;built a RAG explorer,&rdquo; &ldquo;mobile intern at a
        startup&rdquo;) to structured career requirements. That mapping is fuzzy, high-volume, and
        different for every student — exactly the shape of problem a model handles better than a
        rules table.
      </p>
      <Figure
        label="The pipeline"
        accent="dusty"
        caption="The model's output is structured and grounded before the student ever sees it."
      >
        <div className="p-5 md:p-8">
          <FlowDiagram
            accent="dusty"
            steps={[
              { label: 'Evidence', note: 'Courses, work, projects, skills' },
              { label: 'Context', note: 'Assembled per student' },
              { label: 'Model proposes', note: 'Claude via Vercel AI SDK' },
              { label: 'Grounding', note: 'Schema-validated, evidence-linked', emphasis: true },
              { label: 'Graph', note: 'React Flow — explorable' },
              { label: 'Student decides', note: 'Save, simulate, ignore' },
            ]}
          />
        </div>
      </Figure>
    </CSSection>

    <CSSection n={3} title="Key decisions" accent="dusty">
      <div className="max-w-3xl space-y-10">
        <DecisionBlock
          n={1}
          accent="dusty"
          title="The model proposes; the student decides"
          chose="AI generates candidate directions, gap analyses, and ranked next moves — but the student explicitly saves, simulates, or dismisses every suggestion. Nothing auto-commits."
          alternatives="A recommender that picks 'your best-fit career' and optimizes toward it."
          why="A student who doesn't know what they want should not be handed a verdict by a language model. Keeping the decision with the user is both honest about model uncertainty and better product psychology — exploration, not assignment."
          tradeoff="More interaction cost. A verdict is simpler to ship and demos flashier; a proposal system requires the graph UI to make evaluation genuinely easy."
        />
        <DecisionBlock
          n={2}
          accent="dusty"
          title="Ground every suggestion in evidence"
          chose="Model output is schema-validated and every readiness claim links back to the specific course, project, or role that supports it."
          alternatives="Free-text model responses rendered as-is."
          why="Ungrounded AI career advice is horoscope material. If the system says 'you're 60% ready for data engineering,' the student must be able to see which evidence produced that number — that traceability is what makes the output actionable."
          tradeoff="A stricter output contract means more prompt and parsing engineering, and occasionally rejecting a plausible-but-unstructured model response."
        />
        <DecisionBlock
          n={3}
          accent="dusty"
          title="A graph, not a list"
          chose="An interactive React Flow graph as the primary surface — evidence nodes connecting through skills to career nodes, with gaps visible as missing edges."
          alternatives="A ranked list of career matches with expandable detail."
          why="The product's core idea is relational: your existing evidence connects to futures. A list hides exactly that structure; the graph makes 'what leads where' legible at a glance, and simulation ('what if I take this course?') becomes adding a node and watching edges form."
          tradeoff="Graphs are harder to make responsive and accessible than lists — on a phone the same graph has to work as a pan-and-zoom canvas with its own focus mode, which is real extra surface to build and test."
        />
      </div>
    </CSSection>

    <CSSection n={4} title="Engineering the system" accent="dusty">
      <p>
        Under the graph: Next.js with the Vercel AI SDK calling Anthropic, Supabase PostgreSQL via
        Drizzle for student evidence and saved paths, and Upstash Redis caching model responses —
        readiness computations are expensive and mostly stable per evidence-set, so caching them
        made the what-if simulation feel instant instead of API-bound.
      </p>
      <Annotation kind="implementation" accent="dusty" className="max-w-none">
        The readiness engine is deterministic given the model&rsquo;s structured output — the LLM
        maps evidence to requirements once; gap analysis and ranking are plain computation. That
        split keeps the flaky part small and the testable part large.
      </Annotation>
    </CSSection>

    <CSSection n={5} title="The shipped product" accent="dusty">
      <Figure label="Live demo" accent="dusty" caption="The live career graph — hover to play.">
        <HoverVideo
          video={{
            mp4: '/projects/mova/demo.mp4',
            webm: '/projects/mova/demo.webm',
            poster: '/projects/mova/poster.jpg',
          }}
          alt="Screen recording of Mova: student evidence appearing as nodes, career paths branching from them, a gap analysis opening, and a simulated course changing the readiness of a target role."
          autoPlayInView
          className="aspect-video"
        />
      </Figure>
    </CSSection>

    <CSSection n={6} title="Every screen, both themes" accent="dusty">
      <p>
        Mova is fully responsive and themed light and dark throughout — not a desktop tool with a
        mobile afterthought. Every page reflows: the sidebar collapses into a drawer, the readiness
        cards stack, and the what-if simulator works one-handed. The graph is the one surface that
        couldn&rsquo;t simply reflow, so on a phone it becomes a pannable, pinch-to-zoom canvas with
        a dedicated focus mode for a larger view.
      </p>
      <Figure
        label="Mobile walkthrough — from the live product"
        accent="dusty"
        caption="The core loop on a phone: readiness, gaps, ranked moves, simulation. The cycle pauses on hover; pick a screen to hold it."
      >
        <PhoneShowcase
          screens={mobileScreens}
          accent="dusty"
          aspectRatio="517 / 1024"
          background="#171015"
        />
      </Figure>
      <Figure
        label="One graph, two themes"
        accent="dusty"
        caption="The Career Map in light and dark. Both themes are first-class — node, edge, and surface colors come from the same token system that runs the rest of the product."
      >
        <div className="grid gap-px bg-foreground/10 sm:grid-cols-2">
          <img
            src="/projects/mova/desktop-career-map-light.png"
            alt="Mova career map on desktop in light mode: course and experience nodes connecting through competencies to Full-Stack Engineer"
            loading="lazy"
            className="w-full bg-surface-elevated"
          />
          <img
            src="/projects/mova/desktop-career-map-dark.png"
            alt="The same Mova career map on desktop in dark mode"
            loading="lazy"
            className="w-full bg-surface-elevated"
          />
        </div>
      </Figure>
    </CSSection>

    <CSSection n={7} title="What I'd test next" accent="dusty">
      <p>
        The assumption to validate: <em>does seeing paths grounded in their own evidence actually
        reduce a student&rsquo;s decision anxiety, or does a graph of possibilities overwhelm them
        further?</em> The test is qualitative — watch five students explore their own graph and
        listen for whether they say &ldquo;I didn&rsquo;t know I was this far along&rdquo; or
        &ldquo;I don&rsquo;t know where to look.&rdquo; The first sentence validates the thesis; the
        second says the graph needs progressive disclosure more than more data.
      </p>
    </CSSection>
  </CaseStudyLayout>
);

export default MovaGraph;
