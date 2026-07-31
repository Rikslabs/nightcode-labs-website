import { worldColors } from "../engine/config";

export function WorldLighting() {
  return (
    <>
      <hemisphereLight args={[worldColors.ambientSky, worldColors.ambientGround, 1.4]} />
      <directionalLight
        color={worldColors.sunlight}
        intensity={2.2}
        position={[-18, 24, 12]}
        castShadow={false}
      />
      <ambientLight intensity={0.22} />
    </>
  );
}
