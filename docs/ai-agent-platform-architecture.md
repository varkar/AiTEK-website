# AI Agent Platform — Architecture Approach

Scope: this doc records the architecture reasoning for the AI agent products roadmap — delivered as both a **SaaS** (multi-tenant hosted product) and a **PaaS** (embeddable/white-label platform clients build on). It is not about the Smart AITEK marketing site itself (see `docs/SITE-OVERVIEW.md` for that).

Stack decision: **Next.js (App Router) as a thin UI/BFF layer**, **FastAPI (Python) as the agent backend** — owning orchestration, queues, background jobs, and websockets.

## 1. High-level architecture

| Layer | Owns | Notes |
|---|---|---|
| **Next.js (App Router)** | UI, routing, auth-cookie session, thin BFF glue | No agent logic, no queues, no long-running work lives here |
| **FastAPI** | Agent orchestration, business logic, tenant resolution (source of truth), auth issuance | Independently deployed and scaled from the frontend |
| **Queues / workers** | Background jobs, long-running agent runs | Celery/RQ/Temporal/Inngest-style worker(s) behind FastAPI, not Next.js |
| **WebSocket / SSE layer** | Streaming agent output to the browser | Served by FastAPI (or a dedicated gateway), not constrained by serverless timeouts |
| **Datastores** | Tenant data, conversation/run history, vector store, etc. | Owned by FastAPI's domain, not touched directly by Next.js |

Next.js explicitly does **not** own queues, websockets, or background jobs — FastAPI does. This is what makes the frontend "thin": it renders UI and forwards requests, it doesn't do agent work.

Two consumption modes:
- **SaaS** — Next.js hosts Smart AITEK's own multi-tenant dashboard, talking to FastAPI.
- **PaaS** — Clients embed Smart AITEK's widget/console (a Next.js route surface) and/or call the FastAPI API directly from their own frontend. Next.js only serves Smart AITEK's own embed/console UI, not the client's app.

## 2. How App Router addresses this

