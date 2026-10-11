import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "LEAGUE Consultancy was founded in July 2026 with the goal of turning ideas and complex problems into practical technology solutions.",
};

const CAPABILITIES_BRIEF = [
  "AI & Machine Learning",
  "Software & Web Development",
  "Computer Vision",
  "Robotics & Automation",
  "IoT & IIoT",
  "Mechanical Engineering",
  "RAG & LLM Systems",
  "Digital Twins",
  "Embedded Systems",
  "Custom Hardware",
];

const APPROACH_POINTS = [
  {
    title: "We understand before we build.",
    description:
      "The requirement analysis happens before the first line of code. We evaluate what the client actually needs, not just what they initially requested.",
  },
  {
    title: "We evaluate technical possibilities internally.",
    description:
      "Before presenting a solution, the engineering team discusses the technical options, constraints and trade-offs to identify the most practical approach.",
  },
  {
    title: "We propose a defined solution.",
    description:
      "Clients receive a clear, written proposal covering scope, approach and cost — not an open-ended retainer.",
  },
  {
    title: "We stay involved from start to support.",
    description:
      "From the first conversation to post-deployment maintenance, LEAGUE stays engaged in the engineering process.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="section-dark tech-grid-bg section-spacing relative overflow-hidden pt-[120px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 hero-gradient pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#62B8FF]/[0.03] blur-3xl pointer-events-none"
          />

          <div className="container-xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-eyebrow mb-5">About LEAGUE</p>
                <h1 className="text-display-lg text-white mb-8">
                  ENGINEERING<br />
                  <span className="text-[#62B8FF]">WITH PURPOSE.</span>
                </h1>
                <p className="text-[#9AA2AD] text-base leading-relaxed mb-6">
                  LEAGUE Consultancy was founded in July 2026 with a simple goal:
                  build a technology company that can take an idea or problem and
                  turn it into a practical working product.
                </p>
                <p className="text-[#9AA2AD] text-base leading-relaxed mb-8">
                  We work across AI, software, computer vision, robotics, IoT,
                  mechanical engineering and intelligent systems.
                </p>
                <Link href="/contact" className="btn-primary" id="about-cta">
                  Start a Conversation
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>

              {/* Stats / quick facts */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2026", label: "Founded" },
                  { value: "9+", label: "Engineering Disciplines" },
                  { value: "India", label: "Headquartered" },
                  { value: "Worldwide", label: "Clients Served" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-2xl border border-white/[0.06] bg-[#11151C]"
                  >
                    <p className="text-white font-800 text-3xl tracking-[-0.02em] mb-1">
                      {stat.value}
                    </p>
                    <p className="text-[#59616D] text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="section-dark-alt section-spacing">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-eyebrow mb-4">Our approach</p>
                <h2 className="text-display-md text-white mb-8">
                  THE ENGINEERING<br />APPROACH
                </h2>
                <p className="text-[#9AA2AD] text-base leading-relaxed mb-8">
                  Our approach starts before development. We understand the
                  requirement, evaluate technical possibilities internally, and
                  work with the client to define a solution that makes sense for
                  the actual long-term objective.
                </p>
                <p className="text-[#9AA2AD] text-base leading-relaxed">
                  From the first conversation to deployment and continued support,
                  we stay involved in the engineering process.
                </p>
              </div>

              <div className="space-y-4">
                {APPROACH_POINTS.map((point, i) => (
                  <div
                    key={point.title}
                    className="p-5 rounded-xl border border-white/[0.06] bg-[#090B10]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="number-tag shrink-0 mt-0.5">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="text-white font-700 text-sm mb-1.5">
                          {point.title}
                        </h3>
                        <p className="text-[#9AA2AD] text-sm leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="section-dark section-spacing">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-eyebrow mb-4">Engineering capabilities</p>
                <h2 className="text-display-md text-white mb-6">
                  WHAT WE<br />ENGINEER
                </h2>
                <p className="text-[#9AA2AD] text-base leading-relaxed mb-8">
                  These disciplines are not separate service lines. LEAGUE
                  assembles the combination required to deliver the complete
                  solution — from AI and software to hardware and mechanical
                  systems.
                </p>
                <Link
                  href="/solutions"
                  className="btn-secondary"
                  id="about-solutions-link"
                >
                  Explore Solutions
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {CAPABILITIES_BRIEF.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl border border-white/[0.06] bg-[#11151C]"
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#62B8FF] shrink-0"
                    />
                    <span className="text-[#9AA2AD] text-sm">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-dark-alt section-spacing-sm">
          <div className="container-xl">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-eyebrow mb-6">Mission</p>
              <blockquote>
                <p className="text-display-sm text-white leading-relaxed mb-8">
                  &ldquo;Have a Problem? Let&apos;s Engineer the Solution.&rdquo;
                </p>
              </blockquote>
              <p className="text-[#9AA2AD] text-base leading-relaxed mb-10">
                LEAGUE works with clients who have a problem or idea but need the
                technical team to turn it into a working product. We aim for
                fewer, higher-value engagements — custom projects, long-term
                relationships, and solutions that actually get deployed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary" id="about-final-cta">
                  Start a Conversation
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
                <Link href="/projects" className="btn-secondary">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
