import { listPosts } from '@/lib/blog';
import { NextResponse } from 'next/server';

export async function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';
  const posts = await listPosts();

  const items = posts.map(p => `
    <item>
      <title>${p.title}</title>
      <link>${site}/blog/${p.slug}</link>
      <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
      <guid>${site}/blog/${p.slug}</guid>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0"><channel>
    <title>Inglorious0211 — Blog</title>
    <link>${site}</link>
    <description>Data Engineering, AI, Forecasting</description>
    ${items}
  </channel></rss>`;

  return new NextResponse(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
