import { CaseStudyLayout, CSSection } from "@/components/case-study/CaseStudyLayout";
import { DecisionBlock } from "@/components/system/DecisionBlock";
import { Annotation } from "@/components/system/Annotation";
import { Figure } from "@/components/system/Figure";
import { FlowDiagram } from "@/components/system/FlowDiagram";
import { StateMatrix } from "@/components/system/StateMatrix";
import { ResponsiveStrip } from "@/components/system/ResponsiveStrip";
import { IrisCard } from "@/components/iris/IrisCard";
import { getFlagship } from "@/data/flagships";

const flagship = getFlagship("todd-iris")!;

const tldr = [
  {
    label: "Problem",
    text: "The creative direction was established and strong — but a static design shows one viewport, one dataset, one ideal condition. Production has to answer everything else.",
  },
  {
    label: "My role",
    text: "Frontend engineering: translating the visual language into a resilient production system — states, real data, responsive behavior, component architecture.",
  },
  {
    label: "Decisions",
    text: "A single state-resolving component instead of per-condition variants; designing the non-ideal states in code where Figma had stopped; recomposing (not shrinking) for tablet and mobile.",
  },
  {
    label: "Credit",
    text: "Creative direction by Vincent and Todd's brand collaborators. The system that carries it into production is my work.",
  },
];

const resolverExcerpt = `// Every card renders through one resolution path —
// the design's ideal state is just one branch of it.
function resolveReadingState(reading: ZoneReading): CardState {
  if (reading.isLoading)        return "loading";
  if (!reading.sample)          return "empty";      // zone never sampled
  if (reading.value == null)    return "pending";    // sample in, lab out
  if (outOfRange(reading))      return "critical";
  return "ideal";
}`;

