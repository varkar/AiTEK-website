import Link from "next/link";
import Image from "next/image";
import Container from "./ui/Container";
import { footerNav } from "@/content/nav";
import { social } from "@/content/social";
import { IconLinkedIn } from "./ui/icons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/aitek-logo-light.png"
                alt="Smart AITEK – Human Intelligence. AI Possibilities."
                width={160}
                height={103}
                className="light-only h-10 w-auto object-contain"
              />
              <Image
                src="/images/aitek-logo-dark.png"
                alt="Smart AITEK – Human Intelligence. AI Possibilities."
                width={160}
                height={103}
                className="dark-only h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Architecting the Autonomous Enterprise.
            </p>
            <div className="mt-4">
              {social.linkedin ? (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Smart AITEK on LinkedIn"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary"
                >
                  <IconLinkedIn className="h-4 w-4" />
                </a>
              ) : (
                <span
                  aria-label="LinkedIn page coming soon"
                  title="LinkedIn page coming soon"
                  className="inline-flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-full border border-border text-muted"
                >
                  <IconLinkedIn className="h-4 w-4" />
                </span>
              )}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Industries</p>
            <ul className="mt-3 space-y-2">
              {footerNav.industries.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Company</p>
            <ul className="mt-3 space-y-2">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Get in Touch</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>Smart AITEK, Hyderabad</li>
              <li>
                <a href="mailto:info@smartaitek.ai" className="hover:text-primary">
                  info@smartaitek.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Smart AITEK. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
