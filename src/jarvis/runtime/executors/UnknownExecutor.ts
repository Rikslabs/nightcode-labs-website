import type { JarvisExecutor, JarvisExecutionRequest, JarvisExecutionResult } from "../contracts";

export class UnknownExecutor implements JarvisExecutor {
  readonly type = "UNKNOWN" as const;
  execute({ action }: JarvisExecutionRequest): JarvisExecutionResult { const guide = Object.freeze({ id: "jarvis-unknown", topic: "unknown" as const, title: "Request not recognized", message: "I don't recognize that Headquarters request.", generatedAt: action.generatedAt }); return Object.freeze({ success: false, executor: this.type, result: Object.freeze({ success: false, action, guide }) }); }
}
