export default function HomePage() {
return (
<section className="space-y-6">
<h1 className="text-4xl font-bold">Hi, I’m Vamshi — Data Engineering & AI Systems</h1>
<p className="text-lg max-w-prose">
I build reliable data platforms, forecasting pipelines, and agentic AI tools. This site hosts my projects and regular blog posts.
</p>
<div className="flex gap-3 text-sm">
<a className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black" href="/projects">View Projects</a>
<a className="px-4 py-2 rounded-lg border" href="/blog">Read the Blog</a>
</div>
</section>
);
}