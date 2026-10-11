import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CapabilityGrid from "@/components/CapabilityGrid";
import EngineeringProcess from "@/components/EngineeringProcess";
import ResultsSection from "@/components/ResultsSection";
import ProjectGrid from "@/components/ProjectGrid";
import Industries from "@/components/Industries";
import WhyLeague from "@/components/WhyLeague";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { capabilities } from "@/data/capabilities";
import { industries } from "@/data/industries";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <CapabilityGrid capabilities={capabilities} />
        <EngineeringProcess />
        <ResultsSection />
        <ProjectGrid
          projects={projects}
          limit={6}
          showFilters={true}
        />
        <Industries industries={industries} />
        <WhyLeague />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
