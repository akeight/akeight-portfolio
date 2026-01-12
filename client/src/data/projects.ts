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
      slug: "blood-cell-classifier",
      title: "ALL Blood Cell Classifier",
      tagline: "ResNet50 model with Grad-CAM visualization and fullstack deployment",
      impact: "End-to-end ML demo; deployed inference endpoint with heatmap UI",
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
      slug: "internship-tracker",
      title: "Internship Tracker",
      tagline: "Full-stack CRUD app to organize and track internship applications",
      impact: "Reduced manual tracking time by ~60% with automated filters and analytics",
      stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "tRPC", "Auth.js", "ShadCN"],
      links: {
        repo: "https://github.com/akeight/internship-tracker",
        demo: "",
        caseStudy: ""
      },
      media: {
        video: {
          mp4: "/InternshipTracker.mp4",
          webm: "/InternshipTracker.webm",
          poster: "/InternshipTracker.jpg"
        }
      },
      featured: true,
      category: ["Web App", "Productivity"]
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
    {
      slug: "class-connect",
      title: "ClassConnect",
      tagline: "Collaborative class forum web app where students and teachers can connect! They can post questions, share resources, make announcements, repost other's posts and engage with peers. It features live filtering, searching, sorting by upvotes, repost functionality, and a custom, playful UI, making it easy to stay connected and organized in any class environment.",
      impact: "",
      stack: ["React", "Vite", "Supabase", "PostgreSQL", "React Router"],
      links: {
        repo: "https://github.com/akeight/ClassConnect",
        demo: "https://classconnecthub.netlify.app",
        caseStudy: ""
      },
      media: {
        video: {
          mp4: "/ClassConnect.mp4",
          webm: "/ClassConnect.webm",
          poster: "/ClassConnect.jpg"
        }
      },
      featured: false,
      category: ["Web App", "Community Tool"]
    },
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
      featured: true,
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
        cover: "/portfolio.png"
      },
      featured: false,
      category: ["Web App", "Portfolio"]
    },
  ];
  
  export const getFeaturedProjects = () => projects.filter(p => p.featured);