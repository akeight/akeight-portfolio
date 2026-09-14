import type { FlowStep } from '@/components/system/FlowDiagram';

/**
 * Kahani — flagship professional story (/experience/kahani).
 *
 * Works in TWO MODES:
 *  - Mode A (current): NDA-safe — diagrams, timelines, labeled abstractions, public website only.
 *  - Mode B (future): if permission is granted, add `media` to a figure slot and the visual
 *    renders in place of the fallback diagram. No structural changes required.
 *
 * Honesty rules baked into the copy:
 *  - Visual/UX design was produced by the Kahani design team — never claimed as mine.
 *  - Commit-share (~60–70%) is NOT published; the durable claim is "one of the primary
 *    engineers responsible for getting the project across the finish line."
 *    TODO(verify): commit share from repo history before ever publishing a number.
 *  - Stacks verified 2026-09-13: mobile Flutter/Dart/Firebase; web React/Vite/Firebase.
 */

export type StoryMedia = {
  src: string;
  alt: string;
  caption?: string;
};

export type StoryFigureKind = 'flow' | 'timeline' | 'responsive' | 'architecture';

export type StoryFigure = {
  id: string;
  /** Figure heading, e.g. "Mobile experience". */
  title: string;
  /** Honest label rendered above the visual, e.g. "PROCESS DIAGRAM". */
  label: string;
  caption: string;
  /** Mode B slot — when present, renders instead of the Mode A fallback. */
  media?: StoryMedia;
  /** Mode A fallback visual. */
  fallback: StoryFigureKind;
  /** Steps for 'flow' / 'architecture' fallbacks. */
  flow?: FlowStep[];
  /** Stages for 'timeline' / 'responsive' fallbacks. */
  stages?: { label: string; note?: string }[];
};

export type StorySection = {
  id: string;
  title: string;
  paragraphs: string[];
  figureId?: string;
};

export const kahaniAtAGlance = [
  { label: 'Role', value: 'Mobile Engineer Intern → Product Management responsibilities' },
  { label: 'Timeline', value: 'September 2025 – January 2026' },
  { label: 'Team', value: 'Cross-functional: design team, engineering team, founders' },
  { label: 'Mobile stack', value: 'Flutter · Dart · Firebase (GCP)' },
  { label: 'Web stack', value: 'React · Vite · Firebase' },
  { label: 'Context', value: 'Product-market-fit experiment inside a startup' },
];

export const kahaniFigures: StoryFigure[] = [
  {
    id: 'fig-01',
    title: 'Mobile experience',
    label: 'ROLE PROGRESSION',
    caption:
      'How the role expanded over one internship: each step added responsibility without dropping the previous one.',
    fallback: 'timeline',
    stages: [
      { label: 'Mobile Engineer', note: 'Flutter/Dart features, MVVM architecture, CI/CD' },
      { label: 'PM responsibilities', note: 'Problem definition, requirements, design collaboration' },
      { label: 'Primary implementation ownership', note: 'One of three engineers left to carry the build' },
      { label: 'Internship extension', note: 'Only intern retained; trusted with a second end-to-end build' },
    ],
  },
  {
    id: 'fig-02',
    title: 'Product flow',
    label: 'PROCESS DIAGRAM',
    caption:
      'The loop I helped run: articulate the problem, shape requirements with design, hand into engineering, and then build it.',
    fallback: 'flow',
    flow: [
      { label: 'Product problem', note: 'Why would users come back?' },
      { label: 'Product definition', note: 'Requirements + scope', emphasis: true },
      { label: 'Design', note: 'Product-market-fit design team' },
      { label: 'Feedback loop', note: 'PM ↔ design iteration' },
      { label: 'Engineering', note: 'Handoff → implementation', emphasis: true },
      { label: 'Working prototype' },
    ],
  },
  {
    id: 'fig-03',
    title: 'Design collaboration',
    label: 'PROCESS DIAGRAM',
    caption:
      'Ownership boundaries stayed clear: the design team owned the visual and UX design; I owned requirements, feedback, and implementation.',
    fallback: 'flow',
    flow: [
      { label: 'Problem framing', note: 'Inherited from original product manager intern' },
      { label: 'Requirements', note: 'Mine, with founders', emphasis: true },
      { label: 'Visual / UX design', note: 'Product-market-fit design team' },
      { label: 'Design review', note: 'Shared' },
      { label: 'Implementation', note: 'Shared with engineering team', emphasis: true },
    ],
  },
  {
    id: 'fig-04',
    title: 'Working implementation',
    label: 'HIGH-LEVEL ARCHITECTURE',
    caption: 'Public-safe view of the mobile architecture: feature-first MVVM over a Firebase backend.',
    fallback: 'architecture',
    flow: [
      { label: 'Flutter UI', note: 'Feature-first modules' },
      { label: 'MVVM view models', note: 'State + logic per feature', emphasis: true },
      { label: 'Repositories', note: 'Data access layer' },
      { label: 'Firebase (GCP)', note: 'Auth, data, backend services' },
    ],
  },
  {
    id: 'fig-05',
    title: 'Responsive extension build',
    label: 'REPRESENTATIVE RESPONSIVE STATES',
    caption:
      'The extension build: supplied Figma showed the destination; implementation decided how it behaved across breakpoints. The live site is public.',
    fallback: 'responsive',
    stages: [
      { label: 'Supplied Figma', note: 'Desktop concept from the design team' },
      { label: 'Desktop implementation', note: 'React + Vite' },
      { label: 'Responsive interpretation', note: 'Breakpoints, spacing, type scale' },
      { label: 'Mobile implementation', note: 'Recomposed, not shrunk' },
      { label: 'Production', note: 'Firebase-backed, deployed' },
    ],
    media: {
      src: '/projects/kahani/site.jpg',
      alt: 'The public Kahani marketing website',
      caption: 'The redesigned Kahani website based on the supplied Figma: result of the three-week extension build.',
    },
  },
];

