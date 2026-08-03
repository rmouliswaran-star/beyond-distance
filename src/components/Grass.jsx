import { useGLTF } from "@react-three/drei";

export default function GrassMix({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
}) {
  const { scene } = useGLTF("/models/nature/grass mix by Steve B - 2zt43AlwVoI.glb");

  return (
    <primitive
      object={scene.clone()}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
}

useGLTF.preload("/models/grass mix by Steve B - 2zt43AlwVoI.glb");