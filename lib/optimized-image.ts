/**
 * Routes remote production product images through weserv.nl for resizing and
 * compression. Every other Square environment keeps the original URL.
 */
export function getOptimizedImageUrl(originalUrl: string, width = 640) {
  if (
    !originalUrl ||
    !/^https?:\/\//i.test(originalUrl) ||
    process.env.NEXT_PUBLIC_SQUARE_ENVIRONMENT !== "production"
  ) {
    return originalUrl;
  }

  const cleanUrl = originalUrl.replace(/^https?:\/\//i, "");
  const params = new URLSearchParams({
    url: cleanUrl,
    w: String(width),
    q: "90",
    output: "webp",
  });

  return `https://images.weserv.nl/?${params.toString()}`;
}

export function shouldOptimizeProductImage(src: string) {
  return (
    /^https?:\/\//i.test(src) &&
    process.env.NEXT_PUBLIC_SQUARE_ENVIRONMENT === "production"
  );
}