export const kahaniSections: StorySection[] = [
  {
    id: 'challenge',
    title: 'The product challenge',
    paragraphs: [
      'Kahani ran a product-market-fit experiment: explore an experience designed to give users a reason to come back to the product. What began as a feature exploration grew into something closer to a small standalone product.',
      'I joined as a mobile software engineering intern — Flutter and Dart on a Firebase backend. The interesting part of this story is what the role became.',
    ],
  },
  {
    id: 'role-expanded',
    title: 'My role expanded',
    paragraphs: [
      'I was not the original product manager. But as the experiment took shape and churn hit the team, I stepped into product management responsibilities: helping articulate the problem, defining what we were trying to build, communicating requirements, and carrying decisions between design and engineering.',
      'I kept engineering the product at the same time. The role became a loop rather than a lane: define, collaborate, implement, learn, adjust.',
    ],
    figureId: 'fig-01',
  },
  {
    id: 'working-with-design',
    title: 'Working with design',
    paragraphs: [
      'The visual and UX design was produced by the Kahani design team — that ownership never moved. My job was the loop around it: framing the product problem, shaping requirements, reviewing design exploration, giving PM-side feedback, and moving finalized direction into engineering.',
      'That boundary is worth stating plainly, because the value of this story is accuracy: I operated across product, design collaboration, and engineering while everyone kept clear ownership of their craft.',
    ],
    figureId: 'fig-03',
  },
  {
    id: 'attrition',
    title: 'The team got smaller',
    paragraphs: [
      'Over the course of the project the engineering team also experienced significant churn, with several engineers leaving, including the engineering lead. The project still had to ship.',
      'Three of us became the primary engineers responsible for getting the build across the finish line. My responsibilities grew accordingly: more implementation, more decisions, more ownership of the outcome.',
    ],
    figureId: 'fig-02',
  },
  {
    id: 'ownership',
    title: 'Engineering ownership',
    paragraphs: [
      'The mobile build was Flutter/Dart over Firebase, organized feature-first with MVVM. I set up the architecture patterns, built features end-to-end, implemented the CI/CD pipeline, and wrote the onboarding docs that made builds reproducible for the rest of the team.',
      'I was one of the primary engineers responsible for carrying the implementation to completion.',
    ],
    figureId: 'fig-04',
  },
  {
    id: 'extension',
    title: 'The extension',
    paragraphs: [
      'Following the intern project, I was the only intern offered an extension.',
      'The signal in that sentence is responsibility. After seeing the product work up close, the team trusted me with another end-to-end build.',
    ],
  },
  {
    id: 'second-build',
    title: 'The second build',
    paragraphs: [
      'During the extension I was given ownership of the new Kahani website: translating the supplied Figma designs into the full responsive production experience, desktop and mobile, in about three weeks, using React, Vite, and Firebase.',
      'I did not design the site; the design team did. I decided everything the static frames could not: responsive behavior between breakpoints, content-length handling, interaction states, and the data integration that made it real.',
    ],
    figureId: 'fig-05',
  },
  {
    id: 'gaps',
    title: 'Engineering the gaps between breakpoints',
    paragraphs: [
      'A static Figma rarely specifies every responsive state, content length, loading behavior, or mobile adaptation. Implementation is where those decisions get made. Which sections recompose rather than shrink, how type scales, what happens when real copy is longer than the mockup.',
      'This is the part of frontend work I find most interesting: the design shows the destination; engineering defines how it behaves on the way there.',
    ],
  },
  {
    id: 'reflection',
    title: 'What this taught me',
    paragraphs: [
      'Product ownership is mostly communication: the clearer the problem statement, the better every downstream decision gets.',
      'Working with designers works best with clear boundaries and fast loops. Respect the craft, close the gap between intent and implementation.',
      'Shipping through team change taught me to scope honestly, write things down, and keep the build in a state someone else could pick up.',
    ],
  },
];

export const kahaniStory = {
  title: 'Kahani',
  role: 'Mobile Software Engineer + Product Management',
  thesis:
    'How my internship role expanded from mobile engineering into product ownership, and into helping carry the build across the finish line.',
  atAGlance: kahaniAtAGlance,
  sections: kahaniSections,
  figures: kahaniFigures,
};
