export type SkillCategory = {
    category: string;
    items: string[];
  };
  
  export const engineeringSkills: SkillCategory[] = [
    {
      category: "Languages",
      items: ["C#", "Python", "JavaScript", "TypeScript", "SQL", "Swift", "Dart"]
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", ".NET MAUI", "TailwindCSS", "React Native","Flutter", "SwiftUI"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "Prisma", "PostgreSQL", "Supabase", "Firebase"]
    },
    {
      category: "AI/ML",
      items: ["NumPy", "Pandas", "TensorFlow", "Keras", "Scikit-learn", "AWS Bedrock"]
    },
    {
      category: "DevOps",
      items: ["Docker", "CI/CD", "Vercel", "GitHub Actions"]
    },
    {
      category: "Design",
      items: ["Figma", "Procreate", "Canva", "Prototyping", "User Research", "User Testing"]
    }
  ];
  
  export const productSkills: SkillCategory[] = [
    {
      category: "Discovery",
      items: ["User Interviews", "Problem Definition", "Market Research"]
    },
    {
      category: "Strategy",
      items: ["PRDs", "Roadmapping", "Feature Prioritization", "MVP Definition", "Technical Documentation"]
    },
    {
      category: "Metrics",
      items: ["A/B Testing", "KPI Tracking", "User Analytics", "Data-Driven Decisions"]
    },
    {
      category: "Tools",
      items: ["Figma", "Notion", "Slack", "Zoom", "Google Workspace"]
    }
  ];
