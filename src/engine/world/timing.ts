import type { WorldPhase } from "./contracts";

export type TimingModel = Readonly<Record<WorldPhase, number>>;

export const defaultWorldTiming: TimingModel = {
  idle: 0,
  focusing: 0,
  activating: 0,
  navigating: 0,
  transitioning: 0,
  returning: 0,
};
