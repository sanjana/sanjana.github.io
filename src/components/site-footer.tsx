import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const CONTACT_LINKS = [
  { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
  { href: profile.links.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: profile.links.github, label: "GitHub", icon: GithubIcon },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              Let&rsquo;s talk research, engineering, or both.
            </p>
            <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-400">
              Based in {profile.location}. Open to collaboration on quantum computing, machine
              learning, and cybersecurity research.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {CONTACT_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-amber-400 hover:text-amber-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:text-slate-500">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <a
            href={profile.links.orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-amber-600 dark:hover:text-amber-400"
          >
            ORCID 0009-0004-4081-9472
          </a>
        </div>
      </div>
    </footer>
  );
}
