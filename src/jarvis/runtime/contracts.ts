import type { ActionResult, JarvisAction } from "../actions/contracts";

export type JarvisExecutorType = "GUIDE" | "UNKNOWN";
export type JarvisExecutionRequest = Readonly<{ action: JarvisAction }>;
export type JarvisExecutionResult = Readonly<{ success: boolean; executor: JarvisExecutorType; result: ActionResult }>;
export interface JarvisExecutor { readonly type: JarvisExecutorType; execute(request: JarvisExecutionRequest): JarvisExecutionResult; }
