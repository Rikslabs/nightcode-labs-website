import type { JarvisActionType } from "../actions/contracts";
import type { JarvisExecutor, JarvisExecutorType } from "./contracts";

export type ExecutorRegistryEntry = Readonly<{ actionType: JarvisActionType; executor: JarvisExecutorType }>;
export const jarvisExecutorRegistry: readonly ExecutorRegistryEntry[] = Object.freeze([
  { actionType: "SHOW_GUIDE", executor: "GUIDE" }, { actionType: "NAVIGATE_SECTION", executor: "GUIDE" }, { actionType: "SHOW_SUMMARY", executor: "GUIDE" }, { actionType: "SHOW_FEATURED_PRODUCT", executor: "GUIDE" }, { actionType: "SHOW_FEATURED_MISSION", executor: "GUIDE" }, { actionType: "SHOW_RESEARCH", executor: "GUIDE" }, { actionType: "SHOW_ENGINEERING", executor: "GUIDE" }, { actionType: "NO_ACTION", executor: "UNKNOWN" }, { actionType: "UNKNOWN", executor: "UNKNOWN" },
]);
export type ExecutorMap = Readonly<Record<JarvisExecutorType, JarvisExecutor>>;
