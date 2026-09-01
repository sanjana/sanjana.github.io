import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#timeline", label: "Timeline" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-stone-50/80 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-6">
        <a href="#top" className="flex items-center gap-3 font-serif text-base font-semibold tracking-tight">
          <Image
            src="/images/avatar-128.png"
            alt="Anjana Sivanandan"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full ring-2 ring-amber-400/70"
            priority
          />
          <span className="hidden sm:inline">Anjana Sivanandan</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-amber-600 dark:hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
