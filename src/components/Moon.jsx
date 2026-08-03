import { Sphere, useTexture } from "@react-three/drei";

export default function Moon() {
  const moonTexture = useTexture(
    "/textures/zm4nfgq29yi91-1536x1536-1.jpg"
  );

  return (
    <group position={[50, 130, 300]}>
      <Sphere args={[18, 64, 64]}>
        <meshBasicMaterial
          map={moonTexture}
          toneMapped={false}
        />
      </Sphere>

      {/* Soft glow */}
      <pointLight
        position={[0, 0, 0]}
        color="#dfe8ff"
        intensity={0.5}
        distance={500}
      />
    </group>
  );
}