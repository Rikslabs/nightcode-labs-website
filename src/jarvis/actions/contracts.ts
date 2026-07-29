import type { JarvisGuideMessage } from "../contracts";
import type { IntentResult, JarvisIntentType } from "../intent/contracts";

export type JarvisActionType = "SHOW_GUIDE" | "NAVIGATE_SECTION" | "SHOW_SUMMARY" | "SHOW_FEATURED_PRODUCT" | "SHOW_FEATURED_MISSION" | "SHOW_RESEARCH" | "SHOW_ENGINEERING" | "NO_ACTION" | "UNKNOWN";
export type JarvisAction = Readonly<{ id: string; type: JarvisActionType; target?: string; guideTopic: IntentResult["guideTopic"]; generatedAt: string }>;
export type ActionResult = Readonly<{ success: boolean; action: JarvisAction; guide: JarvisGuideMessage; navigationTarget?: string }>;
export type ActionRegistryEntry = Readonly<{ intentType: JarvisIntentType; actionType: JarvisActionType }>;
