import { useGLTF } from "@react-three/drei";

export default function PineTree(props) {
  const { scene } = useGLTF(
    "/models/trees/Pine by Quaternius - 79gmlLnweB.glb"
  );

  return <primitive object={scene.clone()} {...props} />;
}

useGLTF.preload("/models/trees/Pine by Quaternius - 79gmlLnweB.glb");