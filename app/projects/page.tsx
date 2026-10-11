import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected technology systems engineered by LEAGUE across AI, computer vision, software, robotics, IoT and mechanical engineering.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Page Header */}
        <section className="section-dark section-spacing-sm pt-[120px]">
          <div className="container-xl">
            <p className="text-eyebrow mb-4">Portfolio</p>
            <h1 className="text-display-lg text-white mb-5">SELECTED WORK</h1>
            <p className="text-body-lg max-w-2xl">
              A selection of systems engineered across AI, software, computer
              vision, manufacturing and automation. Many projects remain
              undisclosed under client confidentiality.
            </p>
          </div>
        </section>

        <ProjectGrid
          projects={projects}
          showFilters={true}
          heading="ALL PROJECTS"
          subheading="Use the filters to find projects by technical discipline."
        />
      </main>
      <Footer />
    </>
  );
}
