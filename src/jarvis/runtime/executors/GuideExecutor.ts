import type { HeadquartersGuideService } from "../../HeadquartersGuideService";
import type { JarvisExecutor, JarvisExecutionRequest, JarvisExecutionResult } from "../contracts";

export class GuideExecutor implements JarvisExecutor {
  readonly type = "GUIDE" as const;
  constructor(private readonly guideService: HeadquartersGuideService) {}
  execute({ action }: JarvisExecutionRequest): JarvisExecutionResult { const guide = this.guideService.getGuideForTopic(action.guideTopic); const navigationTarget = action.type === "NAVIGATE_SECTION" ? action.target : undefined; return Object.freeze({ success: action.type !== "UNKNOWN", executor: this.type, result: Object.freeze({ success: action.type !== "UNKNOWN", action, guide, ...(navigationTarget ? { navigationTarget } : {}) }) }); }
}
