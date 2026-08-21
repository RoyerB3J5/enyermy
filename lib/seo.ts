import type { Metadata } from "next";

import { defaultLocale, locales, type Locale } from "@/i18n/config";

type LocalizedText = {
  en: string;
  es: string;
};

type BuildPageMetadataInput = {
  locale: Locale;
  path: string;
  title: LocalizedText;
  description: LocalizedText;
  image?: string;
  noIndex?: boolean;
};

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://enyermystudiopro.com";

function localeToOg(locale: Locale): string {
  return locale === "es" ? "es_US" : "en_US";
}

function normalizePath(path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean;
}

export function getLocalizedPath(locale: Locale, path: string): string {
  const clean = normalizePath(path);
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

export function toAbsoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export function toLocaleOrDefault(value: string): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}

function localizedValue(locale: Locale, text: LocalizedText): string {
  return locale === "es" ? text.es : text.en;
}

function languageAlternates(path: string): Record<string, string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, getLocalizedPath(locale, path)]),
  );
}

export function stripHtml(text: string): string {
  return text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  image = "/images/portada.jpg",
  noIndex = false,
}: BuildPageMetadataInput): Metadata {
  const canonical = getLocalizedPath(locale, path);
  const pageTitle = localizedValue(locale, title);
  const pageDescription = localizedValue(locale, description);

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: toAbsoluteUrl(canonical),
      siteName: "Enyermy Studio Pro",
      locale: localeToOg(locale),
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [image],
    },
  };
}
