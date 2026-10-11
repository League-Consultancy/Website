export interface Capability {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export const capabilities: Capability[] = [
  {
    id: "ai-intelligent-systems",
    number: "01",
    title: "AI & Intelligent Systems",
    description:
      "Machine learning, predictive analytics, and intelligent automation built around the actual problem rather than a generic AI stack.",
    tags: ["Machine Learning", "LLMs", "Automation", "Inference"],
    icon: "cpu",
  },
  {
    id: "software-web",
    number: "02",
    title: "Software & Web Development",
    description:
      "Custom software, web applications and data platforms engineered for real-world use and maintainability.",
    tags: ["Web Apps", "APIs", "Databases", "Cloud"],
    icon: "code",
  },
  {
    id: "computer-vision",
    number: "03",
    title: "Computer Vision",
    description:
      "Image recognition, object detection, face identification and optical inspection systems integrated into production workflows.",
    tags: ["Detection", "Recognition", "Inspection", "Tracking"],
    icon: "eye",
  },
  {
    id: "robotics-automation",
    number: "04",
    title: "Robotics & Automation",
    description:
      "Custom automation machines, robotic systems and precision mechanical assemblies designed and built for industrial deployment.",
    tags: ["Industrial Robots", "Motion Control", "Automation"],
    icon: "settings",
  },
  {
    id: "iot-iiot",
    number: "05",
    title: "IoT & IIoT",
    description:
      "Connected hardware systems that monitor, control and report. From sensor networks to industrial machine monitoring.",
    tags: ["Sensors", "Edge Computing", "Monitoring", "Control"],
    icon: "wifi",
  },
  {
    id: "mechanical-engineering",
    number: "06",
    title: "Mechanical Engineering",
    description:
      "CAD design, mechanical systems engineering and custom machine development for precision industrial applications.",
    tags: ["CAD Design", "Machine Design", "Prototyping"],
    icon: "wrench",
  },
  {
    id: "rag-llm",
    number: "07",
    title: "RAG & LLM Systems",
    description:
      "Retrieval-augmented generation, natural language interfaces and domain-specific language model systems built on your data.",
    tags: ["RAG", "NLP", "SQL Generation", "Knowledge Bases"],
    icon: "database",
  },
  {
    id: "digital-twins",
    number: "08",
    title: "Digital Twins",
    description:
      "Virtual representations of physical systems that enable simulation, monitoring and predictive maintenance.",
    tags: ["Simulation", "3D Models", "Monitoring", "Prediction"],
    icon: "layers",
  },
];

export const solutionSlugs = [
  { slug: "ai", title: "AI & Intelligent Systems", capabilityId: "ai-intelligent-systems" },
  { slug: "software", title: "Software & Web Development", capabilityId: "software-web" },
  { slug: "computer-vision", title: "Computer Vision", capabilityId: "computer-vision" },
  { slug: "robotics", title: "Robotics & Automation", capabilityId: "robotics-automation" },
  { slug: "iot", title: "IoT & IIoT", capabilityId: "iot-iiot" },
  { slug: "mechanical-engineering", title: "Mechanical Engineering", capabilityId: "mechanical-engineering" },
  { slug: "rag", title: "RAG & LLM Systems", capabilityId: "rag-llm" },
  { slug: "digital-twins", title: "Digital Twins", capabilityId: "digital-twins" },
];
