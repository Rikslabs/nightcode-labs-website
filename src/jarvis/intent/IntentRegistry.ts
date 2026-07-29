import type { IntentRegistryEntry } from "./contracts";

export const jarvisIntentRegistry: readonly IntentRegistryEntry[] = Object.freeze([
  { keywords: ["welcome", "hello", "home"], type: "WELCOME", guideTopic: "welcome" },
  { keywords: ["summary", "headquarters", "overview"], type: "HEADQUARTERS_SUMMARY", guideTopic: "headquarters-summary", sectionId: "command" },
  { keywords: ["engineering", "engineer", "engineering division"], type: "ENGINEERING_OVERVIEW", guideTopic: "engineering", sectionId: "engineering-division" },
  { keywords: ["products", "product laboratory", "laboratory"], type: "PRODUCTS_OVERVIEW", guideTopic: "products", sectionId: "products" },
  { keywords: ["mission", "mission control", "directives"], type: "MISSION_OVERVIEW", guideTopic: "mission-control", sectionId: "roadmap" },
  { keywords: ["research", "research labs"], type: "RESEARCH_OVERVIEW", guideTopic: "research", sectionId: "research" },
  { keywords: ["command", "command center"], type: "COMMAND_CENTER_OVERVIEW", guideTopic: "command-center", sectionId: "command" },
  { keywords: ["featured product", "primary product"], type: "FEATURED_PRODUCT", guideTopic: "featured-product", sectionId: "products" },
  { keywords: ["featured mission", "primary mission"], type: "FEATURED_MISSION", guideTopic: "featured-mission", sectionId: "roadmap" },
  { keywords: ["primary research", "main research"], type: "PRIMARY_RESEARCH", guideTopic: "primary-research", sectionId: "research" },
  { keywords: ["engineering health", "engineering status"], type: "ENGINEERING_HEALTH", guideTopic: "engineering-health", sectionId: "engineering-division" },
  { keywords: ["go to engineering", "open engineering"], type: "NAVIGATE", guideTopic: "engineering", sectionId: "engineering-division" },
  { keywords: ["go to products", "open products"], type: "NAVIGATE", guideTopic: "products", sectionId: "products" },
  { keywords: ["go to research", "open research"], type: "NAVIGATE", guideTopic: "research", sectionId: "research" },
]);
