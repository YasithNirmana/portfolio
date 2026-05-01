import profile from "@/data/profile.json";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="flex items-baseline gap-3 border-b border-border pb-3">
        <span className="font-mono text-xs text-muted">03</span>
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      </div>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div className="max-w-prose text-muted leading-relaxed">
          <p>
            The fastest way to reach me is email. I&apos;m also active on the
            links to the right — happy to chat about interesting work.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-5 inline-block font-mono text-sm text-fg underline-offset-4 hover:underline"
          >
            {profile.email}
          </a>
        </div>
        <ul className="space-y-2 text-sm">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-fg"
              >
                <span className="font-mono text-xs text-muted">↗</span>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
