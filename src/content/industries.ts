import type { Industry } from "./types";
import { verticalCapabilityLayers } from "./detailedSolutions";

export const industriesOverview = {
  heading: "Engineering Intelligent Enterprises Across Complex Industries",
  text: "Every industry is navigating a period of unprecedented transformation. Rapid technological advancements, evolving customer expectations, global disruptions, regulatory pressures, and increasing operational complexity are fundamentally changing how organizations create value and compete. Technology alone is no longer the differentiator. Competitive advantage belongs to organizations that can continuously adapt, make intelligent decisions, and execute with speed across every function of the business.",
};

export const transformationModel = {
  heading: "Smart AITEK Transformation Model",
  paragraphs: [
    "At Smart AITEK, we help enterprises move beyond traditional digital transformation by engineering intelligent operating models powered by Digital Business Engineering, Artificial Intelligence, Agentic AI, Multi-Agent Systems, and Enterprise Architecture. Our approach combines strategic consulting with deep engineering expertise to transform fragmented operations into connected, intelligent, and autonomous enterprises.",
    "Rather than implementing isolated technologies, we design industry-specific transformation journeys that align strategy, business processes, people, data, and technology to deliver measurable business outcomes.",
  ],
  steps: [
    { title: "Strategy", desc: "Business-First North Star." },
    { title: "Engineering", desc: "Digital Architecture, Process & Data Platforms." },
    { title: "Intelligence", desc: "Agentic AI, Twins, Continuous Learning." },
  ],
};

