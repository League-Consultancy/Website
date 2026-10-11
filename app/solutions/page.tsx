import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, Code, Eye, Settings, Wifi, Wrench, Database, Layers, type LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { capabilities } from "@/data/capabilities";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "LEAGUE Consultancy provides custom engineering solutions across AI, computer vision, software, robotics, IoT, mechanical engineering, RAG systems and digital twins.",
};

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

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Header */}
        <section className="section-dark tech-grid-bg section-spacing-sm pt-[120px] relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 hero-gradient pointer-events-none"
          />
          <div className="container-xl relative z-10">
            <p className="text-eyebrow mb-4">Engineering capabilities</p>
            <h1 className="text-display-lg text-white mb-6 max-w-3xl">
              WHAT LEAGUE<br />CAN BUILD
            </h1>
            <p className="text-body-lg max-w-2xl">
              These are not separate service packages. They are engineering
              disciplines that LEAGUE assembles into a complete solution for your
              specific problem.
            </p>
          </div>
        </section>

        {/* Cross-discipline note */}
        <section className="section-dark section-spacing-sm">
          <div className="container-xl">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <h2 className="text-display-sm text-white mb-4">
                  One engagement. Multiple disciplines.
                </h2>
                <p className="text-[#9AA2AD] text-base leading-relaxed">
                  Most technology problems require more than one discipline. A
                  warehouse product search system needs computer vision, software
                  integration and projection hardware. A machine monitoring system
                  needs custom PCB hardware, embedded software, IoT communication
                  and a data dashboard.
                </p>
                <p className="text-[#9AA2AD] text-base leading-relaxed mt-4">
                  LEAGUE handles the complete system — not just one layer.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-[#62B8FF]/20 bg-[#62B8FF]/[0.04] self-center">
                <p className="text-[#62B8FF] font-700 text-sm mb-3">Example combination</p>
                <div className="space-y-2 text-sm text-[#9AA2AD]">
                  {["AI", "Computer Vision", "Custom Hardware", "Software", "IoT"].map((item, i, arr) => (
                    <div key={item}>
                      <span className="text-white">{item}</span>
                      {i < arr.length - 1 && (
                        <div className="w-px h-3 bg-[#62B8FF]/30 ml-2 mt-1" aria-hidden="true" />
                      )}
                    </div>
                  ))}
                  <div className="mt-3 pt-3 border-t border-[#62B8FF]/15">
                    <span className="text-[#62B8FF] font-600">= Complete working product</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((cap) => {
                const Icon = ICON_MAP[cap.icon];
                return (
                  <Link
                    key={cap.id}
                    href={`/solutions/${cap.id}`}
                    className="card-dark p-6 flex flex-col group"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <span className="number-tag">{cap.number}</span>
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
                    <div className="accent-line mb-4" aria-hidden="true" />
                    <h2 className="text-white font-700 text-base mb-2 group-hover:text-[#62B8FF] transition-colors duration-300">
                      {cap.title}
                    </h2>
                    <p className="text-[#9AA2AD] text-sm leading-relaxed flex-1 mb-4">
                      {cap.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#9AA2AD] group-hover:text-[#62B8FF] text-xs transition-colors duration-200">
                      View details
                      <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
