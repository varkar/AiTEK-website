# Smart AITEK Site

Marketing site for Smart AITEK — a consulting-led, engineering-backed partner for Digital Business Engineering, Enterprise Architecture, and Agentic AI transformation.

For the full story of what the site argues, how its content is organized, and the engineering decisions behind it, see [`../docs/SITE-OVERVIEW.md`](../docs/SITE-OVERVIEW.md) — kept outside this folder so it doesn't ship as part of the app.

## Overview

The site makes one argument before anything else: most digital transformation fails from a lack of strategic clarity, not a lack of tooling. Smart AITEK positions itself as a consulting-led, engineering-backed partner that closes that gap through Digital Business Engineering, Enterprise Architecture, and Agentic AI — helping organizations move from manual operations to self-optimizing, autonomous enterprises.

The content is organized around five industry verticals — Manufacturing, Oil & Gas, Insurance, Healthcare, Pharmaceuticals — each addressed from two angles:

- **Industries** — the business problem, challenges, and outcomes per vertical
- **Solutions** — the technical answer, as four AI capability pages (AI/ML, AI Agents, Agentic Framework, Tools)

Alongside that, an **Expertise** tree (Consulting, Domain, Functions) serves visitors who think in capabilities rather than industries, a dedicated **Digital Business Engineering** page covers Smart AITEK's flagship transformation methodology, and **About**/**Contact** round out the site. See `../docs/SITE-OVERVIEW.md` for the full route map and the reasoning behind each engineering decision.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**, CSS-first theming via OKLCH custom properties in `src/app/globals.css` (light/dark, no `tailwind.config.js`)
- **Urbanist** (headings) + **Inter** (body) + **Geist Mono**, self-hosted via `next/font/google`
- **framer-motion** for scroll-reveal and menu/step transitions
- No UI kit — a small hand-built primitive set under `src/components/ui/`, reused across every page

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint        # ESLint
npx tsc --noEmit     # type-check
npm run build        # production build
npm run start         # serve the production build locally
```

## Project structure

```
src/
  app/          Routes (App Router) — thin page components, no business logic
  components/   Header, Footer, ContactForm, and shared UI primitives (components/ui/)
  content/      Typed content objects (industries.ts, expertise.ts, solutions.ts, about.ts, …)
                consumed by the page components — copy changes never touch layout code
docs/
  SITE-OVERVIEW.md   The site's narrative, content architecture, and route map
```

## Deploying

This is a stock Next.js app with no platform-specific config yet, so any Next.js-compatible host works. The recommended path is [Vercel](https://vercel.com) (built by the Next.js team):

- **Vercel CLI** — `npm i -g vercel`, then `vercel` (preview) or `vercel --prod` from the project root. Vercel builds it on their infrastructure; running `npm run build` locally first is a good sanity check but not required.
- **Git-based** — push this repo to GitHub/GitLab/Bitbucket and import it in the Vercel dashboard (**Add New Project**). Every subsequent push auto-deploys, with preview URLs per branch/PR.
