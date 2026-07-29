import { HeadquartersGuideService } from "../HeadquartersGuideService";
import type { JarvisGuideMessage } from "../contracts";
import { IntentResolver } from "./IntentResolver";
import type { IntentResult, JarvisIntentSource } from "./contracts";

export class IntentEngine {
  constructor(private readonly guideService = new HeadquartersGuideService(), private readonly resolver = new IntentResolver()) {}
  resolveIntent(input: string, source: JarvisIntentSource = "HEADQUARTERS_UI"): IntentResult { return this.resolver.resolve(input, source); }
  executeIntent(result: IntentResult): JarvisGuideMessage { return this.guideService.getGuideForTopic(result.resolved ? result.guideTopic : "unknown"); }
}
