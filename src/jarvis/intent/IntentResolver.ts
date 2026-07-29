import type { JarvisGuideTopic } from "../contracts";
import { jarvisIntentRegistry } from "./IntentRegistry";
import type { IntentResult, JarvisIntent, JarvisIntentSource } from "./contracts";

const normalize = (value: string) => value.trim().toLowerCase();

export class IntentResolver {
  resolve(input: string, source: JarvisIntentSource = "HEADQUARTERS_UI"): IntentResult {
    const normalized = normalize(input);
    const entry = normalized ? jarvisIntentRegistry.find((candidate) => candidate.keywords.includes(normalized)) : undefined;
    const intent: JarvisIntent = Object.freeze({ id: `intent-${entry?.type.toLowerCase() ?? "unknown"}`, type: entry?.type ?? "UNKNOWN", source, ...(entry?.sectionId ? { payload: { targetSectionId: entry.sectionId } } : {}), generatedAt: new Date().toISOString() });
    return Object.freeze({ resolved: Boolean(entry), intent, guideTopic: entry?.guideTopic ?? ("unknown" as JarvisGuideTopic), ...(entry?.sectionId ? { navigationTarget: entry.sectionId } : {}) });
  }
}
