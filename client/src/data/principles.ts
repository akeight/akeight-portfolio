export type Principle = {
  n: string;
  title: string;
  body: string;
};

/** "How I build" — shared by the homepage section and the About page. */
export const principles: Principle[] = [
  {
    n: "01",
    title: "Start from the product problem, not the feature list.",
    body: "The interesting work begins before the ticket exists — noticing what's broken about a workflow, forming a hypothesis, and deciding what's actually worth building.",
  },
  {
    n: "02",
    title: "Prototype to answer questions, not to decorate decks.",
    body: "A prototype earns its existence by resolving a real uncertainty: does this interaction feel right, does this flow hold up, does this idea survive contact with a user.",
  },
  {
    n: "03",
    title: "The static design is the beginning of the design.",
    body: "Figma shows one viewport, one dataset, one ideal condition. Production introduces loading, errors, empty states, long labels, and real data. Engineering keeps answering the questions the frame stopped answering.",
  },
  {
    n: "04",
    title: "Ship, then learn.",
    body: "Working software in front of real people beats a perfect plan. I'd rather ship the honest version and iterate than polish an assumption.",
  },
];
