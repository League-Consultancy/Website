"use client";

import { useEffect, useRef } from "react";
import { Factory, GraduationCap, Package, Building2, Rocket, HeartPulse, type LucideIcon } from "lucide-react";
import type { Industry } from "@/data/industries";

const ICON_MAP: Record<string, LucideIcon> = {
  factory: Factory,
  "graduation-cap": GraduationCap,
  package: Package,
  "building-2": Building2,
  rocket: Rocket,
  "heart-pulse": HeartPulse,
};

function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
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

  const Icon = ICON_MAP[industry.icon];

  return (
    <div
      ref={cardRef}
      className="card-light p-6 group"
      style={{ opacity: 0, transform: "translateY(24px)" }}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#E8EBEE] border border-[#090B10]/[0.06] mb-5 group-hover:border-[#62B8FF]/30 group-hover:bg-[#62B8FF]/10 transition-all duration-300">
        {Icon && (
          <Icon
            size={18}
            className="text-[#59616D] group-hover:text-[#62B8FF] transition-colors duration-300"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="accent-line mb-4" aria-hidden="true" />

      <h3 className="text-[#090B10] font-700 text-base mb-2 tracking-[-0.01em]">
        {industry.name}
      </h3>

      <p className="text-[#59616D] text-sm leading-relaxed mb-4">
        {industry.description}
      </p>

      <ul className="space-y-1" role="list">
        {industry.examples.map((ex) => (
          <li key={ex} className="flex items-center gap-2 text-[#9AA2AD] text-xs">
            <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[#62B8FF] shrink-0" />
            {ex}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface IndustriesProps {
  industries: Industry[];
}

export default function Industries({ industries }: IndustriesProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headerRef.current, noteRef.current];
    els.forEach((el) => {
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
    });
  }, []);

  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="section-light section-spacing tech-grid-bg-light scroll-mt-20"
    >
      <div className="container-xl">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-14"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <p className="text-eyebrow mb-4">Industries</p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              id="industries-heading"
              className="text-display-md"
              style={{ color: "var(--dark-950)" }}
            >
              ENGINEERING ACROSS<br />INDUSTRIES
            </h2>
            <p className="text-[#59616D] text-base leading-relaxed max-w-md">
              Different industries. Different constraints. One engineering
              approach.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {industries.map((ind, i) => (
            <IndustryCard key={ind.id} industry={ind} index={i} />
          ))}
        </div>

        {/* Note */}
        <div
          ref={noteRef}
          className="rounded-2xl border border-[#090B10]/[0.08] bg-white p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ opacity: 0, transform: "translateY(16px)" }}
        >
          <div
            aria-hidden="true"
            className="w-2 h-2 rounded-full bg-[#62B8FF] shrink-0 mt-1 sm:mt-0"
          />
          <p className="text-[#59616D] text-sm leading-relaxed">
            LEAGUE does not claim to specialise in every industry. The engineering
            capabilities adapt to the problem — not the other way around. If you
            are working on a problem that requires technical engineering, the
            industry is less important than the challenge.
          </p>
        </div>
      </div>
    </section>
  );
}
