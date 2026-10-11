"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Code, Eye, Settings, Wifi, Wrench, Database, Layers, type LucideIcon } from "lucide-react";
import type { Capability } from "@/data/capabilities";
import SolutionModal from "./SolutionModal";

const ICON_MAP: Record<string, LucideIcon> = {
  cpu: Cpu,
  code: Code,
  eye: Eye,
  settings: Settings,
  wifi: Wifi,
  wrench: Wrench,
  database: Database,
  layers: Layers,
};

function CapabilityCard({
  capability,
  index,
  onSelect,
}: {
  capability: Capability;
  index: number;
  onSelect: (cap: Capability) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`;
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

  const Icon = ICON_MAP[capability.icon];

  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(capability)}
      className="card-dark p-6 group cursor-pointer flex flex-col"
      style={{ opacity: 0, transform: "translateY(24px)" }}
    >
      {/* Number + Icon Row */}
      <div className="flex items-start justify-between mb-5">
        <span className="number-tag">{capability.number}</span>
        {Icon && (
          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#090B10] border border-white/[0.06] group-hover:border-[#62B8FF]/30 group-hover:bg-[#62B8FF]/10 transition-all duration-300">
            <Icon
              size={17}
              className="text-[#9AA2AD] group-hover:text-[#62B8FF] transition-colors duration-300"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      {/* Accent line */}
      <div className="accent-line mb-4" aria-hidden="true" />

      {/* Title */}
      <h3 className="text-white font-700 text-[1.0625rem] leading-snug mb-3 tracking-[-0.01em] group-hover:text-[#62B8FF] transition-colors duration-200">
        {capability.title}
      </h3>

      {/* Description */}
      <p className="text-body-md text-[0.875rem] leading-relaxed mb-5">
        {capability.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
        {capability.tags.map((tag) => (
          <span key={tag} className="tag-pill text-[0.7rem]">
            {tag}
          </span>
        ))}
      </div>

      {/* Action button */}
      <div className="pt-2 border-t border-white/[0.04]">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(capability);
          }}
          className="flex items-center gap-2 text-[0.8125rem] text-[#9AA2AD] group-hover:text-[#62B8FF] transition-colors duration-200"
        >
          Learn more
          <ArrowRight
            size={13}
            className="group-hover:translate-x-1 transition-transform duration-200"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}

interface CapabilityGridProps {
  capabilities: Capability[];
}

export default function CapabilityGrid({ capabilities }: CapabilityGridProps) {
  const [selectedCapability, setSelectedCapability] = useState<Capability | null>(null);
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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="section-dark-alt section-spacing scroll-mt-20"
    >
      <div className="container-xl">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-16"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <p className="text-eyebrow mb-4">Engineering Capabilities</p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              id="solutions-heading"
              className="text-display-md text-white"
            >
              WHAT WE BUILD
            </h2>
            <p className="text-body-lg max-w-lg">
              From intelligent software to physical machines, LEAGUE combines
              engineering disciplines to turn complex requirements into working
              products.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {capabilities.map((cap, i) => (
            <CapabilityCard
              key={cap.id}
              capability={cap}
              index={i}
              onSelect={(item) => setSelectedCapability(item)}
            />
          ))}
        </div>

        {/* Cross-discipline note */}
        <div className="mt-12 p-6 rounded-2xl border border-[#62B8FF]/15 bg-[#62B8FF]/[0.04]">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <div className="flex-1">
              <p className="text-white font-600 text-sm mb-1">
                Cross-disciplinary by design
              </p>
              <p className="text-[#9AA2AD] text-sm leading-relaxed">
                These capabilities are not separate offerings. LEAGUE assembles
                the combination of disciplines required to engineer the complete
                solution — AI + Vision + Hardware + Software in a single
                engagement.
              </p>
            </div>
            <Link
              href="#contact"
              className="btn-ghost shrink-0"
              id="capability-grid-cta"
            >
              Discuss your project
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Solution Detail Modal */}
      <SolutionModal
        capability={selectedCapability}
        onClose={() => setSelectedCapability(null)}
      />
    </section>
  );
}
