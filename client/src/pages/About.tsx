import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { GiantHeading } from '../components/GiantHeading';
import { PhotoScatter } from '../components/PhotoScatter';
import { ScrollReveal } from '../components/ScrollReveal';
import { TechBadge } from '../components/TechBadge';
import { TextRotate } from '../components/fancy/text-rotate';
import { useDocumentMeta } from '@/lib/useDocumentMeta';

/* TODO(Allyson) — placeholder drafts written for your reaction. Edit freely. */
const funFacts = [
  'I tend to turn “I wonder if I could build that” into an actual repo.',
  'I like the messy, creative stage of a project where nobody quite knows what the answer is yet.',
  "I'll happily spend time tweaking spacing by a few pixels just to get it right.",
  "I'm learning German, Japanese, Spanish and French on Duolingo, because apparently one language at a time was too reasonable.",
  'My learning backlog is consistently more ambitious than the number of hours in a week.',
  'I can happily lose an afternoon to gardening, cooking, or a Spotify playlist.',
];

const lifeStack = [
  'Coffee',
  'Matcha anything',
  'Audiobooks',
  'Bike rides',
  'Fresh flowers',
  'Cozy mornings',
  'Skincare nights',
  'Weekend walks',
  'Art museums',
  'Cooking something new',
  'Lifting',
  'Music',
  'Language streaks',
  'Learning rabbit holes',
  'Side-project spirals',
  'Deep-dive research sessions'
];

const nowItems = [
  'Interning at Itron on the Temetra mobile software team',
  'Acting as a founding engineer for Todd',
  'Studying for my B.S. in Software Engineering at WGU',
  'Starting the Break Through Tech Fall AI Studio — building an AI/ML project for Chewy',
];

const About = () => {
  useDocumentMeta(
    'About — Allyson Keightley',
    'Product-minded software engineer. Coffee-fueled, curious, and building for the plot.'
  );

  return (
    <div>
      <div className="container max-w-5xl space-y-20 pt-24 md:space-y-24 md:pt-30">
        {/* Header */}
        <header className="space-y-6">
          <span className="eyebrow">About</span>
          <GiantHeading as="h1" text="Nice to meet you." />
          <div className="flex flex-wrap items-baseline gap-x-2 text-lg text-muted-foreground">
            <span>Currently</span>
            <TextRotate
              texts={['creating', 'caffeinating', 'inspiring', 'reading', 'learning']}
              className="font-serif italic text-oxblood"
            />
            <span>— probably all five at once.</span>
          </div>
        </header>

        {/* Story */}
        <ScrollReveal as="section" className="grid gap-10 md:grid-cols-[2fr_1fr] md:gap-20">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground text-balance">
          <p>
            Hey! I'm Allyson (or Ally).<br /> 
            I live on one solid principle: <br /> 
            <span className="font-serif italic text-sage text-2xl">Everything is figureoutable.</span>
          </p>
          <p>
            I dig in, learn fast, build fast, and usually end up going a few layers
            deeper than I meant to because I want to understand how something works, why
            it works, and how it could work better.
          </p>

          <p>
            I love the space where engineering, product, and design start to blur together.
            Good design makes me drool a little. Tiny interactions matter. Thoughtful
            spacing matters. The way a button responds, the way a screen transitions, the
            way an empty state feels... those details are part of the product, not extras.
          </p>

<div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
  <p>
    I’m naturally curious and very hands-on. If I want to understand something,
    I usually build with it. That’s how I learn best. Try it, break it, rebuild
    it, ship it, and see what I’d do differently next time.
  </p>

  <p>
    Across Kahani, Todd, and Itron, my role has tended to grow beyond the thing I
    was originally asked to do. I like that. I like being useful, asking good
    questions, taking ownership, and helping turn fuzzy ideas into something
    real and beautiful.
  </p>

  <p>
    Away from the keyboard, I’m probably getting inspiration for my project or learning something new.{' '}
    <span className="font-serif italic text-oxblood">Because why not?</span>
  </p>
</div>
          </div>
        </ScrollReveal>
      </div>

      {/* Photos — full-bleed scatter collage */}
      <PhotoScatter />

      <div className="container max-w-5xl space-y-20 pb-24 md:space-y-24 md:pb-30">
        {/* Fun facts + life stack */}
        <section className="grid gap-10 md:grid-cols-[1fr_280px] md:gap-16">
          <div className="space-y-6">
            <ScrollReveal>
              <span className="eyebrow">Fun facts</span>
            </ScrollReveal>
            <ul>
              {funFacts.map((fact, i) => (
                <ScrollReveal
                  as="li"
                  key={fact}
                  delay={(i % 4) * 0.04}
                  className="flex items-baseline gap-4 border-b border-foreground/10 py-4"
                >
                  <span className="font-mono text-sm text-dusty">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-muted-foreground">{fact}</span>
                </ScrollReveal>
              ))}
            </ul>
          </div>
          <ScrollReveal className="space-y-4 md:sticky md:top-28 md:self-start">
            <span className="eyebrow">Life stack</span>
            <div className="flex flex-wrap gap-2">
              {lifeStack.map((item) => (
                <TechBadge
                  key={item}
                  tech={item}
                  className="border-sage/40 bg-sage/5 text-sage hover:border-sage/70 hover:text-sage"
                />
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Now — absorbed from the old /now page */}
        <ScrollReveal as="section" className="rounded-2xl border border-foreground/10 bg-surface-elevated p-8 md:p-12">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sage" />
              Right now
            </span>
            <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {nowItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ochre" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="flex flex-col items-start gap-4 border-t border-foreground/15 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-muted-foreground">
            Want the professional version of this page?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Experience
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/50"
            >
              Say hello
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;
