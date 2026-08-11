import "server-only";

/** Shared cache policy for read-only Square catalog data. */
export const SQUARE_CATALOG_CACHE_OPTIONS = {
  revalidate: 600,
  tags: ["square-catalog"],
};

/** Keeps cached results isolated when a deployment changes Square environment or location. */
export const SQUARE_CATALOG_CACHE_KEY = [
  "square-catalog",
  process.env.SQUARE_ENVIRONMENT ?? "sandbox",
  process.env.SQUARE_LOCATION_ID ?? "default-location",
];

export const shouldCacheSquareCatalog =
  process.env.SQUARE_ENVIRONMENT === "production";
