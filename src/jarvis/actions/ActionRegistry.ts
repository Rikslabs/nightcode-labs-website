import type { ActionRegistryEntry } from "./contracts";

export const jarvisActionRegistry: readonly ActionRegistryEntry[] = Object.freeze([
  { intentType: "WELCOME", actionType: "SHOW_GUIDE" },
  { intentType: "HEADQUARTERS_SUMMARY", actionType: "SHOW_SUMMARY" },
  { intentType: "ENGINEERING_OVERVIEW", actionType: "SHOW_ENGINEERING" },
  { intentType: "PRODUCTS_OVERVIEW", actionType: "SHOW_GUIDE" },
  { intentType: "MISSION_OVERVIEW", actionType: "SHOW_GUIDE" },
  { intentType: "RESEARCH_OVERVIEW", actionType: "SHOW_RESEARCH" },
  { intentType: "COMMAND_CENTER_OVERVIEW", actionType: "SHOW_GUIDE" },
  { intentType: "FEATURED_PRODUCT", actionType: "SHOW_FEATURED_PRODUCT" },
  { intentType: "FEATURED_MISSION", actionType: "SHOW_FEATURED_MISSION" },
  { intentType: "PRIMARY_RESEARCH", actionType: "SHOW_RESEARCH" },
  { intentType: "ENGINEERING_HEALTH", actionType: "SHOW_ENGINEERING" },
  { intentType: "NAVIGATE", actionType: "NAVIGATE_SECTION" },
  { intentType: "UNKNOWN", actionType: "UNKNOWN" },
]);
