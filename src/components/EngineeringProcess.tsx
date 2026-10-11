"use client";

import { useEffect, useRef } from "react";

const STEPS = [
  {
    number: "01",
    title: "UNDERSTAND",
    description:
      "We start by understanding the business objective — not just the feature request. What problem does the client actually need to solve?",
  },
  {
    number: "02",
    title: "ENGINEER",
    description:
      "Technical possibilities are evaluated internally. We identify the right stack, architecture and approach before committing to a direction.",
  },
  {
    number: "03",
    title: "PROPOSE",
    description:
      "A clear, fixed proposal is presented — covering scope, approach, timeline and cost. No ambiguity.",
  },
  {
    number: "04",
    title: "BUILD",
    description:
      "Development begins with transparent communication. Clients stay informed about progress, decisions and technical developments.",
  },
  {
    number: "05",
    title: "VALIDATE",
    description:
      "The system is tested against real-world conditions — not just unit tests. Edge cases, failure modes and performance are all evaluated.",
  },
  {
    number: "06",
    title: "DEPLOY",
    description:
      "Deployment is handled end-to-end. The system goes live in the client's actual environment.",
  },
  {
    number: "07",
    title: "SUPPORT",
    description:
      "Continued maintenance and support after deployment. The relationship does not end at launch.",
  },
];

export default function EngineeringProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.transition = `opacity 0.6s ease ${el.dataset.delay}ms, transform 0.6s ease ${el.dataset.delay}ms`;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    stepsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="engineering-process"
      aria-labelledby="process-heading"
      className="section-dark section-spacing relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 tech-grid-bg opacity-50 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#62B8FF]/[0.03] blur-3xl pointer-events-none"
      />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Steps */}
          <div>
            <p className="text-eyebrow mb-4">Our Approach</p>
            <h2
              id="process-heading"
              className="text-display-md text-white mb-12"
            >
              WE ENGINEER<br />
              BEFORE WE BUILD.
            </h2>

            <ol role="list" className="space-y-0" aria-label="Engineering process steps">
              {STEPS.map((step, i) => (
                <li
                  key={step.number}
                  ref={(el) => { if (el) stepsRef.current[i] = el; }}
                  data-delay={i * 80}
                  className="relative flex gap-5 pb-8 last:pb-0"
                  style={{ opacity: 0, transform: "translateY(16px)" }}
                >
                  {/* Vertical connector */}
                  {i < STEPS.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute left-[19px] top-[42px] bottom-0 w-px bg-gradient-to-b from-[#62B8FF]/30 to-transparent"
                    />
                  )}

                  {/* Step dot */}
                  <div
                    aria-hidden="true"
                    className="shrink-0 w-10 h-10 rounded-full bg-[#11151C] border border-[#62B8FF]/25 flex items-center justify-center mt-0.5 relative z-10"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#62B8FF]" />
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="number-tag">{step.number}</span>
                      <h3 className="text-white font-700 text-sm tracking-[0.08em]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#9AA2AD] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: Engineering Formula */}
          <div className="lg:sticky lg:top-32">
            <div className="rounded-2xl border border-white/[0.08] bg-[#11151C] p-8 lg:p-10">
              <p className="text-eyebrow mb-6">Engineering formula</p>

              <div className="space-y-4">
                {[
                  { label: "Problem", sub: "Client requirement or business challenge" },
                  null,
                  { label: "Engineering", sub: "Technical analysis and architectural design" },
                  null,
                  { label: "Technology", sub: "AI · Software · Hardware · Mechanical" },
                  null,
                ].map((item, i) => {
                  if (item === null) {
                    return (
                      <div key={i} className="flex items-center justify-center py-1">
                        <div className="w-px h-6 bg-[#62B8FF]/30" aria-hidden="true" />
                        <span
                          className="mx-3 text-[#62B8FF] text-2xl font-300"
                          aria-hidden="true"
                        >
                          +
                        </span>
                        <div className="w-px h-6 bg-[#62B8FF]/30" aria-hidden="true" />
                      </div>
                    );
                  }
                  return (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/[0.06] bg-[#090B10] p-4"
                    >
                      <p className="text-white font-700 text-lg mb-1">{item.label}</p>
                      <p className="text-[#59616D] text-xs leading-relaxed">{item.sub}</p>
                    </div>
                  );
                })}

                {/* Equals */}
                <div className="flex items-center gap-3 py-1">
                  <div className="flex-1 h-px bg-[#62B8FF]/20" aria-hidden="true" />
                  <span className="text-[#62B8FF] text-2xl font-700" aria-label="equals">
                    =
                  </span>
                  <div className="flex-1 h-px bg-[#62B8FF]/20" aria-hidden="true" />
                </div>

                {/* Result */}
                <div className="rounded-xl border border-[#62B8FF]/25 bg-[#62B8FF]/[0.06] p-5">
                  <p className="text-[#62B8FF] font-800 text-xl mb-1">Working Product</p>
                  <p className="text-[#9AA2AD] text-xs leading-relaxed">
                    A practical, deployed technology system built around the actual
                    long-term objective.
                  </p>
                </div>
              </div>

              {/* Philosophy note */}
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-[#9AA2AD] text-sm leading-relaxed">
                  LEAGUE does not simply convert a requirement into code. The
                  engineering process starts before a single line is written.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
