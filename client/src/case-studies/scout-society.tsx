import {
  CaseStudyLayout,
  CSSection,
  Figure,
  type TldrItem,
} from "@/components/case-study/CaseStudyLayout";
import { DecisionBlock } from "@/components/system/DecisionBlock";
import { Annotation } from "@/components/system/Annotation";
import { FlowDiagram } from "@/components/system/FlowDiagram";
import {
  PhoneShowcase,
  type PhoneScreen,
} from "@/components/case-study/PhoneShowcase";
import { getProject } from "@/data/projects";

const project = getProject("scout-society")!;

const tldr: TldrItem[] = [
  {
    label: "Problem",
    text: "Students are asked to choose a major before they have any feel for what the work on the other side is actually like.",
  },
  {
    label: "Thesis",
    text: "Don't choose the major first. Start with the work itself, then the people who do it, then reflection, and only then the majors.",
  },
  {
    label: "Decisions",
    text: "Gut reactions instead of a career quiz; people before majors; saving made lightweight enough to feel like curiosity, not commitment.",
  },
  {
    label: "Outcome",
    text: "A working React Native / Expo prototype with the full flow from intro to shortlist, designed and engineered solo in a timed 150-minute window.",
  },
];

/* Real screens pulled from the repo (docs/screenshots), the full seven-screen walkthrough. */
const screens: PhoneScreen[] = [
  {
    src: "/projects/scout-society/01-intro.jpg",
    label: "Intro",
    alt: "Scout Society intro screen framing the idea of trying on the work before choosing a major",
    caption:
      "The intro frames the idea: try on the work before choosing a major.",
  },
  {
    src: "/projects/scout-society/02-calibration.png",
    label: "Calibrate",
    alt: 'Scout Society calibration screen presenting a concrete work situation with an "I\'m into this" or "not for me" reaction',
    caption: "Calibration asks for gut reactions to six real work situations.",
  },
  {
    src: "/projects/scout-society/03-discover.jpg",
    label: "Discover",
    alt: "Scout Society discover screen showing three people whose working lives match the reactions given",
    caption: "Discover surfaces three working lives worth trying on.",
  },
  {
    src: "/projects/scout-society/04-profile.jpg",
    label: "Profile",
    alt: "Scout Society profile screen introducing Maya Chen, a product engineer",
    caption: "The profile introduces Maya Chen, a product engineer.",
  },
  {
    src: "/projects/scout-society/05-experience-tuesday.png",
    label: "Experience",
    alt: "Scout Society experience screen dropping the reader into Maya's Tuesday and the calls she has to make",
    caption:
      "The experience drops you into Maya's Tuesday and the calls she faces.",
  },
  {
    src: "/projects/scout-society/06-pathways.png",
    label: "Pathways",
    alt: "Scout Society pathways screen listing several majors that lead toward similar work",
    caption: "Pathways shows several majors that lead toward similar work.",
  },
  {
    src: "/projects/scout-society/07-shortlist.png",
    label: "Shortlist",
    alt: "Scout Society shortlist screen holding the saved people and paths worth exploring further",
    caption: "The shortlist keeps the saves worth exploring further.",
  },
];

/* Brand palette from the repo's design direction. */
const palette = [
  { hex: "#EEEFE9", name: "Warm off-white" },
  { hex: "#D1BD91", name: "Muted sand / gold" },
  { hex: "#262626", name: "Near-black" },
];

