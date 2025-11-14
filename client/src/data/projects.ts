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
      slug: "blood-cell-classifier",
      title: "Blood Cell Classifier | Demo Coming Soon",
      tagline: "ResNet50 model with Grad-CAM visualization and FastAPI deployment",
      impact: "End-to-end ML demo; deployed inference endpoint with heatmap UI",
      stack: ["TensorFlow", "Keras", "FastAPI", "React", "Vite", "Supabase"],
      links: {
        repo: "https://github.com/akeight/ai4all-project",
        demo: "",
        caseStudy: ""
      },
      cover: "/all-classifier.gif",
      featured: true,
      category: ["AI/ML", "Web App"]
    },
    {
      slug: "wgu-course-explorer",
      title: "WGU Course Explorer | Demo Coming Soon",
      tagline: "Community-driven platform for course reviews and difficulty ratings",
      impact: "300+ reviews aggregated; courses filterable by difficulty and time commitment",
      stack: ["React", "Vite", "Node.js", "Express", "TailwindCSS", "ShadCN/Radix UI", "React Router", "PostgreSQL", "Render"],
      links: {
        repo: "https://github.com/akeight/wgu-explorer",
        demo: "",
        caseStudy: ""
      },
      cover: "/course-explorer.gif",
      featured: true,
      category: ["Community Tool", "Web App"],
    },
    {
      slug: "class-connect",
      title: "ClassConnect",
      tagline: "Collaborative class forum web app where students and teachers can connect! They can post questions, share resources, make announcements, repost other's posts and engage with peers. It features live filtering, searching, sorting by upvotes, repost functionality, and a custom, playful UI, making it easy to stay connected and organized in any class environment.",
      impact: "300+ reviews aggregated; courses filterable by difficulty and time commitment",
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
  ];
  
  export const getFeaturedProjects = () => projects.filter(p => p.featured);