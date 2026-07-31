import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { Vector3 } from "three";
import { worldCameraConfig } from "../engine/config";

const cameraTarget = new Vector3(...worldCameraConfig.target);

export function CameraRig() {
  const camera = useThree((state) => state.camera);

  useLayoutEffect(() => {
    camera.position.set(...worldCameraConfig.position);
    camera.lookAt(cameraTarget);
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
}
