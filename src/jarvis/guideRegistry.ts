import type { JarvisGuideTopic, JarvisSectionGuide } from "./contracts";

export const jarvisSectionRegistry: readonly JarvisSectionGuide[] = Object.freeze([
  { sectionId: "engineering-division", topic: "engineering", department: "Engineering Division" },
  { sectionId: "products", topic: "products", department: "Products Laboratory" },
  { sectionId: "roadmap", topic: "mission-control", department: "Mission Control" },
  { sectionId: "research", topic: "research", department: "Research Labs" },
  { sectionId: "command", topic: "command-center", department: "Command Center" },
]);

export function findJarvisSection(sectionId: string): JarvisSectionGuide | undefined { return jarvisSectionRegistry.find((section) => section.sectionId === sectionId); }
export function getJarvisTopicForSection(sectionId: string): JarvisGuideTopic { return findJarvisSection(sectionId)?.topic ?? "unknown"; }
