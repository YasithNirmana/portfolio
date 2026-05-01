import projects from "@/data/projects.json";
import { ProjectCard, type Project } from "./ProjectCard";

export function Projects() {
  const items = projects as Project[];
  return (
    <section id="projects" className="scroll-mt-20">
      <div className="flex items-baseline gap-3 border-b border-border pb-3">
        <span className="font-mono text-xs text-muted">02</span>
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <span className="ml-auto font-mono text-xs text-muted">
          {items.length} total
        </span>
      </div>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {items.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </ul>
    </section>
  );
}
