import type { Metadata } from "next";
import Link from "next/link";
import { SystemArchitectureFlow } from "@/components/SystemArchitectureFlow";

export const metadata: Metadata = {
  title: "Property Management System (PMS) — Case Study",
  description: "A centralized digital application that automates property management by replacing manual, spreadsheet-heavy workflows.",
};

export default function CaseStudyPage() {
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
            Property Management System (PMS)
          </h1>
          <span className="font-mono text-sm text-muted">2025</span>
        </div>
        <p className="mt-6 font-mono text-xs text-muted uppercase tracking-wider">
          Technology Stack
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
          {["Next.js", "TypeScript", "PostgreSQL", "Prisma", "DigitalOcean", "Twilio"].map((tag) => (
            <li key={tag} className="font-mono text-sm text-fg/80">
              {tag} <span className="text-muted last:hidden ml-2">•</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Case study body */}
      <div className="mt-12 space-y-16">
        <Section index="01" heading="Overview">
          <p className="text-sm text-muted leading-relaxed mb-4">
            Steadfast Management was operating a growing property portfolio using a combination of spreadsheets, physical records, and manual financial processes. As the business expanded, these disconnected systems became increasingly difficult to maintain, resulting in inefficiencies, reporting inaccuracies, and significant administrative overhead.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            To solve this, I designed and developed a centralized Property Management System (PMS) that automated core business operations, including tenant management, financial tracking, invoice generation, maintenance records, and reporting. The platform became the agency&apos;s single source of truth, providing real-time visibility into property operations while significantly reducing manual work.
          </p>
        </Section>

        <Section index="02" heading="The Challenge">
          <p className="text-sm text-muted leading-relaxed mb-4">
            The agency&apos;s day-to-day operations relied heavily on spreadsheets and manual processes that were no longer sustainable as the business scaled.
          </p>
          <p className="text-sm text-muted leading-relaxed mb-2">Key challenges included:</p>
          <ul className="space-y-2 mb-4">
            {[
              "Excessive administrative workload caused by repetitive manual tasks.",
              "Financial leakage due to fragmented records and inconsistent tracking.",
              "Maintenance requests being tracked across multiple spreadsheets and physical logs.",
              "Time-consuming invoice generation and tenant communication.",
              "Inaccurate financial reporting caused by manual calculations.",
              "Limited scalability for managing a growing number of properties and tenants."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                <span aria-hidden className="mt-0.5 font-mono text-xs select-none text-fg/40">—</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted leading-relaxed">
            These inefficiencies not only increased operational costs but also restricted the agency&apos;s ability to focus on growth and client service.
          </p>
        </Section>

        <Section index="03" heading="The Solution">
          <p className="text-sm text-muted leading-relaxed mb-4">
            I worked closely with the business owner to audit existing workflows, identify bottlenecks, and map out a digital transformation strategy tailored to their operational needs.
          </p>
          <p className="text-sm text-muted leading-relaxed mb-4">
            The result was a fully custom Property Management System built using Next.js, TypeScript, PostgreSQL, Prisma, and hosted on DigitalOcean.
          </p>

          <SystemArchitectureFlow />

          <p className="text-sm text-fg font-medium mb-4 mt-8">Key capabilities included:</p>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-fg/90 mb-2">Centralized Property Operations</h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                <li>• Tenant and lease management</li>
                <li>• Property portfolio tracking</li>
                <li>• Occupancy monitoring</li>
                <li>• Maintenance request management</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-fg/90 mb-2">Financial Automation</h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                <li>• Automated rental tracking</li>
                <li>• Invoice generation</li>
                <li>• Payment reconciliation</li>
                <li>• Real-time financial reporting</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-fg/90 mb-2">WhatsApp Invoice Automation</h3>
              <p className="text-sm text-muted leading-relaxed">
                To improve tenant communication and reduce administrative effort, I integrated Twilio-powered WhatsApp messaging, allowing invoices and payment reminders to be sent automatically.
              </p>
            </div>
          </div>
        </Section>

        <Section index="04" heading="Data Migration Engine">
          <p className="text-sm text-muted leading-relaxed mb-4">
            One of the biggest challenges was migrating years of spreadsheet data into the new platform.
          </p>
          <p className="text-sm text-muted leading-relaxed mb-4">
            To solve this, I developed a custom Excel import and validation tool that enabled bulk data migration directly into the database while maintaining data integrity.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            This reduced client onboarding and migration time by approximately 90%.
          </p>
        </Section>

        <Section index="05" heading="Results">
          <p className="text-sm text-muted leading-relaxed mb-6">
            The implementation delivered immediate operational improvements across the business.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-5 rounded-xl border border-border bg-subtle/20 shadow-sm transition-all hover:bg-subtle/40">
              <h3 className="text-sm font-semibold text-fg/90 mb-2 text-emerald-400">90% Reduction in Admin Time</h3>
              <p className="text-sm text-muted leading-relaxed">
                Tasks that previously required manual spreadsheet updates, calculations, and record reconciliation became fully automated.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border bg-subtle/20 shadow-sm transition-all hover:bg-subtle/40">
              <h3 className="text-sm font-semibold text-fg/90 mb-2 text-blue-400">Improved Financial Accuracy</h3>
              <p className="text-sm text-muted leading-relaxed">
                Automated calculations and centralized records eliminated common reporting errors and reduced financial discrepancies.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border bg-subtle/20 shadow-sm transition-all hover:bg-subtle/40">
              <h3 className="text-sm font-semibold text-fg/90 mb-2 text-amber-400">Faster Tenant Communication</h3>
              <p className="text-sm text-muted leading-relaxed">
                Automated WhatsApp invoicing significantly reduced manual follow-ups and improved payment collection workflows.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border bg-subtle/20 shadow-sm transition-all hover:bg-subtle/40">
              <h3 className="text-sm font-semibold text-fg/90 mb-2 text-purple-400">Scalable Growth Foundation</h3>
              <p className="text-sm text-muted leading-relaxed">
                The agency now operates from a centralized platform capable of supporting thousands of properties, tenants, and transactions without increasing administrative complexity.
              </p>
            </div>
          </div>
        </Section>

        <Section index="06" heading="My Role">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-fg/90 mb-1">Full-Stack Engineering</h3>
              <p className="text-sm text-muted leading-relaxed">
                Designed and developed the entire platform, including frontend applications, backend services, database architecture, integrations, and cloud deployment.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-fg/90 mb-1">Business Process Analysis</h3>
              <p className="text-sm text-muted leading-relaxed">
                Conducted workflow audits and translated operational challenges into practical software solutions.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-fg/90 mb-1">System Architecture</h3>
              <p className="text-sm text-muted leading-relaxed">
                Designed a scalable, modular architecture capable of supporting long-term business growth and future feature expansion.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-fg/90 mb-1">DevOps & Deployment</h3>
              <p className="text-sm text-muted leading-relaxed">
                Managed infrastructure, deployment pipelines, database hosting, backups, and production environments on DigitalOcean.
              </p>
            </div>
          </div>
        </Section>

        <Section index="07" heading="Business Impact">
          <p className="text-sm text-muted leading-relaxed mb-4">
            The Property Management System transformed Steadfast Management from a spreadsheet-driven operation into a scalable, data-driven business.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            By automating critical workflows and centralizing operational data, the agency was able to reduce administrative overhead, improve financial visibility, and establish a technology foundation capable of supporting future growth.
          </p>
        </Section>

      </div>
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
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-sm text-muted">{index}</span>
        <h2 className="text-xl font-semibold tracking-tight">{heading}</h2>
      </div>
      <div className="w-full pl-6 sm:pl-8">{children}</div>
    </div>
  );
}
