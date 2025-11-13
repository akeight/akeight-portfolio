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
    category: string;
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
        caseStudy: "/projects/internship-tracker"
      },
      cover: "/src/assets/projects/internship-tracker.jpg",
      featured: true,
      category: "Web App"
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
        caseStudy: "/projects/spacex-dashboard"
      },
      cover: "/spacex-dashboard.gif",
      featured: true,
      category: "Data Visualization"
    },
    {
      slug: "blood-cell-classifier",
      title: "Blood Cell Classifier",
      tagline: "ResNet50 model with Grad-CAM visualization and FastAPI deployment",
      impact: "End-to-end ML demo; deployed inference endpoint with heatmap UI",
      stack: ["PyTorch", "FastAPI", "React", "Vite"],
      links: {
        repo: "https://github.com/akeight/ai4all",
        demo: "",
        caseStudy: "/projects/all-classifier"
      },
      cover: "/src/assets/projects/all-classifier.jpg",
      featured: true,
      category: "AI/ML"
    },
    {
      slug: "wgu-course-explorer",
      title: "WGU Course Explorer",
      tagline: "Community-driven platform for course reviews and difficulty ratings",
      impact: "300+ reviews aggregated; courses filterable by difficulty and time commitment",
      stack: ["React", "Vite", "Node.js", "Express", "TailwindCSS", "ShadCN/Radix UI", "React Router", "PostgreSQL", "Render"],
      links: {
        repo: "https://github.com/akeight/wgu-explorer",
        demo: "",
        caseStudy: "/projects/wgu-course-explorer"
      },
      cover: "/course-explorer.gif",
      featured: true,
      category: "Community Tool"
    }
  ];
  
  export const getFeaturedProjects = () => projects.filter(p => p.featured);