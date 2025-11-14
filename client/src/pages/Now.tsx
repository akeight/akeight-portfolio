import { motion } from 'framer-motion';
import { BookOpen, Code, Briefcase, Target } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Now = () => {
  const focuses = [
    {
      icon: Code,
      title: "Building ALL Classifier Demo",
      description: "As an AI4ALL fellow, our small team is deploying a CNN ResNet50 blood cell classifier with FastAPI backend and React frontend featuring Grad-CAM visualizations",
      progress: 80
    },
    {
      icon: BookOpen,
      title: "CodePath Coursework",
      description: "Completing Web103 (Advanced Web Development) and preparing for Capstone Project",
      progress: 90
    },
    {
      icon: BookOpen,
      title: "CodePath Coursework",
      description: "Completing TIP (Technical Interview Prep)",
      progress: 90
    },
    {
      icon: Briefcase,
      title: "PM Internship Search",
      description: "Actively seeking Summer 2025 Product Management internship to bridge technical and user-focused work",
      progress: 40
    },
    // {
    //   icon: Target,
    //   title: "Open Source Contributions",
    //   description: "Contributing to React ecosystem and building developer tools for the community",
    //   progress: 30
    // }
  ];

  const weeklyGoals = [
    "Ship Vertex AI deployment tutorial blog post",
    "Complete 3 WGU competencies",
    "Apply to 10 PM internship positions",
    "Code review 2 open source PRs"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            <h1 className="text-4xl lg:text-5xl font-bold">Now</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            What I'm currently focused on building, learning, and exploring. Updated weekly.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: November 13, 2025
          </p>
        </motion.div>

        {/* Current Focuses */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">Current Focuses</h2>
          <div className="grid gap-6">
            {focuses.map((focus, index) => {
              const Icon = focus.icon;
              return (
                <motion.div
                  key={focus.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 space-y-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl"><Icon className="h-5 w-5 text-primary flex-shrink-0" /></div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold">{focus.title}</h3>
                        <div className="text-2xl"><Icon className="h-5 w-5 text-primary flex-shrink-0" /></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {focus.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Progress</span>
                          <span>{focus.progress}%</span>
                        </div>
                        <Progress value={focus.progress} className="h-2" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* This Week's Goals */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">This Week's Goals</h2>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
            <ul className="space-y-3">
              {weeklyGoals.map((goal, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span>{goal}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Inspiration */}
        {/* <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card border border-border rounded-xl p-6 space-y-4"
        >
          <h2 className="text-xl font-semibold">Currently Inspired By</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              📖 <span className="text-foreground">The Mom Test</span> by Rob Fitzpatrick — Better customer interviews
            </p>
            <p>
              🎧 <span className="text-foreground">Lenny's Podcast</span> — Product strategy and career growth
            </p>
            <p>
              💡 <span className="text-foreground">Linear's Product Principles</span> — Thoughtful product design
            </p>
          </div>
        </motion.section> */}
      </div>
    </div>
  );
};

export default Now;