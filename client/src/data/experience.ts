export type Experience = {
    id: string;
    role: string;
    organization: string;
    period: string;
    highlights: string[];
    type: 'work' | 'project' | 'education';
  };
  
  export const experience: Experience[] = [
    {
      id: "kahani-pm",
      role: "Technical Product Manager",
      organization: "Kahani",
      period: "2024 - Present",
      highlights: [
        "Led MVP squad to ship Feature X; improved pilot retention by ~30%",
        "Drove customer discovery with 20+ user interviews; shaped product roadmap"
      ],
      type: "work"
    },
    {
      id: "kahani-swe",
      role: "Frontend Software Engineer Intern",
      organization: "Kahani",
      period: "2023 - 2024",
      highlights: [
        "Built Flutter/BLoC features with Firebase backend",
        "Accelerated onboarding flow; implemented CI/CD pipeline"
      ],
      type: "work"
    },
    {
      id: "ai-ml-projects",
      role: "AI/ML Student Projects",
      organization: "WGU & Self-Directed",
      period: "2024",
      highlights: [
        "ResNet50 blood cell classifier with Grad-CAM visualization",
        "Deployed Vertex AI inference endpoint with React frontend"
      ],
      type: "project"
    },
    {
      id: "wgu-education",
      role: "B.S. Software Engineering",
      organization: "Western Governors University",
      period: "2023 - Present",
      highlights: [
        "Focus: Full-stack development, algorithms, and AI/ML",
        "Relevant coursework: Data structures, software design, cloud computing"
      ],
      type: "education"
    }
  ];