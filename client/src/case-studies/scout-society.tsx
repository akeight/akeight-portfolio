import { CaseStudyLayout, CSSection } from "@/components/case-study/CaseStudyLayout";
import { DecisionBlock } from "@/components/system/DecisionBlock";
import { Annotation } from "@/components/system/Annotation";
import { Figure } from "@/components/system/Figure";
import { FlowDiagram } from "@/components/system/FlowDiagram";
import { getFlagship } from "@/data/flagships";
import { Phone, IntroScreen, CalibrationScreen, DiscoverScreen, TuesdayScreen } from "@/sections/home/scout/ScoutScreens";

const flagship = getFlagship("scout-society")!;

const tldr = [
  {
    label: "Problem",
    text: "Students are asked to choose a major before they have any feel for what the work on the other side is actually like.",
  },
  {
    label: "Thesis",
    text: "Don't choose the major first. Experience the work first — people and their working days, then reflection, then majors.",
  },
  {
    label: "Decisions",
    text: "Gut reactions instead of a career quiz; people before majors; saving made lightweight enough to feel like curiosity, not commitment.",
  },
  {
    label: "Outcome",
    text: "A working React Native / Expo prototype with the full flow — intro through shortlist — designed and engineered in roughly 150 minutes.",
  },
];

const ScoutSociety = () => (
  <CaseStudyLayout flagship={flagship} tldr={tldr} credit="Solo — product, design, and engineering">
    <CSSection n={1} title="The problem" accent="ochre">
      <p>
        The target user was specific: an 18-year-old, two months before college, unsure what to
        study. Every traditional tool hands that student the same inputs — course catalogs,
        aptitude tests, personality quizzes, ranked career lists. All of them assume the student
        can evaluate options they have never experienced.
      </p>
      <p>
        The real question isn&rsquo;t &ldquo;which major fits you?&rdquo; It&rsquo;s: how can
        anyone choose what to study when they don&rsquo;t yet know what the work feels like?
      </p>
    </CSSection>

    <CSSection n={2} title="The thesis" accent="ochre">
      <p>
        I believed the flow should be inverted. Traditional tools run{" "}
        <em>major → career</em>. Scout runs <em>work experience → people → reflection → possible
        majors</em>. Instead of asking students to reason abstractly about fields, Scout lets them
        try on a working day — Maya&rsquo;s Tuesday as a UX researcher — and react to it.
      </p>
    </CSSection>

    <CSSection n={3} title="Constraints" accent="ochre">
      <p>
        This was a product-engineering assessment with a hard timebox: roughly 150 minutes to go
        from blank file to working prototype. That constraint shaped everything — no user
        research, no visual explorations, no second iterations. Every decision below was made
        once, quickly, and had to be defensible.
      </p>
      <Annotation kind="constraint" accent="ochre" className="max-w-none">
        ~150 minutes, solo, React Native / Expo. No research in this timebox — the assumptions are
        listed honestly at the end.
      </Annotation>
    </CSSection>

    <CSSection n={4} title="The flow" accent="ochre" width="grid">
      <Figure
        n={1}
        caption="The product flow — calibration feeds discovery; the experience feeds reflection; the shortlist is the output, not the starting point."
        width="grid"
        className="!px-0"
      >
        <FlowDiagram
          accent="ochre"
          steps={[
            { label: "Intro", note: "The thesis, stated" },
            { label: "Calibration", note: "Gut reactions, not a quiz" },
            { label: "Discover", note: "People, matched from reactions" },
            { label: "Experience", note: "Maya's Tuesday", emphasis: true },
            { label: "Pathways", note: "Majors that lead here" },
            { label: "Shortlist", note: "Lightweight saves" },
          ]}
        />
      </Figure>
    </CSSection>

    <CSSection n={5} title="Key decisions" accent="ochre" width="grid">
      <div className="space-y-10">
        <DecisionBlock
          n={1}
          accent="ochre"
          title="Reactions instead of a career quiz"
          chose="A calibration step built from ten-second gut reactions to concrete work moments — 'your team found a serious bug two hours before launch. How does that feel?'"
          alternatives="A conventional multi-question assessment mapping answers to career categories."
          why="An 18-year-old can't accurately self-report abstract preferences, but their instinctive reaction to a concrete moment is honest signal. It's also faster, which the timebox demanded."
          tradeoff="Lower psychometric rigor. The reactions are a heuristic, not a validated instrument — acceptable for a prototype whose job is to test the experience, not the science."
        />
        <DecisionBlock
          n={2}
          accent="ochre"
          title="People before majors"
          chose="Discovery surfaces a person — Maya Chen, UX researcher — before any field or major is named."
          alternatives="Browsing fields or job titles first, with people as supporting content."
          why="You can't empathize with 'Human-Computer Interaction.' You can empathize with Maya, who spends Tuesdays watching users struggle with prototypes. The person is the doorway to the field."
          tradeoff="It requires believable person-content to work at scale — a real content pipeline is the biggest open cost of this design."
        />
        <DecisionBlock
          n={3}
          accent="ochre"
          title="Saving that feels like curiosity, not commitment"
          chose="A one-tap 'save to shortlist' with an equally prominent 'not for me' — both framed as exploration."
          alternatives="A favorites system with folders, notes, and comparison views."
          why="At this stage the student is trying on futures, not filing paperwork. Any friction in saving punishes exactly the exploratory behavior the product exists to encourage."
          tradeoff="The shortlist carries less structure than a power user might eventually want. That's a feature to earn later, not to front-load."
        />
      </div>
    </CSSection>

    <CSSection n={6} title="The screens" accent="ochre" width="grid">
      <p className="mb-8 max-w-prose">
        The four core screens, recreated below as coded compositions in this site&rsquo;s own
        language (the originals live in the Expo prototype):
      </p>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { node: <IntroScreen />, caption: "Intro — the thesis, stated to the student" },
          { node: <CalibrationScreen />, caption: "Calibration — reactions, no wrong answers" },
          { node: <DiscoverScreen />, caption: "Discover — Maya, matched from reactions" },
          { node: <TuesdayScreen />, caption: "Maya's Tuesday — the experience itself" },
        ].map((s) => (
          <figure key={s.caption} className="space-y-2.5">
            <Phone className="mx-auto">{s.node}</Phone>
            <figcaption className="caption text-center">{s.caption}</figcaption>
          </figure>
        ))}
      </div>
    </CSSection>

    <CSSection n={7} title="Engineering the prototype" accent="ochre">
      <p>
        The prototype is a React Native / Expo app with a screen-per-stage navigation flow and a
        single lightweight state store carrying the student&rsquo;s reactions and shortlist across
        screens. Within the timebox, the engineering priorities were ordered deliberately: the
        complete flow first (every screen reachable, state surviving navigation), microinteraction
        feel second (reaction taps respond instantly, saves animate lightly), and visual polish
        third.
      </p>
      <p>
        The most engineering-relevant choice was keeping reaction data as a plain serializable
        structure from the start — it made the calibration → discovery matching trivial to fake
        credibly in the prototype, and it&rsquo;s the exact seam where a real matching service
        would slot in later.
      </p>
    </CSSection>

    <CSSection n={8} title="What I'd test next" accent="ochre">
      <p>
        The core untested assumption: <em>does experiencing Maya&rsquo;s Tuesday actually change
        what a student believes about their options?</em> I would put the prototype in front of
        ten pre-college students, have them complete one full loop, and ask them afterward to
        describe UX research in their own words. If their description contains the texture of the
        Tuesday — the interviews, the synthesis, the debate — the thesis holds. If it collapses
        back into catalog language, it doesn&rsquo;t.
      </p>
      <Annotation kind="not-done" accent="ochre" className="max-w-none">
        No user research existed inside the 150-minute window. Everything above the engineering is
        a hypothesis, and it&rsquo;s labeled as one.
      </Annotation>
    </CSSection>
  </CaseStudyLayout>
);

export default ScoutSociety;
