import type { Category, HookPage } from "./types";
import { verticalCapabilityLayers } from "./detailedSolutions";

export const expertiseIntro = {
  heading: "Engineering Business Transformation Through Strategy, Intelligence, and Technology",
  paragraphs: [
    "Enterprise transformation today requires more than technology adoption. Organizations must rethink how they operate, make decisions, and create value in an AI-driven world.",
    "At Smart AITEK, we combine strategic consulting, Digital Business Engineering, enterprise architecture, Artificial Intelligence, Agentic AI, and intelligent engineering to help organizations modernize operations, accelerate innovation, and build intelligent enterprises that deliver measurable business outcomes.",
  ],
};

export const aiForEnterprise: HookPage = {
  slug: "ai-for-enterprise",
  pageTitle: "The Dawn of the Autonomous Enterprise",
  tagline: "AI for Enterprise",
  hook: "Traditional Generative AI is fundamentally reactive—it remains passive until prompted by a human. The true competitive frontier belongs to systems that can autonomously execute complex, multi-step business outcomes.",
  solution: [
    "Smart AITEK transitions organizations from basic automation to a state of self-optimizing performance. We combine Predictive ML, Generative AI, and Agentic AI into a centralized orchestration layer, allowing specialized digital workers to execute end-to-end workflows.",
    "Our agentic systems perceive, reason, decide, act, and learn continuously. Deeply integrated into your ERP and business networks, they operate with strict compliance guardrails to optimize your operations in real time.",
  ],
  capabilitiesHeading: "Key Capabilities",
  capabilities: [
    "Centralized multi-agent orchestration layers",
    "Closed-loop action execution systems",
    "Goal-driven, continuous monitoring and decisioning",
    "Adaptive reasoning, short-term planning, and tool usage",
  ],
  businessImpactHeading: "Business Impact",
  businessImpact:
    "We establish technology as a core business competency, enabling traditional enterprises to compete with born-digital leaders at scale.",
};

