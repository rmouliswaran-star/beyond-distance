export default function Island() {
  return (
    <mesh position={[0, -2, 0]} receiveShadow castShadow>
      <cylinderGeometry args={[100, 120, 8, 128]} />
      <meshStandardMaterial color="#1f5f2e" />
    </mesh>
  );
}