"use client";

import { useEffect } from "react";
import { X, ArrowRight, CheckCircle2, Cpu } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleContactClick = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#contact");
      }
    }, 150);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl my-8 bg-[#11151C] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden z-10 transition-all duration-300 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/[0.06] bg-[#090B10] flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {project.categories.map((c) => (
                <span key={c} className="tag-pill-accent text-xs">
                  {c}
                </span>
              ))}
              <span className="tag-pill text-xs">{project.industry}</span>
              {project.status && (
                <span className="status-badge status-badge-dev text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  {project.status}
                </span>
              )}
            </div>
            <h2
              id="modal-project-title"
              className="text-white text-xl sm:text-2xl font-800 tracking-[-0.01em]"
            >
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[#9AA2AD] hover:text-white flex items-center justify-center transition-colors shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-sm sm:text-base">
          {/* Result Banner if available */}
          {project.result && (
            <div className="flex items-start gap-3 p-4 rounded-xl border border-[#62B8FF]/20 bg-[#62B8FF]/[0.05]">
              <CheckCircle2 size={18} className="text-[#62B8FF] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-wider text-[#62B8FF] font-700 mb-0.5">
                  Delivered Result
                </p>
                <p className="text-white font-600">{project.result}</p>
              </div>
            </div>
          )}

          {/* Solution / Overview */}
          <div>
            <p className="text-eyebrow mb-2">Solution Overview</p>
            <p className="text-[#F4F5F2] leading-relaxed">{project.solution}</p>
          </div>

          {/* Challenge */}
          {project.problem && (
            <div className="p-5 rounded-xl border border-white/[0.06] bg-[#090B10]">
              <p className="text-[#9AA2AD] font-600 text-xs uppercase tracking-wider mb-2">
                The Engineering Challenge
              </p>
              <p className="text-[#9AA2AD] leading-relaxed">{project.problem}</p>
            </div>
          )}

          {/* Engineering Approach */}
          {project.engineeringApproach && (
            <div>
              <p className="text-eyebrow mb-2">Engineering Approach</p>
              <p className="text-[#9AA2AD] leading-relaxed">{project.engineeringApproach}</p>
            </div>
          )}

          {/* Technologies */}
          <div>
            <p className="text-eyebrow mb-3">Technologies Used</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.06] bg-[#090B10] text-xs font-500 text-white"
                >
                  <Cpu size={12} className="text-[#62B8FF]" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 sm:p-6 border-t border-white/[0.06] bg-[#090B10] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <p className="text-xs text-[#59616D] text-center sm:text-left">
            Client: {project.client} · End-to-end custom engineering
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="btn-secondary w-full sm:w-auto justify-center text-sm py-2.5 px-4"
            >
              Close
            </button>
            <button
              onClick={handleContactClick}
              className="btn-primary w-full sm:w-auto justify-center text-sm py-2.5 px-5"
            >
              Have a similar problem?
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
