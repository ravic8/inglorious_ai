import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';


const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');


export type PostMeta = {
slug: string;
title: string;
summary?: string;
publishedAt: string; // ISO
tags?: string[];
};


export async function listPosts(): Promise<PostMeta[]> {
const entries = await fs.readdir(BLOG_DIR);
const posts: PostMeta[] = [];
for (const file of entries) {
if (!file.endsWith('.md')) continue;
const slug = file.replace(/\.md$/, '');
const raw = await fs.readFile(path.join(BLOG_DIR, file), 'utf8');
const { data } = matter(raw);
posts.push({
slug,
title: data.title ?? slug,
summary: data.summary ?? '',
publishedAt: data.publishedAt ?? new Date().toISOString(),
tags: data.tags ?? []
});
}
return posts.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}


export async function getPost(slug: string): Promise<{ meta: PostMeta; html: string } | null> {
const file = path.join(BLOG_DIR, `${slug}.md`);
try {
const raw = await fs.readFile(file, 'utf8');
const { data, content } = matter(raw);
const processed = await remark().use(html).process(content);
return {
meta: {
slug,
title: data.title ?? slug,
summary: data.summary ?? '',
publishedAt: data.publishedAt ?? new Date().toISOString(),
tags: data.tags ?? []
},
html: processed.toString()
};
} catch {
return null;
}
}


export async function listSlugs(): Promise<string[]> {
const entries = await fs.readdir(BLOG_DIR);
return entries.filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''));
}