"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
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
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="section-light section-spacing relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#62B8FF]/[0.04] blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#62B8FF]/[0.03] blur-3xl pointer-events-none"
      />

      <div className="container-xl relative z-10">
        <div
          ref={sectionRef}
          className="text-center max-w-3xl mx-auto"
          style={{ opacity: 0, transform: "translateY(24px)" }}
        >
          <p className="text-eyebrow mb-6">Start a project</p>
          <h2
            id="final-cta-heading"
            className="text-display-lg mb-6"
            style={{ color: "var(--dark-950)" }}
          >
            HAVE AN IDEA?<br />
            <span style={{ color: "var(--accent-blue)" }}>LET&apos;S ENGINEER IT.</span>
          </h2>
          <p
            className="text-base leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: "var(--muted-500)" }}
          >
            Tell us what you are trying to build, automate, improve or solve.
            Initial consultation is free. We will discuss the problem, evaluate
            the engineering and come back with a clear proposal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Link
              href="/contact"
              className="btn-primary px-8 py-4 text-base"
              id="final-cta-button"
            >
              Start a Conversation
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/projects"
              className="text-[#59616D] hover:text-[#090B10] text-sm font-600 transition-colors duration-200 flex items-center gap-2"
            >
              See our work first
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Assurances */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#9AA2AD]">
            {[
              "Free initial consultation",
              "NDA available",
              "Fixed proposals",
              "End-to-end engineering",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full bg-[#62B8FF]"
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
