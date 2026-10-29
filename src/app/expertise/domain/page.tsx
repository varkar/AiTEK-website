import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import PhotoHero from "@/components/ui/PhotoHero";
import HookPageBody from "@/components/ui/HookPageBody";
import CTABand from "@/components/ui/CTABand";
import Button from "@/components/ui/Button";
import { domainCategory, getCategoryPage } from "@/content/expertise";
import { domainImages } from "@/content/images";

export function generateStaticParams() {
  return domainCategory.pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getCategoryPage("domain", slug);
  if (!page) return {};
  return {
    title: page.tagline ?? page.pageTitle,
    description: page.hook,
  };
}

export default async function DomainDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCategoryPage("domain", slug);
  if (!page) notFound();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { detailScope: _removed, ...pageWithoutDetailScope } = page;

  return (
    <>
      <PhotoHero
        eyebrow="Domain"
        heading={page.pageTitle}
        paragraphs={[page.tagline ?? ""]}
        image={domainImages[page.slug]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <HookPageBody page={pageWithoutDetailScope} />
        </Container>
      </section>

      <CTABand
        heading={`See the ${page.tagline ?? page.pageTitle} industry approach`}
        text="Explore the business challenges, capabilities, and outcomes Smart AITEK delivers for this industry."
        cta={<Button href={`/industries/${page.slug}`}>View Industry Page</Button>}
      />
    </>
  );
}
