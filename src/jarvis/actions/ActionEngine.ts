import type { IntentResult } from "../intent/contracts";
import { jarvisActionRegistry } from "./ActionRegistry";
import { createRuntimeDispatcher } from "../runtime/createRuntimeDispatcher";
import type { RuntimeDispatcher } from "../runtime/RuntimeDispatcher";
import type { JarvisAction } from "./contracts";
import type { JarvisExecutionResult } from "../runtime/contracts";

export class ActionEngine {
  constructor(private readonly dispatcher: RuntimeDispatcher = createRuntimeDispatcher()) {}

  createAction(result: IntentResult): JarvisAction {
    const entry = jarvisActionRegistry.find((candidate) => candidate.intentType === result.intent.type);
    return Object.freeze({ id: `action-${entry?.actionType.toLowerCase() ?? "unknown"}`, type: entry?.actionType ?? "UNKNOWN", ...(result.navigationTarget ? { target: result.navigationTarget } : {}), guideTopic: result.guideTopic, generatedAt: result.intent.generatedAt });
  }

  execute(action: JarvisAction): JarvisExecutionResult { return this.dispatcher.dispatchAction(action); }
  executeIntent(intent: IntentResult): JarvisExecutionResult { return this.execute(this.createAction(intent)); }
}
