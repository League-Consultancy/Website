import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Industries from "@/components/Industries";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "LEAGUE Consultancy works across manufacturing, education, logistics, government, startups and healthcare — adapting engineering capabilities to each client's specific problem.",
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="section-light section-spacing-sm pt-[120px]">
          <div className="container-xl">
            <p className="text-eyebrow mb-4" style={{ color: "var(--accent-blue)" }}>
              Where we work
            </p>
            <h1
              className="text-display-lg mb-6"
              style={{ color: "var(--dark-950)" }}
            >
              ENGINEERING ACROSS<br />INDUSTRIES
            </h1>
            <p
              className="text-base leading-relaxed max-w-2xl"
              style={{ color: "var(--muted-500)" }}
            >
              Different industries. Different constraints. One engineering approach.
            </p>
          </div>
        </section>

        <Industries industries={industries} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
