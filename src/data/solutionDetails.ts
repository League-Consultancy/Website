export interface SolutionDetail {
  whatIsIt: string;
  whatItSolves: string[];
  whatWeCanBuild: string[];
  typicalApplications: string[];
  technicalCapabilities: string[];
}

export const SOLUTION_DETAILS: Record<string, SolutionDetail> = {
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
