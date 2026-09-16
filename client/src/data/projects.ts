import type { ProjectAccent } from '@/lib/accents';

export type ProjectMedia = {
  cover?: string;
  /** Optional second still (e.g. mobile screen) layered over the cover in card compositions. */
  secondary?: string;
  /** Ordered app screens for the fanned-phone card composition (mediaLayout 'phones'). */
  screens?: { src: string; alt: string }[];
  video?: {
    mp4: string;
    webm: string;
    poster: string;
  };
};

/**
 * Controlled context vocabulary — honest attribution on every card.
 * 'Fellowship Project' and 'Course Project' exist only because actual
 * projects require them (ALL Classifier = AI4ALL, Document Query = Udacity).
 */
export type ProjectContext =
  | 'Professional'
  | 'Independent'
  | 'Rapid Prototype'
  | 'Internship Project'
  | 'Hackathon'
  | 'Open Source'
  | 'Fellowship Project'
  | 'Course Project';

/** Mosaic tile sizing for the Projects page. */
export type ProjectTile = 'large' | 'tall' | 'wide' | 'small';

/**
 * Card media composition:
 * 'cover'    — media fills the frame; optional `secondary` renders as a small overlay (e.g. mobile screen).
 * 'phones'   — portrait screens fanned on an accent-tinted ground (mobile-first projects).
 * 'catalyst' — bespoke recreated Catalyst dashboard composition (CatalystShowcase).
 */
export type ProjectMediaLayout = 'cover' | 'phones' | 'catalyst';

export type Project = {
  slug: string;
  title: string;
  /** One short product/impact line — the only copy on a featured card. */
  hook: string;
  /** Role / discipline line shown on cards, e.g. "Product Engineering · React Native". */
  role: string;
  context: ProjectContext;
  /** Depth tier: 1 = deep case study, 2 = medium story, 3 = note/tile only. */
  tier: 1 | 2 | 3;
  tile: ProjectTile;
  accent: ProjectAccent;
  mediaLayout?: ProjectMediaLayout;
  /** Fine-grained crop control for card media. */
  objectPosition?: string;
  tagline: string;
  impact: string;
  stack: string[];
  links?: {
    repo?: string;
    demo?: string;
    /** External recorded walkthrough (e.g. a Loom link). */
    demoVideo?: string;
    /** Internal route for the detail page (tier 1–2) or story page. */
    caseStudy?: string;
  };
  media?: ProjectMedia;
  featured?: boolean;
  /** Kept in the data but not shown on the Projects mosaic. */
  hidden?: boolean;
  category: string[];
};

