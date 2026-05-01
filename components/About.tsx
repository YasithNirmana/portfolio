import about from "@/data/about.json";

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <SectionHeading label="01" title="About" />
      <div className="mt-8 grid gap-10 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2 max-w-prose text-muted leading-relaxed">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
            Skills
          </h3>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {about.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-fg"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3 border-b border-border pb-3">
      <span className="font-mono text-xs text-muted">{label}</span>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}
