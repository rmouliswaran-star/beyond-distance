import * as THREE from "three";
import { useMemo } from "react";

export default function Lake() {
  // Water shape
  const waterGeometry = useMemo(() => {
    const shape = new THREE.Shape();

    shape.moveTo(-18, 0);
    shape.bezierCurveTo(-25, 10, -10, 22, 5, 20);
    shape.bezierCurveTo(20, 18, 25, 5, 18, -8);
    shape.bezierCurveTo(12, -18, -8, -20, -18, -10);
    shape.bezierCurveTo(-22, -6, -22, -2, -18, 0);

    return new THREE.ShapeGeometry(shape, 64);
  }, []);

  // Shore shape (slightly larger)
  const shoreGeometry = useMemo(() => {
    const shape = new THREE.Shape();

    shape.moveTo(-19.5, 0);
    shape.bezierCurveTo(-27, 11, -11, 24, 6, 22);
    shape.bezierCurveTo(22, 20, 27, 5, 20, -9);
    shape.bezierCurveTo(13, -20, -10, -22, -20, -11);
    shape.bezierCurveTo(-24, -6, -24, -2, -19.5, 0);

    return new THREE.ShapeGeometry(shape, 64);
  }, []);

  return (
    <group position={[2, 2.2, 30]}>
      {/* Shore */}
      <mesh
        geometry={shoreGeometry}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.02, 0]}
      >
        <meshStandardMaterial color="#7b6748" />
      </mesh>

      {/* Water */}
      <mesh
        geometry={waterGeometry}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshPhysicalMaterial
            color="#7ffcf5"
            transmission={0.95}
            roughness={0.08}
            clearcoat={1}
            clearcoatRoughness={0.05}
            reflectivity={1}
            transparent
            opacity={0.95}
        />
      </mesh>
    </group>
  );
}