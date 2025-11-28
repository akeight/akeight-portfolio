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
        "Own day-to-day product execution across design and engineering to ship learning-driven iterations",
        "Lead cross-functional ceremonies and debriefs; track milestones, owners, deliverables, and timelines",
        "Align scope for A/B test pilots, define success criteria, and ensure learnings translate into the roadmap"
      ],
      type: "work"
    },
    {
      id: "kahani-swe",
      role: "Software Engineer Intern",
      organization: "Kahani",
      period: "September 2025 - Present",
      highlights: [
        "Built Flutter/Dart features with GCP Firebase backend",
        "Set up MVVM feature-first folder architecture, improving code reuse and dropping time by 30%",
        "Accelerated onboarding flow; implemented CI/CD pipeline with GitHub Actions to cut PR cycle time",
        "Authored dev guides that made build reproducible, lowering new-machine setup from 2 hrs to 30 minutes and unblocking 80% teammates", 
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
      id: "aws-ai-engineer-nanodegree",
      role: "AWS AI Engineer Nanodegree Scholar",
      organization: "Udacity & AWS",
      period: "September 2025 - November 2025",
      highlights: [
        "Awarded a competitive scholarship to the AWS AI Engineer Nanodegree (≈3% acceptance rate)",
        "Built and deployed deep learning models using AWS Bedrock, S3, Aurora PostgreSQL, and Streamlit",
        "Developed end-to-end ML pipelines with a focus on production readiness and MLOps best practices",
        "Deep focus on ethical AI, responsible model deployment, and safety guardrails for real-world applications"
      ],
      type: "education"
    },
    {
      id: "wgu-education",
      role: "B.S. Software Engineering",
      organization: "Western Governors University",
      period: "Expected Graduation: May 2028",
      highlights: [
        "Focus: Full-stack development, algorithms, and software architecture",
        "Relevant coursework: Data structures, Front-End Web Development, Python Programming"
      ],
      type: "education"
    }
  ];