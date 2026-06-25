export type Recommendation = {
  quote: string;
  name: string;
  role: string;
  /** Optional path to a headshot in /public (e.g. "/avatars/jane.jpg"). Falls back to initials. */
  avatar?: string;
};

/* Replace these with 3–5 real recommendations from people you've worked with. */
export const recommendations: Recommendation[] = [
  {
    quote:
      "Allyson is a rare blend of engineer and product thinker. She shipped polished, Figma-accurate UI fast and mentored the rest of the team while doing it.",
    name: 'Add Name',
    role: 'Title · Company',
  },
  {
    quote:
      "She owned features end-to-end, asked the right questions, and consistently delivered clean, well-tested code ahead of schedule.",
    name: 'Add Name',
    role: 'Title · Company',
  },
  {
    quote:
      "Reliable, curious, and genuinely fun to build with. Allyson made our small team move faster and communicate better.",
    name: 'Add Name',
    role: 'Title · Company',
  },
];
