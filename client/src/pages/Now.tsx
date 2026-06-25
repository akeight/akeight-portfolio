import { Briefcase, PartyPopper, Brain } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { GiantHeading } from '../components/GiantHeading';
import { ScrollReveal } from '../components/ScrollReveal';

const Now = () => {
  const focuses = [
    {
      icon: Briefcase,
      title: 'Itron',
      description:
        'Interning on the Temetra team for mobile app development using C# and .NET MAUI',
      progress: 50,
    },
    {
      icon: Brain,
      title: 'WGU',
      description: "Studying for my Bachelor's in Software Engineering",
      progress: 50,
    },
    {
      icon: PartyPopper,
      title: 'Break Through Tech Machine Learning Foundations',
      description: 'AI Program in partnership with Cornell Tech',
      progress: 50,
    },
  ];

  const weeklyGoals = [
    'Continue to work on software with Itron.',
    'Continue to act as a frontend advisor for Todd.',
    'Weekly labs and coursework with the Break Through Tech program.',
    'Worked through the LinkedIn or LeftOut Tech Interview prep course.',
  ];

  return (
    <div className="py-24 md:py-32">
      <div className="container max-w-4xl space-y-20">
        {/* Header */}
        <header className="space-y-5">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Now — updated June 25, 2026
          </span>
          <GiantHeading as="h1" text="What I'm up to." className="max-w-[12ch]" />
          <p className="max-w-xl text-lg text-muted-foreground">
            What I'm currently focused on building, learning, and exploring. Updated weekly.
          </p>
        </header>

        {/* Current focuses */}
        <section className="space-y-8">
          <h2 className="border-b border-foreground/15 pb-4 text-3xl font-semibold tracking-tight">
            Current focuses
          </h2>
          <div className="grid gap-px overflow-hidden rounded-xl border border-foreground/10 bg-foreground/10 sm:grid-cols-1">
            {focuses.map((focus, index) => {
              const Icon = focus.icon;
              return (
                <ScrollReveal
                  key={focus.title}
                  delay={index * 0.06}
                  className="space-y-4 bg-surface-elevated p-6 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-foreground/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-lg font-semibold tracking-tight">{focus.title}</h3>
                        <span className="font-mono text-xs text-muted-foreground">
                          {focus.progress}%
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{focus.description}</p>
                      <Progress value={focus.progress} className="h-1.5" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Weekly goals */}
        <section className="space-y-8">
          <h2 className="border-b border-foreground/15 pb-4 text-3xl font-semibold tracking-tight">
            This week's goals
          </h2>
          <ul className="space-y-1">
            {weeklyGoals.map((goal, index) => (
              <ScrollReveal
                as="li"
                key={index}
                delay={index * 0.05}
                className="flex items-center gap-4 border-b border-foreground/10 py-4"
              >
                <span className="font-mono text-sm text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{goal}</span>
              </ScrollReveal>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Now;
