import { useGLTF } from "@react-three/drei";

export default function FlowerBush(props) {

  const { scene } = useGLTF(
    "/models/nature/Bush with Flowers by Quaternius - U1ymDy8tbY.glb"
  );

  return (
    <primitive
      object={scene.clone()}
      {...props}
    />
  );
}

useGLTF.preload(
  "/models/nature/Bush with Flowers by Quaternius - U1ymDy8tbY.glb"
);