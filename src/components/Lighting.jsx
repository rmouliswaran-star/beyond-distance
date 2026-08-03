export default function Lighting() {
  return (
    <>
      {/* Night ambient light */}
      <ambientLight
        intensity={0.18}
        color="#89d4f1"
      />

      {/* Moon light */}
      <directionalLight
        position={[350, 170, -300]}
        intensity={1.6}
        color="#8bcedb"
      />
    </>
  );
}