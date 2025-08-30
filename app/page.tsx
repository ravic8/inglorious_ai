import Link from "next/link";
import Image from "next/image";

/* tiny inline icons */
function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...props}>
      <path fill="currentColor" d="M12 .5A12 12 0 0 0 0 12.7c0 5.4 3.5 10 8.3 11.6.6.1.8-.3.8-.6v-2c-3.4.8-4.2-1.6-4.2-1.6-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 .9 2 .9 1.1 2 2.8 1.4 3.5 1.1.1-.8.4-1.4.7-1.7-2.7-.3-5.6-1.4-5.6-6.1 0-1.4.5-2.5 1.3-3.4-.1-.3-.6-1.7.1-3.5 0 0 1.1-.4 3.6 1.3a12.3 12.3 0 0 1 6.6 0c2.5-1.7 3.6-1.3 3.6-1.3.7 1.8.2 3.2.1 3.5.8.9 1.3 2 1.3 3.4 0 4.7-2.9 5.8-5.6 6.1.4.4.8 1.1.8 2.3v3.3c0 .3.2.7.8.6A12 12 0 0 0 24 12.7 12 12 0 0 0 12 .5z"/>
    </svg>
  );
}
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...props}>
      <path fill="currentColor" d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.85v5.51H9.47V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 4.22 5.38v6.36zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
    </svg>
  );
}
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...props}>
      <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO — on the same light background; equal spacing handled by .section */}
      <section className="section">
        {/* Use a 12-column grid so alignments are predictable */}
        <div className="container grid grid-cols-12 items-start gap-8 md:gap-12">
          {/* Left block (cols 1–7) */}
          <div className="col-span-12 md:col-span-7">
            <p className="uppercase tracking-widest text-sm md:text-base text-neutral-500">
              Hello, my name is
            </p>

            <h1 className="mt-3 text-6xl md:text-7xl font-extrabold leading-[1.05]">
              Raviteja NB
            </h1>

            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-neutral-700 dark:text-neutral-300">
              Data Engineering &amp; AI Systems
            </h2>

            <p className="mt-6 lead max-w-xl">
              I build reliable data platforms and forecasting pipelines on AWS. Recently:
              MLflow + Airflow for 2000+ sites, ClickHouse tuned with MVs/partitions, and
              low-latency Kafka/WebSocket streams for market data.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/projects" className="btn btn-primary hover-ring">My Work</Link>
              <Link href="/about" className="btn btn-outline hover-ring">About Me</Link>
              <a href="/resume" className="btn btn-outline hover-ring">Resume</a>
            </div>

            {/* Social icons aligned to the portrait's left edge on desktop */}
            <div className="mt-8 flex items-center gap-4 align-with-portrait">
              <a aria-label="GitHub" className="icon-btn" href="https://github.com/ravic8" target="_blank"><GitHubIcon /></a>
              <a aria-label="LinkedIn" className="icon-btn" href="https://www.linkedin.com/in/ravitejanb" target="_blank"><LinkedInIcon /></a>
              <Link aria-label="Contact" className="icon-btn" href="/contact"><MailIcon /></Link>
            </div>
          </div>

          {/* Right portrait (cols 8–12) */}
          <div className="col-span-12 md:col-span-5">
            <div className="card -m-4 p-4 md:m-0 md:p-0">
              <div className="overflow-hidden rounded-2xl md:rounded-3xl">
                <Image
                  src="/portrait.jpg"
                  alt="Raviteja NB"
                  width={840}
                  height={1120}
                  sizes="(max-width: 768px) 90vw, 520px"
                  className="aspect-[3/4] w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO — same background and same vertical spacing as above */}
      <section className="section pt-0">
        <div className="container grid gap-8 md:grid-cols-3">
          <div className="card p-8">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-2xl font-semibold">What I do</h3>
            <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
              Data platforms, forecasting pipelines, and real-time streams with AWS, Airflow,
              ClickHouse, and MLflow.
            </p>
          </div>
          <div className="card p-8">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="text-2xl font-semibold">Recent wins</h3>
            <ul className="mt-4 list-disc pl-6 text-lg text-neutral-700 dark:text-neutral-300">
              <li>2000+ sites on ML pipelines</li>
              <li>10–20ms streaming latencies</li>
              <li>~50% faster ClickHouse queries</li>
            </ul>
          </div>
          <div className="card p-8">
            <div className="text-3xl mb-3">✍️</div>
            <h3 className="text-2xl font-semibold">Currently</h3>
            <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
              Writing weekly and building Atlas (data engineering observer) — case studies on the blog.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
