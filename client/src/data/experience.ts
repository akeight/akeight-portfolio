export type Experience = {
  id: string;
  role: string;
  /**
   * Optional public-facing title override (e.g. a role progression).
   * Rendered instead of `role` wherever the title appears.
   */
  displayTitle?: string;
  organization: string;
  period: string;
  highlights: string[];
  /** 'work' = professional roles · 'program' = fellowships/career programs · 'education' = degrees. */
  type: 'work' | 'project' | 'education' | 'program';
  /** Tools/tech used in this role (powers the Home experience accordion). */
  tech?: string[];
};

export const experience: Experience[] = [
  {
    id: 'hackhq',
    role: 'Founding Open Source Contributor',
    organization: 'HackHQ',
    period: 'June 2026 - Present',
    highlights: [
      'Maintaining and updating the HackHQ open-source repository for finding hackathons with my hackathon team',
      'Designing, developing, and deploying the corresponding website',
      'Planning feature development roadmap and implementing new features',
    ],
    type: 'project',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vite', 'ShadCN/Radix UI', 'React Router', 'Framer Motion', 'Vercel'],
  },
  {
    id: 'itron',
    role: 'Mobile Application Developer Intern',
    organization: 'Itron',
    period: 'April 2026 - Present',
    highlights: [
      'Supporting the Temetra mobile application team in feature development, unit testing, and debugging',
      // TODO(verify): "1000 unit tests" — source from test suite / records before keeping the number.
      'Built and hardened over 1000 unit tests for the maintainability and reliability of the application',
      // TODO(verify): "60%" — source before keeping the number; qualitative fallback: "significantly streamlined the process".
      'Implemented a new feature for customers to easily submit diagnostic/log data to the support team, streamlined the process by 60%; published a design document in the end-to-end process',
      'Refactoring scattered hard-coded color values into a reusable semantic token system designed to support light, dark, and system themes (foundation work, in progress)',
    ],
    type: 'work',
    tech: ['C#', '.NET MAUI', 'XAML', 'Azure DevOps', 'Moq', 'MS Test'],
  },
  {
    id: 'todd-swe',
    role: 'Frontend Engineer Intern',
    // Title progression confirmed by Allyson 2026-09-13.
    displayTitle: 'Frontend Engineer Intern → Founding Engineer',
    organization: 'Todd',
    period: 'January 2026 - Present',
    highlights: [
      'Implementing Figma-driven UI for the marketing site and client dashboard with consistent frontend quality and testing',
      'Leading and mentoring a small team of company externship participants: onboarding, development workflow, PR process, and code-review standards',
      'Helped carry the public site and Todd Iris v1 to launch quality — typography, hierarchy, spacing, color, and interaction polish on functional output',
      'Translating founder direction into features, issues, and engineering tasks; ongoing code review and workflow guidance',
      'Contributed 59 PRs and counting',
      'Generated 100k+ LinkedIn impressions for marketing and growth',
    ],
    type: 'work',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Figma', 'Framer Motion', 'Sanity', 'CI/CD', 'GitHub Actions', 'GitHub'],
  },
  {
    id: 'break-through-tech',
    role: 'AI Fellow',
    organization: 'Break Through Tech',
    period: 'May 2026 - Present',
    highlights: ['Year-long hands-on AI/ML training with industry experts and Cornell Tech'],
    type: 'program',
    tech: ['Python', 'NumPy', 'Pandas', 'SciKit Learn', 'Keras'],
  },
  {
    id: 'mlt-cp',
    role: 'Career Prep Program Fellow',
    organization: 'Management Leaders of Tomorrow (MLT)',
    period: 'January 2026 - Present',
    highlights: [
      'Accepted into a selective 18-month professional development program that accelerates the career growth of emerging leaders through structured coaching, mentorship, and targeted skill-building',
      'Develop business and technical acumen through hands-on technical assessments, case studies, simulations, and project work designed to strengthen analytical, strategic, and leadership capabilities',
      'Engage with leading partner organizations (e.g., LinkedIn, Bloomberg, and Deloitte) to gain industry exposure and insight into tech-talent pathways',
    ],
    type: 'program',
  },
  {
    // Stacks verified by Allyson 2026-09-13: mobile Flutter/Dart/Firebase; extension web build React/Vite/Firebase.
    id: 'kahani-swe',
    role: 'Mobile Engineer Intern',
    organization: 'Kahani',
    period: 'September 2025 - January 2026',
    highlights: [
      'Built Flutter/Dart cross-platform mobile app features with GCP Firebase backend',
      // TODO(verify): "30%" — source before keeping the number.
      'Set up MVVM feature-first folder architecture, improving code reuse and dropping time by 30%',
      'Accelerated onboarding flow; implemented CI/CD pipeline with GitHub Actions to cut PR cycle time',
      // TODO(verify): "2 hrs to 30 minutes" and "80% teammates" — source before keeping the numbers.
      'Authored dev guides that made builds reproducible, lowering new-machine setup from 2 hrs to 30 minutes and unblocking 80% of teammates',
      'Became one of two engineers carrying the project to completion through team attrition; only intern offered an extension',
      'During the extension, solo-built the new Kahani website from supplied Figma designs (React / Vite / Firebase)',
      // TODO(verify): "~60-70% of commits" — unpublished until verified from repo history.
    ],
    type: 'work',
    tech: ['Flutter', 'Dart', 'Firebase', 'GCP', 'GitHub Actions', 'CI/CD'],
  },
  {
    id: 'kahani-pm',
    role: 'Product Manager Intern',
    organization: 'Kahani',
    period: 'October 2025 - December 2025',
    highlights: [
      'Owned day-to-day product execution across design and engineering to ship learning-driven iterations',
      'Led cross-functional ceremonies and debriefs; tracked milestones, owners, deliverables, and timelines',
    ],
    type: 'work',
    tech: ['Figma', 'Slack', 'Notion', 'Google Workspace'],
  },
  {
    id: 'ai-ml-projects',
    role: 'Ignite Accelerator Fellow',
    organization: 'AI4ALL',
    period: 'September 2025 - March 2026',
    highlights: [
      '20 weeks of hands-on AI/ML training with industry experts',
      'Built ResNet50 blood cell classifier with Grad-CAM visualization',
      'Deployed FastAPI inference endpoint with React frontend for real-time classification',
    ],
    type: 'program',
    tech: ['Python', 'TensorFlow', 'Keras', 'FastAPI', 'React', 'Grad-CAM', 'scikit-learn', 'NumPy', 'Pandas'],
  },
  {
    id: 'aws-ai-engineer-nanodegree',
    role: 'AWS AI Engineer Nanodegree Scholar',
    organization: 'Udacity & AWS',
    period: 'September 2025 - November 2025',
    highlights: [
      'Awarded a competitive scholarship to the AWS AI Engineer Nanodegree (≈3% acceptance rate)',
      'Built and deployed deep learning models using AWS Bedrock, S3, Aurora PostgreSQL, and Streamlit',
      'Developed end-to-end ML pipelines with a focus on production readiness and MLOps best practices',
      'Deep focus on ethical AI, responsible model deployment, and safety guardrails for real-world applications',
    ],
    type: 'program',
    tech: ['Python', 'AWS Bedrock', 'S3', 'Aurora PostgreSQL', 'Streamlit', 'Terraform'],
  },
  {
    id: 'wgu-education',
    role: 'B.S. Software Engineering',
    organization: 'Western Governors University',
    period: 'Expected Graduation: May 2028',
    highlights: [
      'Focus: Full-stack development, algorithms, and software architecture',
      'Relevant coursework: Data structures, Front-End Web Development, Python Programming',
    ],
    type: 'education',
  },
];

/** Work roles with a defined tech stack — used by the Home experience accordion. */
export const featuredExperience = experience.filter(
  (exp) => exp.type === 'work' && exp.tech && exp.tech.length > 0
);

/** Professional roles only — powers the /experience page. */
export const professionalExperience = experience.filter((exp) => exp.type === 'work');

/** Fellowships & structured programs — Resume page section. */
export const programExperience = experience.filter((exp) => exp.type === 'program');

/** Degrees — Resume page section. */
export const educationExperience = experience.filter((exp) => exp.type === 'education');
