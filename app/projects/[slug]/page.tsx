import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, getProjectBySlug } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.solution,
    openGraph: {
      title: `${project.title} | LEAGUE Consultancy`,
      description: project.solution,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedProjects = projects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        p.categories.some((c) => project.categories.includes(c))
    )
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="section-dark section-spacing-sm pt-[120px] tech-grid-bg relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 hero-gradient pointer-events-none"
          />
          <div className="container-xl relative z-10">
            {/* Back link */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#9AA2AD] hover:text-white text-sm transition-colors duration-200 mb-8 group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform duration-200"
                aria-hidden="true"
              />
              All Projects
            </Link>

            {/* Metadata badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.categories.map((cat) => (
                <span key={cat} className="tag-pill-accent">
                  {cat}
                </span>
              ))}
              <span className="tag-pill">{project.industry}</span>
              <span className="tag-pill">{project.client}</span>
              {project.status && (
                <span className="status-badge status-badge-dev">
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-yellow-400"
                  />
                  {project.status}
                </span>
              )}
            </div>

            <h1 className="text-display-lg text-white mb-6 max-w-3xl">
              {project.title}
            </h1>

            {project.result && (
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-[#62B8FF]/25 bg-[#62B8FF]/[0.06]">
                <span
                  aria-hidden="true"
                  className="text-[#62B8FF] text-xl font-800"
                >
                  ↗
                </span>
                <p className="text-[#62B8FF] font-600 text-sm">
                  {project.result}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Project image placeholder */}
        <div className="bg-[#11151C] border-y border-white/[0.06]">
          <div className="container-xl">
            <div className="h-[300px] lg:h-[480px] rounded-xl flex items-center justify-center relative overflow-hidden my-8 bg-[#090B10]">
              <div
                aria-hidden="true"
                className="absolute inset-0 tech-grid-bg opacity-60"
              />
              <div className="text-center relative z-10">
                <div
                  aria-hidden="true"
                  className="w-20 h-20 rounded-2xl border border-[#62B8FF]/20 bg-[#62B8FF]/[0.05] flex items-center justify-center mx-auto mb-4"
                >
                  <div className="w-6 h-6 rounded-full bg-[#62B8FF]/40" />
                </div>
                <p className="text-[#59616D] text-sm">
                  Project images available on request
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detail content */}
        <section className="section-dark section-spacing">
          <div className="container-xl">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Overview */}
                <div>
                  <p className="text-eyebrow mb-3">Overview</p>
                  <p className="text-white text-lg leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Challenge */}
                {project.problem && (
                  <div>
                    <h2 className="text-display-sm text-white mb-4">
                      The Challenge
                    </h2>
                    <p className="text-[#9AA2AD] text-base leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}

                {/* Engineering approach */}
                {project.engineeringApproach && (
                  <div>
                    <h2 className="text-display-sm text-white mb-4">
                      Engineering Approach
                    </h2>
                    <p className="text-[#9AA2AD] text-base leading-relaxed">
                      {project.engineeringApproach}
                    </p>
                  </div>
                )}

                {/* Result */}
                {project.result && (
                  <div className="p-6 rounded-2xl border border-[#62B8FF]/20 bg-[#62B8FF]/[0.04]">
                    <p className="text-eyebrow mb-2">Result</p>
                    <p className="text-white text-lg font-600 leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Technologies */}
                <div className="rounded-2xl border border-white/[0.06] bg-[#11151C] p-6">
                  <p className="text-eyebrow mb-4">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div className="rounded-2xl border border-white/[0.06] bg-[#11151C] p-6">
                  <p className="text-eyebrow mb-4">Capabilities</p>
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((cat) => (
                      <span key={cat} className="tag-pill-accent">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-2xl border border-[#62B8FF]/20 bg-[#62B8FF]/[0.04] p-6">
                  <p className="text-white font-700 mb-2">
                    Have a similar challenge?
                  </p>
                  <p className="text-[#9AA2AD] text-sm mb-4 leading-relaxed">
                    We would be happy to discuss your requirements.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center text-sm"
                    id={`project-${project.slug}-cta`}
                  >
                    Start a Conversation
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <section className="section-dark-alt section-spacing-sm">
            <div className="container-xl">
              <p className="text-eyebrow mb-6">Related projects</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedProjects.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/projects/${rel.slug}`}
                    className="card-dark p-5 block group"
                  >
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {rel.categories.map((c) => (
                        <span key={c} className="tag-pill-accent text-[0.7rem]">
                          {c}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-white font-700 text-sm mb-2 group-hover:text-[#62B8FF] transition-colors duration-200">
                      {rel.title}
                    </h3>
                    <p className="text-[#9AA2AD] text-xs leading-relaxed line-clamp-2">
                      {rel.solution}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