const ToddIris = () => (
  <CaseStudyLayout
    flagship={flagship}
    tldr={tldr}
    credit="Creative direction: Vincent + Todd's brand collaborators · Engineering: me"
  >
    <CSSection n={1} title="The context — and whose work is whose" accent="sage">
      <p>
        Iris is a Todd product for visualizing agricultural readings — minerals, zones, ranges —
        with a distinctive visual identity established by Vincent and outside brand collaborators
        before I touched a line of code. I did not create that identity, and this case study
        doesn&rsquo;t pretend otherwise.
      </p>
      <p>
        My work is the layer between creative direction and functioning software: the front-end
        architecture, the component system, the dynamic states, the responsive behavior — the
        thousand questions a static frame doesn&rsquo;t answer, answered in production code.
      </p>
      <Annotation kind="note" accent="sage" className="max-w-none">
        The UI shown on this page is an abstracted recreation — the production interface and its
        data belong to Todd. The state system and engineering described are the real work.
      </Annotation>
    </CSSection>

    <CSSection n={2} title="Where Figma stops answering" accent="sage">
      <p>
        The design showed a beautiful ideal: one screen, one mineral, readings comfortably in
        range. Production immediately asked harder questions. What renders while the API is slow?
        What about a zone that&rsquo;s never been sampled? A reading critically below range? A
        compound whose real chemical name is four times longer than the mockup&rsquo;s? The same
        card on a tablet in a truck?
      </p>
      <p>
        None of those are edge cases — over a season of real data, they&rsquo;re the majority of
        renders. The actual design problem was a system that keeps the visual language intact
        across every one of them.
      </p>
    </CSSection>

    <CSSection n={3} title="The same component, every condition" accent="sage" width="grid">
      <p className="mb-8 max-w-prose">
        The specimen sheet — one card component under the conditions production actually produces:
      </p>
      <Figure n={1} caption="The state matrix. The ideal state is the design; every other cell is the engineering." width="grid" className="!px-0">
        <StateMatrix
          columns={3}
          cells={[
            { caption: "Ideal — the state the design showed", children: <IrisCard state="ideal" /> },
            { caption: "Loading — data arrives late", children: <IrisCard state="loading" /> },
            { caption: "Empty — zone never sampled", children: <IrisCard state="empty" /> },
            { caption: "Critical — below range, action needed", children: <IrisCard state="critical" /> },
            { caption: "Long labels — real chemistry names", children: <IrisCard state="long-labels" /> },
            { caption: "Compact — dense dashboard contexts", children: <IrisCard state="compact" /> },
          ]}
        />
      </Figure>
    </CSSection>

    <CSSection n={4} title="Key decisions" accent="sage" width="grid">
      <div className="space-y-10">
        <DecisionBlock
          n={1}
          accent="sage"
          title="One component that resolves its state"
          chose="A single reading-card component with an explicit state-resolution function — every card renders through the same path, and the ideal design is just one branch."
          alternatives="Separate components (or forked JSX) per condition, built as each case surfaced."
          why="With one resolver, a new condition is a new branch in one function and one visual variant — not a hunt through five components. It also made the states testable as pure logic, independent of rendering."
          tradeoff="The component carries more internal complexity than any single mockup suggests. That complexity was going to exist somewhere; centralizing it was the choice."
        />
        <DecisionBlock
          n={2}
          accent="sage"
          title="Design the missing states in code, in the design's language"
          chose="Where the mockups were silent — loading, empty, critical — I designed the states directly in implementation, deriving them from the established visual system (its spacing, its restraint, its color logic) and reviewing them against the creative direction."
          alternatives="Blocking on new mockups for every uncovered state."
          why="This is the actual job of a design engineer inside someone else's direction: extend the language faithfully rather than either freezing or freelancing. A skeleton that respects the system reads as designed, not as a gap."
          tradeoff="It requires judgment calls that a purist handoff process wouldn't allow — and the humility to revise when the direction-holder disagrees."
        />
        <DecisionBlock
          n={3}
          accent="sage"
          title="Recompose for small screens, don't shrink"
          chose="A compact card variant with reordered hierarchy — value first, zone demoted, gauge simplified — rather than scaling the desktop layout down."
          alternatives="Fluid-scaling the ideal layout and letting text wrap where it must."
          why="At tablet-in-the-field sizes, the desktop hierarchy stops matching how the card is used: the reading and its status are what someone glances at. Recomposition preserves the product's usefulness; shrinking only preserves its geometry."
          tradeoff="Two compositions to maintain per meaningful breakpoint instead of one — the cost of taking mobile seriously."
        />
      </div>
    </CSSection>

    <CSSection n={5} title="The resolution logic" accent="sage" width="grid">
      <p className="mb-6 max-w-prose">
        The heart of the system is deliberately boring — a pure function every card renders
        through:
      </p>
      <Figure n={2} caption="State resolution as pure logic — testable without rendering a single pixel. (Illustrative excerpt; production names differ.)" width="grid" className="!px-0">
        <pre className="overflow-x-auto border border-foreground/15 bg-surface-elevated p-5 font-mono text-xs leading-relaxed text-foreground/85 md:text-[13px]">
          <code>{resolverExcerpt}</code>
        </pre>
      </Figure>
      <Figure n={3} caption="Data conditions in, one visual system out." width="grid" className="!px-0 pt-8">
        <FlowDiagram
          accent="sage"
          steps={[
            { label: "API data", note: "Zones, samples, readings" },
            { label: "State resolver", note: "Pure, tested logic", emphasis: true },
            { label: "Variant", note: "ideal · loading · empty · critical" },
            { label: "One visual language", note: "The creative direction, intact" },
          ]}
        />
      </Figure>
    </CSSection>

    <CSSection n={6} title="Responsive behavior as design work" accent="sage" width="grid">
      <Figure n={4} caption="The same reading recomposed across contexts — hierarchy changes, the language doesn't." width="grid" className="!px-0">
        <ResponsiveStrip
          render={(w) => <IrisCard state={w.startsWith("Mobile") || w.startsWith("Tablet") ? "compact" : "ideal"} />}
        />
      </Figure>
    </CSSection>

    <CSSection n={7} title="What this project proves" accent="sage">
      <p>
        Scout Society shows I can originate. Iris shows the other half: I can operate inside an
        existing organization, inherit someone else&rsquo;s creative direction, respect it — and
        translate it into software that survives real data, real networks, and real screens. The
        space between a beautiful frame and a resilient product is where I did this work, and
        it&rsquo;s the space I want to keep working in.
      </p>
    </CSSection>
  </CaseStudyLayout>
);

export default ToddIris;
