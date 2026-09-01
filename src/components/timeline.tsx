import { Briefcase, ExternalLink, FlaskConical, GraduationCap } from "lucide-react";
import { timelineSorted, type TimelineCategory } from "@/lib/data";

const CATEGORY_META: Record<
  TimelineCategory,
  { label: string; icon: typeof Briefcase; dot: string; badge: string }
> = {
  work: {
    label: "Work",
    icon: Briefcase,
    dot: "bg-amber-500",
    badge: "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-400",
  },
  research: {
    label: "Research",
    icon: FlaskConical,
    dot: "bg-violet-500",
    badge: "bg-violet-100 text-violet-800 dark:bg-violet-500/15 dark:text-violet-400",
  },
  education: {
    label: "Education",
    icon: GraduationCap,
    dot: "bg-sky-500",
    badge: "bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-400",
  },
};

export function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <header className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold tracking-wide text-amber-600 uppercase dark:text-amber-400">
          Journey
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Timeline
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Engineering roles, independent research, and education - in one chronological view.
        </p>
      </header>

      <ol className="relative border-l border-slate-200 pl-8 dark:border-slate-800">
        {timelineSorted.map((entry) => {
          const meta = CATEGORY_META[entry.category];
          const Icon = meta.icon;
          return (
            <li key={entry.id} className="mb-12 last:mb-0">
              <span
                className={`absolute -left-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-stone-50 dark:ring-slate-950 ${meta.dot}`}
              />

              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${meta.badge}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {meta.label}
                </span>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {entry.start}
                  {entry.end ? ` - ${entry.end}` : entry.current ? " - Present" : ""}
                </span>
              </div>

              <h3 className="mt-3 font-serif text-xl font-semibold text-slate-900 dark:text-white">
                {entry.title}
              </h3>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {entry.org}
                {entry.location ? ` · ${entry.location}` : ""}
              </p>

              <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">{entry.summary}</p>

              {entry.bullets && (
                <ul className="mt-3 space-y-1.5">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                        className="relative pl-4 text-sm leading-relaxed text-slate-600 before:absolute before:left-0 before:content-['-'] dark:text-slate-400"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {entry.tags && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}

              {entry.link && (
                <a
                  href={entry.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300"
                >
                  {entry.link.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
