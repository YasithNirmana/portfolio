import profile from "@/data/profile.json";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-8 font-mono text-xs text-muted">
      <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <p>
          © {year} {profile.name}
        </p>
        <p>Built with Next.js & Tailwind.</p>
      </div>
    </footer>
  );
}