export const consultingCategory: Category = {
  slug: "consulting",
  name: "Consulting",
  intro:
    "Transformation begins before a single line of code is written. Our Consulting practice aligns process, strategy, and technology so every downstream engineering investment lands on solid ground.",
  pages: [
    {
      slug: "business-process",
      pageTitle: "Process Engineering and Quantitative Business Process Management (QBPM)",
      tagline: "Business Process Consulting",
      hook: "Automating an inefficient, broken process only speeds up the generation of waste. Without a clear process redesign, legacy operational bottlenecks continue to drain transformation capital.",
      solution: [
        "Our Business Process Consulting utilizes Quantitative Business Process Management (QBPM) to eliminate operational waste. We mathematically map value streams, pinpointing exactly where unnecessary hand-offs, bottlenecks, and control gaps occur before implementing AI.",
        "The resulting simplified workflow forms a stronger process baseline for digital transformation. This rigorous, structured method prepares your organization for seamless automation, advanced analytics, and digital workflow orchestration.",
      ],
      capabilitiesHeading: "Key Capabilities",
      capabilities: [
        "Data-driven process mining and bottleneck analysis",
        "Value stream and process capability mapping",
        "Workflow design for intelligent, touchless process automation",
        "Standardized Lean transformation playbooks and templates",
      ],
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Redesigning your process baseline establishes a waste-free foundation, ensuring rapid adoption and high ROI for downstream digital workflows.",
    },
    {
      slug: "management",
      pageTitle: "Strategic Advisory and C-Suite Alignment",
      tagline: "Management Consulting",
      hook: "Technology is no longer the primary bottleneck in enterprise transformation—strategic clarity is. Executive teams struggle to connect high-level growth ambitions with actual technical execution priorities.",
      solution: [
        "Smart AITEK acts as a strategic partner to align business strategy, people, processes, and technology. We guide leadership teams to define their Digital North Star and map corporate priorities directly to quantifiable financial outcomes.",
        "Using our disciplined frameworks, we translate strategic intent into execution priorities. We establish the organizational governance, investment plans, and executive alignment required for sustainable transformation.",
      ],
      capabilitiesHeading: "Key Capabilities",
      capabilities: [
        "Leadership alignment workshops and strategic purpose mapping",
        "C-Suite advisory and transformation governance",
        "Digital maturity assessments using the 12x12 Lean Digital Quotient (LDQ)",
        "Enterprise Value Tree design mapping topline and bottom-line levers",
      ],
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Leaders secure unified strategic alignment and a clear, board-ready 3-Year Transformation Roadmap prioritized by value and complexity.",
    },
    {
      slug: "it",
      pageTitle: "Enterprise Architecture and Modernization",
      tagline: "IT Consulting",
      hook: "Legacy technology stacks, fragmented data silos, and complex integration patterns are the greatest barriers to operational speed. Spaghetti data sprawl drains capital on high maintenance costs while limiting innovation.",
      solution: [
        "We design future-ready, scalable architectures that simplify enterprise complexity. Our IT Consulting modernizes applications, databases, and APIs, providing a secure, high-performance foundation designed for real-time data flows.",
        "We design robust integration strategies that break down administrative silos. This engineering work ensures that your core systems are fully optimized to support advanced analytics and secure digital workforces.",
      ],
      capabilitiesHeading: "Key Capabilities",
      capabilities: [
        "Modern application, data, cloud, and integration architecture",
        "Secure API and integration strategy connecting legacy ERP, CRM, and SCM networks",
        "Data architecture modernization using Lakes, Lakehouses, and Vector Databases",
        "Scalable Agentic AI reference architectures with built-in governance",
      ],
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Modernizing your landscape eliminates systemic integration risks, lowers IT maintenance overhead, and secures immediate readiness for advanced AI deployment.",
    },
    {
      slug: "digital-ai-transformation",
      pageTitle: "End-to-End AI Strategy and Maturity Road Mapping",
      tagline: "Digital & AI Transformation",
      hook: "Over 70% of digital transformation programs fail because they deploy isolated, reactive tools that do not align with core business goals. Thinking traditionally and executing digitally is a proven blueprint for stagnation.",
      solution: [
        "Smart AITEK provides a strategy-first discipline, framing opportunities across the enterprise value chain. We evaluate your operational constraints and data readiness, identifying high-value use cases that generate immediate, sustainable ROI.",
        "We select the right approach for your specific problems, establishing the necessary architectural foundations. Our transformation pathway addresses critical factors including AI safety, operational risk, and compliance frameworks from the very beginning.",
      ],
      capabilitiesHeading: "Key Capabilities",
      capabilities: [
        "Systematic AI and Machine Learning opportunity prioritization",
        "Comprehensive Digital Maturity and AI Readiness assessments",
        "Strategic 3-Year Transformation Roadmaps",
        "AI safety, governance, and operating model design",
      ],
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Enterprises transition confidently from manual operations to self-optimizing ecosystems, with every investment tied to a measurable financial North Star.",
    },
  ],
};

