import type { HookPage } from "./types";

export const solutionsOverview = {
  heading: "Engineering Intelligent Solutions for Industry Transformation",
  paragraphs: [
    "Every industry faces unique operational challenges, but the objective remains the same—to improve decision-making, optimize operations, enhance customer experiences, and create sustainable business value. Organizations today require intelligent solutions that not only automate processes but also enable continuous learning, adaptive decision-making, and autonomous execution across the enterprise.",
    "At Smart AITEK, we engineer industry-specific AI solutions that combine strategic consulting, Digital Business Engineering, Enterprise Architecture, Artificial Intelligence, Machine Learning, Generative AI, Agentic AI, intelligent automation, and enterprise platforms into one integrated transformation ecosystem. Rather than implementing isolated technologies, we build connected business capabilities that transform how organizations plan, operate, collaborate, and innovate.",
    "Our solution portfolio spans four complementary capability layers—AI & Machine Learning, AI Agents, the Agentic Framework that orchestrates them, and the Tools that bring them safely to production—enabling enterprises to evolve from predictive insights to intelligent decision support and ultimately autonomous business operations.",
  ],
};

export const solutions: HookPage[] = [
  {
    slug: "ai-ml",
    pageTitle: "High-Performance Predictive AI and Machine Learning",
    tagline: "Our AI/ML Solutions",
    hook: "Raw enterprise data is of limited use if your operations remain purely reactive. Without the capability to sense patterns and predict anomalies, organizations miss critical windows for proactive adjustment.",
    solution: [
      "Smart AITEK designs custom machine learning models, neural networks, and optimization algorithms tuned to the operational realities of each industry we serve. This includes both Predictive AI/ML and Generative AI capabilities deployed across Manufacturing, Oil & Gas, Healthcare, Insurance, and Pharmaceuticals.",
      "Our custom analytics scale across your entire value chain, converting raw sensor and transaction streams into predictive insights and generative intelligence. By integrating with your operations, our models prevent scrap generation, optimize asset reliability, automate document workflows, and surface executive-ready insights on demand.",
    ],
    capabilitiesHeading: "Industry AI/ML Capabilities",
    capabilities: [
      "Manufacturing — Demand & Inventory Analytics, Smart Production, Quality & Scheduling, Asset Reliability, Scenario Simulation, and Generative Inventory Assistants",
      "Oil & Gas — Predictive Maintenance (PdM), Asset Health & RUL Estimation, Condition-Based Maintenance (CBM), Reliability-Centered Maintenance (RCM), Computer Vision, and Generative Maintenance Intelligence",
      "Healthcare (Providers & Payers) — Provider Intelligence, Hospital Optimization, Payer Intelligence, Risk & Member Management, Generative Healthcare Copilots, and Medical Document AI",
      "Insurance — Underwriting & Risk, Pricing & Profiling, Claims & Fraud, Enterprise Risk, Customer Analytics, and Generative Insurance Copilots",
      "Pharmaceuticals — Manufacturing Intelligence, Quality & Compliance, Commercial Performance, Generative R&D Copilots, and Medical Affairs AI",
    ],
    detailScope: {
      heading: "Detailed Solution Scope",
      groups: [
        {
          title: "Manufacturing",
          items: [
            "Demand & Inventory Analytics: demand forecasting for raw materials using time-series predictive analytics and regression models",
            "Inventory Optimization: modelling to optimize reorder points, safety stock, and supplier selection",
            "Smart Production: smart factory systems and autonomous process control utilizing reinforcement learning",
            "Quality & Scheduling: vision-based quality inspection and dynamic production scheduling",
            "Asset Reliability: predictive maintenance utilizing anomaly detection and throughput/OEE prediction",
            "Scenario Simulation: digital twin simulation and causal impact models for scenario planning",
            "Generative Insights: GenAI Inventory Assistants that generate executive-ready reports and explain demand anomalies",
            "Conversational AI: chat and voice LLM agents for customer experience",
          ],
        },
        {
          title: "Oil & Gas",
          items: [
            "Predictive Maintenance (PdM): forecasting failures via vibration analysis and temperature anomaly detection",
            "Asset Health: early warning systems for rotating equipment and Remaining Useful Life (RUL) estimation",
            "Condition-Based Maintenance (CBM): IoT sensor fusion and degradation tracking",
            "Reliability-Centered Maintenance (RCM): automated FMEA and asset criticality scoring",
            "Computer Vision: automated inspections for leak detection, corrosion identification, and thermal imaging",
            "Generative Maintenance Intelligence: NLP-driven intelligence for extracting failure patterns from unstructured data logs",
            "Knowledge Assistants: conversational troubleshooting assistants and knowledge retrieval from equipment manuals",
          ],
        },
        {
          title: "Healthcare (Payers & Providers)",
          items: [
            "Provider Intelligence: Patient Journey Intelligence, Clinical Decision Intelligence, Medical Imaging Analytics, and Hospital Operations Intelligence",
            "Hospital Optimization: Bed Utilization Analytics, Workforce Planning, Revenue Cycle Intelligence, Predictive Readmissions, and Population Health Intelligence",
            "Payer Intelligence: Claims Intelligence, Payment Integrity Intelligence, Care Management Intelligence, and Provider Network Intelligence",
            "Risk & Member Management: Regulatory Risk Intelligence, Member Experience Intelligence, Utilization Management, and Fraud, Waste & Abuse Detection",
            "Generative Healthcare Copilots: Clinical Copilots, Care Management Copilots, Claims Copilots, and Member Service Copilots",
            "Medical Document AI: Healthcare Knowledge Assistants and Medical Document Intelligence",
          ],
        },
        {
          title: "Insurance",
          items: [
            "Underwriting & Risk: Intelligent Risk Assessment, AI-Powered Underwriting, and Automated Risk Scoring",
            "Pricing & Profiling: Premium Pricing Optimization and Customer Risk Profiling",
            "Claims & Fraud: Claims Settlement Optimization, Fraud Risk Scoring, Behavioral Fraud Analytics, and Network Fraud Analytics",
            "Enterprise Risk: Predictive Risk Intelligence, Enterprise Risk Analytics, and Catastrophe Risk Modeling",
            "Customer Analytics: Customer Segmentation, Customer Lifetime Value Analytics, Customer Churn Prediction, and Next Best Action Intelligence",
            "Generative Insurance Copilots: Underwriting Copilots, Claims Copilots, Customer Service Copilots, and Executive Copilots",
          ],
        },
        {
          title: "Pharmaceuticals",
          items: [
            "Manufacturing Intelligence: Smart Pharma Manufacturing and Batch Production Intelligence",
            "Quality & Compliance: Equipment Monitoring, CAPA Intelligence, and GMP Compliance",
            "Commercial Performance: Commercial Analytics, Sales Force Effectiveness, and Market Access Intelligence",
            "Generative R&D Copilots: Research Intelligence Analysts, Regulatory Copilots, Quality Copilots, and Pharmacovigilance Copilots",
            "Medical Affairs: Medical Affairs Copilots, Scientific Knowledge Assistants, Regulatory Document Intelligence, and Enterprise Search",
          ],
        },
      ],
    },
    businessImpactHeading: "Business Impact",
    businessImpact:
      "Enterprises shift from historical analysis to real-time foresight, gaining a strategic operational window to proactively reduce cost and capture revenue.",
  },
  {
    slug: "ai-agents",
    pageTitle: "Goal-Oriented Digital Workers for the Enterprise",
    tagline: "AI Agents",
    hook: "Passive software tools require continuous human prompts to execute simple tasks. Operating without active execution-oriented systems leaves your workforce bogged down by repetitive, manual hand-offs.",
    solution: [
      "Smart AITEK constructs targeted, autonomous digital workers that execute specific operational tasks. Our agents possess contextual reasoning, memory, and tool usage capabilities to autonomously execute complex workflows across Manufacturing, Oil & Gas, Healthcare, Insurance, and Pharmaceuticals.",
      "We deploy specialized digital workers that connect directly with your core enterprise applications. They evaluate environment signals, plan task sequences, and update databases, routing highly ambiguous cases to human specialists with strict safety parameters.",
    ],
    capabilitiesHeading: "Industry AI Agent Catalog",
    capabilities: [
      "Manufacturing — Inventory Agents, Production Agents, Quality Agents, Maintenance Agents, and Optimization Agents",
      "Oil & Gas — Maintenance Execution Agents, Planning Agents, Inspection Agents, Resource Agents, and Logistics Agents",
      "Healthcare (Providers & Payers) — Provider Agents, Payer Agents, and Executive Agents",
      "Insurance — Core Operational Agents, Engagement Agents, and Administrative Agents",
      "Pharmaceuticals — Compliance Agents, Safety Agents, Logistics Agents, and Risk Agents",
    ],
    detailScope: {
      heading: "Detailed AI Agent Catalog",
      groups: [
        {
          title: "Manufacturing",
          items: [
            "Inventory Agents: autonomously adjust procurement, negotiate with suppliers, and recalibrate KPIs",
            "Production Agents: execute dynamic workflows via Production Scheduling Agents and Capacity Planning Agents",
            "Quality Agents: conduct automated checks via Quality Inspection Agents utilizing Vision AI",
            "Maintenance Agents: monitor asset health via Predictive Maintenance Agents and Machine Health Monitoring Agents",
            "Optimization Agents: manage resources via Energy Optimization Agents and Digital Twin Simulation Agents",
          ],
        },
        {
          title: "Oil & Gas",
          items: [
            "Maintenance Execution Agents: autonomous agents that independently sense, diagnose, decide, and act",
            "Planning Agents: specialized shutdown and turnaround planning agents",
            "Inspection Agents: autonomous inspection agents and supervisor agents orchestrating multiple assets",
            "Resource Agents: Energy Optimization Agents",
            "Logistics Agents: Fleet Management Agents for transport optimization",
          ],
        },
        {
          title: "Healthcare (Payers & Providers)",
          items: [
            "Provider Agents: Patient Engagement Agents and Clinical Workflow Agents",
            "Payer Agents: Claims Processing Agents and Care Management Agents",
            "Executive Agents: Utilization Management Agents and Executive Healthcare Agents",
          ],
        },
        {
          title: "Insurance",
          items: [
            "Core Operational Agents: Autonomous Underwriting Agents and Claims Processing Agents",
            "Engagement Agents: Fraud Intelligence Agents and Customer Engagement Agents",
            "Administrative Agents: Policy Administration Agents and Risk Intelligence Agents",
          ],
        },
        {
          title: "Pharmaceuticals",
          items: [
            "Compliance Agents: Manufacturing & Quality Agents alongside Regulatory Affairs Agents",
            "Safety Agents: Pharmacovigilance Agents",
            "Logistics Agents: Supply Chain & Cold Chain Logistics Agents",
            "Risk Agents: Product Risk Mitigation Agents",
          ],
        },
      ],
    },
    businessImpactHeading: "Business Impact",
    businessImpact:
      "We transition your talent from tedious execution to exception management, boosting operational speed and safety across 24/7 business pipelines.",
  },
  {
    slug: "agentic-framework",
    pageTitle: "Centralized AI Orchestration and Multi-Agent Systems",
    tagline: "Agentic Framework",
    hook: "Deploying isolated AI tools across different departments leads to fragmented operations and immense governance risks. Complex business problems require multi-functional coordination that single models simply cannot handle.",
    solution: [
      "Smart AITEK engineers a centralized AI Orchestration Layer that coordinates teams of specialized digital workers. Built on the Agentic Decision Lifecycle (ADLC), our overarching orchestrators and multi-agent ecosystems connect individual AI agents into an autonomous value chain across every industry.",
      "When a major process event occurs, the orchestrator simultaneously directs your procurement, planning, and transport agents. This coordinated approach ensures that all agent interactions are audited, transparent, and completely aligned with business objectives.",
    ],
    capabilitiesHeading: "Industry Orchestration Framework",
    capabilities: [
      "Manufacturing — Multi-Agent Coordination Systems, Digital Twin Orchestration Agents, and the Multi-Agent Manufacturing Orchestrator",
      "Oil & Gas — Multi-Agent Operations Orchestrator connecting asset management, safety, logistics, and executive intelligence layers",
      "Healthcare (Providers & Payers) — Multi-Agent Healthcare Orchestrators unifying provider, payer, and executive decision layers",
      "Insurance — Multi-Agent Insurance Operations Orchestrators spanning underwriting, claims, fraud, and customer engagement",
      "Pharmaceuticals — Multi-Agent Pharmaceutical Operations Orchestrators covering manufacturing, regulatory, safety, and supply chain",
    ],
    detailScope: {
      heading: "Detailed Framework Orchestration Model",
      groups: [
        {
          title: "Manufacturing",
          items: [
            "Multi-Agent Coordination Systems",
            "Digital Twin Orchestration Agents",
            "Multi-Agent Manufacturing Orchestrator",
          ],
        },
        {
          title: "Oil & Gas",
          items: ["Multi-Agent Operations Orchestrator"],
        },
        {
          title: "Healthcare (Payers & Providers)",
          items: ["Multi-Agent Healthcare Orchestrators"],
        },
        {
          title: "Insurance",
          items: ["Multi-Agent Insurance Operations Orchestrators"],
        },
        {
          title: "Pharmaceuticals",
          items: ["Multi-Agent Pharmaceutical Operations Orchestrators"],
        },
      ],
    },
    businessImpactHeading: "Business Impact",
    businessImpact:
      "Organizations automate complex, end-to-end workflows safely, achieving continuous optimization across finance, supply chain, and operations.",
  },
  {
    slug: "tools",
    pageTitle: "Joule Studio, SAP AI Agent Hub, and Enterprise RAG Platforms",
    tagline: "Tools",
    hook: "Moving AI initiatives from successful demonstrations to secure, governed production requires powerful development tooling. Without enterprise-grade command centers, organizations cannot monitor active agents or prevent model hallucinations.",
    solution: [
      "Smart AITEK deploys advanced development environments and management platforms to lifecycle your AI. We build high-performance Retrieval-Augmented Generation (RAG) platforms that securely link LLMs to your private ERP data without leaks.",
      "By deploying centralized control hubs, your technology team gains total visibility over active digital workers. We utilize low-code and pro-code environments to streamline custom agent building, accelerating your transition toward enterprise autonomy.",
    ],
    capabilitiesHeading: "Key Capabilities",
    capabilities: [
      "Low-code and pro-code custom agent building via Joule Studio",
      "Unified discovery, registration, and auditing using the SAP AI Agent Hub",
      "Enterprise RAG Platforms with secure vector databases and knowledge graphs",
      "Real-time agent observability, performance, and boundary tracking",
    ],
    detailScope: {
      heading: "Detailed Tooling Stack",
      groups: [
        {
          title: "Joule Studio",
          description:
            "Rapid, pro-code and low-code development environment specifically integrated into SAP BTP to build, test, and deploy customized sub-agents.",
        },
        {
          title: "SAP AI Agent Hub",
          description:
            "A central IT control panel built on LeanIX, allowing complete lifecycle discovery, performance monitoring, registration, and auditing of all deployed digital workers.",
        },
        {
          title: "Enterprise RAG Platforms",
          description:
            "Hybrid vector databases (such as FAISS, Milvus, or Pinecone) and knowledge graph reasoning tools that safely expose unstructured operational files to LLMs without fine-tuning risks.",
        },
      ],
    },
    businessImpactHeading: "Business Impact",
    businessImpact:
      "Technology teams rapidly build, test, and deploy compliant, hallucination-free AI agents, cutting time-to-production from months to weeks.",
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
