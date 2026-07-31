import { Stats } from "@react-three/drei";

export function WorldPerformanceOverlay() {
  if (process.env.NODE_ENV !== "development") return null;
  return <Stats showPanel={0} className="nightcode-world-stats" />;
}
