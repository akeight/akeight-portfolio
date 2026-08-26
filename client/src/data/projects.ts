export type ProjectMedia = {
  cover?: string;
  video?: {
    mp4: string;
    webm: string;
    poster: string;
  };
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  impact: string;
  stack: string[];
  links?: {
    repo?: string;
    demo?: string;
    caseStudy?: string;
  };
  media?: ProjectMedia;
  featured?: boolean;
  category: string[];
};

  export const projects: Project[] = [
    {
      slug: "careercatalyst",
      title: "Career Catalyst",
      tagline: "Designed, built, and launched a full-stack application tracker with authentication that helps candidates reduce the chaos of the job-search process.",
      impact: "Designed a scalable data architecture with 6 relational Prisma models to support user-specific applications, statuses, saved opportunities, favorites, and future career-management features.",
      stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "tRPC", "Auth.js", "Vercel"],
      links: {
        repo: "https://github.com/akeight/careercatalyst",
        demo: "https://try-catalyst.vercel.app",
        caseStudy: ""
      },
      media: {
        video: {
          mp4: "/catalystdemo.mp4",
          webm: "/catalystdemo.webm",
          poster: "/catalysthome.png"
        }
      },
      featured: true,
      category: ["Web App", "Productivity"]
    },
    {
      slug: "epstein-rag",
      title: "Epstein Email Explorer",
      tagline: "Full-stack RAG web app for exploring publicly released Epstein emails. The platform ingests and structures email threads and produces source-grounded answers with clickable citations.",
      impact: "Enabled natural-language research across 5,082 email threads, 16,447 messages, and 16,493 retrieval chunks for semantic search and natural-language exploration.",
      stack: ["Next.js", "TypeScript", "OpenAI", "Hugging Face", "MongoDB Atlas Vector Search", "Vercel"],
      links: {
        repo: "https://github.com/akeight/rag-but-make-it-island-style",
        caseStudy: ""
      },
      media: {
        cover: "/epstein.png",
        video: {
          mp4: "/epstein.mp4", 
          webm: "/epstein.webm",
          poster: "/epstein.png"
        }
      },
      featured: true,
      category: ["Web App", "AI/ML"]
    },
    {
      slug: "hackhq",
      title: "HackHQ",
      tagline: "Co-building an open-source hackathon discovery platform that gives students and developers one reliable place to find, compare, and track opportunities.",
      impact: "Co-built and maintained a centralized directory of 62 hackathons across 58 organizers, covering in-person, virtual, and hybrid opportunities from universities, technology companies, and developer communities. Over 70 stars and growing on GitHub.",
      stack: ["React", "TypeScript", "Vite", "MapboxGL", "ShadCN", "Drizzle ORM", "Supabase", "Cloudflare Pages"],
      links: {
        repo: "https://github.com/Hack-HQ/hackhq",
        demo: "https://hacking-hq.com",
        caseStudy: ""
      },
      media: {
        cover: "/hackhq-map.png",
        video: {
          mp4: "/hackhq.mp4", 
          webm: "/hackhq.webm",
          poster: "/hackhq-map.png"
        }
      },
      featured: true,
      category: ["Web App", "Community Tool"]
    },
    {
      slug: "mova-graph",
      title: "Mova",
      tagline: "AI-powered student decision platform that transforms courses, skills, projects, and experiences into an interactive career-readiness map. Built for the Stellic Pathfinder Challange hackathon.",
      impact: "Built a graph-based readiness engine that connects student evidence to target career requirements, identifies skill gaps, ranks high-impact next moves, and lets students simulate how courses, projects, or internships could change their trajectory.",
      stack: [ "Next.js",
        "TypeScript",
        "React",
        "React Flow",
        "Supabase",
        "PostgreSQL",
        "Drizzle ORM",
        "Vercel AI SDK",
        "Anthropic",
        "Upstash Redis",
        "Vercel"],
      links: {
        repo: "https://github.com/akeight/mova-graph",
        demo: "https://movacareer.vercel.app",
        caseStudy: ""
      },
      media: {
        video: {
          mp4: "/movademo.mp4",
          webm: "/movademo.webm",
          poster: "/mova.png"
        }
      },
      featured: true,
      category: ["AI/ML", "Web App", "Data Visualization"]
    },
    {
      slug: "blood-cell-classifier",
      title: "ALL Blood Cell Classifier",
      tagline: "CNN ResNet50 model with Grad-CAM visualization and fullstack deployment",
      impact: "Fine tuned a convelutional neural network to classify the presence of leukemia in blood cells. Deployed the model with inference endpoint with heatmap UI for user visualization.",
      stack: ["TensorFlow", "Keras", "FastAPI", "React", "Vite", "Supabase"],
      links: {
        repo: "https://github.com/akeight/ai4all-project",
        demo: "https://ai4all-project.vercel.app/",
        caseStudy: ""
      },
      media: {
        video: {
          mp4: "/all-classifier.mp4",
          webm: "/all-classifier.webm",
          poster: "/all-classifier.jpg"
        }
      },
      featured: true,
      category: ["AI/ML", "Web App"]
    },
    {
      slug: "kahani-website",
      title: "Kahani Website",
      tagline: "Professional marketing site for Kahani using modern web technologies and testing and consistent quality for frontend development",
      impact: "Solo built the redesigned website from Figma design to production deployment during internship",
      stack: ["React", "Vite", "DaisyUI", "Firebase"],
      links: {
        repo: "",
        demo: "https://www.getkahani.com/",
        caseStudy: ""
      },
      media: {
        video: {
          mp4: "",
          webm: "",
          poster: "/kahani-website.png"
        }
      },
      featured: false,
      category: ["Web App", "Marketing", "Community Tool"]
    },
    {
      slug: "wgu-course-explorer",
      title: "WGU CS Course Reviews",
      tagline: "Community-driven platform for computer science course reviews and difficulty ratings",
      impact: "Courses filterable by difficulty and time commitment",
      stack: ["React", "Vite", "Node.js", "Express", "TailwindCSS", "ShadCN/Radix UI", "React Router", "PostgreSQL", "Railway", "Docker", "Cloud Run", "Vercel"],
      links: {
        repo: "https://github.com/akeight/wgu-cs-course-reviews",
        demo: "https://wgu-cs-course-reviews.vercel.app/",
        caseStudy: ""
      },
      media: {
        video: {
          mp4: "/course-explorer.mp4",
          webm: "/course-explorer.webm",
          poster: "/course-explorer.jpg"
        }
      },
      featured: true,
      category: ["Community Tool", "Web App"],
    },
    {
      slug: "ai-document-query",
      title: "Intelligent Document Querying System",
      tagline: "Document querying system that uses AI to answer questions about documents. Built with Udacity's AWS AI Engineer Nanodegree.",
      impact: "Custom AWS Bedrock RAG pipeline with Terraform, S3, Aurora PostgreSQL, and Streamlit",
      stack: ["Python", "AWS Bedrock", "Terraform", "AWS S3", "AWS Aurora PostgreSQL", "Streamlit"],
      links: {
        repo: "https://github.com/akeight/Intelligent-Document-Querying-System",
        demo: "",
        caseStudy: ""
      },
      media: {
        video: {
          mp4: "/ai-document-retrieval.mp4",
          webm: "/ai-document-retrieval.webm",
          poster: "/ai-document-retrieval.jpg"
        }
      },
      featured: false,
      category: ["AI/ML", "Web App"]
    },
    // {
    //   slug: "class-connect",
    //   title: "ClassConnect",
    //   tagline: "Collaborative class forum web app where students and teachers can connect! They can post questions, share resources, make announcements, repost other's posts and engage with peers. It features live filtering, searching, sorting by upvotes, repost functionality, and a custom, playful UI, making it easy to stay connected and organized in any class environment.",
    //   impact: "",
    //   stack: ["React", "Vite", "Supabase", "PostgreSQL", "React Router"],
    //   links: {
    //     repo: "https://github.com/akeight/ClassConnect",
    //     demo: "https://classconnecthub.netlify.app",
    //     caseStudy: ""
    //   },
    //   media: {
    //     video: {
    //       mp4: "/ClassConnect.mp4",
    //       webm: "/ClassConnect.webm",
    //       poster: "/ClassConnect.jpg"
    //     }
    //   },
    //   featured: false,
    //   category: ["Web App", "Community Tool"]
    // },
    {
      slug: "spacex-dashboard",
      title: "SpaceX Launch Dashboard",
      tagline: "Explore live SpaceX mission data with this interactive, data rich frontend dashboard. Built with React and styled with custom components, the app pulls real launch data from the public SpaceX API and displays its story with visuals.",
      impact: "Surfaced 15+ KPIs; caching strategy reduced API calls by ~35%",
      stack: ["React", "Vite", "JavaScript", "Recharts"],
      links: {
        repo: "https://github.com/akeight/SpaceX-data-dashboard",
        demo: "",
        caseStudy: ""
      },
      media: {
        video: {
          mp4: "/spacex-dashboard.mp4",
          webm: "/spacex-dashboard.webm",
          poster: "/spacex-dashboard.jpg"
        }
      },
      featured: false,
      category: ["Data Visualization", "Web App"]
    },
    {
      slug: "portfolio",
      title: "Personal Portfolio",
      tagline: "Modern, responsive portfolio website showcasing projects, experience, and skills with a clean UI and smooth animations",
      impact: "Showcases full-stack capabilities with modern React patterns and component architecture",
      stack: ["React", "TypeScript", "Vite", "TailwindCSS", "ShadCN/Radix UI", "React Router", "Framer Motion", "Vercel"],
      links: {
        repo: "https://github.com/akeight/akeight-portfolio",
        demo: "https://akeight-portfolio.vercel.app/",
        caseStudy: ""
      },
      media: {
        cover: "/og-image.png"
      },
      featured: false,
      category: ["Web App", "Portfolio"]
    },
  ];
  
  export const getFeaturedProjects = () => projects.filter(p => p.featured);