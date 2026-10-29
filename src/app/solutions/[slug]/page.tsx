import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import PhotoHero from "@/components/ui/PhotoHero";
import HookPageBody from "@/components/ui/HookPageBody";
import CTABand from "@/components/ui/CTABand";
import Button from "@/components/ui/Button";
import { solutions, getSolution } from "@/content/solutions";
import { solutionImages } from "@/content/images";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.tagline ?? solution.pageTitle,
    description: solution.hook,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { detailScope: _removed, ...solutionWithoutDetailScope } = solution;

  return (
    <>
      <PhotoHero
        eyebrow="Solutions"
        heading={solution.pageTitle}
        paragraphs={[solution.tagline ?? ""]}
        image={solutionImages[solution.slug]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <HookPageBody page={solutionWithoutDetailScope} />
        </Container>
      </section>

      <CTABand
        heading="See how this plays out by industry"
        text="Explore the business challenges, capabilities, and outcomes Smart AITEK delivers across Manufacturing, Oil & Gas, Insurance, Healthcare, and Pharmaceuticals."
        cta={<Button href="/industries">View Industries</Button>}
      />
    </>
  );
}
