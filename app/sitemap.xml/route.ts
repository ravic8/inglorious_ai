import { listPosts } from '@/lib/blog';
import { NextResponse } from 'next/server';

export async function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

  const staticPaths = ['', 'about', 'projects', 'blog', 'contact']
    .map(p => `${site}/${p}`.replace(/\/$/, ''));

  const postUrls = (await listPosts()).map(p => `${site}/blog/${p.slug}`);

  const urls = [...staticPaths, ...postUrls]
    .map(u => `<url><loc>${u}</loc></url>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