export const domainCategory: Category = {
  slug: "domain",
  name: "Domain",
  intro:
    "Vertical-specific cognitive layers — predictive, generative, and agentic — tuned to the operational realities of each industry we serve.",
  pages: [
    {
      slug: "manufacturing",
      pageTitle: "Agentic Manufacturing: Planning, Production, and Supply Chain as One",
      tagline: "Manufacturing",
      hook: "Traditional manufacturing operates in silos — planning, production, and supply chain rarely share context in real time. Fragmented tools leave planners manually resolving conflicts, driving up inventory costs, downtime, and missed delivery commitments.",
      solution: [
        "Smart AITEK transitions traditional manufacturing operations into adaptive, intelligent ecosystems. Our Agentic Manufacturing model unifies planning, production, and supply chain into a single connected enterprise — where AI agents sense, decide, and act continuously across all operational layers.",
        "From demand planning and S&OP through integrated business planning, intelligent procurement, and supplier collaboration, our cognitive layers bridge every functional boundary. Production scheduling, inventory intelligence, logistics optimization, predictive maintenance, computer vision, digital twins, and control towers all converge into one self-optimizing manufacturing brain.",
      ],
      capabilitiesHeading: "Core Focus Areas",
      capabilities: [
        "Smart Manufacturing & Digital Twins for real-time shop-floor intelligence",
        "Demand Planning, S&OP, and Integrated Business Planning (IBP)",
        "Intelligent Procurement, Supplier Collaboration & Inventory Intelligence",
        "Production Scheduling, Logistics Optimization & Predictive Maintenance",
        "Computer Vision & Control Towers for end-to-end operational visibility",
      ],
      detailScope: {
        heading: "Detailed Domain Solutions",
        groups: verticalCapabilityLayers.manufacturing,
      },
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Manufacturers achieve a fully connected enterprise where planning cycles compress, OEE improves substantially, inventory carrying costs fall, and supply chain disruptions are resolved autonomously — before they impact the customer.",
    },
    {
      slug: "oil-gas",
      pageTitle: "Modernizing Downstream Energy for Performance, Safety, and Compliance",
      tagline: "Downstream Energy (Oil & Gas)",
      hook: "Downstream facilities face mounting pressure to maximize asset uptime, improve safety culture, and meet tightening environmental standards — all simultaneously. Fragmented historian data and manual inspection regimes delay critical interventions, exposing refineries to safety and regulatory risk.",
      solution: [
        "Smart AITEK modernizes downstream operations to optimize asset performance, improve safety, and ensure environmental and regulatory compliance. Our AI capability layers are purpose-built for the operational realities of refining, petrochemical, and terminal environments.",
        "Intelligent asset management and maintenance agents deliver predictive maintenance and reliability engineering at scale. Operational optimization models drive refining process efficiency and energy reduction, while computer vision and digital twins provide enterprise-wide visibility — enabling executives to monitor performance and compliance from a single control plane.",
      ],
      capabilitiesHeading: "Core Focus Areas",
      capabilities: [
        "Intelligent Asset Management: Predictive Maintenance & Reliability Engineering",
        "Operational Optimization: Refining Process, Energy & Turnaround Planning",
        "Computer Vision for HSE monitoring and equipment inspection",
        "Safety & Sustainability: environmental compliance and risk intelligence",
        "Enterprise Visibility: Digital Twins & Executive Operations Intelligence",
      ],
      detailScope: {
        heading: "Detailed Domain Solutions",
        groups: verticalCapabilityLayers["oil-gas"],
      },
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Downstream operators reduce unplanned shutdowns, improve HSE performance, and maximize gross margins — while keeping regulatory and environmental compliance fully automated across every asset.",
    },
    {
      slug: "insurance",
      pageTitle: "Automating Core Insurance Decisions Through AI Governance and Predictive Intelligence",
      tagline: "Insurance",
      hook: "Carriers must navigate strict regulatory environments while managing rising claims volumes, sophisticated fraud schemes, and slow underwriting cycles. Traditional automation fails in the face of unstructured documentation, cross-functional risk anomalies, and catastrophe-level events that demand real-time decisioning.",
      solution: [
        "Smart AITEK helps insurers automate core back-office decisions through predictive analytics, document intelligence, and AI governance — operating within strict regulatory guardrails from day one. Our self-driving insurance operating model spans the full value chain, from first notice of loss to settlement and risk renewal.",
        "Intelligent claims management agents automate intake, triage, and settlement. Underwriting intelligence models score risk and optimize pricing dynamically. Fraud detection and risk intelligence systems identify behavioral and document fraud patterns, while customer and operations transformation agents handle the full service experience — reducing cycle times and operational costs simultaneously.",
      ],
      capabilitiesHeading: "Core Focus Areas",
      capabilities: [
        "Intelligent Claims Management: Intake, Triage & Automated Settlement",
        "Underwriting Intelligence: Risk Scoring & Pricing Optimization",
        "Fraud Detection & Risk Intelligence: Behavioral, Document Fraud & Catastrophe Risk Modeling",
        "Customer & Operations Transformation across the insurance value chain",
      ],
      detailScope: {
        heading: "Detailed Domain Solutions",
        groups: verticalCapabilityLayers.insurance,
      },
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Insurers achieve significant reductions in claims processing times and underwriting cycle times, improved fraud detection rates, and lower operational costs — all within a compliant, governed AI framework.",
    },
    {
      slug: "healthcare",
      pageTitle: "Unifying Clinical, Administrative, and Financial Operations for Providers and Payers",
      tagline: "Healthcare (Providers & Payers)",
      hook: "Healthcare organizations face rising operational costs, severe workforce shortages, and fragmented administrative workflows that delay clinical care. Disconnected systems across providers and payers create logistics waste, compromise patient experience, and drain revenue from every part of the system.",
      solution: [
        "Smart AITEK unifies clinical, administrative, operational, and financial functions into a single digital operating model — reducing healthcare logistics waste and improving patient experiences at every touchpoint.",
        "For providers, patient journey intelligence minimizes wait times, clinical decision support empowers care teams, hospital operations intelligence optimizes bed and resource utilization, and revenue cycle intelligence accelerates realization. For payers, our AI agents automate claims adjudication and fraud detection, predict readmission risk before discharge, and optimize healthcare supply chain performance across the network.",
      ],
      capabilitiesHeading: "Core Focus Areas",
      capabilities: [
        "Provider: Patient Journey Intelligence & Clinical Decision Support",
        "Provider: Hospital Operations Intelligence & Revenue Cycle Intelligence",
        "Payer: Claims Adjudication & Fraud Detection",
        "Payer: Predictive Readmission Intelligence & Healthcare Supply Chain Intelligence",
      ],
      detailScope: {
        heading: "Detailed Domain Solutions",
        groups: verticalCapabilityLayers.healthcare,
      },
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Providers optimize resource utilization, reduce patient wait times, and accelerate revenue cycle realization — while payers achieve faster, more accurate claims adjudication, lower fraud losses, and improved care management outcomes.",
    },
    {
      slug: "pharmaceuticals",
      pageTitle: "Connected Digital Ecosystems for R&D, Manufacturing, Quality, and Supply Chain",
      tagline: "Pharmaceuticals",
      hook: "Pharmaceutical innovation is constrained by fragmented R&D pipelines, manual quality oversight, rigid regulatory reporting timelines, and cold chain vulnerabilities. A single batch deviation, delayed adverse event report, or temperature excursion can derail clinical programs and commercial launches alike.",
      solution: [
        "Smart AITEK engineers connected digital ecosystems where R&D, continuous manufacturing, quality, and supply chain function together to accelerate innovation and ensure absolute compliance. Our multi-layered AI framework closes every gap across the pharmaceutical value chain.",
        "Pharma supply and cold chain intelligence agents provide real-time temperature monitoring and end-to-end product traceability. Regulatory compliance and pharmacovigilance systems automate adverse event monitoring and safety signal detection. Intelligent manufacturing and commercialization platforms deliver digital quality management and continuous manufacturing analytics — ensuring every batch is consistent, compliant, and traceable from synthesis to patient.",
      ],
      capabilitiesHeading: "Core Focus Areas",
      capabilities: [
        "Pharma Supply & Cold Chain Intelligence: Temperature Monitoring & Product Traceability",
        "Regulatory Compliance & Pharmacovigilance: Automated Adverse Event Monitoring",
        "Intelligent Manufacturing & Commercialization: Digital Quality Management",
        "Continuous Manufacturing Analytics for batch consistency and yield optimization",
      ],
      detailScope: {
        heading: "Detailed Domain Solutions",
        groups: verticalCapabilityLayers.pharmaceuticals,
      },
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Pharmaceutical leaders accelerate clinical trial timelines, guarantee batch consistency and regulatory compliance, and maintain perfect traceability across global temperature-tracked distribution networks — from API synthesis to last-mile delivery.",
    },
  ],
};

