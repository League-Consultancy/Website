export interface Project {
  title: string;
  slug: string;
  industry: string;
  category: string;
  categories: string[];
  client: string;
  problem?: string;
  solution: string;
  engineeringApproach?: string;
  technologies: string[];
  result?: string;
  images: string[];
  video?: string;
  featured: boolean;
  status?: string;
}

export const projects: Project[] = [
  {
    title: "Warehouse Product Search & Projection",
    slug: "warehouse-product-search",
    industry: "Warehouse / Logistics",
    category: "Computer Vision",
    categories: ["Computer Vision", "AI"],
    client: "Warehouse Client",
    problem:
      "Thousands of products stored across a large warehouse made manual identification and location extremely time-consuming, requiring staff to search the floor physically for each request.",
    solution:
      "A camera vision system that scans QR codes on products and integrates with inventory data. A smart projector highlights the exact location of the requested product in real-time, eliminating manual search entirely.",
    engineeringApproach:
      "We analysed the warehouse layout and inventory system before designing the vision pipeline. QR detection was paired with a spatial mapping layer and projector calibration system to achieve real-time product highlighting with sub-second latency.",
    technologies: [
      "Computer Vision",
      "QR Detection",
      "Inventory Integration",
      "Smart Projection",
      "Python",
    ],
    result: "Search time reduced from 8–10 minutes to 3–5 seconds.",
    images: [],
    featured: true,
  },
  {
    title: "Classroom Attendance System",
    slug: "classroom-attendance",
    industry: "Education",
    category: "Computer Vision",
    categories: ["Computer Vision", "AI"],
    client: "Education Client",
    problem:
      "Teachers spent significant time taking attendance manually every period, reducing instructional time and creating administrative overhead.",
    solution:
      "A computer vision system that identifies students from 1–3 photographs taken in the classroom. A single image is sufficient to mark attendance for the entire class.",
    engineeringApproach:
      "We built a face detection and recognition pipeline trained on the student roster. The system processes one or a few classroom images and cross-references detected faces against the enrolled student database, generating attendance records automatically.",
    technologies: [
      "Computer Vision",
      "Face Detection",
      "Face Recognition",
      "Python",
    ],
    result:
      "Attendance can be completed from a single classroom image, removing manual roll-call entirely.",
    images: [],
    featured: true,
  },
  {
    title: "Automated School Entry & Exit System",
    slug: "school-entry-exit",
    industry: "Education / Security",
    category: "Computer Vision",
    categories: ["Computer Vision", "AI"],
    client: "Education Client",
    solution:
      "CCTV cameras positioned at entry and exit points automatically identify and record students, teachers and other persons as they pass, using face recognition.",
    engineeringApproach:
      "We integrated with the existing CCTV infrastructure and built a real-time identification layer that logs entry and exit events against the person database. The system supports multiple simultaneous entries and operates without any manual intervention.",
    technologies: [
      "Computer Vision",
      "Face Detection",
      "Face Recognition",
      "CCTV Integration",
    ],
    result:
      "No manual attendance required at entry or exit. The same system functions as a security layer, flagging unrecognised individuals.",
    images: [],
    featured: false,
  },
  {
    title: "Automatic Soldering Machine",
    slug: "automatic-soldering-machine",
    industry: "Manufacturing",
    category: "Mechanical / Automation",
    categories: ["Mechanical", "Automation", "IoT"],
    client: "Manufacturing Client",
    problem: "Manual soldering was a bottleneck in PCB assembly, creating variability in quality and limiting throughput.",
    solution:
      "Design and development of a custom automatic soldering machine tailored to the client's PCB specifications and production volume.",
    engineeringApproach:
      "We designed the mechanical system, motion control, and heating profiles from first principles. IoT connectivity allows the machine to report cycle data and status to the production monitoring system.",
    technologies: [
      "Mechanical Design",
      "IoT",
      "Precision Engineering",
      "CAD",
    ],
    images: [],
    featured: false,
  },
  {
    title: "Automatic Conformal Coating Machine",
    slug: "automatic-conformal-coating",
    industry: "Manufacturing",
    category: "Mechanical / Automation",
    categories: ["Mechanical", "Automation", "IoT"],
    client: "Manufacturing Client",
    status: "In Development",
    solution:
      "Design and development of an automatic conformal coating machine for PCB protection, replacing manual coating processes.",
    technologies: [
      "Mechanical Design",
      "IoT",
      "Precision Engineering",
      "CAD",
    ],
    images: [],
    featured: false,
  },
  {
    title: "Automatic Screw Tightening Machine",
    slug: "automatic-screw-tightening",
    industry: "Manufacturing",
    category: "Mechanical / Automation",
    categories: ["Mechanical", "Automation", "IoT"],
    client: "Manufacturing Client",
    solution:
      "Design and development of a custom automatic screw tightening machine to eliminate manual tightening and ensure consistent torque specifications.",
    technologies: [
      "Mechanical Design",
      "IoT",
      "Precision Engineering",
      "CAD",
    ],
    images: [],
    featured: false,
  },
  {
    title: "Automatic PCB Optical Inspection Bench",
    slug: "pcb-optical-inspection",
    industry: "Manufacturing",
    category: "Computer Vision",
    categories: ["Computer Vision", "Mechanical", "IoT"],
    client: "Manufacturing Client",
    solution:
      "An automatic optical inspection bench for PCBs that detects surface defects, component placement issues and solder joint anomalies.",
    engineeringApproach:
      "Combined a precision mechanical stage with a high-resolution vision system and trained defect detection models on representative PCB samples. Results are logged to the quality management system.",
    technologies: [
      "Computer Vision",
      "Mechanical Design",
      "IoT",
      "Precision Engineering",
    ],
    images: [],
    featured: false,
  },
  {
    title: "Talk2DB",
    slug: "talk2db",
    industry: "Data / Software",
    category: "AI / NLP",
    categories: ["AI", "Software"],
    client: "Enterprise Client",
    problem:
      "Users required extensive SQL and Excel expertise to extract information from large datasets. Non-technical staff were dependent on developers for every data query.",
    solution:
      "An AI system that accepts natural-language questions and automatically generates accurate SQL queries or Excel formulas to retrieve the required information.",
    engineeringApproach:
      "We built a RAG-enhanced LLM pipeline that is grounded on the client's schema and data dictionary. The system validates generated queries before execution and explains results in natural language.",
    technologies: ["NLP", "LLMs", "RAG", "SQL Generation", "Python"],
    result:
      "Non-technical users can query large datasets without SQL or Excel knowledge.",
    images: [],
    featured: true,
  },
  {
    title: "IIoT Machine Uptime Monitoring",
    slug: "iiot-machine-uptime",
    industry: "Manufacturing",
    category: "IoT / Embedded",
    categories: ["IoT", "Mechanical"],
    client: "Manufacturing Client",
    problem:
      "Machine uptime was recorded manually by operators, leading to inaccurate logs and difficulty identifying downtime patterns.",
    solution:
      "Custom hardware installed on each machine monitors operating state (running/idle/off) and transmits data to a central software dashboard in real time.",
    engineeringApproach:
      "We designed custom PCBs with non-invasive current sensing and vibration detection to determine machine state without modifying existing machines. Data is transmitted over a lightweight IoT protocol to the monitoring backend.",
    technologies: [
      "PCB Design",
      "IoT",
      "Embedded Systems",
      "Custom Hardware",
    ],
    result:
      "Manual uptime recording eliminated. Real-time and historical machine performance data available on dashboard.",
    images: [],
    featured: true,
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured);

export const getProjectsByCategory = (category: string): Project[] =>
  category === "All"
    ? projects
    : projects.filter((p) => p.categories.includes(category));
