"use client";

import { useEffect } from "react";
import { X, ArrowRight, CheckCircle2, Layers, Cpu, Wrench } from "lucide-react";
import type { Capability } from "@/data/capabilities";
import { SOLUTION_DETAILS } from "@/data/solutionDetails";

interface SolutionModalProps {
  capability: Capability | null;
  onClose: () => void;
}

export default function SolutionModal({ capability, onClose }: SolutionModalProps) {
  useEffect(() => {
    if (!capability) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [capability, onClose]);

  if (!capability) return null;

  const details = SOLUTION_DETAILS[capability.id];

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
      aria-labelledby="modal-solution-title"
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
            <div className="flex items-center gap-2 mb-3">
              <span className="number-tag">{capability.number}</span>
              <span className="text-xs uppercase tracking-wider text-[#9AA2AD]">Engineering Discipline</span>
            </div>
            <h2
              id="modal-solution-title"
              className="text-white text-xl sm:text-2xl font-800 tracking-[-0.01em]"
            >
              {capability.title}
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
          {/* Overview */}
          <div>
            <p className="text-eyebrow mb-2">Discipline Overview</p>
            <p className="text-[#F4F5F2] leading-relaxed">
              {details?.whatIsIt || capability.description}
            </p>
          </div>

          {/* Problems it solves */}
          {details?.whatItSolves && (
            <div className="p-5 rounded-xl border border-white/[0.06] bg-[#090B10]">
              <p className="text-[#9AA2AD] font-600 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#62B8FF]" />
                Problems This Solves
              </p>
              <ul className="space-y-2">
                {details.whatItSolves.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#9AA2AD]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#62B8FF] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* What We Can Build */}
          {details?.whatWeCanBuild && (
            <div>
              <p className="text-eyebrow mb-3 flex items-center gap-2">
                <Wrench size={13} className="text-[#62B8FF]" />
                What LEAGUE Can Build
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {details.whatWeCanBuild.map((item) => (
                  <div
                    key={item}
                    className="p-3.5 rounded-xl border border-white/[0.06] bg-[#090B10] text-xs text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Typical Applications */}
          {details?.typicalApplications && (
            <div>
              <p className="text-eyebrow mb-3 flex items-center gap-2">
                <Layers size={13} className="text-[#62B8FF]" />
                Typical Applications
              </p>
              <div className="flex flex-wrap gap-2">
                {details.typicalApplications.map((app) => (
                  <span
                    key={app}
                    className="tag-pill text-xs"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {details?.technicalCapabilities && (
            <div>
              <p className="text-eyebrow mb-3 flex items-center gap-2">
                <Cpu size={13} className="text-[#62B8FF]" />
                Technical Capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {details.technicalCapabilities.map((tech) => (
                  <span
                    key={tech}
                    className="tag-pill-accent text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 sm:p-6 border-t border-white/[0.06] bg-[#090B10] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <p className="text-xs text-[#59616D] text-center sm:text-left">
            Part of LEAGUE&apos;s end-to-end multi-disciplinary engineering
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
              Discuss your project
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
