import { OrbitControls } from "@react-three/drei";
import { worldCameraConfig } from "../engine/config";

export function DebugOrbitCamera() {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <OrbitControls
      makeDefault
      target={worldCameraConfig.target}
      enableDamping
      dampingFactor={0.08}
      minDistance={4}
      maxDistance={80}
      maxPolarAngle={Math.PI * 0.49}
    />
  );
}
