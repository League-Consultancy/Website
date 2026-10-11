"use client";

import { useEffect, useRef } from "react";
import { Mail, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-dark tech-grid-bg section-spacing relative overflow-hidden scroll-mt-20"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hero-gradient pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#62B8FF]/[0.03] blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#62B8FF]/[0.02] blur-3xl pointer-events-none"
      />

      <div className="container-xl relative z-10">
        <div
          ref={sectionRef}
          style={{ opacity: 0, transform: "translateY(24px)" }}
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <p className="text-eyebrow mb-4">Start a conversation</p>
            <h2
              id="contact-heading"
              className="text-display-lg text-white mb-6"
            >
              HAVE AN IDEA?<br />
              <span className="text-[#62B8FF]">LET&apos;S ENGINEER IT.</span>
            </h2>
            <p className="text-body-lg">
              Tell us what you are trying to build, automate, improve or solve.
              Initial consultation is free. We will discuss the problem, evaluate
              the technical possibilities and propose a clear, defined path.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 items-start">
            {/* Left: Contact Info & What to Expect */}
            <div className="space-y-6">
              {/* Direct email card */}
              <a
                href="mailto:info@leagueconsultancy.com"
                className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.06] bg-[#11151C] hover:border-[#62B8FF]/40 transition-all duration-300 group block"
                aria-label="Email LEAGUE Consultancy"
              >
                <div className="w-10 h-10 rounded-xl bg-[#090B10] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-[#62B8FF]/30 group-hover:bg-[#62B8FF]/10 transition-colors">
                  <Mail size={18} className="text-[#62B8FF]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[#59616D] text-xs uppercase tracking-wider font-600 mb-1">
                    Direct Email
                  </p>
                  <p className="text-white text-sm sm:text-base font-600 group-hover:text-[#62B8FF] transition-colors break-all">
                    info@leagueconsultancy.com
                  </p>
                  <p className="text-[#9AA2AD] text-xs mt-1">
                    Direct inquiry response within 24 hours
                  </p>
                </div>
              </a>

              {/* Location card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.06] bg-[#11151C]">
                <div className="w-10 h-10 rounded-xl bg-[#090B10] border border-white/[0.06] flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#62B8FF]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[#59616D] text-xs uppercase tracking-wider font-600 mb-1">
                    Headquarters
                  </p>
                  <p className="text-white text-sm sm:text-base font-600">
                    Ahmedabad, Gujarat, India
                  </p>
                  <p className="text-[#9AA2AD] text-xs mt-1">
                    Engineered locally · Serving clients worldwide
                  </p>
                </div>
              </div>

              {/* What to expect panel */}
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-[#090B10]">
                <p className="text-white font-700 text-sm mb-4 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#62B8FF]" />
                  What to expect
                </p>
                <ul className="space-y-3" role="list">
                  {[
                    "Free initial consultation",
                    "NDA available before detailed technical discussions",
                    "Defined, fixed-price proposals",
                    "End-to-end engineering ownership",
                    "Post-deployment maintenance and support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[#9AA2AD] text-xs sm:text-sm">
                      <CheckCircle2 size={14} className="text-[#62B8FF] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: The Enquiry Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/[0.08] bg-[#11151C] p-6 sm:p-10 shadow-2xl relative">
                <div className="mb-6">
                  <h3 className="text-white font-700 text-xl mb-1.5">
                    Project Enquiry
                  </h3>
                  <p className="text-[#9AA2AD] text-sm leading-relaxed">
                    Tell us about your project, problem or idea. The more context you
                    provide, the more thoroughly our engineers can evaluate the scope.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
