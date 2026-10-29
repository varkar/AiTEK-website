import { industries } from "./industries";
import { solutions } from "./solutions";
import { consultingCategory, domainCategory, functionsCategory, aiForEnterprise } from "./expertise";

export const navIndustries = industries.map((i) => ({ slug: i.slug, name: i.name }));

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  heading?: string;
  links: NavLink[];
}

export type NavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "menu"; label: string; href: string; groups: NavGroup[]; hideViewAll?: boolean };

export const mainNav: NavItem[] = [
  {
    kind: "menu",
    label: "Industries",
    href: "/industries",
    hideViewAll: true,
    groups: [
      {
        links: industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
      },
    ],
  },
  {
    kind: "menu",
    label: "Expertise",
    href: "/expertise",
    groups: [
      {
        heading: consultingCategory.name,
        links: [
          ...consultingCategory.pages.map((p) => ({
            label: p.tagline ?? p.pageTitle,
            href: `/expertise/consulting/${p.slug}`,
          })),
          { label: aiForEnterprise.tagline ?? aiForEnterprise.pageTitle, href: `/expertise/${aiForEnterprise.slug}` },
        ],
      },
      {
        heading: domainCategory.name,
        links: domainCategory.pages.map((p) => ({
          label: p.tagline ?? p.pageTitle,
          href: `/expertise/domain/${p.slug}`,
        })),
      },
      {
        heading: functionsCategory.name,
        links: functionsCategory.pages.map((p) => ({
          label: p.tagline ?? p.pageTitle,
          href: `/expertise/functions/${p.slug}`,
        })),
      },
    ],
  },
  {
    kind: "menu",
    label: "Solutions",
    href: "/solutions",
    groups: [
      {
        links: solutions.map((s) => ({ label: s.tagline ?? s.pageTitle, href: `/solutions/${s.slug}` })),
      },
    ],
  },
  { kind: "link", label: "DBE", href: "/digital-business-engineering" },
  {
    kind: "menu",
    label: "About",
    href: "/about",
    groups: [
      {
        links: [
          { label: "Overview", href: "/about#overview" },
          { label: "Leadership", href: "/about#leadership" },
          { label: "Vision", href: "/about#vision" },
          { label: "Mission", href: "/about#mission" },
          { label: "Where We Are", href: "/about#locations" },
        ],
      },
    ],
  },
  { kind: "link", label: "Contact", href: "/contact" },
];

export const footerNav = {
  industries: navIndustries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
  company: [
    { label: "About Smart AITEK", href: "/about" },
    { label: "Expertise", href: "/expertise" },
    { label: "Solutions", href: "/solutions" },
    { label: "Digital Business Engineering (DBE)", href: "/digital-business-engineering" },
    { label: "Contact", href: "/contact" },
  ],
};
