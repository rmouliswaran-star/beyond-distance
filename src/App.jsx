import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef } from "react";

import HomeScene from "./scenes/HomeScene";
import Forest from "./components/Forest";
import Fireflies from "./components/Fireflies";
import MobileJoystick from "./controls/MobileJoystick";

export default function App() {
  const joystick = useRef({ x: 0, y: 0 });
  const controlsRef = useRef();

  return (
    <>
      <Canvas
        shadows
        camera={{
          position: [0, 10, 12],
          fov: 45,
        }}
      >
        <HomeScene joystick={joystick} />

        <Forest />

        <Fireflies />

        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={5}
          rotateSpeed={0.8}
          target={[0, 8, 0]}
        />
        <EffectComposer>
          <Bloom
            intensity={0}
            luminanceThreshold={0.5}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>

      <MobileJoystick joystick={joystick} />
    </>
  );
}