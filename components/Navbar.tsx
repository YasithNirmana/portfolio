import Link from "next/link";
import profile from "@/data/profile.json";
import { ThemeToggle } from "./ThemeToggle";

const sections = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 -mx-6 border-b border-border/60 bg-bg/80 px-6 backdrop-blur sm:-mx-8 sm:px-8">
      <nav className="mx-auto flex h-14 max-w-page items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight hover:text-muted"
        >
          {profile.name.toLowerCase().replace(/\s+/g, ".")}
        </Link>
        <div className="flex items-center gap-1 sm:gap-3">
          <ul className="hidden items-center gap-1 sm:flex">
            {sections.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="rounded-md px-3 py-1.5 text-sm text-muted hover:text-fg"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
