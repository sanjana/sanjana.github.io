import { Radar } from "lucide-react";
import { profile, publications, awards, timeline } from "@/lib/data";

const activeResearch = timeline.filter((e) => e.category === "research" && e.current).length;
const yearsEngineering = new Date().getFullYear() - 2020 + (new Date().getMonth() >= 2 ? 1 : 0);

const STATS = [
  { value: `${yearsEngineering}+`, label: "Years in software engineering" },
  { value: `${publications.length}`, label: "Research publications" },
  { value: `${awards.length}`, label: "Awards & honours" },
  { value: `${activeResearch}`, label: "Active research projects" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div className="grid gap-6 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-center dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="font-serif text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-amber-300/60 bg-amber-50 p-6 sm:flex-row sm:items-start dark:border-amber-500/30 dark:bg-amber-500/5">
        <Radar className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
        <div>
          <p className="text-xs font-semibold tracking-wide text-amber-700 uppercase dark:text-amber-400">
            Right now
          </p>
          <p className="mt-1 text-base leading-relaxed text-slate-700 dark:text-slate-300">{profile.now}</p>
        </div>
      </div>
    </section>
  );
}
