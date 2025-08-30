import Link from "next/link";
import { listProjects } from "@/lib/projects";
import { listPosts } from "@/lib/blog";

export const revalidate = 60;

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-neutral-600 dark:text-neutral-300">
      {children}
    </span>
  );
}

export default async function HomePage() {
  const [projects, posts] = await Promise.all([listProjects(), listPosts()]);
  const featured = (projects || []).filter(p => p.featured).slice(0, 2);
  const latest = (posts || []).slice(0, 2);

  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
        <div className="absolute -top-24 -right-24 h-60 w-60 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 blur-3xl dark:from-blue-900/30 dark:to-purple-900/30" />
        <div className="relative grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <Badge>Inglorious0211</Badge>
            <h1 className="text-4xl font-extrabold leading-tight">
              Hi, I’m Raviteja — Data Engineering & AI Systems
            </h1>
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              I build scalable data platforms and forecasting pipelines on AWS.
              Recently: MLflow + Airflow for 2000+ sites, ClickHouse tuned with
              MVs/partitions, and low-latency Kafka/WebSocket streams for market data.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                className="rounded-lg bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
                href="/projects"
              >
                View Projects
              </Link>
              <Link className="rounded-lg border px-4 py-2" href="/blog">
                Read the Blog
              </Link>
              <a
                className="rounded-lg border px-4 py-2"
                href="/resume"
              >
                Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 pt-4 text-sm">
              <a className="underline" href="https://github.com/ravic8" target="_blank">GitHub</a>
              <a className="underline" href="https://www.linkedin.com/in/ravitejanb" target="_blank">LinkedIn</a>
              <a className="underline" href="/contact">Contact</a>
            </div>
          </div>

          {/* Quick stats / highlights */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border p-4 dark:border-neutral-800">
              <div className="text-3xl font-bold">2000+</div>
              <div className="text-sm text-neutral-500">sites in ML pipelines</div>
            </div>
            <div className="rounded-xl border p-4 dark:border-neutral-800">
              <div className="text-3xl font-bold">10–20ms</div>
              <div className="text-sm text-neutral-500">streaming latencies</div>
            </div>
            <div className="rounded-xl border p-4 dark:border-neutral-800">
              <div className="text-3xl font-bold">50%↓</div>
              <div className="text-sm text-neutral-500">ClickHouse query time</div>
            </div>
            <div className="rounded-xl border p-4 dark:border-neutral-800">
              <div className="text-3xl font-bold">AWS</div>
              <div className="text-sm text-neutral-500">S3 • Glue • Redshift • Lambda</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured projects</h2>
          <Link className="text-sm underline" href="/projects">See all</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((p) => (
            <article key={p.slug} className="rounded-xl border p-5 hover:bg-neutral-50 dark:hover:bg-neutral-900/60">
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                {p.visibility && <Badge>{p.visibility === "private" ? "Private" : "Public"}</Badge>}
              </div>
              {p.summary && <p className="text-neutral-700 dark:text-neutral-300">{p.summary}</p>}
              {p.tech && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.slice(0, 5).map((t) => (
                    <span key={t} className="text-xs rounded-full border px-2 py-0.5">{t}</span>
                  ))}
                </div>
              )}
              <div className="mt-4 flex gap-4 text-sm">
                {p.visibility === "public" && p.links?.repo && (
                  <a className="underline" href={p.links.repo} target="_blank" rel="noreferrer">Repo</a>
                )}
                {p.visibility === "private" && p.links?.docs && (
                  <Link className="underline" href={p.links.docs}>Case study</Link>
                )}
                {p.links?.demo && (
                  <a className="underline" href={p.links.demo} target="_blank" rel="noreferrer">Demo</a>
                )}
              </div>
            </article>
          ))}
          {featured.length === 0 && (
            <div className="rounded-xl border p-6 text-neutral-500">
              Mark a project as <code>featured: true</code> in its YAML to have it show up here.
            </div>
          )}
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Latest posts</h2>
          <Link className="text-sm underline" href="/blog">View all</Link>
        </div>
        <ul className="grid gap-4 md:grid-cols-2">
          {latest.map((p) => (
            <li key={p.slug} className="rounded-xl border p-5 hover:bg-neutral-50 dark:hover:bg-neutral-900/60">
              <Link href={`/blog/${p.slug}`} className="text-lg font-semibold underline">
                {p.title}
              </Link>
              <div className="text-xs text-neutral-500">{new Date(p.publishedAt).toDateString()}</div>
              {p.summary && <p className="mt-2 text-neutral-700 dark:text-neutral-300">{p.summary}</p>}
            </li>
          ))}
          {latest.length === 0 && (
            <li className="rounded-xl border p-6 text-neutral-500">
              Add posts in <code>content/blog</code> to show them here.
            </li>
          )}
        </ul>
      </section>
    </div>
  );
}