export const functionsCategory: Category = {
  slug: "functions",
  name: "Functions",
  intro:
    "Cross-industry capability building blocks — the reusable engineering patterns behind every industry and domain solution we deliver.",
  pages: [
    {
      slug: "intelligent-factory",
      pageTitle: "IT-OT Convergence and Real-Time Factory Intelligence",
      tagline: "Intelligent Factory",
      hook: "Semiautomated factories suffer from disconnected operational and information systems. Without real-time IT-OT integration, plant floor failures remain hidden from enterprise ERP and planning layers.",
      solution: [
        "Smart AITEK bridges IT and OT, creating a unified data fabric across machinery, PLCs, MES, and ERP systems. We deploy computer vision and machine telemetry analytics to detect process deviations and equipment wear as they occur.",
        "Specialized agents monitor machine vibration, temperature, and cycle times. Predictive insights trigger automated corrective workflows, shifting your operations from a reactive state to a self-optimizing environment.",
      ],
      capabilitiesHeading: "Key Capabilities",
      capabilities: [
        "Computer Vision systems for automated on-the-line defect detection",
        "Real-time sensor fusion and machine vibration analysis",
        "Unified IT-OT data integration connecting MES and ERP",
        "Automated corrective workflows triggered by real-time telemetry",
      ],
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Plants move from reactive operations to automated process corrections, achieving high First Pass Yield, optimized energy loading, and complete plant-floor visibility.",
    },
    {
      slug: "supply-chain-management",
      pageTitle: "The Autonomous and Responsive Supply Chain",
      tagline: "Supply Chain Management",
      hook: "Supply chains operate in a highly volatile environment where a single port delay or weather event can stall production. Relying on manual, weekly planning cycles creates massive blind spots and slow disruption response times.",
      solution: [
        "Smart AITEK moves your supply chain from periodic planning to continuous, real-time decision-making. We implement Multi-Agent SCM Orchestrators that autonomously detect supplier delays, adjust inventory, and redirect logistics to protect your bottom line.",
        "Specialized planning, procurement, and transport agents collaborate to resolve exceptions within defined business guardrails. This is supported by our Supply Chain Control Tower, which provides cross-functional decision support and scenario simulations.",
      ],
      capabilitiesHeading: "Key Capabilities",
      capabilities: [
        "Multi-Agent Supply Chain Orchestrator coordinating S&OP and logistics",
        "Predictive supplier risk scoring and RFQ/RFP automation",
        "Multi-Echelon Inventory Optimization (MEIO) and demand sensing",
        "Supply Chain Control Tower for cross-functional decision support",
      ],
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Deploying our supply chain solutions delivers significant reductions in manual decision cycles and major improvements in overall planning accuracy.",
    },
    {
      slug: "manufacturing-excellence",
      pageTitle: "Maximizing Throughput and First Pass Yield (FPY)",
      tagline: "Manufacturing Excellence",
      hook: "Plant profitability is frequently eroded by subtle, cumulative losses like machine micro-stoppages, setup inefficiencies, and high scrap rates. Without continuous optimization of process parameters, manufacturers continue to lose throughput.",
      solution: [
        "We apply advanced machine learning algorithms to optimize process parameters in real time. By continuously adjusting machine settings to environmental conditions, we maximize OEE and First Pass Yield.",
        "Our computer vision systems identify defect trends on the line, preventing the production of waste. Through AI-driven production sequencing, we minimize setup times and changeovers to maximize equipment runtime.",
      ],
      capabilitiesHeading: "Key Capabilities",
      capabilities: [
        "Machine learning models for process parameter optimization",
        "Computer Vision systems checking assembly errors in real time",
        "AI-driven production sequencing to minimize changeover times",
        "Micro-stoppage pattern analysis and root-cause identification",
      ],
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Manufacturers achieve substantial improvements in overall OEE, significant reductions in scrap, and exceptionally high First Pass Yield.",
    },
    {
      slug: "smart-operations",
      pageTitle: "Intelligent Process Automation for Smart Operations",
      tagline: "Smart Operations",
      hook: "Administrative back offices are choked by manual document checking, repetitive invoice matching, and slow exception handling. Operating with manual decision cycles limits business agility and raises transactional costs.",
      solution: [
        "Smart AITEK deploys Intelligent Process Automation (IPA) powered by advanced OCR, NLP, and decision agents. We convert manual administrative workflows into high-speed, self-driven operations that integrate with your core ERP.",
        "Our specialized agents handle document validation, extract contract insights, and match invoices touchlessly. For compliance-intensive operations, we automate audit tracking and exception routing to eliminate administrative drag.",
      ],
      capabilitiesHeading: "Key Capabilities",
      capabilities: [
        "Intelligent Document Processing (IDP) and contract analytics",
        "Autonomous order management and touchless invoice matching",
        "Exception prediction and automated workflow routing",
        "Regulatory compliance and automated compliance reporting agents",
      ],
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Smart operations achieve faster exception resolution rates and significant reductions in manual decision cycles.",
    },
    {
      slug: "digital-twins",
      pageTitle: "Real-Time Process Simulation and Scenario Intelligence",
      tagline: "Digital Twins",
      hook: "Evaluating operational changes or testing turnaround plans in a physical environment is highly risky and costly. Without real-time simulation, engineers cannot accurately predict how modifications will impact safety or throughput.",
      solution: [
        "Smart AITEK constructs physics-based Digital Twins that replicate your physical assets and process conditions. Our Digital Twins are enriched with AI agents that simulate “what-if” scenarios, helping operators optimize performance without risk.",
        "By combining historical data with real-time sensor metrics, we predict asset behaviors under diverse operating conditions. This multi-agent simulation exposes functional trade-offs, enabling you to optimize energy usage and plan turnarounds with total precision.",
      ],
      capabilitiesHeading: "Key Capabilities",
      capabilities: [
        "Real-time virtual replica of plants, asset networks, and supply chains",
        "Continuous sensor data, equipment model, and context integration",
        "AI agent-led scenario simulation and constraint evaluation",
        "Multi-agent coordination to expose cross-functional trade-offs",
      ],
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Industrial operators achieve safer scenario evaluation, optimized energy consumption, and highly predictable turnaround planning.",
    },
    {
      slug: "sap",
      pageTitle: "Architecting the Autonomous SAP Enterprise",
      tagline: "SAP",
      hook: "Traditional ERP systems behave purely as static databases of record. General-purpose AI models lack the deep business context, security, and process logic required to automate ERP decisions safely.",
      solution: [
        "Smart AITEK leverages SAP Business Technology Platform (BTP) and SAP Business AI to turn your ERP into a self-optimizing brain. We embed specialized agents and natural language interfaces directly into your SuccessFactors, S/4HANA, Ariba, and IBP landscapes.",
        "We implement SAP Business AI across three critical layers: context, build, and governance. Your team interacts with your entire SAP landscape using natural language, accelerating execution while our agents autonomously resolve exception cycles.",
      ],
      capabilitiesHeading: "Key Capabilities",
      capabilities: [
        "Context Layer: SAP Domain Models and knowledge graphs preserving business logic",
        "Build Layer: Custom AI Agent and Joule Assistant development using Joule Studio",
        "Governance Layer: Single command center management via SAP AI Agent Hub",
        "Joule Work: Conversational natural language interface for unified operations",
      ],
      businessImpactHeading: "Business Impact",
      businessImpact:
        "SAP BTP modernization delivers a major reduction in manual decision cycles, steady topline growth, and notable improvements in workforce productivity.",
    },
  ],
};

export const expertiseCategories: Category[] = [consultingCategory, domainCategory, functionsCategory];

export function getCategory(slug: string) {
  return expertiseCategories.find((c) => c.slug === slug);
}

export function getCategoryPage(categorySlug: string, pageSlug: string) {
  return getCategory(categorySlug)?.pages.find((p) => p.slug === pageSlug);
}

export const whyAitek =
  "Most organizations specialize in either strategy, technology, or implementation. Smart AITEK integrates all three through a consulting-led, engineering-backed approach that combines Digital Business Engineering, Enterprise Architecture, Artificial Intelligence, and Agentic AI into a unified transformation model. This enables organizations to move beyond isolated technology initiatives and build intelligent enterprises where strategy, operations, people, data, and technology continuously evolve together to create measurable business value.";
