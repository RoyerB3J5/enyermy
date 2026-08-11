"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import {
  getOptimizedImageUrl,
  shouldOptimizeProductImage,
} from "@/lib/optimized-image";

interface ProductImageProps
  extends Omit<ImageProps, "onError" | "unoptimized" | "src"> {
  src: string;
}

/**
 * Optimizes remote production catalog images with weserv.nl and retries the
 * original URL directly if the proxy is unavailable.
 */
export default function ProductImage({
  src,
  alt,
  width,
  ...props
}: ProductImageProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const imageWidth = typeof width === "number" ? width : 640;
  const shouldUseOriginal = failedSource === src;
  const shouldOptimize = shouldOptimizeProductImage(src);

  return (
    <Image
      src={shouldUseOriginal ? src : getOptimizedImageUrl(src, imageWidth)}
      alt={alt}
      width={width}
      unoptimized={shouldUseOriginal || !shouldOptimize}
      onError={() => setFailedSource(src)}
      {...props}
    />
  );
}
