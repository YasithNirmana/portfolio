import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import projects from "@/data/projects.json";
import type { Project } from "@/components/ProjectCard";

const allProjects = projects as Project[];

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const { caseStudy } = project;

  return (
    <div className="py-16 sm:py-24">
      {/* Back link */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-fg"
      >
        <span aria-hidden>←</span> All projects
      </Link>

      {/* Header */}
      <div className="mt-8 border-b border-border pb-8">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <span className="font-mono text-sm text-muted">{project.year}</span>
        </div>
        <p className="mt-3 max-w-prose text-base text-muted leading-relaxed">
          {project.summary}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
          {project.tags.map((tag) => (
            <li key={tag} className="font-mono text-xs text-muted">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Case study body */}
      {caseStudy ? (
        <div className="mt-12 space-y-12">
          <Section index="01" heading="Overview">
            <p className="text-sm text-muted leading-relaxed">
              {project.description}
            </p>
          </Section>

          <Section index="02" heading="Problem">
            <p className="text-sm text-muted leading-relaxed">
              {caseStudy.problem}
            </p>
          </Section>

          <Section index="03" heading="Approach">
            <p className="text-sm text-muted leading-relaxed">
              {caseStudy.approach}
            </p>
          </Section>

          <Section index="04" heading="Outcome">
            <p className="text-sm text-muted leading-relaxed">
              {caseStudy.outcome}
            </p>
          </Section>

          {caseStudy.highlights && caseStudy.highlights.length > 0 && (
            <Section index="05" heading="Highlights">
              <ul className="space-y-2">
                {caseStudy.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-sm text-muted leading-relaxed"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 font-mono text-xs select-none"
                    >
                      —
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </div>
      ) : (
        <p className="mt-12 text-sm text-muted">
          No case study available yet.
        </p>
      )}

      {/* Footer CTAs */}
      {(project.links?.live || project.links?.source || caseStudy?.demoNote) && (
        <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-border pt-8">
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-fg bg-fg px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-fg/90"
            >
              View live demo <span aria-hidden>↗</span>
            </a>
          )}
          {project.links?.source && (
            <a
              href={project.links.source}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-fg/40"
            >
              Source <span aria-hidden>↗</span>
            </a>
          )}
          {!project.links?.live && caseStudy?.demoNote && (
            <p className="font-mono text-xs text-muted">{caseStudy.demoNote}</p>
          )}
        </div>
      )}
    </div>
  );
}

function Section({
  index,
  heading,
  children,
}: {
  index: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-[10rem_1fr]">
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-xs text-muted">{index}</span>
        <h2 className="text-sm font-medium tracking-tight">{heading}</h2>
      </div>
      <div className="max-w-prose">{children}</div>
    </div>
  );
}
