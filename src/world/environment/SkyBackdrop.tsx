import { useTexture } from "@react-three/drei";
import { worldAssets } from "../assets/worldAssets";

export function SkyBackdrop() {
  const texture = useTexture(worldAssets.environment.desktop);

  return (
    <mesh position={[0, 5, -42]} scale={[72, 40.5, 1]} frustumCulled={false} renderOrder={-10}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} depthWrite={false} toneMapped={false} />
    </mesh>
  );
}

useTexture.preload(worldAssets.environment.desktop);
