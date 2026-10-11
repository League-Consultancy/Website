"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

const CATEGORIES = ["All", "AI", "Computer Vision", "Software", "Robotics", "IoT", "Mechanical", "Automation"];

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity 0.6s ease ${(index % 3) * 100}ms, transform 0.6s ease ${(index % 3) * 100}ms`;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(project)}
      className="card-dark flex flex-col overflow-hidden group cursor-pointer"
      style={{ opacity: 0, transform: "translateY(24px)" }}
    >
      {/* Project header banner */}
      <div className="relative h-44 bg-[#090B10] border-b border-white/[0.04] flex items-center justify-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 tech-grid-bg opacity-60"
        />
        <div
          aria-hidden="true"
          className="w-14 h-14 rounded-2xl border border-[#62B8FF]/20 bg-[#62B8FF]/[0.05] flex items-center justify-center relative z-10"
        >
          <div className="w-3.5 h-3.5 rounded-full bg-[#62B8FF]/40" />
        </div>
        {project.status && (
          <div className="absolute top-3 right-3 status-badge status-badge-dev">
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-yellow-400"
            />
            {project.status}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category + Industry */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="tag-pill-accent">{project.category}</span>
          <span className="tag-pill">{project.industry}</span>
        </div>

        <h3 className="text-white font-700 text-base leading-snug mb-3 tracking-[-0.01em] group-hover:text-[#62B8FF] transition-colors duration-300">
          {project.title}
        </h3>

        {project.problem && (
          <p className="text-[#9AA2AD] text-sm leading-relaxed mb-3 line-clamp-2">
            {project.problem}
          </p>
        )}

        {project.result && (
          <p className="text-[#62B8FF] text-sm font-600 mb-4 leading-snug">
            ↗ {project.result}
          </p>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mt-auto mb-5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="tag-pill text-[0.7rem]">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tag-pill text-[0.7rem]">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="pt-4 border-t border-white/[0.04]">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
            className="flex items-center gap-2 text-[0.8125rem] text-[#9AA2AD] group-hover:text-[#62B8FF] transition-colors duration-200"
          >
            View details
            <ArrowRight
              size={13}
              className="group-hover:translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

interface ProjectGridProps {
  projects: Project[];
  showFilters?: boolean;
  heading?: string;
  subheading?: string;
  limit?: number;
}

export default function ProjectGrid({
  projects,
  showFilters = true,
  heading = "SELECTED WORK",
  subheading = "A selection of systems engineered across AI, software, computer vision, manufacturing and automation.",
  limit,
}: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.categories.includes(activeCategory));

  const shouldLimit = Boolean(limit && !showAll);
  const displayed = shouldLimit ? filtered.slice(0, limit) : filtered;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-dark section-spacing scroll-mt-20"
    >
      <div className="container-xl">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-12"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <p className="text-eyebrow mb-4">Selected projects</p>
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2 id="projects-heading" className="text-display-md text-white">
              {heading}
            </h2>
            <p className="text-body-lg max-w-md">{subheading}</p>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div
            className="flex flex-wrap gap-2 mb-10"
            role="group"
            aria-label="Filter projects by category"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                aria-pressed={activeCategory === cat}
                className={[
                  "px-4 py-2 rounded-lg text-sm font-600 transition-all duration-200 cursor-pointer",
                  activeCategory === cat
                    ? "bg-[#62B8FF] text-[#090B10]"
                    : "bg-[#11151C] text-[#9AA2AD] border border-white/[0.06] hover:border-[#62B8FF]/30 hover:text-white",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        {displayed.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayed.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#9AA2AD]">
            <p className="text-lg font-500">No projects in this category yet.</p>
          </div>
        )}

        {/* View All Toggle */}
        {limit && filtered.length > limit && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
              id="projects-toggle-all"
            >
              {showAll ? (
                <>
                  Show fewer projects
                  <ChevronUp size={16} aria-hidden="true" />
                </>
              ) : (
                <>
                  View all {filtered.length} projects
                  <ChevronDown size={16} aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
