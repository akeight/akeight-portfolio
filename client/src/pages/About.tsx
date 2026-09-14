import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { GiantHeading } from '../components/GiantHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { TechBadge } from '../components/TechBadge';
import { TextRotate } from '../components/fancy/text-rotate';
import { useDocumentMeta } from '@/lib/useDocumentMeta';
import { cn } from '@/lib/utils';

/*
 * TODO(Allyson) — pre-publish photo checks:
 *  - conference.jpg: confirm which conference this is (caption currently generic).
 *  - itron-foodbank.jpg: confirm you're comfortable with coworkers' faces being public.
 *  - desk-setup.jpg: confirm nothing sensitive is legible on the screens.
 */
const photos = [
  {
    src: '/about/park-day.jpg',
    alt: 'Reading on a blanket in the park on a sunny day',
    caption: 'Park day — blanket, book, snacks',
    rotate: '-rotate-2',
  },
  {
    src: '/about/coffee.jpg',
    alt: 'A latte on a café table',
    caption: '"Coffee-fueled" by nature',
    rotate: 'rotate-1',
  },
  {
    src: '/about/river.jpg',
    alt: 'A Pacific Northwest river between evergreen banks',
    caption: 'Touching grass is a lifestyle, not a saying',
    rotate: '-rotate-1'
  },
  {
    src: '/about/itron-foodbank.jpg',
    alt: 'Volunteering at the food bank with the Itron team',
    caption: 'Food-bank day with the Itron team',
    rotate: 'rotate-2',
  },
  {
    src: '/about/conference.jpg',
    alt: 'At a tech conference',
    caption: 'Conference season',
    rotate: 'rotate-1',
  },
  {
    src: '/about/desk-setup.jpg',
    alt: 'Home desk setup with two monitors',
    caption: 'Where the commits happen',
    rotate: '-rotate-1',
  },
];

/* TODO(Allyson) — placeholder drafts written for your reaction. Edit freely. */
const funFacts = [
  'I tend to turn “I wonder if I could build that” into an actual repo.',
  'I like the mess, creative stage of a project where nobody quite knows what the answer is yet.',
  "I'll happily spend time tweaking spacing by a few pixels just to get it right...just ask Vincent Todd.",
  "I'm learning German, Japanese, Spanish and French on Duolingo, because apparently one language at a time was too reasonable.",
  'My learning backlog is consistently more ambitious than the number of hours in a week.',
  'I can happily lose an afternoon to gardening, cooking, or an audiobook.',
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
  'Cooking something new',
  'Lifting',
  'Language streaks',
  'Learning rabbit holes',
  'Side-project spirals',
  'Deep-dive research sessions',
  `ADHDmaxxing`
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
    <div className="py-24 md:py-30">
      <div className="container max-w-5xl space-y-20 md:space-y-24">
        {/* Header */}
        <header className="space-y-6">
          <span className="eyebrow">About</span>
          <GiantHeading as="h1" text="Nice to meet you." />
          <div className="flex flex-wrap items-baseline gap-x-2 text-lg text-muted-foreground">
            <span>Currently</span>
            <TextRotate
              texts={['shipping', 'caffeinating', 'debugging', 'reading', 'learning']}
              className="font-serif italic text-oxblood"
            />
            <span>— probably all five at once.</span>
          </div>
        </header>

        {/* Story */}
        <ScrollReveal as="section" className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
  Hey! I'm Allyson (or Ally).<br /> 
  I live on one solid principle: <br /> 
  Everything is figureoutable.
  </p>
  <p>
  I dig in,learn fast, build fast, and usually end up going a few layers
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

        {/* Photos */}
        <section className="space-y-8">
          <ScrollReveal className="flex items-baseline justify-between gap-4">
            <span className="eyebrow">Field notes</span>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              Proof of life outside the screen
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
            {photos.map((photo, i) => (
              <ScrollReveal key={photo.src} delay={(i % 3) * 0.06}>
                <figure
                  className={cn(
                    'group overflow-hidden rounded-xl border border-foreground/10 bg-surface-elevated p-2 pb-3 shadow-sm transition-transform duration-300 hover:rotate-0 hover:shadow-md',
                    photo.rotate
                  )}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="aspect-square w-full rounded-lg object-cover"
                  />
                  <figcaption className="pt-2.5 text-center font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">
                    {photo.caption}
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </section>

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
