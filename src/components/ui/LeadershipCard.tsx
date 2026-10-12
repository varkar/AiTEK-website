import Image from "next/image";
import { IconLinkedIn } from "./icons";

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*|^Dr\s*/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function LeadershipCard({
  name,
  title,
  bio,
  image,
  linkedin,
}: {
  name: string;
  title: string;
  bio?: string;
  image?: string;
  linkedin?: string;
}) {
  return (
    <div className="group flex h-full flex-col items-center rounded-2xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-black/20">
      {image ? (
        <div className="relative mb-4 aspect-[4/5] w-36 sm:w-40 overflow-hidden rounded-xl border border-border/80 bg-surface-raised shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 144px, 160px"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-primary/40 bg-surface-raised text-xl font-semibold text-primary">
          {initials(name)}
        </div>
      )}
      <div className="mb-3 text-center">
        <p className="text-lg font-semibold text-foreground">{name}</p>
        <p className="mt-0.5 text-sm font-medium text-primary">{title}</p>
      </div>
      {bio && (
        <p className="mb-6 w-full text-left text-sm leading-relaxed text-muted whitespace-pre-line">
          {bio}
        </p>
      )}
      {linkedin ? (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on LinkedIn`}
          className="mt-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary"
        >
          <IconLinkedIn className="h-4 w-4" />
        </a>
      ) : (
        <span
          aria-label={`${name} on LinkedIn — profile coming soon`}
          title="LinkedIn profile coming soon"
          className="mt-auto inline-flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full border border-border text-muted opacity-60"
        >
          <IconLinkedIn className="h-4 w-4" />
        </span>
      )}
    </div>
  );
}
