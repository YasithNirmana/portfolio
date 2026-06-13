import Link from "next/link";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year: number;
  links?: {
    live?: string;
    source?: string;
  };
  featured?: boolean;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="group flex flex-col rounded-lg border border-border bg-subtle/40 p-5 transition-colors hover:border-fg/40">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-medium tracking-tight">
          {project.title}
        </h3>
        <span className="font-mono text-xs text-muted">{project.year}</span>
      </div>
      <p className="mt-2 text-sm text-muted leading-relaxed">
        {project.summary}
      </p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="font-mono text-[11px] text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-4 text-sm">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 font-medium text-fg hover:text-muted"
        >
          Case study <span aria-hidden>→</span>
        </Link>
        {project.links?.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-muted hover:text-fg"
          >
            Live <span aria-hidden>↗</span>
          </a>
        )}
        {project.links?.source && (
          <a
            href={project.links.source}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-muted hover:text-fg"
          >
            Source <span aria-hidden>↗</span>
          </a>
        )}
      </div>
    </li>
  );
}
