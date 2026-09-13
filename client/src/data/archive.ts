export type ArchiveMedia = {
  cover?: string;
  video?: {
    mp4: string;
    webm: string;
    poster: string;
  };
};

export type ArchiveProject = {
  slug: string;
  title: string;
  description: string;
  year: string;
  stack: string[];
  links?: {
    repo?: string;
    demo?: string;
  };
  media?: ArchiveMedia;
};

/** Secondary work — the quiet index. Not every project deserves a feature story. */
export const archiveProjects: ArchiveProject[] = [
  {
    slug: "epstein-rag",
    title: "Epstein Email Explorer",
    description:
      "Full-stack RAG app for researching 16,447 publicly released emails with source-grounded, citable answers.",
    year: "2026",
    stack: ["Next.js", "TypeScript", "OpenAI", "MongoDB Atlas Vector Search"],
    links: {
      repo: "https://github.com/akeight/rag-but-make-it-island-style",
    },
    media: {
      cover: "/projects/epstein-rag/poster.jpg",
      video: {
        mp4: "/projects/epstein-rag/demo.mp4",
        webm: "/projects/epstein-rag/demo.webm",
        poster: "/projects/epstein-rag/poster.jpg",
      },
    },
  },
  {
    slug: "blood-cell-classifier",
    title: "ALL Blood Cell Classifier",
    description:
      "ResNet50 leukemia classifier with Grad-CAM heatmaps, deployed behind a FastAPI inference endpoint.",
    year: "2026",
    stack: ["TensorFlow", "Keras", "FastAPI", "React"],
    links: {
      repo: "https://github.com/akeight/ai4all-project",
      demo: "https://ai4all-project.vercel.app/",
    },
    media: {
      video: {
        mp4: "/projects/all-classifier/demo.mp4",
        webm: "/projects/all-classifier/demo.webm",
        poster: "/projects/all-classifier/poster.jpg",
      },
    },
  },
  {
    slug: "wgu-course-explorer",
    title: "CS Course Reviews",
    description:
      "Community platform for computer-science course reviews, filterable by difficulty and time commitment.",
    year: "2025",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Docker"],
    links: {
      repo: "https://github.com/akeight/wgu-cs-course-reviews",
      demo: "https://wgu-cs-course-reviews.vercel.app/",
    },
    media: {
      video: {
        mp4: "/projects/course-explorer/demo.mp4",
        webm: "/projects/course-explorer/demo.webm",
        poster: "/projects/course-explorer/poster.jpg",
      },
    },
  },
  {
    slug: "ai-document-query",
    title: "Intelligent Document Querying",
    description:
      "AWS Bedrock RAG pipeline with Terraform, S3, and Aurora PostgreSQL — built during the Udacity AWS AI Engineer Nanodegree.",
    year: "2025",
    stack: ["Python", "AWS Bedrock", "Terraform", "Streamlit"],
    links: {
      repo: "https://github.com/akeight/Intelligent-Document-Querying-System",
    },
    media: {
      video: {
        mp4: "/projects/ai-document-query/demo.mp4",
        webm: "/projects/ai-document-query/demo.webm",
        poster: "/projects/ai-document-query/poster.jpg",
      },
    },
  },
  {
    slug: "spacex-dashboard",
    title: "SpaceX Launch Dashboard",
    description:
      "Data-rich frontend dashboard over the public SpaceX API — 15+ KPIs with a caching strategy that cut API calls ~35%.",
    year: "2025",
    stack: ["React", "JavaScript", "Recharts"],
    links: {
      repo: "https://github.com/akeight/SpaceX-data-dashboard",
    },
    media: {
      video: {
        mp4: "/projects/spacex-dashboard/demo.mp4",
        webm: "/projects/spacex-dashboard/demo.webm",
        poster: "/projects/spacex-dashboard/poster.jpg",
      },
    },
  },
  {
    slug: "kahani-website",
    title: "Kahani Website",
    description:
      "Solo-built the redesigned marketing site from Figma designs to production during my Kahani internship.",
    year: "2025",
    stack: ["React", "Vite", "Firebase"],
    links: {
      demo: "https://www.getkahani.com/",
    },
    media: {
      cover: "/projects/kahani/site.jpg",
    },
  },
];
