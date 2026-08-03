import { useGLTF } from "@react-three/drei";

export default function ValleyTerrain(props) {
  const { scene } = useGLTF(
    "/models/nature/Valley Terrain by Zsky - u78ByZHYB2.glb"
  );

  return (
    <primitive
      object={scene}
      {...props}
    />
  );
}

useGLTF.preload(
  "/models/nature/Valley Terrain by Zsky - u78ByZHYB2.glb"
);