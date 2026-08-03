import { useGLTF } from "@react-three/drei";

export default function Tree({
  position = [0, 0, 0],
  scale = 0.2,
  rotation = [0, 0, 0],
}) {
  const { scene } = useGLTF(
    "/models/trees/Pine by Quaternius - 79gmlLnweB.glb"
  );

  return (
    <primitive
      object={scene.clone()}
      position={position}
      rotation={rotation}
      scale={scale}
      castShadow
      receiveShadow
    />
  );
}

// Preload the model
useGLTF.preload("/models/trees/Pine by Quaternius - 79gmlLnweB.glb");