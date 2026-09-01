import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const FOCUS_AREAS = ["Quantum Computing", "Machine Learning", "Cybersecurity"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber-300/30 blur-3xl dark:bg-amber-500/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-40 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl dark:bg-violet-500/10"
      />

      <div className="mx-auto grid max-w-5xl gap-12 px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="relative">
          <p className="mb-4 inline-flex items-center rounded-full border border-amber-400/60 bg-amber-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-amber-700 uppercase dark:text-amber-400">
            {profile.location}
          </p>

          <h1 className="font-serif text-4xl leading-[1.1] font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl font-medium text-slate-700 sm:text-2xl dark:text-slate-200">
            {profile.tagline}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {FOCUS_AREAS.map((area) => (
              <li
                key={area}
                className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300"
              >
                {area}
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#timeline"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-600 dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400"
            >
              View timeline
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-amber-400 hover:text-amber-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-gradient-to-br from-amber-300 to-violet-300 opacity-60 dark:from-amber-500/40 dark:to-violet-500/40" />
          <Image
            src="/images/hero.jpg"
            alt="Illustrated portrait of Anjana Sivanandan at a desk with a laptop, notebook, and a Sri Lankan coastal railway bridge in the background"
            width={1024}
            height={1024}
            priority
            className="relative rounded-[2rem] border border-slate-200 shadow-xl dark:border-slate-800"
          />
        </div>
      </div>
    </section>
  );
}
