import { Trophy } from "lucide-react";
import { awards } from "@/lib/data";

export function Awards() {
  return (
    <section id="awards" className="border-t border-slate-200 bg-white py-16 sm:py-20 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-rose-600 uppercase dark:text-rose-400">
            Recognition
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Awards &amp; honours
          </h2>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          {awards.map((award) => (
            <div
              key={award.title + award.year}
              className="flex gap-4 rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400">
                <Trophy className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {award.title} <span className="font-normal text-slate-500 dark:text-slate-400">· {award.year}</span>
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{award.org}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">{award.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
