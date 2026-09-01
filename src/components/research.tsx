import { ExternalLink, FlaskConical } from "lucide-react";
import { publications, timeline, type Publication } from "@/lib/data";

const activeResearch = timeline.filter((e) => e.category === "research" && e.current);

const STATUS_LABEL: Record<Publication["status"], string> = {
  published: "Published",
  preprint: "Preprint",
  "in-preparation": "In preparation",
};

const STATUS_STYLE: Record<Publication["status"], string> = {
  published: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-400",
  preprint: "bg-violet-100 text-violet-800 dark:bg-violet-500/15 dark:text-violet-400",
  "in-preparation": "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-400",
};

export function Research() {
  return (
    <section id="research" className="border-t border-slate-200 bg-white py-16 sm:py-20 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-violet-600 uppercase dark:text-violet-400">
            Ongoing work
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Research &amp; publications
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Independent research at the intersection of quantum computing, machine learning, and
            information theory.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          {activeResearch.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
            >
              <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400">
                <FlaskConical className="h-4 w-4" />
                <span className="text-xs font-semibold tracking-wide uppercase">
                  Ongoing since {project.start}
                </span>
              </div>
              <h3 className="mt-3 font-serif text-lg font-semibold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.summary}
              </p>
              {project.tags && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <h3 className="mt-14 mb-6 font-serif text-xl font-semibold text-slate-900 dark:text-white">
          Publications
        </h3>
        <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 dark:divide-slate-800 dark:border-slate-800">
          {publications.map((pub) => (
            <li key={pub.title} className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-amber-600 dark:hover:text-amber-400"
                    >
                      {pub.title}
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    </a>
                  ) : (
                    pub.title
                  )}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {pub.venue} · {pub.year}
                </p>
              </div>
              <span
                className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLE[pub.status]}`}
              >
                {STATUS_LABEL[pub.status]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
