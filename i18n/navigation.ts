import type { Locale } from "./config";

export function getLocalizedPath(locale: Locale, href: string) {
  if (href.startsWith("#")) {
    return href;
  }

  const pathname = href.startsWith("/") ? href : `/${href}`;

  return pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
}
