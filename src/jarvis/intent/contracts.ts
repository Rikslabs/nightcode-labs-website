import type { JarvisGuideMessage, JarvisGuideTopic } from "../contracts";

export type JarvisIntentType = "WELCOME" | "HEADQUARTERS_SUMMARY" | "ENGINEERING_OVERVIEW" | "PRODUCTS_OVERVIEW" | "MISSION_OVERVIEW" | "RESEARCH_OVERVIEW" | "COMMAND_CENTER_OVERVIEW" | "FEATURED_PRODUCT" | "FEATURED_MISSION" | "PRIMARY_RESEARCH" | "ENGINEERING_HEALTH" | "NAVIGATE" | "UNKNOWN";
export type JarvisIntentSource = "HEADQUARTERS_UI" | "KEYBOARD" | "VOICE" | "LLM" | "EXTENSION" | "DESKTOP" | "UNKNOWN";
export type JarvisIntentPayload = Readonly<{ targetSectionId?: string }>;
export type JarvisIntent = Readonly<{ id: string; type: JarvisIntentType; source: JarvisIntentSource; payload?: JarvisIntentPayload; generatedAt: string }>;
export type IntentResult = Readonly<{ resolved: boolean; intent: JarvisIntent; guideTopic: JarvisGuideTopic; navigationTarget?: string }>;
export type IntentRegistryEntry = Readonly<{ keywords: readonly string[]; type: JarvisIntentType; guideTopic: JarvisGuideTopic; sectionId?: string }>;
export type IntentExecution = Readonly<{ result: IntentResult; guide: JarvisGuideMessage }>;
