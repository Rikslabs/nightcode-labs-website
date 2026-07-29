import type { JarvisAction } from "../actions/contracts";
import { jarvisExecutorRegistry, type ExecutorMap } from "./ExecutorRegistry";
import type { JarvisExecutionRequest, JarvisExecutionResult } from "./contracts";

export class RuntimeDispatcher {
  constructor(private readonly executors: ExecutorMap) {}
  dispatch(request: JarvisExecutionRequest): JarvisExecutionResult { const entry = jarvisExecutorRegistry.find((candidate) => candidate.actionType === request.action.type); const executor = this.executors[entry?.executor ?? "UNKNOWN"]; return executor.execute(request); }
  dispatchAction(action: JarvisAction): JarvisExecutionResult { return this.dispatch({ action }); }
}
