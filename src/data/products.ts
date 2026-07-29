import type { Product } from "./types";
export const products: readonly Product[] = [
  { name: "JARVIS", designation: "LAB / SYS-01", status: "Developer Preview", description: "A local-first engineering assistant designed to plan, understand, and execute complex development missions.", modules: ["Mission planning", "Code understanding", "Local-first execution"], action: "Explore JARVIS", href: "#jarvis", featured: true },
  { name: "AI Smart Attendance", designation: "LAB / SYS-02", status: "Active Project", description: "A role-based attendance platform combining face recognition, automation, analytics, and modern administration tools.", modules: ["Face recognition", "Role-based access", "Administration"], action: "View Project", href: "#attendance" },
  { name: "NightCode Platform", designation: "LAB / SYS-03", status: "In Development", description: "The foundation for future NightCode developer tools, desktop experiences, cloud services, SDKs, and intelligent systems.", modules: ["Developer tools", "Desktop experiences", "Intelligent systems"], action: "View Roadmap", href: "#roadmap" },
  { name: "Developer Systems", designation: "LAB / SYS-04", status: "Research", description: "Tools, extensions, automation, and local AI infrastructure under exploration for the wider NightCode ecosystem.", modules: ["Extensions", "Automation", "Infrastructure"], action: "View Ecosystem", href: "#products" },
];
export const laboratoryPipeline: readonly string[] = ["Research", "Prototype", "Engineering Validation", "Deployment", "Continuous Evolution"];
