export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  examples: string[];
}

export const industries: Industry[] = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    description:
      "Automation, inspection, machine monitoring and IIoT solutions for production environments.",
    icon: "factory",
    examples: [
      "Automatic soldering",
      "Optical PCB inspection",
      "Machine uptime monitoring",
      "Conformal coating automation",
    ],
  },
  {
    id: "education",
    name: "Education",
    description:
      "AI-powered attendance, security and administrative systems for schools and institutions.",
    icon: "graduation-cap",
    examples: [
      "Classroom attendance from photos",
      "Entry and exit identification",
      "Security monitoring",
    ],
  },
  {
    id: "logistics",
    name: "Logistics & Warehousing",
    description:
      "Computer vision and inventory integration systems that improve warehouse accuracy and speed.",
    icon: "package",
    examples: [
      "Product search and projection",
      "Inventory integration",
      "QR-based identification",
    ],
  },
  {
    id: "government",
    name: "Government",
    description:
      "Robust, compliant technology systems for public sector operations, monitoring and data management.",
    icon: "building-2",
    examples: [
      "Identification systems",
      "Monitoring infrastructure",
      "Data platforms",
    ],
  },
  {
    id: "startups",
    name: "Startups",
    description:
      "End-to-end product engineering for founders who have an idea but need the technical team to build it.",
    icon: "rocket",
    examples: [
      "MVP development",
      "AI product engineering",
      "Hardware + software products",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description:
      "Precision engineering, data systems and intelligent monitoring for clinical and medical applications.",
    icon: "heart-pulse",
    examples: [
      "Monitoring systems",
      "Data platforms",
      "Intelligent diagnostics support",
    ],
  },
];
