import type { MetadataRoute } from "next";

const BASE_URL = "https://enyermystudiopro.com";

const IS_PRODUCTION =
  process.env.VERCEL_ENV === "production" ||
  process.env.NODE_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: IS_PRODUCTION
      ? {
          userAgent: "*",
          allow: "/",
          disallow: ["/dashboard/", "/api/"],
        }
      : {
          userAgent: "*",
          disallow: "/",
        },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
