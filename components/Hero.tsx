import profile from "@/data/profile.json";

export function Hero() {
  return (
    <section className="pt-12 sm:pt-20">
      <p className="font-mono text-sm text-muted">Hi, I&apos;m</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 max-w-prose text-lg text-muted">
        {profile.role} — {profile.tagline}
      </p>
      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <a
          href="#projects"
          className="inline-flex items-center gap-1 font-medium text-fg hover:text-muted"
        >
          See projects <span aria-hidden>↓</span>
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-1 font-medium text-muted hover:text-fg"
        >
          Get in touch <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
