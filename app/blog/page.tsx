import Link from "next/link";
import { listPosts } from "@/lib/blog";

export const revalidate = 60; // optional ISR

export default async function BlogPage() {
  const posts = await listPosts();
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="border-b pb-4">
            <Link href={`/blog/${p.slug}`} className="text-xl font-semibold">
              {p.title}
            </Link>
            <div className="text-sm text-neutral-500">
              {new Date(p.publishedAt).toDateString()}
            </div>
            {p.summary && (
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                {p.summary}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
