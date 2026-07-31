import { terrainMaterialPreset } from "../materials/materialPresets";

export function TerrainPlane() {
  return (
    <mesh position={[0, -3.5, 10]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow frustumCulled>
      <planeGeometry args={[48, 38, 1, 1]} />
      <meshStandardMaterial {...terrainMaterialPreset} />
    </mesh>
  );
}
