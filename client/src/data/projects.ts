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
    cover?: string;
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
      cover: "/all-classifier.gif",
      featured: true,
      category: ["AI/ML", "Web App"]
    },
    {
      slug: "wgu-course-explorer",
      title: "WGU CS Course Explorer",
      tagline: "Community-driven platform for computer science course reviews and difficulty ratings",
      impact: "Courses filterable by difficulty and time commitment",
      stack: ["React", "Vite", "Node.js", "Express", "TailwindCSS", "ShadCN/Radix UI", "React Router", "PostgreSQL", "Render"],
      links: {
        repo: "",
        demo: "https://web103-finalproject-1.onrender.com",
        caseStudy: ""
      },
      cover: "/course-explorer.gif",
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
      cover: "/InternshipTracker.gif",
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
      cover: "/ai-document-retrieval.gif",
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
      cover: "/ClassConnect.gif",
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
      cover: "/spacex-dashboard.gif",
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
        demo: "",
        caseStudy: ""
      },
      cover: "/portfolio.png",
      featured: false,
      category: ["Web App", "Portfolio"]
    },
  ];
  
  export const getFeaturedProjects = () => projects.filter(p => p.featured);