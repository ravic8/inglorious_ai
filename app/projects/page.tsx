import { listProjects } from "@/lib/projects";

export const revalidate = 60; // optional ISR

export default async function ProjectsPage() {
  const projects = await listProjects();
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.slug} className="border rounded-xl p-4">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            {p.role && (
              <div className="text-sm text-neutral-500">{p.role}</div>
            )}
            {p.summary && (
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                {p.summary}
              </p>
            )}
            {p.tech && (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-4 flex gap-3 text-sm">
              {p.links?.repo && (
                <a
                  className="underline"
                  href={p.links.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Repo
                </a>
              )}
              {p.links?.demo && (
                <a
                  className="underline"
                  href={p.links.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              )}
              {p.links?.docs && (
                <a
                  className="underline"
                  href={p.links.docs}
                  target="_blank"
                  rel="noreferrer"
                >
                  Docs
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