export const whyLeadersChoose = {
  heading: "Why Industry Leaders Choose Smart AITEK",
  items: [
    {
      title: "Strategy Leads",
      desc: "Technology deployment is always grounded in clear business strategies and quantifiable financial outcomes.",
    },
    {
      title: "Engineering-Backed Implementation",
      desc: "We bridge the gap between high-level management consulting and hands-on software/systems engineering.",
    },
    {
      title: "Domain Expertise",
      desc: "Our frameworks are customized for the unique operational complexities of Manufacturing, Downstream Energy, Insurance, Healthcare, and Pharmaceuticals.",
    },
    {
      title: "Autonomous Enterprise Vision",
      desc: "We move organizations past basic automation into self-sensing, self-adjusting Multi-Agent enterprise environments.",
    },
  ],
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    shortTagline: "Engineering the Self-Optimising Manufacturing Value Chain",
    section: {
      slug: "manufacturing",
      pageTitle: "Engineering the Self-Optimising Manufacturing Value Chain",
      hook: "Traditional manufacturers face extreme volatility in demand, supplier networks, and scheduling. Semi-automated, siloed operations and reactive “break-fix” maintenance models routinely cause costly unplanned shut-downs and heavy inventory overhead.",
      solution: [
        "Smart AITEK integrates Operational Technology (OT), Information Technology (IT), and ERP systems into a unified digital operating model. We deploy goal-oriented AI agents that continuously monitor operations, anticipate process disruptions, and automatically re-sequence schedules in real time.",
        "Our methodology eliminates costly operational blind spots across the plant and the wider value chain. Transitioning from manual, periodic planning to continuous, real-time execution frees human expertise to focus entirely on high-level strategic growth.",
      ],
      capabilitiesHeading: "Key Capabilities",
      capabilities: [
        "Predictive Maintenance and remaining useful life (RUL) estimation",
        "Dynamic Production Scheduling and line balancing",
        "Computer Vision quality inspection systems",
        "S&OP and Integrated Business Planning (IBP) platforms",
      ],
      detailScope: {
        heading: "Detailed Manufacturing Solutions",
        groups: verticalCapabilityLayers.manufacturing,
      },
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Transitioning your factory floor delivers sustainable improvements in OEE, significantly reduces unplanned downtime, and lowers inventory carrying costs.",
    },
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    shortTagline: "Closed-Loop Downstream Process and Asset Integrity",
    section: {
      slug: "oil-gas",
      pageTitle: "Closed-Loop Downstream Process and Asset Integrity",
      hook: "Downstream oil and gas assets operate under tight regulatory oversight, aging infrastructure, and significant operational hazards. Traditional monitoring fails to predict critical failure chains or optimize refinery yields in real time.",
      solution: [
        "Smart AITEK builds a predictive operational model that integrates DCS, APC, laboratory, and maintenance data into a single intelligence fabric. The system calculates a continuous Refinery Health Index (RHI) to predict and prevent threshold violations before alarms sound.",
        "Our domain-specific solutions feature specialized agents collaborating to adjust setpoints automatically. This closed-loop system ensures safer scenario evaluation, optimized crude selection, and minimized carbon emissions with minimal operator intervention.",
      ],
      capabilitiesHeading: "Key Capabilities",
      capabilities: [
        "Refinery process, feedstock, and crude blend optimization",
        "Industrial Computer Vision for automated corrosion and leak detection",
        "Predictive Refinery Health Index (RHI) scoring",
        "Semi-autonomous APC setpoint adjustments to maintain safety envelopes",
      ],
      detailScope: {
        heading: "Detailed Downstream Solutions",
        groups: verticalCapabilityLayers["oil-gas"],
      },
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Operators achieve higher asset utilization, minimized environmental exposure, and accelerated audit readiness while shifting human roles to strategic supervision.",
    },
  },
  {
    slug: "insurance",
    name: "Insurance",
    shortTagline: "Underwriting Agility and Intelligent Claims Automation",
    section: {
      slug: "insurance",
      pageTitle: "Underwriting Agility and Intelligent Claims Automation",
      hook: "Insurance carriers are hindered by paper-heavy, manual claims validation and slow, inconsistent underwriting cycles. Fragmented digital projects often result in high capital spend without improving loss ratios or customer retention.",
      solution: [
        "Smart AITEK transforms back-office processes into an active, collaborative digital workforce. We implement Multi-Agent Systems that analyze risk profiles, process document anomalies, and automate settlement workflows within strict governance boundaries.",
        "This transition streamlines repetitive processing, allowing instant case preparation and automated fraud checking. High-impact and highly ambiguous cases are seamlessly escalated to human specialists, ensuring perfect compliance, transparency, and trust.",
      ],
      capabilitiesHeading: "Key Capabilities",
      capabilities: [
        "Automated underwriting workbenches and risk scoring",
        "End-to-end claims triage, document processing, and settlement",
        "Behavioral and network fraud risk analytics",
        "Omnichannel customer virtual assistants for instant policy servicing",
      ],
      detailScope: {
        heading: "Detailed Insurance Solutions",
        groups: verticalCapabilityLayers.insurance,
      },
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Transitioning your operations delivers significant reductions in claims processing times, underwriting cycle times, and overall operational costs.",
    },
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    shortTagline: "Connected Care Models for Optimized Healthcare Performance",
    section: {
      slug: "healthcare",
      pageTitle: "Connected Care Models for Optimized Healthcare Performance",
      hook: "Healthcare organizations struggle with severe workforce shortages, rising administrative costs, and disconnected patient pathways. Siloed provider and payer data streams delay billing reconciliation and compromise care coordination.",
      solution: [
        "Smart AITEK connects clinical, operational, administrative, and financial functions into a unified digital operating model. We employ predictive intelligence and collaborative agents to streamline patient flows, automate billing, and coordinate preventative post-discharge care.",
        "These capabilities unify electronic records and clinical diagnostics. Caregivers are supported by clinical copilots that dramatically reduce administrative reporting burdens, allowing them to focus entirely on exceptional patient care.",
      ],
      capabilitiesHeading: "Key Capabilities",
      capabilities: [
        "Patient Journey Intelligence to minimize treatment wait times",
        "Clinical Decision Support combining diagnostic and imaging analytics",
        "Hospital Operations Intelligence for optimized bed and OR scheduling",
        "Revenue Cycle Intelligence to automate coding, billing, and denial management",
      ],
      detailScope: {
        heading: "Detailed Healthcare Solutions",
        groups: verticalCapabilityLayers.healthcare,
      },
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Providers and payers achieve faster claims processing, reduced hospital readmission rates, and optimized facility throughput.",
    },
  },
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    shortTagline: "Quality Compliance and Continuous Value Chain Acceleration",
    section: {
      slug: "pharmaceuticals",
      pageTitle: "Quality Compliance and Continuous Value Chain Acceleration",
      hook: "Pharmaceutical firms face intense pressure to reduce clinical timelines while maintaining strict regulatory compliance. Fragmented, manual hand-offs between R&D, continuous manufacturing, and cold chain distribution introduce operational bottlenecks and compliance risks.",
      solution: [
        "Smart AITEK engineers connected, intelligent digital ecosystems that span the entire product lifecycle. We deploy specialized agents to continuously monitor batch quality, secure product traceability, and automate regulatory documentation.",
        "These multi-layered solutions combine sensor tracking with context-aware knowledge platforms. Researchers, quality professionals, and logistics managers access unified intelligence, preventing product spoilage and automating safety signal detection.",
      ],
      capabilitiesHeading: "Key Capabilities",
      capabilities: [
        "Real-time cold chain temperature tracking and product traceability",
        "Automated adverse event monitoring and safety signal detection",
        "GMP compliance analytics and CAPA (Corrective and Preventive Action) intelligence",
        "Generative regulatory copilots for automated document submissions",
      ],
      detailScope: {
        heading: "Detailed Pharmaceutical Solutions",
        groups: verticalCapabilityLayers.pharmaceuticals,
      },
      businessImpactHeading: "Business Impact",
      businessImpact:
        "Pharmaceutical leaders realize faster clinical trial timelines, guaranteed batch consistency, and perfect compliance across global temperature-tracked distribution networks.",
    },
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
