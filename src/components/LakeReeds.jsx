export default function LakeReeds() {
  const reeds = [
    [-18, 2.2, 30],
    [-15, 2.2, 40],
    [-5, 2.2, 48],
    [12, 2.2, 46],
    [22, 2.2, 35],
    [24, 2.2, 20],
    [15, 2.2, 10],
    [-2, 2.2, 8],
    [-18, 2.2, 15],
  ];

  return (
    <>
      {reeds.map((p, i) => (
        <mesh key={i} position={p}>
          <cylinderGeometry args={[0.15, 0.15, 3, 6]} />
          <meshStandardMaterial color="#6f8c42" />
        </mesh>
      ))}
    </>
  );
}