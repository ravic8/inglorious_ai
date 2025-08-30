import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", weight: ["400","500","600","700","800"] });

export const metadata: Metadata = {
  title: "Inglorious0211 — Portfolio",
  description: "Raviteja NB — Data Engineering & AI Systems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Sticky header, same background as the page */}
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-neutral-50/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
          <nav className="container flex h-20 items-center justify-between">
            <a href="/" className="text-xl md:text-2xl font-bold tracking-wide hover-accent">Inglorious0211</a>
            <div className="flex items-center gap-8 text-lg md:text-xl font-medium">
              <a className="hover-accent" href="/">Home</a>
              <a className="hover-accent" href="/about">About</a>
              <a className="hover-accent" href="/projects">Projects</a>
              <a className="hover-accent" href="/blog">Blog</a>
              <a className="hover-accent" href="/contact">Contact</a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="border-t border-neutral-200 dark:border-neutral-800">
          <div className="container py-10 text-base text-neutral-500">
            © {new Date().getFullYear()} Inglorious0211
          </div>
        </footer>
      </body>
    </html>
  );
}
