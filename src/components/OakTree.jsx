import { useGLTF } from "@react-three/drei";

export default function OakTree(props) {
  const { scene } = useGLTF(
    "/models/trees/Big Tree by 3Donimus - dNWh762PN-6.glb"
  );

  return (
    <primitive
      object={scene.clone()}
      scale={20}
      {...props}
    />
  );
}

useGLTF.preload("/models/trees/Big Tree by 3Donimus - dNWh762PN-6.glb");