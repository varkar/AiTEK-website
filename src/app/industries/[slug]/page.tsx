import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import PhotoHero from "@/components/ui/PhotoHero";
import HookPageBody from "@/components/ui/HookPageBody";
import CTABand from "@/components/ui/CTABand";
import Button from "@/components/ui/Button";
import { industries, getIndustry } from "@/content/industries";
import { industryImages } from "@/content/images";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} Industry`,
    description: industry.shortTagline,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const { section } = industry;

  return (
    <>
      <PhotoHero
        eyebrow="Industries"
        heading={industry.name}
        paragraphs={[section.pageTitle]}
        image={industryImages[industry.slug]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <HookPageBody page={section} />
        </Container>
      </section>

      <CTABand
        heading="Explore our AI capability layers"
        text="See how Smart AITEK's AI/ML, AI Agents, Agentic Framework, and Tools capabilities come together to deliver this outcome."
        cta={<Button href="/solutions">View Solutions</Button>}
      />
    </>
  );
}
