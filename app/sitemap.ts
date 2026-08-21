import type { MetadataRoute } from "next";

import { locales } from "@/i18n/config";
import { getAllProducts } from "@/lib/catalog";
import { getPostsPage } from "@/lib/ghl/blog-services";
import { generarSlug } from "@/lib/slug";

const BASE_URL ="https://enyermystudiopro.com";

const NOW = new Date();

const PUBLIC_SITE_PATHS = [
  "",
  "about-us",
  "blog",
  "bundles",
  "privacy-policy",
  "products",
  "refund-policy",
  "salon-experience",
  "salon-experience/locations",
  "salon-experience/stylists",
  "shipping-policy",
  "store-locations",
  "terms-of-services",
  "thanks",
] as const;

function makeLocalizedPath(locale: string, path: string): string {
  return path ? `/${locale}/${path}` : `/${locale}`;
}

function makeAbsoluteUrl(path: string): string {
  return `${BASE_URL}${path}`;
}

function makeAlternates(path: string): Record<string, string> {
  return Object.fromEntries(
    locales.map((locale) => [
      locale,
      makeAbsoluteUrl(makeLocalizedPath(locale, path)),
    ]),
  );
}

function getStaticPriority(path: string): number {
  if (path === "") return 1;
  if (path === "products" || path === "blog") return 0.9;
  if (path.includes("policy") || path === "terms-of-services") return 0.4;
  return 0.7;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of PUBLIC_SITE_PATHS) {
    for (const locale of locales) {
      entries.push({
        url: makeAbsoluteUrl(makeLocalizedPath(locale, path)),
        lastModified: NOW,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: getStaticPriority(path),
        alternates: {
          languages: makeAlternates(path),
        },
      });
    }
  }

  // Dynamic product URLs: keep sitemap complete for e-commerce SEO.
  try {
    const products = await getAllProducts();

    for (const product of products) {
      const productPath = `products/${generarSlug(product.nombre)}-${product.id}`;

      for (const locale of locales) {
        entries.push({
          url: makeAbsoluteUrl(makeLocalizedPath(locale, productPath)),
          lastModified: product.createdAt ? new Date(product.createdAt) : NOW,
          changeFrequency: "weekly",
          priority: 0.8,
          alternates: {
            languages: makeAlternates(productPath),
          },
        });
      }
    }
  } catch (error) {
    console.warn("sitemap: skipping dynamic product URLs", error);
  }

  // Dynamic blog URLs: fall back gracefully if GHL is unavailable.
  try {
    const firstPage = await getPostsPage(1);
    const allPosts = [...firstPage.items];

    if (firstPage.totalPages > 1) {
      const remainingPages = await Promise.all(
        Array.from({ length: firstPage.totalPages - 1 }, (_, index) =>
          getPostsPage(index + 2),
        ),
      );

      for (const page of remainingPages) {
        allPosts.push(...page.items);
      }
    }

    const uniquePostPaths = new Set(
      allPosts
        .map((post) => post.buttonHref?.trim())
        .filter((slug): slug is string => Boolean(slug))
        .map((slug) => `blog/${slug}`),
    );

    for (const postPath of uniquePostPaths) {
      for (const locale of locales) {
        entries.push({
          url: makeAbsoluteUrl(makeLocalizedPath(locale, postPath)),
          lastModified: NOW,
          changeFrequency: "weekly",
          priority: 0.7,
          alternates: {
            languages: makeAlternates(postPath),
          },
        });
      }
    }
  } catch (error) {
    console.warn("sitemap: skipping dynamic blog URLs", error);
  }

  return entries;
}
