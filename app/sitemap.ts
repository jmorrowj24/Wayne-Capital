import type { MetadataRoute } from "next";

// NOTE: update this to your production domain if it isn't waynecapital.com
// (this matches metadataBase in app/layout.tsx — change both together).
const BASE_URL = "https://waynecapital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
