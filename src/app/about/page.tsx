import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import CheckList from "@/components/ui/CheckList";
import LeadershipCard from "@/components/ui/LeadershipCard";
import LocationBadges from "@/components/ui/LocationBadges";
import FramedImage from "@/components/ui/FramedImage";
import CTABand from "@/components/ui/CTABand";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { whoWeAre, autonomousOrchestration, vision, mission, leadership, globalPresence } from "@/content/about";
import { closingCta } from "@/content/home";
import { digitalTwinSupport, globalOpsSupport } from "@/content/images";

export const metadata: Metadata = {
  title: "About Us",
  description: whoWeAre.paragraphs[0],
};

export default function AboutPage() {
  return (
    <>
      <Hero id="overview" eyebrow="About Us" heading={whoWeAre.heading} paragraphs={whoWeAre.paragraphs} />

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-foreground">{whoWeAre.capabilitiesHeading}</h3>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {whoWeAre.capabilities.map((cap) => (
                  <Card key={cap}>
                    <p className="text-sm leading-relaxed text-foreground/90">{cap}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">{whoWeAre.businessImpactHeading}</h3>
              <div className="mt-5 max-w-2xl">
                <CheckList items={[whoWeAre.businessImpact]} />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border py-20 sm:py-24">
        <Container>
          <Reveal className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <SectionHeading heading={autonomousOrchestration.heading} />
              <div className="mt-6 space-y-4">
                {autonomousOrchestration.paragraphs.map((p) => (
                  <p key={p} className="text-base leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </div>
              <blockquote className="mt-10 border-l-2 border-primary pl-6">
                <p className="text-xl font-medium italic text-foreground">
                  &ldquo;{autonomousOrchestration.quote}&rdquo;
                </p>
                <footer className="mt-3 text-sm text-muted">— {autonomousOrchestration.attribution}</footer>
              </blockquote>
            </div>
            <FramedImage
              src={digitalTwinSupport.src}
              alt={digitalTwinSupport.alt}
              className="aspect-[4/3] w-full"
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-20 sm:py-24">
        <Container>
          <Reveal className="grid gap-6 sm:grid-cols-2">
            <div id="vision" className="scroll-mt-24">
              <Card>
                <h3 className="text-xl font-semibold text-foreground">{vision.heading}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{vision.text}</p>
              </Card>
            </div>
            <div id="mission" className="scroll-mt-24">
              <Card>
                <h3 className="text-xl font-semibold text-foreground">{mission.heading}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{mission.text}</p>
              </Card>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="leadership" className="scroll-mt-24 border-t border-border py-20 sm:py-24">
        <Container>
          <SectionHeading heading={leadership.heading} text={leadership.text} />
          <Reveal className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.team.map((member) => (
              <LeadershipCard
                key={member.name}
                name={member.name}
                title={member.title}
                bio={member.bio}
                image={member.image}
                linkedin={member.linkedin}
              />
            ))}
          </Reveal>
        </Container>
      </section>

      <section id="locations" className="scroll-mt-24 border-t border-border bg-surface py-20 sm:py-24">
        <Container>
          <Reveal className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div>
              <SectionHeading heading={globalPresence.heading} text={globalPresence.text} />
              <div className="mt-8">
                <LocationBadges locations={globalPresence.locations} />
              </div>
              <p className="mt-10 max-w-2xl text-lg italic text-foreground/90">
                &ldquo;{globalPresence.quote}&rdquo;
              </p>
            </div>
            <FramedImage
              src={globalOpsSupport.src}
              alt={globalOpsSupport.alt}
              className="aspect-[4/3] w-full"
            />
          </Reveal>
        </Container>
      </section>

      <CTABand
        heading={closingCta.heading}
        subheading={closingCta.subheading}
        text={closingCta.text}
        cta={<Button href="/contact">Start Your Discovery Session</Button>}
      />
    </>
  );
}
