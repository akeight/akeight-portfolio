export type Photo = {
  src: string;
  alt: string;
  caption: string;
};

/*
 * TODO(Allyson) — pre-publish photo checks:
 *  - conference.jpg: confirm which conference this is (caption currently generic).
 *  - itron-foodbank.jpg: confirm you're comfortable with coworkers' faces being public.
 *  - desk-setup.jpg: confirm nothing sensitive is legible on the screens.
 */
/** Life-outside-the-screen photos for the About scatter collage. */
export const photos: Photo[] = [
  {
    src: '/about/park-day.jpg',
    alt: 'Reading on a blanket in the park on a sunny day',
    caption: 'Park day — blanket, book, snacks',
  },
  {
    src: '/about/coffee.jpg',
    alt: 'A latte on a café table',
    caption: '"Coffee-fueled" by nature',
  },
  {
    src: '/about/river.jpg',
    alt: 'A Pacific Northwest river between evergreen banks',
    caption: 'Touching grass is a lifestyle, not a saying',
  },
  {
    src: '/about/itron-foodbank.jpg',
    alt: 'Volunteering at the food bank with the Itron team',
    caption: 'Food-bank day with the Itron team',
  },
  {
    src: '/about/conference.jpg',
    alt: 'At a tech conference',
    caption: 'Conference season',
  },
  {
    src: '/about/desk-setup.jpg',
    alt: 'Home desk setup with two monitors',
    caption: 'Where the commits happen',
  },
];
