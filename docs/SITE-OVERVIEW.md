# AITEK Site Overview

What the site showcases, and how it's built. Prepared from the live codebase, not aspirational copy.

## Part One — The Story

### The case AITEK makes

The homepage exists to make one argument before anything else: most digital transformation fails, and the reason is a lack of strategic clarity, not a lack of tooling.

> "Technology is no longer the bottleneck—clarity is. We are a consulting-led, engineering-backed partner helping organizations transition from manual operations to self-optimizing, intelligent ecosystems powered by Agentic AI."
>
> — Homepage hero, "Architecting the Autonomous Enterprise"

| | |
|---|---|
| **70%** | of digital initiatives fail to deliver expected value — the site's central hook |
| **3** | pillars of Digital Business Engineering: Strategy, Architecture, Engineering |
| **4** | core service pillars: Consulting, AI Products, MDPs, SAP BTP |
| **7** | global locations, HQ'd in Hyderabad |

The shift the homepage argues for:

| From | To |
|---|---|
| Build Capability | Strategic Clarity on What & Why to Build |
| Coding-Centric Vendors | Strategic Partners with Agentic AI Frameworks |
| Technology Adoption | Digital Strategy-First Discipline |
| Isolated Tools | Autonomous Operating Systems |

### Content architecture: what visitors can explore

Everything below the pitch pairs a vertical view with a capability view: five industry verticals (Industries) each state the business problem, while four capability layers (Solutions) — AI & Machine Learning, AI Agents, the Agentic Framework, and Tools — state the technical answer, with every layer's page addressing all five verticals internally.

| Industry | ML & Predictive Intelligence | Generative AI | Agentic AI & Autonomous Ops |
|---|---|---|---|
| Manufacturing | Forecasting, OEE & process intelligence | Engineer & planner copilots | Autonomous planning & maintenance agents |
| Oil & Gas | Asset & production analytics | Field knowledge assistants | Autonomous operations agents |
| Insurance | Underwriting & claims analytics | Policy & claims copilots | Autonomous claims agents |
| Healthcare | Clinical & operational analytics | Clinician & patient copilots | Autonomous care-coordination agents |
| Pharmaceuticals | R&D & supply chain analytics | Research & regulatory copilots | Autonomous trial & supply agents |

**Expertise** (the capability-first view — for visitors who think in capabilities rather than industries) is a `/expertise` index into three categories, each with its own set of detail pages, plus one standalone page:

- **AI for Enterprise** — a standalone page (`/expertise/ai-for-enterprise`) on the shift from reactive GenAI to autonomous, agentic execution.
- **Consulting** (`/expertise/consulting`) — Business Process, Management, IT, and Digital & AI Transformation consulting.
- **Domain** (`/expertise/domain`) — the same five industry verticals as above (Manufacturing, Oil & Gas, Insurance, Healthcare, Pharmaceuticals), addressed from a domain-expertise angle rather than a challenges/solutions one.
- **Functions** (`/expertise/functions`) — Intelligent Factory, Supply Chain Management, Manufacturing Excellence, Smart Operations, Digital Twins, and SAP.

**Digital Business Engineering** — a standalone page at `/digital-business-engineering`, elevated from a homepage section into its own top-level nav item ("DBE"), covering AITEK's key offerings, transformation lifecycle, and business impact.

**About** — Vision, mission, a six-person leadership roster (CEO Vijaykumar Pisupati, MD Hanumantha Rao Koduru, COO Dr. Naga Ravi Shankar Mulagaleti, CTO Ravindra Chebiyam, CSO Jayachandra S Chitti, and ME Practice Head Vijay Ramam Achanta), and the global-presence footprint.

**Contact** — HQ in Hyderabad, a work-email intake form, and — as of this update — a tab to book a call instead of writing one.

### One guided form instead of two flows

An earlier version of the site had a separate three-question "AI Readiness Assessment" quiz at `/assessment` that fed into the contact form via a query param. That's been folded directly into the Contact form itself: the same three questions (industry, AI maturity stage, 12-month priority) are now step one of a four-step guided `ContactForm`, so a visitor answers everything and submits once instead of completing a quiz and then re-entering context on a separate page.

