import { motion } from 'framer-motion';
import { BookOpen, Code, Briefcase, Target, PartyPopper, GraduationCap, Brain } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Now = () => {
  const focuses = [
    {
      icon: Code,
      title: "Building the new Kahani Health website",
      description: "Extending my fall internship with Kahani to build the new website",
      progress: 90
    },
    {
      icon: Brain,
      title: "Data Structures and Algorithms",
      description: "Studying for Data Structures and Algorithms course",
      progress: 60
    },
    {
      icon: PartyPopper,
      title: "MLT Career Prep Program",
      description: "Orientation for MLT CP, for the class of 2028! Will start in January 2026",
      progress: 0
    },
    {
      icon: GraduationCap,
      title: "Google Generative AI Leader Certification",
      description: "Passed the Google Gen AI Leader Certification exam today!",
      progress: 100
    },
   // {
      //icon: Briefcase,
      //title: "PM/SWE Internship Search",
      //description: "",
      //progress: 100
    //},
     {
       icon: Target,
       title: "Reflect on 2025",
       description: "Celebrate wins and progress made, identify struggles and weak areas, build into 2026",
       progress: 40
     }
  ];

  const weeklyGoals = [
    "Finish building the new Kahani Health website",
    "Upgrade all my React/Next.js projects to the latest version",
    "Enjoy the holiday break with my family, bake insane amounts of Christmas cookies"
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
            Last updated: December 17, 2025
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
