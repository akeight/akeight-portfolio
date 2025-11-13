export type SkillCategory = {
    category: string;
    items: string[];
  };
  
  export const engineeringSkills: SkillCategory[] = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter", "Vite"]
    },
    {
      category: "Backend",
      items: ["Node.js", "FastAPI", "tRPC", "Prisma", "PostgreSQL", "Supabase", "Firebase"]
    },
    {
      category: "AI/ML",
      items: ["NumPy", "Pandas", "TensorFlow", "Keras", "Scikit-learn", "Grad-CAM"]
    },
    {
      category: "DevOps",
      items: ["Docker", "CI/CD", "Vercel", "GitHub Actions", "Firebase"]
    },
    // {
    //   category: "Testing",
    //   items: ["Jest", "React Testing Library", "Playwright", "Unit Testing"]
    // }
  ];
  
  export const productSkills: SkillCategory[] = [
    {
      category: "Discovery",
      items: ["User Interviews", "Customer Research", "Problem Definition", "Market Analysis"]
    },
    {
      category: "Strategy",
      items: ["PRDs", "Roadmapping", "Feature Prioritization", "MVP Definition"]
    },
    {
      category: "Metrics",
      items: ["A/B Testing", "KPI Tracking", "User Analytics", "Data-Driven Decisions"]
    },
    {
      category: "Tools",
      items: ["Figma", "Notion", "Jira", "Mode", "Amplitude", "Linear"]
    }
  ];