import { useGLTF } from "@react-three/drei";

export default function DeadTree(props) {
  const { scene } = useGLTF(
    "/models/trees/Dead Tree by Quaternius - Mcd2zYqyww.glb"
  );

  return <primitive object={scene.clone()} {...props} />;
}

useGLTF.preload("/models/trees/Dead Tree by Quaternius - Mcd2zYqyww.glb");