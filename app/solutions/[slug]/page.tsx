import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { capabilities } from "@/data/capabilities";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

// Extended solution data
const SOLUTION_DETAILS: Record<string, {
  whatIsIt: string;
  whatItSolves: string[];
  whatWeCanBuild: string[];
  typicalApplications: string[];
  technicalCapabilities: string[];
}> = {
  "ai-intelligent-systems": {
    whatIsIt:
      "AI and machine learning systems built around a specific business problem. LEAGUE engineers AI solutions that are trained on relevant data, integrated into existing systems and designed for production deployment.",
    whatItSolves: [
      "Repetitive manual classification and analysis tasks",
      "Pattern recognition in large datasets",
      "Predictive maintenance and anomaly detection",
      "Natural language interfaces for data access",
      "Intelligent process automation",
    ],
    whatWeCanBuild: [
      "Custom machine learning models trained on your data",
      "AI-powered data analysis and reporting systems",
      "Natural language processing pipelines",
      "Anomaly detection and predictive systems",
      "AI integrated into existing software or hardware",
    ],
    typicalApplications: [
      "Predictive maintenance for industrial machines",
      "Intelligent document processing",
      "Automated quality inspection",
      "Natural language database querying",
      "Real-time pattern detection",
    ],
    technicalCapabilities: [
      "Python / PyTorch / TensorFlow",
      "Custom model training and fine-tuning",
      "Edge AI deployment",
      "MLOps and model monitoring",
      "LLM integration and RAG systems",
    ],
  },
  "software-web": {
    whatIsIt:
      "Custom software, web applications, APIs and data platforms engineered for specific operational requirements — not adapted from templates.",
    whatItSolves: [
      "Manual or paper-based processes that slow operations",
      "Disconnected systems that do not share data",
      "The need for a custom internal tool or platform",
      "Legacy systems that require modern interfaces",
      "The need for a technology product as the business itself",
    ],
    whatWeCanBuild: [
      "Web applications and dashboards",
      "REST APIs and integration middleware",
      "Internal operations tools",
      "Data management platforms",
      "Customer-facing software products",
    ],
    typicalApplications: [
      "Inventory and warehouse management systems",
      "Machine monitoring dashboards",
      "Custom ERP or CRM modules",
      "Data visualisation platforms",
      "Multi-tenant SaaS products",
    ],
    technicalCapabilities: [
      "Next.js / React / TypeScript",
      "Node.js / Python backends",
      "PostgreSQL / MySQL / MongoDB",
      "REST and GraphQL APIs",
      "Cloud deployment (AWS, GCP, Azure)",
    ],
  },
  "computer-vision": {
    whatIsIt:
      "Computer vision systems that process images or video to detect, identify, classify or measure objects and events in the real world.",
    whatItSolves: [
      "Manual visual inspection that is slow or error-prone",
      "The need to identify and track objects without human involvement",
      "Attendance and access control that requires manual effort",
      "Quality control that cannot scale with production volume",
      "Warehouse and inventory identification challenges",
    ],
    whatWeCanBuild: [
      "Face detection and recognition systems",
      "Object detection and tracking systems",
      "Optical inspection systems for manufacturing",
      "QR, barcode and marker detection pipelines",
      "CCTV-integrated identification systems",
    ],
    typicalApplications: [
      "Classroom attendance from photographs",
      "School entry and exit identification",
      "Warehouse product location with projection",
      "PCB optical inspection",
      "Production line defect detection",
    ],
    technicalCapabilities: [
      "OpenCV, PyTorch Vision, YOLO",
      "Face recognition models",
      "Custom detection model training",
      "Real-time video processing",
      "Edge deployment on embedded hardware",
    ],
  },
  "robotics-automation": {
    whatIsIt:
      "Custom robotic and automation systems designed and built for specific manufacturing or industrial operations.",
    whatItSolves: [
      "Repetitive manual assembly or production tasks",
      "Precision operations that are inconsistent when done manually",
      "Production bottlenecks caused by manual processes",
      "The need for automation that does not fit standard off-the-shelf machines",
    ],
    whatWeCanBuild: [
      "Automatic soldering machines",
      "Automatic screw tightening machines",
      "Conformal coating automation",
      "Custom pick-and-place systems",
      "Precision motion control systems",
    ],
    typicalApplications: [
      "PCB assembly automation",
      "Electronic manufacturing",
      "Industrial production line automation",
      "Custom precision operations",
    ],
    technicalCapabilities: [
      "Mechanical design and CAD",
      "Motion control systems",
      "PLC and embedded control",
      "Servo and stepper motor systems",
      "IoT integration for data logging",
    ],
  },
  "iot-iiot": {
    whatIsIt:
      "Connected hardware and software systems that monitor, control and report on physical assets, machines and environments.",
    whatItSolves: [
      "Manual data collection from machines or environments",
      "Lack of visibility into machine performance and uptime",
      "Disconnected equipment that cannot report status",
      "The need for remote monitoring or control",
    ],
    whatWeCanBuild: [
      "Custom hardware sensors and monitoring devices",
      "Machine uptime and performance monitoring systems",
      "Environmental monitoring networks",
      "Industrial equipment dashboards",
      "Edge computing nodes with cloud integration",
    ],
    typicalApplications: [
      "Machine uptime monitoring in manufacturing",
      "Energy consumption monitoring",
      "Production output tracking",
      "Environmental condition monitoring",
      "Predictive maintenance data collection",
    ],
    technicalCapabilities: [
      "Custom PCB design",
      "Microcontroller programming (ESP32, STM32)",
      "MQTT, Modbus, OPC-UA protocols",
      "LoRa, WiFi, Ethernet connectivity",
      "Time-series databases and dashboards",
    ],
  },
  "mechanical-engineering": {
    whatIsIt:
      "Mechanical design, custom machine development and precision engineering for industrial applications.",
    whatItSolves: [
      "The need for a machine that does not exist off the shelf",
      "Manual processes that require mechanical precision",
      "Product development requiring physical prototyping",
      "Industrial operations that need custom mechanical solutions",
    ],
    whatWeCanBuild: [
      "Custom industrial machines",
      "Precision mechanical assemblies",
      "Enclosures and structural components",
      "Jigs, fixtures and tooling",
      "Prototype mechanical systems",
    ],
    typicalApplications: [
      "Automatic soldering and coating machines",
      "PCB inspection benches",
      "Custom production line equipment",
      "Precision measurement fixtures",
    ],
    technicalCapabilities: [
      "3D CAD design (SolidWorks, Fusion 360)",
      "FEA and structural analysis",
      "Prototyping and manufacturing drawings",
      "CNC machining coordination",
      "Materials selection and specification",
    ],
  },
  "rag-llm": {
    whatIsIt:
      "Retrieval-augmented generation and language model systems that allow users to query, analyse and generate from their own data using natural language.",
    whatItSolves: [
      "The need for non-technical users to extract information from large datasets",
      "Manual report generation from databases",
      "Document search and knowledge retrieval",
      "The need to interact with internal data in plain language",
    ],
    whatWeCanBuild: [
      "Natural language SQL query generation",
      "Document question-answering systems",
      "Internal knowledge bases with AI search",
      "Domain-specific LLM fine-tuning",
      "AI summarisation and extraction pipelines",
    ],
    typicalApplications: [
      "Talk2DB — natural language to SQL",
      "Internal document search",
      "Customer support knowledge bases",
      "Report generation from structured data",
    ],
    technicalCapabilities: [
      "OpenAI, Anthropic, local model integration",
      "Vector databases (Pinecone, pgvector)",
      "RAG pipeline architecture",
      "Prompt engineering and evaluation",
      "LangChain, LlamaIndex",
    ],
  },
  "digital-twins": {
    whatIsIt:
      "Virtual representations of physical systems that enable real-time monitoring, simulation, and predictive analysis without interacting with the physical asset.",
    whatItSolves: [
      "The inability to monitor complex systems without physical inspection",
      "Testing system changes before implementing them physically",
      "Predicting failures before they occur",
      "Training and simulation without physical risk",
    ],
    whatWeCanBuild: [
      "3D digital representations of physical systems",
      "Real-time monitoring dashboards linked to physical assets",
      "Simulation environments for process testing",
      "Predictive analytics connected to physical sensor data",
    ],
    typicalApplications: [
      "Manufacturing line digital twins",
      "Building and infrastructure monitoring",
      "Industrial equipment simulation",
      "Process optimisation systems",
    ],
    technicalCapabilities: [
      "3D modelling and visualisation",
      "IoT data integration",
      "Real-time data streaming",
      "Simulation and physics engines",
      "Digital twin platforms",
    ],
  },
};

