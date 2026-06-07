import type { MetadataRoute } from "next";

// Production domain (matches metadataBase in app/layout.tsx — change both together).
const BASE_URL = "https://capitalwayne.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
