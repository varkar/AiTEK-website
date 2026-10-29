import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import CTABand from "@/components/ui/CTABand";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import {
  hero,
  inflectionPoint,
  whyFails,
  digitalBusinessEngineering,
  corePillars,
  industryIntelligence,
  closingCta,
} from "@/content/home";
import { industries } from "@/content/industries";
import { heroArchitecture } from "@/content/images";

export const metadata: Metadata = {
  title: "Smart AITEK — Architecting the Autonomous Enterprise",
  description: hero.subhead,
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <Hero
        heading={hero.heading}
        paragraphs={[hero.subhead]}
        image={heroArchitecture}
        cta={
          <>
            <Button href="/contact">Start Your Discovery Session</Button>
            <Button href="/expertise" variant="secondary">
              Explore Expertise
            </Button>
          </>
        }
      />

      {/* ── Digital Inflection Point ─────────────────────────────── */}
      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              {inflectionPoint.eyebrow}
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {inflectionPoint.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{inflectionPoint.text}</p>
            <p className="mt-6 text-sm font-semibold text-foreground">{inflectionPoint.lead}</p>
          </Reveal>
          <Reveal className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {inflectionPoint.shifts.map((s) => (
              <div key={s.from} className="rounded-lg border border-border bg-background p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted line-through">
                  {s.from}
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">{s.to}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ── Why Transformation Fails ─────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              {whyFails.eyebrow}
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {whyFails.heading}
            </h2>
            <p className="mt-1 text-base font-medium text-foreground/80">{whyFails.subheading}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{whyFails.text}</p>
          </Reveal>
          <Reveal className="mt-10 grid gap-6 sm:grid-cols-3">
            {whyFails.problems.map((p) => (
              <Card key={p.title}>
                <h3 className="font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                <p className="mt-3 text-xs font-semibold text-primary">{p.impact}</p>
              </Card>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ── Digital Business Engineering ─────────────────────────── */}
      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              {digitalBusinessEngineering.eyebrow}
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {digitalBusinessEngineering.heading}
            </h2>
            <p className="mt-1 text-base font-medium text-foreground/80">
              {digitalBusinessEngineering.subheading}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {digitalBusinessEngineering.text}
            </p>
          </Reveal>
          <Reveal className="mt-10 grid gap-6 sm:grid-cols-3">
            {digitalBusinessEngineering.pillars.map((pillar) => (
              <Card key={pillar.title}>
                <h3 className="font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.desc}</p>
              </Card>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ── Core Pillars ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading heading={corePillars.heading} />
          <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {corePillars.pillars.map((pillar) => (
              <Card key={pillar.title}>
                <h3 className="font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.desc}</p>
              </Card>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ── Industry Intelligence ─────────────────────────────────── */}
      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              {industryIntelligence.eyebrow}
            </p>
            <p className="text-base leading-relaxed text-muted">{industryIntelligence.text}</p>
          </Reveal>
          <Reveal className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((ind) => (
              <a
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group rounded-lg border border-border bg-background px-5 py-4 transition hover:border-primary"
              >
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {ind.name}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{ind.shortTagline ?? ind.section.pageTitle}</p>
              </a>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────── */}
      <CTABand
        heading={closingCta.heading}
        text={`${closingCta.subheading} ${closingCta.text}`}
        cta={<Button href="/contact">Start Your Discovery Session</Button>}
      />
    </>
  );
}
