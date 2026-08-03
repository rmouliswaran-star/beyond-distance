import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Fireflies() {
  const points = useRef();

  const positions = useMemo(() => {
    const arr = [];

    for (let i = 0; i < 300; i++) {
      arr.push(
        (Math.random() - 0.5) * 250,
        Math.random() * 20 + 1,
        (Math.random() - 0.5) * 250
      );
    }

    return new Float32Array(arr);
  }, []);

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.4}
        color="#fff8aa"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}