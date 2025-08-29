import fs from "node:fs/promises";
import path from "node:path";
import YAML from "yaml";

export type Project = {
  slug: string;
  title: string;
  summary?: string;
  role?: string;
  tech?: string[];
  links?: { repo?: string; demo?: string; docs?: string };
  featured?: boolean;
};

const PROJ_DIR = path.join(process.cwd(), "content", "projects");

/** List all projects (sorted: featured first) */
export async function listProjects(): Promise<Project[]> {
  let files: string[] = [];
  try {
    files = await fs.readdir(PROJ_DIR);
  } catch {
    return [];
  }

  const items: Project[] = [];
  for (const f of files) {
    if (!f.endsWith(".yml") && !f.endsWith(".yaml")) continue;
    const raw = await fs.readFile(path.join(PROJ_DIR, f), "utf8");
    const data = YAML.parse(raw) as Partial<Project> & { slug?: string };
    const slug = data.slug ?? f.replace(/\.(ya?ml)$/i, "");
    items.push({
      slug,
      title: data.title ?? slug,
      summary: data.summary ?? "",
      role: data.role ?? "",
      tech: data.tech ?? [],
      links: data.links ?? {},
      featured: !!data.featured,
    });
  }

  // Featured first
  return items.sort((a, b) => Number(b.featured) - Number(a.featured));
}

/** Optional: get one project by slug */
export async function getProject(slug: string): Promise<Project | null> {
  const p = path.join(PROJ_DIR, `${slug}.yml`);
  try {
    const raw = await fs.readFile(p, "utf8");
    const data = YAML.parse(raw) as Partial<Project>;
    return {
      slug,
      title: data.title ?? slug,
      summary: data.summary ?? "",
      role: data.role ?? "",
      tech: data.tech ?? [],
      links: data.links ?? {},
      featured: !!data.featured,
    };
  } catch {
    return null;
  }
}
