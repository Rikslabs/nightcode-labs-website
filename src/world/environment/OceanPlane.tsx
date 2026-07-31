import { oceanMaterialPreset } from "../materials/materialPresets";

export function OceanPlane() {
  return (
    <mesh position={[0, -3.15, -6]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow frustumCulled>
      <planeGeometry args={[120, 120, 1, 1]} />
      <meshStandardMaterial {...oceanMaterialPreset} />
    </mesh>
  );
}
