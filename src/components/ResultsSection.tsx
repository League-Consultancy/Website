"use client";

import { useEffect, useRef } from "react";

const RESULTS = [
  {
    id: "warehouse",
    before: "8–10 MIN",
    after: "3–5 SEC",
    arrow: true,
    label: "Warehouse Product Search",
    description:
      "Computer vision and QR identification system integrated with projection and inventory data to locate products across a large warehouse.",
    category: "Computer Vision",
    featured: true,
  },
  {
    id: "attendance",
    before: "1 IMAGE",
    after: "ATTENDANCE",
    arrow: true,
    label: "Classroom Attendance",
    description:
      "Attendance from a single classroom photograph using face detection and recognition.",
    category: "Computer Vision",
    featured: false,
  },
  {
    id: "school-entry",
    before: "AUTOMATED",
    after: "SCHOOL ENTRY & EXIT",
    arrow: false,
    label: "Entry & Exit System",
    description:
      "CCTV-based automated identification and attendance/security system for educational institutions.",
    category: "Computer Vision",
    featured: false,
  },
  {
    id: "iiot",
    before: "MANUAL RECORDS",
    after: "IIoT MONITORING",
    arrow: true,
    label: "Machine Uptime Monitoring",
    description:
      "Custom hardware monitors machine operating state and records it automatically in the management software.",
    category: "IoT / Embedded",
    featured: false,
  },
];

function ResultCard({
  result,
  index,
}: {
  result: (typeof RESULTS)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity 0.7s ease ${index * 100}ms, transform 0.7s ease ${index * 100}ms`;
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
      className={[
        "card-dark p-7 relative overflow-hidden",
        result.featured ? "sm:col-span-2 lg:col-span-1" : "",
      ].join(" ")}
      style={{ opacity: 0, transform: "translateY(24px)" }}
    >
      {/* Category pill */}
      <div className="flex items-center justify-between mb-5">
        <span className="tag-pill-accent">{result.category}</span>
      </div>

      {/* Metric */}
      <div className="mb-5">
        {result.arrow ? (
          <div className="space-y-1">
            <p
              className={[
                "font-800 tracking-[-0.02em] leading-none",
                result.featured ? "text-5xl lg:text-6xl text-[#62B8FF]" : "text-4xl text-[#9AA2AD] line-through decoration-[#59616D]",
              ].join(" ")}
              aria-label={`Before: ${result.before}`}
            >
              {result.before}
            </p>
            <div className="flex items-center gap-2 py-1" aria-hidden="true">
              <div className="w-5 h-px bg-[#62B8FF]" />
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 0v10M1 5l5 5 5-5" stroke="#62B8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p
              className={[
                "font-800 tracking-[-0.02em] leading-none text-white",
                result.featured ? "text-5xl lg:text-6xl" : "text-4xl",
              ].join(" ")}
              aria-label={`After: ${result.after}`}
            >
              {result.after}
            </p>
          </div>
        ) : (
          <p
            className="text-4xl font-800 tracking-[-0.02em] leading-tight text-white"
            aria-label={`Result: ${result.before} ${result.after}`}
          >
            {result.before}
            <br />
            <span className="text-[#62B8FF]">{result.after}</span>
          </p>
        )}
      </div>

      <hr className="divider-dark mb-4" />

      <h3 className="text-white font-700 text-sm tracking-wide mb-2">
        {result.label}
      </h3>
      <p className="text-[#9AA2AD] text-sm leading-relaxed">
        {result.description}
      </p>

      {/* Subtle glow */}
      {result.featured && (
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-40 h-40 bg-[#62B8FF]/[0.06] rounded-full blur-3xl pointer-events-none"
        />
      )}
    </div>
  );
}

export default function ResultsSection() {
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
      id="results"
      aria-labelledby="results-heading"
      className="section-light section-spacing tech-grid-bg-light relative"
    >
      <div className="container-xl">
        <div
          ref={headerRef}
          className="mb-16"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <p
            className="text-eyebrow mb-4"
            style={{ color: "var(--accent-blue)" }}
          >
            Real-world results
          </p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              id="results-heading"
              className="text-display-md"
              style={{ color: "var(--dark-950)" }}
            >
              BUILT FOR<br />REAL-WORLD RESULTS
            </h2>
            <p
              className="max-w-md text-base leading-relaxed"
              style={{ color: "var(--muted-500)" }}
            >
              Engineering that produces measurable outcomes in production
              environments — not demonstrations or prototypes.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {RESULTS.map((result, i) => (
            <ResultCard key={result.id} result={result} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
