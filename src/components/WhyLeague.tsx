"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "2026", label: "Founded" },
  { value: "9+", label: "Engineering Disciplines" },
  { value: "India", label: "Headquartered" },
  { value: "Worldwide", label: "Clients Served" },
];

const PILLARS = [
  {
    number: "01",
    title: "Experienced Team",
    description:
      "Cross-disciplinary engineering capability spanning AI, software, computer vision, robotics, IoT and mechanical engineering.",
  },
  {
    number: "02",
    title: "Faster Development",
    description:
      "A focused engineering approach designed to move ideas toward working systems efficiently — without compromising technical quality.",
  },
  {
    number: "03",
    title: "Open Development",
    description:
      "Clients stay informed about progress, architectural decisions and technical developments throughout the build.",
  },
  {
    number: "04",
    title: "Complete Engineering",
    description:
      "Problem → Design → Software → AI → Hardware → Deployment → Support. LEAGUE handles the complete product, not just one layer.",
  },
];

export default function WhyLeague() {
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const all = [headerRef.current, statsRef.current, ...pillarsRef.current];
    all.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transition = `opacity 0.7s ease ${i * 70}ms, transform 0.7s ease ${i * 70}ms`;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
    });
  }, []);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-dark-alt section-spacing relative overflow-hidden scroll-mt-20"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-[#62B8FF]/[0.03] blur-3xl pointer-events-none"
      />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className="grid lg:grid-cols-2 gap-8 items-end mb-12"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <div>
            <p className="text-eyebrow mb-4">About LEAGUE</p>
            <h2 id="about-heading" className="text-display-md text-white">
              ENGINEERING WITH PURPOSE
            </h2>
          </div>
          <p className="text-body-lg max-w-md">
            LEAGUE Consultancy was founded to turn ideas and complex business
            challenges into practical, working technology solutions — handling
            the full stack from software to hardware.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl border border-white/[0.06] bg-[#090B10]"
            >
              <p className="text-[#62B8FF] font-800 text-3xl tracking-[-0.02em] mb-1">
                {stat.value}
              </p>
              <p className="text-[#9AA2AD] text-xs uppercase tracking-wider font-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.number}
              ref={(el) => { if (el) pillarsRef.current[i] = el; }}
              className="p-7 rounded-2xl border border-white/[0.06] bg-[#090B10] hover:border-[#62B8FF]/20 transition-all duration-300 group"
              style={{ opacity: 0, transform: "translateY(24px)" }}
            >
              <span className="number-tag">{pillar.number}</span>
              <div className="accent-line mt-4 mb-5 group-hover:w-[60px]" aria-hidden="true" />
              <h3 className="text-white font-700 text-lg mb-3 tracking-[-0.01em]">
                {pillar.title}
              </h3>
              <p className="text-[#9AA2AD] text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-[#090B10]">
          <div>
            <p className="text-white font-700 text-base mb-1">
              Small enough to care. Technical enough to build.
            </p>
            <p className="text-[#9AA2AD] text-sm">
              Structured to handle the complete product engineering process from first conversation to deployed system.
            </p>
          </div>
          <Link
            href="#contact"
            className="btn-primary shrink-0"
            id="why-league-cta"
          >
            Start a Conversation
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
