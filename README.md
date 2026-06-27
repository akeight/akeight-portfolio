# Allyson Keightley | Portfolio

**Software Engineer & Product Builder** — an editorial, motion-rich portfolio showcasing full-stack projects, AI demos, and product work.

**🔗 Live:** **[akeight-portfolio.vercel.app]
(https://akeight-portfolio.vercel.app/)**

[![View Resume](https://img.shields.io/badge/Résumé-PDF-E8491D?style=for-the-badge&logo=readdotcv&logoColor=white)](https://akeight-portfolio.vercel.app/resume)

---

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000?logo=vercel&logoColor=white)](https://vercel.com/)


---

## Overview

This is my personal portfolio. I built a fast, accessible, single-page application to present my engineering work the way I'd build a real product: with a deliberate design system, polished micro-interactions, and an eye on performance and visual detail.

The site is intentionally **editorial** in feel: oversized display type, a warm paper canvas, a single vermilion accent, and Playfair Display italics used sparingly for emphasis. Every page is responsive, keyboard-navigable, and respects `prefers-reduced-motion`.

> **TL;DR for recruiters:** React + TypeScript SPA, custom design system, hand-built animation components (no template), Lighthouse-minded, deployed on Vercel with analytics and speed insights.

---

## Screenshots & Demos

<!-- Tip: drop a homepage screen recording (GIF/MP4) here for the strongest first impression.
     Example: ![Homepage demo](public/home-demo.gif) -->

| Home — animated hero | Projects — filterable grid |
| :---: | :---: |
| ![Home](https://akeight-portfolio.vercel.app/og-image.png) | ![Projects](https://akeight-portfolio.vercel.app/spacex-dashboard.jpg) |

| Featured case study | Live project preview |
| :---: | :---: |
| ![Course Explorer](https://akeight-portfolio.vercel.app/course-explorer.jpg) | ![Internship Tracker](https://akeight-portfolio.vercel.app/InternshipTracker.jpg) |

> Project cards play short hover-to-preview video demos on the live site.

---

## Highlights

- **Hand-built animation library** — custom Framer Motion components (vertical cut reveal, rotating text, parallax floating accents, sticky scroll reveals, stacking cards, marquee, scramble-on-hover) rather than off-the-shelf packages.
- **Editorial design system** — HSL design tokens, a typographic scale, and a single accent color defined once in CSS variables and consumed through Tailwind.
- **Accessible by default** — semantic landmarks, `aria-label`s on animated text, focus styles, and full `prefers-reduced-motion` fallbacks that disable motion gracefully.
- **Performance-minded** — Vite + SWC build, route-based layout, hover-triggered (not autoplay) video previews, and Vercel Speed Insights wired in.
- **Type-safe & linted** — strict TypeScript throughout, ESLint with React Hooks rules, and centralized, typed content (projects, experience, skills, recommendations).
- **SEO & social** — Open Graph / Twitter card meta, a custom OG image, and theme-color for a finished, shareable link preview.

---

## Tech Stack

| Area | Tools |
| --- | --- |
| **Framework** | React, TypeScript |
| **Build** | Vite (`@vitejs/plugin-react-swc`) |
| **Styling** | Tailwind CSS, `tailwind-merge`, `class-variance-authority`, custom design tokens |
| **UI primitives** | Radix UI + shadcn/ui pattern |
| **Animation** | Framer Motion (custom components) |
| **Routing** | React Router |
| **Data / forms** | TanStack Query, React Hook Form, Zod |
| **Data viz** | Recharts |
| **Icons & type** | Lucide, Inter Tight, JetBrains Mono, Playfair Display |
| **Hosting / monitoring** | Vercel, Vercel Analytics, Vercel Speed Insights |

---

## Project Structure

```
client/
├── public/                 # Static assets — project demos (mp4/webm), posters, résumé PDF, OG image
├── src/
│   ├── components/
│   │   ├── fancy/          # Custom animation components (text-rotate, parallax-floating, …)
│   │   ├── ui/             # Radix/shadcn-style primitives
│   │   └── *.tsx           # Header, Footer, ProjectCard, ExperienceAccordion, …
│   ├── data/               # Typed content: projects, experience, skills, recommendations
│   ├── hooks/              # Reusable hooks (use-mobile, use-toast)
│   ├── lib/                # Utilities (cn, motion presets)
│   ├── pages/              # Home, Projects, Resume, Now, Contact, NotFound
│   ├── App.tsx             # Routes + providers
│   └── main.tsx            # App entry
├── index.html             # Fonts, SEO/OG meta
├── tailwind.config.ts     # Theme tokens, font families, animations
└── vite.config.ts         # Dev server + @ path alias
```

---

## Getting Started

### Prerequisites

- **Node.js 18+**
- npm (ships with Node)

### Installation & development

```bash
# from the repo root
cd client

# install dependencies
npm install

# start the dev server
npm run dev
```

### Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server on port `8080` |
| `npm run build` | Production build to `dist/` |
| `npm run build:dev` | Development-mode build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Featured Projects

A few of the projects highlighted on the site:

| Project | What it is | Stack | Links |
| --- | --- | --- | --- |
| **ALL Blood Cell Classifier** | ResNet50 model with Grad-CAM heatmaps and a full-stack inference UI | TensorFlow, Keras, FastAPI, React | [Demo](https://ai4all-project.vercel.app/) · [Code](https://github.com/akeight/ai4all-project) |
| **WGU CS Course Reviews** | Community platform for CS course reviews and difficulty ratings | React, Node/Express, PostgreSQL, Docker | [Demo](https://wgu-cs-course-reviews.vercel.app/) · [Code](https://github.com/akeight/wgu-cs-course-reviews) |
| **Internship Tracker** | Full-stack CRUD app to track applications, cutting manual tracking time ~60%, reducing overwhelm | Next.js, tRPC, Prisma, PostgreSQL | [Code](https://github.com/akeight/internship-tracker) |
| **SpaceX Launch Dashboard** | Interactive, data-rich dashboard over the public SpaceX API | React, Vite, Recharts | [Code](https://github.com/akeight/SpaceX-data-dashboard) |

> The full, filterable list lives on the [Projects page](https://akeight-portfolio.vercel.app/projects).

---

## Deployment

Deployed on **Vercel** with SPA rewrites configured in `vercel.json` (all routes fall back to `index.html`). Pushes to the default branch trigger automatic production deployments.

```jsonc
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

---

## Connect

- **Portfolio:** [akeight-portfolio.vercel.app](https://akeight-portfolio.vercel.app/)
- **GitHub:** [@akeight](https://github.com/akeight)
- **Contact:** [get in touch](https://akeight-portfolio.vercel.app/contact)


<sub>© 2026 Allyson Keightley</sub>
