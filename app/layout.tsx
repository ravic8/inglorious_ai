import './globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
title: 'Inglorious0211 — Portfolio',
description: 'Data Engineering, AI, and project write-ups.'
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<header className="border-b border-neutral-200 dark:border-neutral-800">
<nav className="container py-4 flex gap-4 text-sm">
<a href="/">Home</a>
<a href="/about">About</a>
<a href="/projects">Projects</a>
<a href="/blog">Blog</a>
<a href="/contact">Contact</a>
</nav>
</header>
<main className="container py-8">{children}</main>
<footer className="container py-10 text-sm text-neutral-500">© {new Date().getFullYear()} Inglorious0211</footer>
</body>
</html>
);
}