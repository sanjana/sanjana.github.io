import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <header className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold tracking-wide text-sky-600 uppercase dark:text-sky-400">
          Toolkit
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Skills
        </h2>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
            <h3 className="font-serif text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
