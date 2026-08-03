import { Stars } from "@react-three/drei";

export default function GameSky() {
  return (
    <>
      <color attach="background" args={["#030712"]} />

      <Stars
        radius={250}
        depth={80}
        count={10000}
        factor={6}
        saturation={0}
        fade
        speed={0.2}
      />
    </>
  );
}