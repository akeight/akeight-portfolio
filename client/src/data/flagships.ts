import type { ProjectAccent } from "@/lib/accents";

export type Flagship = {
  slug: string;
  title: string;
  /** The product question — five different questions, not five thumbnails. */
  question: string;
  /** The product thesis — one sentence of belief. */
  thesis: string;
  /** Controlled status vocabulary — the honest-attribution device. */
  status: string;
  accent: ProjectAccent;
  year: string;
  role: string;
  stack: string[];
  links?: {
    repo?: string;
    demo?: string;
  };
  /** One-line summary for index rows and the /work archive. */
  summary: string;
};

export const flagships: Flagship[] = [
  {
    slug: "scout-society",
    title: "Scout Society",
    question: "How do you choose a major before you've felt the work?",
    thesis: "Don't choose the major first. Experience the work first.",
    status: "Prototype · 150 min",
    accent: "ochre",
    year: "2026",
    role: "Product engineer — solo",
    stack: ["React Native", "Expo", "TypeScript"],
    summary:
      "A career-exploration prototype that lets students try on possible futures — designed and engineered in about 150 minutes.",
  },
  {
    slug: "catalyst",
    title: "Catalyst",
    question: "What if the entire internship journey lived in one workspace?",
    thesis: "Turn a fragmented job search into one coherent system.",
    status: "Shipped · Live",
    accent: "plum",
    year: "2026",
    role: "Product engineer — solo, end to end",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "tRPC", "Auth.js", "Vercel"],
    links: {
      repo: "https://github.com/akeight/careercatalyst",
      demo: "https://try-catalyst.vercel.app",
    },
    summary:
      "A full-stack workspace that carries an internship search from discovery to offer — designed, built, and shipped solo.",
  },
  {
    slug: "mova",
    title: "MOVA",
    question: "What if career exploration started from where you are — not a search box asking where you want to go?",
    thesis: "The model proposes. The student decides.",
    status: "Hackathon · Live",
    accent: "dusty",
    year: "2026",
    role: "Product engineer — AI systems + interaction",
    stack: ["Next.js", "TypeScript", "React Flow", "Vercel AI SDK", "Anthropic", "Supabase", "Drizzle"],
    links: {
      repo: "https://github.com/akeight/mova-graph",
      demo: "https://movacareer.vercel.app",
    },
    summary:
      "An AI career-readiness graph that turns a student's existing evidence into legible possible paths — built for the Stellic Pathfinder Challenge.",
  },
  {
    slug: "hackhq",
    title: "HackHQ",
    question: "How do you find the opportunities you don't know exist?",
    thesis: "Good opportunities shouldn't depend on already knowing where to look.",
    status: "Open source · Live",
    accent: "oxblood",
    year: "2026 — present",
    role: "Founding open-source contributor",
    stack: ["React", "TypeScript", "Vite", "MapboxGL", "Drizzle", "Supabase", "Cloudflare"],
    links: {
      repo: "https://github.com/Hack-HQ/hackhq",
      demo: "https://hacking-hq.com",
    },
    summary:
      "An open-source hackathon discovery platform — 62 events across 58 organizers, structured into one reliable, current directory.",
  },
  {
    slug: "todd-iris",
    title: "Todd Iris",
    question: "What happens after the Figma frame stops answering?",
    thesis: "The design showed one state. I built the system behind every other one.",
    status: "Production · At Todd",
    accent: "sage",
    year: "2026",
    role: "Frontend engineer — production implementation",
    stack: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Sanity"],
    summary:
      "Translating an established creative direction into resilient production software — real data, edge states, responsive systems.",
  },
];

export const getFlagship = (slug: string) => flagships.find((f) => f.slug === slug);

export const caseStudyPath = (slug: string) => `/work/${slug}`;
