import { revalidateTag } from "next/cache";
import { BLOG_CACHE_TAGS } from "@/lib/ghl/blog-services";

const SECRET = process.env.REVALIDATE_SECRET!;

export async function POST(req: Request) {
  const headerSecret = req.headers.get("x-revalidate-secret");

  let postId: string | undefined;
  let bodySecret: string | undefined;

  if (!headerSecret) {
    const raw = await req.text();
    try {
      const body = JSON.parse(raw);
      bodySecret = body?.secret;
      postId = body?.id ?? body?.postId;
    } catch {
      bodySecret = raw;
    }
  }

  if (headerSecret !== SECRET && bodySecret !== SECRET) {
    return Response.json({ revalidated: false, error: "Invalid secret" }, { status: 401 });
  }

  revalidateTag(BLOG_CACHE_TAGS.posts, { expire: 0 });
  revalidateTag(BLOG_CACHE_TAGS.categories, { expire: 0 });
  if (postId) revalidateTag(BLOG_CACHE_TAGS.post(postId), { expire: 0 });

  return Response.json({ revalidated: true, postId: postId ?? null });
}
