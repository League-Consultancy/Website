import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "LEAGUE Consultancy's engineering engagement process — from first conversation through to deployment and ongoing support.",
};

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Start a Conversation",
    description:
      "Reach out with your idea, problem or requirement. Initial consultation is free. There is no commitment at this stage.",
    note: "Free initial consultation",
  },
  {
    number: "02",
    title: "Understand the Requirement",
    description:
      "We discuss the business objective — not just the feature list. What problem are you actually trying to solve? What does a successful outcome look like?",
    note: null,
  },
  {
    number: "03",
    title: "Internal Technical Discussion",
    description:
      "Our engineering team evaluates the technical possibilities internally. We consider the available approaches, constraints, and the most practical path to the solution.",
    note: null,
  },
  {
    number: "04",
    title: "Feasibility & Engineering Analysis",
    description:
      "We assess whether the proposed solution is technically feasible, what the development would require, and whether there are better approaches worth considering.",
    note: "Feasibility analysis is covered within an approved quotation",
  },
  {
    number: "05",
    title: "Fixed Proposal",
    description:
      "A clear written proposal is presented covering scope, engineering approach, estimated timeline and cost. No ambiguity. NDA available before detailed project discussions.",
    note: "NDA available on request",
  },
  {
    number: "06",
    title: "Development",
    description:
      "Development begins with transparent communication. You stay informed about progress, technical decisions and any developments that affect the system.",
    note: "Open development — clients stay informed",
  },
  {
    number: "07",
    title: "Testing",
    description:
      "The system is tested against real-world conditions before delivery — not just functional tests. Edge cases, performance and failure modes are evaluated.",
    note: null,
  },
  {
    number: "08",
    title: "Deployment",
    description:
      "Deployment is handled end-to-end. The system goes live in the client's actual environment with full handover documentation.",
    note: null,
  },
  {
    number: "09",
    title: "Maintenance & Support",
    description:
      "The engagement does not end at launch. LEAGUE provides continued maintenance and support so the system remains operational as requirements evolve.",
    note: "Post-deployment maintenance available",
  },
];

const COMMITMENTS = [
  {
    title: "Free initial consultation",
    description:
      "The first conversation is always free. Discuss your problem before any commercial commitment.",
  },
  {
    title: "NDA before project discussions",
    description:
      "A non-disclosure agreement can be signed before detailed technical or business discussions begin.",
  },
  {
    title: "Fixed-price proposals",
    description:
      "Proposals are written with defined scope and cost. No open-ended billing.",
  },
  {
    title: "Maintenance after deployment",
    description:
      "Ongoing support and maintenance is available after the system is deployed.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Header */}
        <section className="section-light section-spacing-sm pt-[120px]">
          <div className="container-xl">
            <p className="text-eyebrow mb-4" style={{ color: "var(--accent-blue)" }}>
              Engagement process
            </p>
            <h1 className="text-display-lg mb-6" style={{ color: "var(--dark-950)" }}>
              HOW WE WORK
            </h1>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted-500)" }}>
              A structured process designed to move from first conversation to a
              deployed product with clear communication at every stage.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="section-dark section-spacing">
          <div className="container-xl">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Steps */}
              <div className="lg:col-span-2">
                <ol role="list" className="space-y-0" aria-label="Engagement process steps">
                  {PROCESS_STEPS.map((step, i) => (
                    <li
                      key={step.number}
                      className="relative flex gap-5 pb-10 last:pb-0"
                    >
                      {/* Connector */}
                      {i < PROCESS_STEPS.length - 1 && (
                        <div
                          aria-hidden="true"
                          className="absolute left-[19px] top-[42px] bottom-0 w-px bg-gradient-to-b from-[#62B8FF]/30 to-transparent"
                        />
                      )}

                      {/* Dot */}
                      <div
                        aria-hidden="true"
                        className="shrink-0 w-10 h-10 rounded-full bg-[#11151C] border border-[#62B8FF]/25 flex items-center justify-center mt-0.5 relative z-10"
                      >
                        <span className="text-[#62B8FF] text-xs font-700">
                          {step.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="pt-2">
                        <h2 className="text-white font-700 text-base mb-2">
                          {step.title}
                        </h2>
                        <p className="text-[#9AA2AD] text-sm leading-relaxed mb-2">
                          {step.description}
                        </p>
                        {step.note && (
                          <span className="tag-pill-accent text-[0.7rem]">
                            {step.note}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6 lg:sticky lg:top-32 self-start">
                {/* Commitments */}
                <div className="rounded-2xl border border-white/[0.06] bg-[#11151C] p-6">
                  <p className="text-eyebrow mb-5">Our commitments</p>
                  <div className="space-y-4">
                    {COMMITMENTS.map((item) => (
                      <div
                        key={item.title}
                        className="pb-4 border-b border-white/[0.04] last:border-0 last:pb-0"
                      >
                        <div className="flex items-start gap-2 mb-1">
                          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#62B8FF] mt-1.5 shrink-0" />
                          <p className="text-white font-600 text-sm">{item.title}</p>
                        </div>
                        <p className="text-[#9AA2AD] text-xs leading-relaxed pl-3.5">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-2xl border border-[#62B8FF]/20 bg-[#62B8FF]/[0.04] p-6">
                  <p className="text-white font-700 mb-2">Ready to start?</p>
                  <p className="text-[#9AA2AD] text-sm mb-4 leading-relaxed">
                    The first step is a conversation about your problem.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center text-sm"
                    id="how-we-work-cta"
                  >
                    Start a Conversation
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