export const projects: Project[] = [
  {
    // Professional — appears in Selected Work, lives on /experience (not the Projects mosaic).
    slug: 'todd',
    title: 'TODD',
    hook: 'From early product implementation to launch-ready polish and engineering leadership.',
    role: 'Software Engineer Intern, Product → Founding Engineer',
    context: 'Professional',
    tier: 1,
    tile: 'large',
    accent: 'sage',
    objectPosition: 'top',
    tagline:
      'Agriscience startup where my role grew from implementing Figma-driven product work into engineering leadership: onboarding externs, setting code-review standards, and helping carry the public site and Iris v1 to launch quality.',
    impact:
      'Helped take rough functional output to launch-ready polish across typography, hierarchy, spacing, and interaction — while guiding a team of externs through workflow, PRs, and review.',
    stack: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Sanity', 'CI/CD', 'Vercel', 'GitHub'],
    links: {
      demo: 'https://toddagriscience.com',
      caseStudy: '/experience',
    },
    media: {
      cover: '/projects/todd/desktop-home.png',
      secondary: '/projects/todd/mobile-home.png',
      video: {
        mp4: '/projects/todd/demo.mp4',
        webm: '/projects/todd/demo.webm',
        poster: '/projects/todd/poster.jpg',
      },
    },
    featured: true,
    category: ['Professional', 'Web App'],
  },
  {
    slug: 'scout-society',
    title: 'Scout Society',
    hook: 'Try on the work before choosing the major.',
    role: 'Product Engineering · React Native',
    // Built as a time-boxed Product Engineering assessment for Quippy.
    context: 'Rapid Prototype',
    tier: 1,
    tile: 'large',
    accent: 'ochre',
    mediaLayout: 'phones',
    objectPosition: 'center 62%',
    tagline:
      'An editorial mobile prototype that reverses major selection: react to real work situations, meet people whose working lives match, experience the work, then explore the majors that lead there.',
    impact:
      'Designed and engineered end to end in a timed 150-minute product engineering assessment: product thesis, interaction design, motion, and a complete seven-screen flow.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'Reanimated'],
    links: {
      repo: 'https://github.com/akeight/scout-society',
      caseStudy: '/projects/scout-society',
    },
    media: {
      cover: '/projects/scout-society/01-intro.jpg',
      secondary: '/projects/scout-society/03-discover.jpg',
      // Fanned card composition, the story in four screens: thesis, calibration, discover, experience.
      screens: [
        {
          src: '/projects/scout-society/01-intro.jpg',
          alt: 'Scout Society intro screen with the thesis: experience the work before choosing the major',
        },
        {
          src: '/projects/scout-society/02-calibration.png',
          alt: 'Scout Society calibration screen asking for gut reactions to real work situations instead of a career quiz',
        },
        {
          src: '/projects/scout-society/03-discover.jpg',
          alt: 'Scout Society discover screen where you meet people whose working lives match, before majors',
        },
        {
          src: '/projects/scout-society/05-experience-tuesday.png',
          alt: 'Scout Society experience screen with an hour-by-hour Tuesday you can try on',
        },
      ],
    },
    featured: true,
    category: ['Mobile App', 'Product Design'],
  },
  {
    slug: 'careercatalyst',
    title: 'Career Catalyst',
    hook: 'Turn a fragmented internship search into one coherent workspace.',
    role: 'Product Engineer · Full-Stack',
    context: 'Independent',
    tier: 1,
    tile: 'large',
    accent: 'plum',
    mediaLayout: 'catalyst',
    tagline:
      'Designed, built, and launched a full-stack application tracker with authentication that helps candidates reduce the chaos of the job-search process.',
    impact:
      'Designed a relational Prisma schema spanning applications, companies, contacts, résumés, and notes, then shipped an AI Interview Prep pipeline that turns any tracked application into a cited company snapshot or a full interview brief.',
    stack: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'tRPC',
      'Vercel AI SDK',
      'OpenAI',
      'Auth.js',
      'Vercel',
    ],
    links: {
      repo: 'https://github.com/akeight/careercatalyst',
      demo: 'https://try-catalyst.vercel.app',
      caseStudy: '/projects/careercatalyst',
    },
    media: {
      cover: '/projects/catalyst/card.png',
      video: {
        mp4: '/projects/catalyst/demo.mp4',
        webm: '/projects/catalyst/demo.webm',
        poster: '/projects/catalyst/home.jpg',
      },
    },
    featured: true,
    category: ['Web App', 'Productivity'],
  },
  {
    slug: 'hackhq',
    title: 'HackHQ',
    hook: "Good opportunities shouldn't depend on already knowing where to look.",
    role: 'Founding Open-Source Contributor · Full-Stack',
    context: 'Open Source',
    tier: 2,
    tile: 'tall',
    accent: 'oxblood',
    tagline:
      'Co-building an open-source hackathon discovery platform that gives students and developers one reliable place to find, compare, and track opportunities.',
    impact:
      'Co-built and maintained a centralized directory of 62 hackathons across 58 organizers, covering in-person, virtual, and hybrid opportunities. Over 70 stars and growing on GitHub.',
    stack: ['React', 'TypeScript', 'Vite', 'MapboxGL', 'ShadCN', 'Drizzle ORM', 'Supabase', 'Cloudflare Pages'],
    links: {
      repo: 'https://github.com/Hack-HQ/hackhq',
      demo: 'https://hacking-hq.com',
      caseStudy: '/projects/hackhq',
    },
    media: {
      cover: '/projects/hackhq/card.png',
      video: {
        mp4: '/projects/hackhq/demo.mp4',
        webm: '/projects/hackhq/demo.webm',
        poster: '/projects/hackhq/map.jpg',
      },
    },
    featured: true,
    category: ['Web App', 'Community Tool'],
  },
  {
    slug: 'mova-graph',
    title: 'Mova',
    hook: 'Career exploration that starts from where you are — not a search box.',
    role: 'Product Engineer · AI + Interaction',
    context: 'Hackathon',
    tier: 2,
    tile: 'tall',
    accent: 'dusty',
    tagline:
      'AI-powered student decision platform that transforms courses, skills, projects, and experiences into an interactive career-readiness map. Built for the Stellic Pathfinder Challenge hackathon.',
    impact:
      'Built a graph-based readiness engine that connects student evidence to target career requirements, identifies skill gaps, ranks high-impact next moves, and lets students simulate how courses, projects, or internships could change their trajectory.',
    stack: [
      'Next.js',
      'TypeScript',
      'React',
      'React Flow',
      'Supabase',
      'PostgreSQL',
      'Drizzle ORM',
      'Vercel AI SDK',
      'Anthropic',
      'Upstash Redis',
      'Vercel',
    ],
    links: {
      repo: 'https://github.com/akeight/mova-graph',
      demo: 'https://movacareer.vercel.app',
      demoVideo: 'https://www.loom.com/share/dc5b975977104a69a70a87de26dbf009',
      caseStudy: '/projects/mova-graph',
    },
    media: {
      cover: '/projects/mova/card.png',
      video: {
        mp4: '/projects/mova/demo.mp4',
        webm: '/projects/mova/demo.webm',
        poster: '/projects/mova/poster.jpg',
      },
    },
    featured: false,
    category: ['AI/ML', 'Data Visualization'],
  },
  {
    slug: 'epstein-rag',
    title: 'Epstein Email Explorer',
    hook: 'Source-grounded answers across 16,447 publicly released emails.',
    role: 'Independent Build · RAG',
    context: 'Independent',
    tier: 3,
    tile: 'small',
    accent: 'plum',
    tagline:
      'Full-stack RAG web app for exploring publicly released Epstein emails. The platform ingests and structures email threads and produces source-grounded answers with clickable citations.',
    impact:
      'Enabled natural-language research across 5,082 email threads, 16,447 messages, and 16,493 retrieval chunks for semantic search and natural-language exploration.',
    stack: ['Next.js', 'TypeScript', 'OpenAI', 'Hugging Face', 'MongoDB Atlas Vector Search', 'Vercel'],
    links: {
      repo: 'https://github.com/akeight/rag-but-make-it-island-style',
    },
    media: {
      cover: '/projects/epstein-rag/poster.jpg',
      video: {
        mp4: '/projects/epstein-rag/demo.mp4',
        webm: '/projects/epstein-rag/demo.webm',
        poster: '/projects/epstein-rag/poster.jpg',
      },
    },
    featured: false,
    category: ['Web App', 'AI/ML'],
  },
  {
    slug: 'blood-cell-classifier',
    title: 'ALL Blood Cell Classifier',
    hook: 'A CNN that shows its reasoning with Grad-CAM heatmaps.',
    role: 'AI4ALL Ignite Fellow · ML Engineering',
    context: 'Fellowship Project',
    tier: 3,
    tile: 'small',
    accent: 'oxblood',
    tagline: 'CNN ResNet50 model with Grad-CAM visualization and fullstack deployment.',
    impact:
      'Fine-tuned a convolutional neural network to classify the presence of leukemia in blood cells. Deployed the model with an inference endpoint and heatmap UI for user visualization.',
    stack: ['TensorFlow', 'Keras', 'FastAPI', 'React', 'Vite', 'Supabase'],
    links: {
      repo: 'https://github.com/akeight/ai4all-project',
      demo: 'https://ai4all-project.vercel.app/',
    },
    media: {
      video: {
        mp4: '/projects/all-classifier/demo.mp4',
        webm: '/projects/all-classifier/demo.webm',
        poster: '/projects/all-classifier/poster.jpg',
      },
    },
    featured: false,
    category: ['AI/ML', 'Data Visualization'],
  },
  {
    // Web stack verified by Allyson 2026-09-13: React / Vite / Firebase.
    slug: 'kahani-website',
    title: 'Kahani Website',
    hook: 'Supplied Figma → production responsive site, solo, in about three weeks.',
    role: 'Software Engineer Intern· Internship Extension',
    context: 'Internship Project',
    tier: 3,
    tile: 'wide',
    accent: 'sage',
    tagline:
      'Marketing site for Kahani — I translated the supplied Figma designs into the full responsive production experience, desktop and mobile.',
    impact:
      'Solo-built the redesigned website from Figma design to production deployment during my internship extension.',
    stack: ['React', 'Vite', 'DaisyUI', 'Firebase'],
    links: {
      demo: 'https://www.getkahani.com/',
      caseStudy: '/experience/kahani',
    },
    media: {
      cover: '/projects/kahani/site.jpg',
    },
    featured: false,
    category: ['Web App', 'Marketing'],
  },
  {
    slug: 'wgu-course-explorer',
    title: 'CS Course Reviews',
    hidden: true,
    hook: 'Community course reviews, filterable by difficulty and time commitment.',
    role: 'Independent Build · Full-Stack',
    context: 'Independent',
    tier: 3,
    tile: 'small',
    accent: 'dusty',
    tagline: 'Community-driven platform for computer science course reviews and difficulty ratings.',
    impact: 'Courses filterable by difficulty and time commitment.',
    stack: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'TailwindCSS',
      'ShadCN/Radix UI',
      'React Router',
      'PostgreSQL',
      'Railway',
      'Docker',
      'Cloud Run',
      'Vercel',
    ],
    links: {
      repo: 'https://github.com/akeight/wgu-cs-course-reviews',
      demo: 'https://wgu-cs-course-reviews.vercel.app/',
    },
    media: {
      video: {
        mp4: '/projects/course-explorer/demo.mp4',
        webm: '/projects/course-explorer/demo.webm',
        poster: '/projects/course-explorer/poster.jpg',
      },
    },
    featured: false,
    category: ['Community Tool', 'Web App'],
  },
  {
    slug: 'ai-document-query',
    title: 'Intelligent Document Querying System',
    hidden: true,
    hook: 'A custom RAG pipeline on AWS Bedrock, provisioned with Terraform.',
    role: 'Udacity AWS AI Scholar · ML Infrastructure',
    context: 'Course Project',
    tier: 3,
    tile: 'small',
    accent: 'ochre',
    tagline:
      "Document querying system that uses AI to answer questions about documents. Built with Udacity's AWS AI Engineer Nanodegree.",
    impact: 'Custom AWS Bedrock RAG pipeline with Terraform, S3, Aurora PostgreSQL, and Streamlit.',
    stack: ['Python', 'AWS Bedrock', 'Terraform', 'AWS S3', 'AWS Aurora PostgreSQL', 'Streamlit'],
    links: {
      repo: 'https://github.com/akeight/Intelligent-Document-Querying-System',
    },
    media: {
      video: {
        mp4: '/projects/ai-document-query/demo.mp4',
        webm: '/projects/ai-document-query/demo.webm',
        poster: '/projects/ai-document-query/poster.jpg',
      },
    },
    featured: false,
    category: ['AI/ML', 'Web App'],
  },
  {
    slug: 'spacex-dashboard',
    title: 'SpaceX Launch Dashboard',
    hook: 'Live mission data, told with visuals.',
    role: 'Independent Build · Frontend',
    context: 'Independent',
    tier: 3,
    tile: 'small',
    accent: 'dusty',
    tagline:
      'Explore live SpaceX mission data with this interactive, data-rich frontend dashboard pulling real launch data from the public SpaceX API.',
    impact: 'Surfaced 15+ KPIs; caching strategy reduced API calls by ~35%.',
    stack: ['React', 'Vite', 'JavaScript', 'Recharts'],
    links: {
      repo: 'https://github.com/akeight/SpaceX-data-dashboard',
    },
    media: {
      video: {
        mp4: '/projects/spacex-dashboard/demo.mp4',
        webm: '/projects/spacex-dashboard/demo.webm',
        poster: '/projects/spacex-dashboard/poster.jpg',
      },
    },
    featured: false,
    category: ['Data Visualization', 'Web App'],
  },
  {
    slug: 'portfolio',
    title: 'Personal Portfolio',
    hook: 'The site you are looking at.',
    role: 'Independent Build · Design + Frontend',
    context: 'Independent',
    tier: 3,
    tile: 'tall',
    accent: 'plum',
    tagline:
      'Modern, responsive portfolio website showcasing projects, experience, and skills with a clean UI and smooth animations.',
    impact: 'Showcases full-stack capabilities with modern React patterns and component architecture.',
    stack: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'ShadCN/Radix UI', 'React Router', 'Framer Motion', 'Vercel'],
    links: {
      repo: 'https://github.com/akeight/akeight-portfolio',
      demo: 'https://akeight-portfolio.vercel.app/',
    },
    media: {
      cover: '/projects/portfolio/card.png',
    },
    featured: false,
    category: ['Web App', 'Portfolio'],
  },
];

/** Homepage Selected Work — array order is display order (TODD, Scout, Catalyst, HackHQ). */
export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/**
 * Projects-page mosaic: professional roles live on /experience, hidden projects
 * are omitted, and projects with a case study lead the layout (stable sort,
 * so relative order within each group follows the array).
 */
export const getMosaicProjects = () =>
  projects
    .filter((p) => p.context !== 'Professional' && !p.hidden)
    .sort((a, b) => Number(Boolean(b.links?.caseStudy)) - Number(Boolean(a.links?.caseStudy)));
