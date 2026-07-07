export type Experience = {
    id: string;
    role: string;
    organization: string;
    period: string;
    highlights: string[];
    type: 'work' | 'project' | 'education';
    /** Tools/tech used in this role (powers the Home experience accordion). */
    tech?: string[];
  };
  
  export const experience: Experience[] = [
    {
      id: "hackhq",
      role: "Founding Open Source Contributor",
      organization: "HackHQ",
      period: "June 2026 - Present",
      highlights: [
        "Maintaining and updating the HackHQ open-source repository for finding hackathons with my hackathon team",
        "Designing, developing, and deploying the corresponding website",
        "Planning feature development roadmap and implementing new features",
      ],
      type: "project",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Vite", "ShadCN/Radix UI", "React Router", "Framer Motion", "Vercel"]
    },
    {
      id: "itron",
      role: "Mobile Application Developer Intern",
      organization: "Itron",
      period: "April 2026 - Present",
      highlights: [
        "Supporting the Temetra mobile application team in feature development, unit testing, and debugging",
        "Built and hardend over 1000 unit tests for the maintainability and reliability of the application",
        "Implemented a new feature for customers to easily submit diagnostic/log data to the support team, streamlined the process by 60%; published a design document in the end-to-end process",
      ],
      type: "work",
      tech: ["C#", ".NET MAUI", "XAML", "Azure DevOps", "Moq", "MS Test"]
    },
    {
      id: "todd-swe",
      role: "Frontend Engineer Intern",
      organization: "Todd",
      period: "January 2026 - April 2026",
      highlights: [
        "Implementing Figma-driven UI for marketing site and client dashboard using modern web technologies and testing and consistent quality for frontend development",
        "Leading and mentoring a small team of company externship participants in weekly development projects and foundations",
      ],
      type: "work",
      tech: ["React", "TypeScript", "TailwindCSS", "Figma", "Framer Motion", "Sanity", "CI/CD", "GitHub Actions", "GitHub"]
    },
    {
      id: "break-through-tech",
      role: "AI Fellow",
      organization: "Break Through Tech",
      period: "May 2026 - Present",
      highlights: [
        "Year-long hands-on AI/ML training with industry experts and Cornell Tech",
      ],
      type: "education",
      tech: ["Python", "NumPy", "Pandas", "SciKit Learn"]
    },
    {
      id: "mlt-cp",
      role: "Career Prep Program Fellow",
      organization: "Management Leaders of Tomorrow (MLT)",
      period: "January 2026 - Present",
      highlights: [
        "Accepted into a selective 18-month professional development program that accelerates the career growth of emerging leaders through structured coaching, mentorship, and targeted skill-building",
        "Develop business and technical acumen through hands-on technical assessments, case studies, simulations, and project work designed to strengthen analytical, strategic, and leadership capabilities",
        "Engage with leading partner organizations (e.g., LinkedIn, Bloomberg, and Deloitte) to gain industry exposure and insight into tech-talent pathways"
      ],
      type: "work"
    },
    {
      id: "kahani-swe",
      role: "Mobile Engineer Intern",
      organization: "Kahani",
      period: "September 2025 - January 2026",
      highlights: [
        "Built Flutter/Dart cross-platform mobile app features with GCP Firebase backend",
        "Set up MVVM feature-first folder architecture, improving code reuse and dropping time by 30%",
        "Accelerated onboarding flow; implemented CI/CD pipeline with GitHub Actions to cut PR cycle time",
        "Authored dev guides that made build reproducible, lowering new-machine setup from 2 hrs to 30 minutes and unblocking 80% teammates",
        "Solo developed the new Kahani website based on Figma designs", 
      ],
      type: "work",
      tech: ["Flutter", "Dart", "Firebase", "GCP", "GitHub Actions", "CI/CD"]
    },
    {
      id: "kahani-pm",
      role: "Product Manager Intern",
      organization: "Kahani",
      period: "October 2025 - December 2025",
      highlights: [
        "Owned day-to-day product execution across design and engineering to ship learning-driven iterations",
        "Lead cross-functional ceremonies and debriefs; track milestones, owners, deliverables, and timelines",
      ],
      type: "work",
      tech: ["Figma", "Slack", "Notion", "Google Workspace"]
    },
    {
      id: "ai-ml-projects",
      role: "Ignite Accelerator Fellow",
      organization: "AI4ALL",
      period: "September 2025 - March 2026",
      highlights: [
        "20 weeks of hands-on AI/ML training with industry experts",
        "Built ResNet50 blood cell classifier with Grad-CAM visualization",
        "Deployed FastAPI inference endpoint with React frontend for real-time classification"
      ],
      type: "education",
      tech: ["Python", "TensorFlow", "Keras", "FastAPI", "React", "Grad-CAM", "scikit-learn", "NumPy", "Pandas"]
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
      type: "education",
      tech: ["Python", "AWS Bedrock", "S3", "Aurora PostgreSQL", "Streamlit", "Terraform"]
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

  /** Work roles with a defined tech stack — used by the Home experience accordion. */
  export const featuredExperience = experience.filter(
    (exp) => exp.type === 'work' && exp.tech && exp.tech.length > 0
  );
