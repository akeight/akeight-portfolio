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
    audienceWeight?: {
      SWE: number;
      PM: number;
    };
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
        repo: "https://github.com/allyson/internship-tracker",
        demo: "https://internship-tracker.vercel.app",
        caseStudy: "/projects/internship-tracker"
      },
      cover: "/src/assets/projects/internship-tracker.jpg",
      featured: true,
      audienceWeight: { SWE: 0.9, PM: 0.7 },
      category: "Web App"
    },
    {
      slug: "spacex-dashboard",
      title: "SpaceX Launch Dashboard",
      tagline: "Real-time launch events explorer with advanced filtering and charts",
      impact: "Surfaced 15+ KPIs; caching strategy reduced API calls by ~35%",
      stack: ["React", "Vite", "TypeScript", "Recharts", "TanStack Query", "Tailwind"],
      links: {
        repo: "https://github.com/allyson/spacex-dashboard",
        demo: "https://spacex-dash.netlify.app",
        caseStudy: "/projects/spacex-dashboard"
      },
      cover: "/src/assets/projects/spacex-dashboard.jpg",
      featured: true,
      audienceWeight: { SWE: 0.8, PM: 0.6 },
      category: "Data Visualization"
    },
    {
      slug: "blood-cell-classifier",
      title: "Blood Cell Classifier",
      tagline: "ResNet50 model with Grad-CAM visualization and Vertex AI deployment",
      impact: "End-to-end ML demo; deployed inference endpoint with heatmap UI",
      stack: ["PyTorch", "FastAPI", "React", "Vite", "Vertex AI", "Docker"],
      links: {
        repo: "https://github.com/allyson/blood-cell-classifier",
        demo: "https://blood-cell-demo.vercel.app",
        caseStudy: "/projects/blood-cell-classifier"
      },
      cover: "/src/assets/projects/blood-cell-classifier.jpg",
      featured: true,
      audienceWeight: { SWE: 1.0, PM: 0.5 },
      category: "AI/ML"
    },
    {
      slug: "wgu-course-explorer",
      title: "WGU Course Explorer",
      tagline: "Community-driven platform for course reviews and difficulty ratings",
      impact: "300+ reviews aggregated; courses filterable by difficulty and time commitment",
      stack: ["Next.js", "Supabase", "TypeScript", "Tailwind", "Shadcn/ui"],
      links: {
        repo: "https://github.com/allyson/wgu-explorer",
        demo: "https://wgu-courses.vercel.app",
        caseStudy: "/projects/wgu-course-explorer"
      },
      cover: "/src/assets/projects/course-explorer.jpg",
      featured: true,
      audienceWeight: { SWE: 0.7, PM: 0.9 },
      category: "Community Tool"
    }
  ];
  
  export const getFeaturedProjects = () => projects.filter(p => p.featured);
  
  export const getProjectsByAudience = (audience: 'SWE' | 'PM') => {
    return [...projects].sort((a, b) => {
      const weightA = a.audienceWeight?.[audience] ?? 0.5;
      const weightB = b.audienceWeight?.[audience] ?? 0.5;
      return weightB - weightA;
    });
  };