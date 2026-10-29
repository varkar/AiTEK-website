import type { MetadataRoute } from "next";
import { industries } from "@/content/industries";
import { solutions } from "@/content/solutions";
import { consultingCategory, domainCategory, functionsCategory, aiForEnterprise } from "@/content/expertise";

export const dynamic = "force-static";

const siteUrl = "https://www.smartaitek.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/industries",
    "/expertise",
    "/expertise/consulting",
    "/expertise/domain",
    "/expertise/functions",
    `/expertise/${aiForEnterprise.slug}`,
    "/solutions",
    "/digital-business-engineering",
    "/about",
    "/contact",
    "/book",
  ];

  const industryRoutes = industries.map((i) => `/industries/${i.slug}`);
  const solutionRoutes = solutions.map((s) => `/solutions/${s.slug}`);
  const consultingRoutes = consultingCategory.pages.map((p) => `/expertise/consulting/${p.slug}`);
  const domainRoutes = domainCategory.pages.map((p) => `/expertise/domain/${p.slug}`);
  const functionsRoutes = functionsCategory.pages.map((p) => `/expertise/functions/${p.slug}`);

  const routes = [
    ...staticRoutes,
    ...industryRoutes,
    ...solutionRoutes,
    ...consultingRoutes,
    ...domainRoutes,
    ...functionsRoutes,
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
