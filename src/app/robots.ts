import type { MetadataRoute } from "next";
export const dynamic = "force-static";

const siteUrl = "https://www.smartaitek.ai";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
