const BASE_URL = process.env.GHL_API_BASE_URL!;
const API_VERSION = process.env.GHL_API_VERSION!;
const TOKEN = process.env.GHL_API_TOKEN!;

interface FetchOptions {
  params?: Record<string, string | number | undefined>;
  revalidate?: number; // segundos de cache (ISR)
  tags?: string[]; // para revalidateTag() bajo demanda
}

export class GHLApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "GHLApiError";
  }
}

function buildUrl(path: string, params?: FetchOptions["params"]) {
  const url = new URL(path, BASE_URL);
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) url.searchParams.set(key, String(value));
    }
  }
  return url.toString();
}

export async function ghlFetch<T>(
  path: string,
  options: FetchOptions = {},
): Promise<T> {
  const { params, revalidate = 300, tags } = options;

  const res = await fetch(buildUrl(path, params), {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Version: API_VERSION,
      Accept: "application/json",
    },
    // Cache de datos de Next.js (ISR a nivel de fetch)
    next: { revalidate, tags },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new GHLApiError(res.status, `GHL API ${res.status}: ${body}`);
  }

  return res.json() as Promise<T>;
}
