"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      if (!FORM_ENDPOINT) throw new Error("No endpoint configured");
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      setStatus(res.ok ? "ok" : "err");
      if (res.ok) form.reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <section className="max-w-xl">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          name="name"
          required
          placeholder="Your name"
          className="w-full border rounded p-2"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="w-full border rounded p-2"
        />
        <textarea
          name="message"
          required
          placeholder="Your message"
          className="w-full border rounded p-2 h-32"
        />
        <button className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">
          Send
        </button>
        {status === "ok" && (
          <p className="text-green-600">Thanks! I’ll get back to you.</p>
        )}
        {status === "err" && (
          <p className="text-red-600">
            Couldn’t send. You can email me at hi@yourdomain.dev
          </p>
        )}
      </form>
    </section>
  );
}
