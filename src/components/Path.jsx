import { useMemo } from "react";

export default function Path({ points }) {

  const pathBlocks = useMemo(() => {
    let blocks = [];

    for (let i = 0; i < points.length - 1; i++) {

      const start = points[i];
      const end = points[i + 1];

      const steps = 20;

      for (let j = 0; j < steps; j++) {

        const t = j / steps;

        const x = start[0] + (end[0] - start[0]) * t;
        const z = start[2] + (end[2] - start[2]) * t;

        blocks.push({
          x,
          z
        });
      }
    }

    return blocks;

  }, [points]);


  return (
    <>
      {pathBlocks.map((p, i) => (
        <mesh
          key={i}
          position={[p.x, 2, p.z]}
        >
          <boxGeometry args={[3,0.05,2]} />
          <meshStandardMaterial color="#8b7355"/>
        </mesh>
      ))}
    </>
  );
}