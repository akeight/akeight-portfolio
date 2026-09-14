export type Principle = {
  title: string;
  body: string;
};

/** "How I Build" — three principles, shared by the Home section and the About page. */
export const principles: Principle[] = [
  {
    title: 'Start with the problem.',
    body: 'Understand what actually needs improving before deciding what to build. The interesting work begins before the ticket exists.',
  },
  {
    title: 'Design through implementation.',
    body: 'A Figma frame is not the full product. Responsive states, real data, motion, empty states, feedback, and edge cases are part of the experience too.',
  },
  {
    title: 'Ship, learn, iterate.',
    body: "Build something real, get it working, learn, and improve. Working software in front of real people beats a perfect plan.",
  },
];
