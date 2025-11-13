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
      role: "Product Manager",
      organization: "Kahani",
      period: "October 2025 - Present",
      highlights: [
        "Led MVP internship squad to run A/B tests; improved pilot retention by ~30%",
        "Drove customer discovery with 20+ user interviews; shaped product roadmap"
      ],
      type: "work"
    },
    {
      id: "kahani-swe",
      role: "Software Engineer Intern",
      organization: "Kahani",
      period: "September 2025 - Present",
      highlights: [
        "Built Flutter/Dart features with Firebase backend",
        "Accelerated onboarding flow; implemented CI/CD pipeline with GitHub Actions"
      ],
      type: "work"
    },
    {
      id: "ai-ml-projects",
      role: "Ignite Accelerator Fellow",
      organization: "AI4ALL",
      period: "September 2025 - Present",
      highlights: [
        "20 weeks of hands-on AI/ML training with industry experts",
        "Built ResNet50 blood cell classifier with Grad-CAM visualization",
        "Deployed FastAPI inference endpoint with React frontend for real-time classification"
      ],
      type: "education"
    },
    {
      id: "wgu-education",
      role: "B.S. Software Engineering",
      organization: "Western Governors University",
      period: "Expected Graduation: May 2028",
      highlights: [
        "Focus: Full-stack development, algorithms, and AI/ML",
        "Relevant coursework: Data structures, Front-End Web Development, Python Programming"
      ],
      type: "education"
    }
  ];