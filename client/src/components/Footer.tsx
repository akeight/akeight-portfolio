import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SimpleMarquee } from './fancy/simple-marquee';
import { AnimatedUnderline } from './fancy/underline-animation';

const socials = [
  { label: 'GitHub', href: 'https://github.com/akeight' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/allyson-keightley' },
  { label: 'Email', href: 'mailto:allysondunning@gmail.com' },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden border-t border-foreground/15 bg-foreground py-14 text-background md:py-20">
      {/* CTA */}
      <div className="container mt-28 md:mt-40">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div className="space-y-5">
            <span className="eyebrow text-background/60">Let's connect</span>
            <h2 className="display text-display-sm max-w-2xl">
              Have a project or role in mind?
            </h2>
          </div>
          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-background/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Oversized marquee wordmark */}
      <SimpleMarquee
        speed={60}
        className="border-y border-background/15 py-4 md:py-6"
      >
        <span className="px-6 text-6xl font-semibold uppercase tracking-tight sm:text-7xl md:px-8 md:text-8xl">
          AI Native
        </span>
        <span className="px-6 text-6xl font-semibold uppercase tracking-tight text-background/40 sm:text-7xl md:px-8 md:text-8xl">
          Software Engineer
        </span>
        <span className="px-6 text-6xl font-semibold uppercase tracking-tight sm:text-7xl md:px-8 md:text-8xl">
          Product Builder
        </span>
        <span className="px-6 text-6xl font-semibold uppercase tracking-tight text-background/40 sm:text-7xl md:px-8 md:text-8xl">
          Mobile Developer
        </span>
      </SimpleMarquee>

      {/* Bottom row */}
      <div className="container flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-background/60">
          © {year} Allyson Keightley — Building with purpose
        </p>
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-background/80 transition-colors hover:text-background"
            >
              <AnimatedUnderline>{s.label}</AnimatedUnderline>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
