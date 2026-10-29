import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import BookingWidget from "@/components/ui/BookingWidget";

export const metadata: Metadata = {
  title: "Book a Call",
  description: "Book a 30-minute discovery call with the Smart AITEK team directly on our calendar.",
};

export default function BookPage() {
  return (
    <>
      <Hero
        eyebrow="Book a Call"
        heading="Talk to Smart AITEK"
        paragraphs={["Pick a time that works for you and we'll walk through your goals, challenges, and where AI-driven transformation can help most."]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <BookingWidget mode="inline" />
          </div>
        </Container>
      </section>
    </>
  );
}
