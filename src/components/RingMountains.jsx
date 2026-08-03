import { useGLTF } from "@react-three/drei";

export default function RingMountains(props) {
  const { scene } = useGLTF(
    "/models/nature/Ring of Mountains by Wyatt Roy - aty1cGAWwX1.glb"
  );

  return (
    <primitive
      object={scene}
      {...props}
    />
  );
}

useGLTF.preload(
  "/models/nature/Ring of Mountains by Wyatt Roy - aty1cGAWwX1.glb"
);