export async function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cap = capabilities.find((c) => c.id === slug);
  if (!cap) return {};

  return {
    title: cap.title,
    description: cap.description,
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const cap = capabilities.find((c) => c.id === slug);
  if (!cap) notFound();

  const details = SOLUTION_DETAILS[cap.id];
  const relatedProjects = projects.filter((p) =>
    p.categories.some((c) => cap.title.includes(c) || c.includes(cap.id.split("-")[0]))
  ).slice(0, 3);

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
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-[#9AA2AD] hover:text-white text-sm transition-colors duration-200 mb-8 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" aria-hidden="true" />
              All Solutions
            </Link>

            <p className="text-eyebrow mb-4">{cap.number} — Solution</p>
            <h1 className="text-display-lg text-white mb-6 max-w-3xl">{cap.title}</h1>
            <p className="text-body-lg max-w-2xl">{cap.description}</p>

            <div className="flex flex-wrap gap-2 mt-6">
              {cap.tags.map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Detail Content */}
        {details && (
          <section className="section-dark section-spacing">
            <div className="container-xl">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                  {/* What is it */}
                  <div>
                    <p className="text-eyebrow mb-3">What it is</p>
                    <p className="text-white text-lg leading-relaxed">{details.whatIsIt}</p>
                  </div>

                  {/* Problems it solves */}
                  <div>
                    <h2 className="text-display-sm text-white mb-5">Problems It Solves</h2>
                    <ul className="space-y-3" role="list">
                      {details.whatItSolves.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#62B8FF] mt-2 shrink-0" />
                          <span className="text-[#9AA2AD] text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What we can build */}
                  <div>
                    <h2 className="text-display-sm text-white mb-5">What LEAGUE Can Build</h2>
                    <div className="space-y-3">
                      {details.whatWeCanBuild.map((item) => (
                        <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.06] bg-[#11151C]">
                          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#62B8FF] mt-2 shrink-0" />
                          <span className="text-white text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typical applications */}
                  <div>
                    <h2 className="text-display-sm text-white mb-5">Typical Applications</h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {details.typicalApplications.map((item) => (
                        <div key={item} className="p-4 rounded-xl border border-white/[0.06] bg-[#11151C]">
                          <span className="text-[#9AA2AD] text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-6">
                  {/* Technical capabilities */}
                  <div className="rounded-2xl border border-white/[0.06] bg-[#11151C] p-6">
                    <p className="text-eyebrow mb-4">Technical Stack</p>
                    <ul className="space-y-2" role="list">
                      {details.technicalCapabilities.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-[#9AA2AD]">
                          <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[#62B8FF]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="rounded-2xl border border-[#62B8FF]/20 bg-[#62B8FF]/[0.04] p-6">
                    <p className="text-white font-700 mb-2">Have a project?</p>
                    <p className="text-[#9AA2AD] text-sm mb-4 leading-relaxed">
                      Discuss your requirements with us. Initial consultation is free.
                    </p>
                    <Link
                      href="/contact"
                      className="btn-primary w-full justify-center text-sm"
                      id={`solution-${cap.id}-cta`}
                    >
                      Start a Conversation
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Other solutions */}
                  <div className="rounded-2xl border border-white/[0.06] bg-[#11151C] p-6">
                    <p className="text-eyebrow mb-4">Other Solutions</p>
                    <ul className="space-y-2" role="list">
                      {capabilities
                        .filter((c) => c.id !== cap.id)
                        .slice(0, 5)
                        .map((c) => (
                          <li key={c.id}>
                            <Link
                              href={`/solutions/${c.id}`}
                              className="text-[#9AA2AD] hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                            >
                              <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                              {c.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        )}

        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <section className="section-dark-alt section-spacing-sm">
            <div className="container-xl">
              <p className="text-eyebrow mb-6">Relevant projects</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="card-dark p-5 block group"
                  >
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.categories.map((c) => (
                        <span key={c} className="tag-pill-accent text-[0.7rem]">{c}</span>
                      ))}
                    </div>
                    <h3 className="text-white font-700 text-sm mb-2 group-hover:text-[#62B8FF] transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.result && (
                      <p className="text-[#62B8FF] text-xs">↗ {project.result}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