const ScoutSociety = () => (
  <CaseStudyLayout
    project={project}
    tldr={tldr}
    credit="Solo product, design, and engineering (150-minute coding assessment)"
  >
    <CSSection n={1} title="The problem" accent="ochre">
      <p>
        The target user was specific: an 18-year-old, two months before college,
        unsure what to study. Every traditional tool hands that student the same
        inputs. Course catalogs, aptitude tests, personality quizzes, ranked
        career lists. All of them assume the student can evaluate options they
        have never experienced.
      </p>
      <p>
        The real question isn&rsquo;t &ldquo;which major fits you?&rdquo;
        It&rsquo;s: how can anyone choose what to study when they don&rsquo;t
        yet know what the work feels like?
      </p>
    </CSSection>

    <CSSection n={2} title="The thesis" accent="ochre">
      <p>
        I believed the flow should be inverted. Traditional tools run{" "}
        <em>major → career</em>. Scout runs{" "}
        <em>work experience → people → reflection → possible majors</em>.
        Instead of asking students to reason abstractly about fields, Scout lets
        them try on a working day, like Maya&rsquo;s Tuesday as a product
        engineer, and react to it.
      </p>
    </CSSection>

    <CSSection n={3} title="Constraints" accent="ochre">
      <p>
        This was a product-engineering assessment with a hard timebox. 150
        minutes, from blank file to working prototype. That constraint shaped
        everything: no user research, no visual explorations, no second
        iterations. Every decision below was made once, quickly, and had to be
        defensible.
      </p>
      <Annotation kind="constraint" accent="ochre" className="max-w-none">
        150-minute timebox, solo, React Native / Expo. No research inside the
        window, so the assumptions are listed honestly at the end.
      </Annotation>
    </CSSection>

    <CSSection n={4} title="The flow" accent="ochre">
      <Figure
        label="Product flow"
        accent="ochre"
        caption="Calibration feeds discovery; the experience feeds reflection; the shortlist is the output, not the starting point."
      >
        <div className="p-5 md:p-8">
          <FlowDiagram
            accent="ochre"
            layout="grid"
            steps={[
              { label: "Intro", note: "The thesis, stated" },
              { label: "Calibrate", note: "Six situations, gut reactions" },
              {
                label: "Discover",
                note: "Three people, matched from reactions",
              },
              { label: "Experience", note: "Maya's Tuesday", emphasis: true },
              { label: "React", note: "'I'm into this' or 'not for me'" },
              { label: "Pathways", note: "Majors that lead here" },
              { label: "Shortlist", note: "Lightweight saves" },
            ]}
          />
        </div>
      </Figure>
    </CSSection>

    <CSSection n={5} title="Key decisions" accent="ochre">
      <div className="max-w-3xl space-y-10">
        <DecisionBlock
          n={1}
          accent="ochre"
          title="Reactions instead of a career quiz"
          chose="A calibration step built from gut reactions to six concrete work situations, like 'you're handed a messy problem nobody knows how to solve. That sounds exciting.' I'm into this, or not for me."
          alternatives="A conventional multi-question assessment mapping answers to career categories."
          why="An 18-year-old can't accurately self-report abstract preferences, but their instinctive reaction to a concrete moment is honest signal. It's also faster, which the timebox demanded."
          tradeoff="Lower psychometric rigor. The reactions are a heuristic, not a validated instrument. That's fine for a prototype whose job is to test the experience, not the science."
        />
        <DecisionBlock
          n={2}
          accent="ochre"
          title="People before majors"
          chose="Discovery surfaces three people, starting with Maya Chen, a product engineer, before any field or major is named."
          alternatives="Browsing fields or job titles first, with people as supporting content."
          why="You can't empathize with 'Computer Science.' You can empathize with Maya, whose Tuesday afternoon starts with a drop in signup completion and a call to make: talk to users, dig into the data, or open the code. The person is the doorway to the field."
          tradeoff="It needs believable person content to work at scale. A real content pipeline is the biggest open cost of this design."
        />
        <DecisionBlock
          n={3}
          accent="ochre"
          title="Saving that feels like curiosity, not commitment"
          chose="A one-tap 'save to shortlist' with an equally prominent 'not for me,' both framed as exploration."
          alternatives="A favorites system with folders, notes, and comparison views."
          why="At this stage the student is trying on futures, not filing paperwork. Any friction in saving punishes exactly the exploratory behavior the product exists to encourage."
          tradeoff="The shortlist carries less structure than a power user might eventually want. That's a feature to earn later, not to front-load."
        />
      </div>
    </CSSection>

    <CSSection n={6} title="Design direction" accent="ochre">
      <p>
        Scout deliberately avoids the education-dashboard aesthetic. The visual
        language is editorial, human, and premium: strong typography, generous
        spacing, editorial photography, restrained motion, and minimal UI
        chrome. It feels closer to a magazine than a quiz app, because the
        product is asking the student to imagine a life, not fill out a form.
      </p>
      <div className="flex max-w-prose flex-wrap gap-3 pt-1">
        {palette.map((swatch) => (
          <div key={swatch.hex} className="flex items-center gap-2.5">
            <span
              className="h-8 w-8 rounded-full border border-foreground/15"
              style={{ backgroundColor: swatch.hex }}
            />
            <span className="space-y-0 leading-tight">
              <span className="block font-mono text-xs">{swatch.hex}</span>
              <span className="block text-xs text-muted-foreground">
                {swatch.name}
              </span>
            </span>
          </div>
        ))}
      </div>
      <Figure
        label="Brand board, designed in Canva"
        accent="ochre"
        caption="Palette, logo, and photography direction, set before the first screen was built."
      >
        <img
          src="/projects/scout-society/brand-board.jpg"
          alt="Scout Society brand board: warm off-white, sand gold, and near-black palette with logo and editorial photography direction"
          loading="lazy"
          className="w-full"
        />
      </Figure>
    </CSSection>

    <CSSection n={7} title="The screens" accent="ochre">
      <p>
        The full walkthrough, straight from the prototype, from intro to
        shortlist:
      </p>
      {/* TODO(Allyson): swap in the screen recording when it's ready. */}
      <Figure
        label="Seven screens — from the prototype"
        accent="ochre"
        caption="The complete flow in order. The cycle pauses on hover; pick a screen to hold it."
      >
        <PhoneShowcase
          screens={screens}
          accent="ochre"
          aspectRatio="471 / 1024"
          background="#eeefe9"
        />
      </Figure>
    </CSSection>

    <CSSection n={8} title="Engineering the prototype" accent="ochre">
      <p>
        The prototype is a React Native / Expo app. TypeScript, Expo Router for
        the screen-per-stage flow, Reanimated for motion, and Expo Image for the
        photography, with local static data and local React state carrying the
        student&rsquo;s reactions and shortlist across screens. It intentionally
        avoids production infrastructure: no authentication, no database, no
        backend. Within the timebox, the engineering priorities were ordered
        deliberately: the complete flow first (every screen reachable, state
        surviving navigation), microinteraction feel second (reaction taps
        respond instantly, saves animate lightly), and visual polish third.
      </p>
      <p>
        The most engineering-relevant choice was keeping reaction data as a
        plain serializable structure from the start. It made the matching
        between calibration and discovery trivial to fake credibly in the
        prototype, and it&rsquo;s the exact seam where a real matching service
        would slot in later.
      </p>
    </CSSection>

    <CSSection n={9} title="What I'd test next" accent="ochre">
      <p>
        The core untested assumption:{" "}
        <em>
          does experiencing Maya&rsquo;s Tuesday actually change what a student
          believes about their options?
        </em>{" "}
        I would put the prototype in front of ten pre-college students, have
        them complete one full loop, and ask them afterward to describe a
        product engineer&rsquo;s work in their own words. If their description
        carries the texture of the Tuesday, like the drop in signup completion
        and the call between talking to users, digging into the data, or opening
        the code, the thesis holds. If it collapses back into catalog language,
        it doesn&rsquo;t.
      </p>
      <Annotation kind="not-done" accent="ochre" className="max-w-none">
        No user research existed inside the timebox. Everything above the
        engineering is a hypothesis, and it&rsquo;s labeled as one.
      </Annotation>
    </CSSection>
  </CaseStudyLayout>
);

export default ScoutSociety;