- **Route groups** — `(marketing)`, `(dashboard)`, `(embed)` folders give each product surface its own root layout (public nav vs. authenticated app shell vs. chrome-less embed) with zero impact on the URL.
  - Caveat (confirmed in Next's docs): navigating between routes under *different* root layouts triggers a full page reload. Keep each product surface inside one root layout group — don't split a single surface across groups.
- **Streaming/Suspense + layouts** — used for progressive loading of dashboard data once it comes back from FastAPI.
- **`proxy.ts`** — this Next version's renamed `middleware.ts` — is the mechanism for tenant resolution at the routing layer (see §3).
- **Pages Router is legacy-maintenance** in this Next version — it still ships, but new capabilities (Cache Components, Partial Prerendering, `after()`) are App Router-only. App Router is the correct default here, not just a stylistic preference.

## 3. Does file-based routing force project structure? (impact on SaaS/PaaS)

Not a real constraint — it maps cleanly onto both tenancy models and product surfaces:

- **Path-based tenancy** (`app.com/[org]/...`) — a plain dynamic route segment. Trivial.
- **Subdomain-based tenancy** (`tenant.app.com`) — not directly expressible in file routing. Requires `proxy.ts` to inspect the `Host` header and rewrite into the common route tree (e.g. `acme.app.com/*` → internal `/[org]/*`). This is the same pattern used by Vercel's own "Platforms" multi-tenant starter kit, which Next's bundled multi-tenant guide points to as the recommended architecture.
- **PaaS embeddable surface** — its own route group with a chrome-less layout, plus custom `headers()` (CSP / `X-Frame-Options`) configured per route in `next.config.js` to allow iframe embedding.

Conclusion: file-based routing is not a limitation for this use case, as long as tenant resolution is funneled through `proxy.ts` / dynamic segments rather than an arbitrary custom router.

## 4. Next.js's dependency on the API layer

Two streaming topologies, with a tradeoff:

| Topology | Pros | Cons |
|---|---|---|
| Browser → FastAPI direct | Lowest latency for SSE/WebSocket agent output; no proxy-buffering issues | Needs CORS config; needs a client-side auth token strategy |
| Browser → Next.js → FastAPI (proxied) | Session cookie stays server-only; FastAPI hidden from the client | Adds a network hop; per Next's self-hosting docs, reverse proxies must disable buffering (e.g. nginx `X-Accel-Buffering: no`) or streaming breaks |

Recommendations:
- Generate a TypeScript client from FastAPI's OpenAPI schema (`openapi-typescript` or `orval`) so the thin Next layer doesn't hand-maintain request/response shapes that drift from the backend.
- Resolve tenant identity once, in FastAPI (source of truth). Next.js only reads tenant from the URL/subdomain and forwards it as a header on every request — no duplicated tenant logic in both layers.

Net effect: with this split, Next.js's only real coupling to the API layer is the auth/session-bridging decision and keeping the generated client in sync. Everything else raised as a concern about Next.js — queues, background jobs, websockets, Node-only runtime — is fully decoupled by construction, because FastAPI owns all of it.

## 5. Concerns raised — design approach

Each row is a concrete decision this architecture makes, not just a comment on the concern.

| Concern | Design approach |
|---|---|
| Backward compatibility / breaking changes (Pages → App Router, and within App Router across versions) | Build on App Router only, no Pages Router — there is no future migration to do. Pin the exact Next.js version in `package.json` (no `^`/`~` range) and treat major-version bumps as planned, scheduled work with a changelog/migration-guide read, not an automatic `npm update`. |
| Opinionated file-based routing | Turn the convention into a shared template: one scaffold with the `(marketing)` / `(dashboard)` / `(embed)` route-group structure, reused as the starting point for every client engagement. The constraint becomes a delivery accelerator — every project has the same shape, so any engineer can onboard onto any client app immediately. |
| Frontend and API not cleanly separated | Draw the line at the code level: `app/api/**` may only contain webhook receivers, OAuth/SSO callback routes, and the one auth-bridge endpoint that exchanges the Next.js session cookie for a short-lived FastAPI token. All agent orchestration, multi-step tool-calling, and anything stateful lives in FastAPI. Enforce it in code review (and optionally a lint rule blocking agent-SDK imports under `app/api`), so the boundary doesn't erode over time. |
| Scalability concerns (serverless limits — cold starts, execution timeouts) | Never run agent work inside Next.js, so Next's own execution limits are irrelevant to the agent workload by construction. FastAPI runs on infrastructure sized for long-running compute (containers/Kubernetes with autoscaling, or a dedicated worker pool), independent of how the Next.js frontend is hosted. If Next.js's own request latency needs tuning later, self-host via `next start` in a long-running container to remove the serverless execution ceiling entirely. |
| No built-in queues, websockets, or background jobs | Put all of it behind FastAPI: a real task queue (Celery/RQ + Redis, or Temporal/Inngest if agent runs need to survive process restarts) for background and long-running work, and FastAPI's own WebSocket/SSE support for streaming agent output. Next.js's role is limited to calling FastAPI's job-kickoff endpoint and then polling or subscribing for the result — it never owns the job lifecycle. `after()` is deliberately not used for this; it's best-effort with no retries, unsuited to agent work. |
| Limited to Node.js | Treat this as the intended boundary, not a limitation: Next.js is UI/BFF only, FastAPI (Python) is the business/agent logic layer, called over HTTP — normal service separation. Within Next.js itself, run `proxy.ts` on the Node runtime rather than Edge runtime if subdomain-based tenant resolution (§3) needs any Node-only API. |
| Best experience tied to Vercel | Decouple the two hosting decisions instead of defaulting to Vercel for both: FastAPI gets its own hosting regardless, since Vercel doesn't run long-lived Python processes well. For Next.js, choose Vercel if the team wants zero-config edge caching/Image Optimization/Fluid Compute and accepts the cost, or self-host alongside FastAPI (with a Redis cache handler for ISR, reverse-proxy buffering disabled for streaming, and a shared Server Actions encryption key + `deploymentId` across instances) if unifying the ops model is preferred. Neither the framework nor this architecture forces Vercel. |

Sources: this repo's bundled Next.js docs at `node_modules/next/dist/docs/01-app/02-guides/backend-for-frontend.md`, `self-hosting.md`, `multi-tenant.md`, and `01-app/03-api-reference/03-file-conventions/route-groups.md`.
