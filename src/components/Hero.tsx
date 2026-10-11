"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const HeroVisualization = dynamic(() => import("./HeroVisualization"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export default function Hero() {
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [eyebrowRef.current, h1Ref.current, subRef.current, ctaRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section
      id="hero"
      aria-label="LEAGUE Consultancy — Product Engineering"
      className="relative min-h-screen flex flex-col justify-center section-dark tech-grid-bg overflow-hidden"
    >
      {/* Radial gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hero-gradient pointer-events-none"
      />

      {/* Bottom gradient fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#090B10] to-transparent pointer-events-none"
      />

      <div className="container-xl relative z-10 pt-[88px] pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-88px)]">
          {/* Left: Content */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <div ref={eyebrowRef} className="mb-8" style={{ opacity: 0 }}>
              <p className="text-eyebrow">
                LEAGUE CONSULTANCY&nbsp;&nbsp;·&nbsp;&nbsp;AI&nbsp;&nbsp;·&nbsp;&nbsp;SOFTWARE&nbsp;&nbsp;·&nbsp;&nbsp;ROBOTICS&nbsp;&nbsp;·&nbsp;&nbsp;ENGINEERING
              </p>
            </div>

            {/* Headline */}
            <h1
              ref={h1Ref}
              className="text-display-xl text-white mb-8"
              style={{ opacity: 0 }}
            >
              HAVE A<br />
              PROBLEM?<br />
              <span className="text-[#62B8FF]">LET&apos;S ENGINEER</span>
              <br />
              THE SOLUTION.
            </h1>

            {/* Sub */}
            <p
              ref={subRef}
              className="text-body-lg mb-10 max-w-[480px]"
              style={{ opacity: 0 }}
            >
              LEAGUE Consultancy turns ideas and complex business challenges into
              practical technology solutions — from software and AI to computer
              vision, robotics, automation, IoT and mechanical engineering.
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="flex flex-wrap gap-4 items-center"
              style={{ opacity: 0 }}
            >
              <Link
                href="#contact"
                className="btn-primary"
                id="hero-cta-primary"
              >
                Have a Problem? Let&apos;s Talk.
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="#projects"
                className="btn-secondary"
                id="hero-cta-secondary"
              >
                Explore Our Work
              </Link>
            </div>

            {/* Bottom badges */}
            <div className="mt-12 flex flex-wrap gap-2 items-center">
              {["AI", "Computer Vision", "Robotics", "IoT", "Mechanical Engineering", "Software"].map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right: Visualization */}
          <div className="relative flex items-center justify-center h-[420px] lg:h-[600px]">
            <HeroVisualization />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#solutions"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#59616D] hover:text-[#62B8FF] transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll to solutions"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
}