- **Book a Call — `/book`** — A scheduling entry point in the header, the homepage close, and a tab on the Contact page. No Calendly/cal.com account is wired up yet, so it currently shows a card pointing back to the contact form — it will switch on automatically once a scheduling URL is added to `src/content/booking.ts`.

## Part Two — The Build

### Engineering approach

The site is hand-built rather than assembled from a UI kit, with a deliberately small dependency footprint and a hard split between content and presentation.

| | |
|---|---|
| **Framework** | Next.js 16 (App Router), React 19, TypeScript — every industry/solution detail page statically generated via `generateStaticParams`. |
| **Styling** | Tailwind CSS v4, CSS-first theming: eight OKLCH custom properties in `globals.css`, mapped into Tailwind via `@theme inline` — no `tailwind.config.js`. |
| **Content model** | Typed content objects under `src/content/*.ts` (industries, solutions, expertise, about, home…), consumed by thin page components under `src/app`. Copy changes never touch layout code. |
| **Components** | No UI kit — a hand-built primitive set, reused everywhere rather than styled ad hoc per page: `Button`, `Card`, `Container`, `Hero`, `PhotoHero`, `SectionHeading`, `CTABand`, `StatCallout`, `NumberedStep`, `CheckList`, `ChipCloud`, `FramedImage`, `HookPageBody`, `DetailScopeSection`, `OptionGrid`, `FormField`, `LeadershipCard`, `LocationBadges`, `Reveal`, `BookingWidget`. |
| **Dependencies** | Deliberately minimal: `next`, `react`, `react-dom`, plus `framer-motion` — added for exactly one job (scroll reveals) rather than pulled in as a general animation layer. |
| **Typography** | Urbanist for headings, Inter for body, Geist Mono for code/monospace. |

### What changed in this update

Two workstreams, both reusing existing primitives and content rather than introducing parallel systems.

**Visual polish**
- **Dark mode** — a full second OKLCH palette swapped in via a `data-theme` attribute, a persisted header/mobile toggle, and a blocking inline script so there's no flash of the wrong theme on load.
- **Restrained scroll-reveal motion** via a new `Reveal` primitive, applied at the section/grid level (never per-item) across the homepage and every detail page.
- **Consistency pass** — stray one-off headings on the Contact page replaced with the shared `SectionHeading` component.

**Caught in QA**

`framer-motion`'s reduced-motion hook reads the browser's media query synchronously on the client but not on the server, so any visitor with OS-level "reduce motion" on would have hit a real hydration mismatch on every page. Fixed by moving that behavior out of React entirely and into a CSS override, which the browser applies consistently regardless of hydration timing. Verified with a scripted Playwright pass across both themes, the full contact flow, and reduced-motion emulation — zero console errors.

## Reference: full route map

| Route | Description |
|---|---|
| `/` | Homepage — the pitch, the pillars, industry grid, get-started promo |
| `/industries` | Vertical index |
| `/industries/[slug]` | ×5 — business challenges, capabilities, outcomes |
| `/solutions` | Capability-layer index |
| `/solutions/[slug]` | ×4 — AI/ML, AI Agents, Agentic Framework, Tools, each covering all 5 verticals |
| `/expertise` | Category index (Consulting, Domain, Functions, AI for Enterprise) |
| `/expertise/ai-for-enterprise` | Standalone page — reactive GenAI vs. autonomous agentic execution |
| `/expertise/consulting` | Category index |
| `/expertise/consulting/[slug]` | ×4 — Business Process, Management, IT, Digital & AI Transformation |
| `/expertise/domain` | Category index |
| `/expertise/domain/[slug]` | ×5 — Manufacturing, Oil & Gas, Insurance, Healthcare, Pharmaceuticals |
| `/expertise/functions` | Category index |
| `/expertise/functions/[slug]` | ×6 — Intelligent Factory, Supply Chain Management, Manufacturing Excellence, Smart Operations, Digital Twins, SAP |
| `/digital-business-engineering` | Standalone DBE page — offerings, transformation lifecycle, business impact |
| `/about` | Vision, mission, leadership, global presence |
| `/contact` | Form / Book a Call tabs |
| `/book` | New — dedicated scheduling entry point |
