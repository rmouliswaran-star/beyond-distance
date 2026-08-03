import { forwardRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

const Player = forwardRef(({ joystick }, ref) => {
  console.log("Player component is rendering");
  const { scene, animations } = useGLTF("/models/8590256991748008892.vrm");
  
  console.log("PLAYER LOADED");
  console.log("Animations:", animations.length);
  console.log(
    animations.map((clip) => clip.name)
  );

  const { actions } = useAnimations(animations, scene);

  const { camera } = useThree();

  const speed = 0.20;

  const forward = new THREE.Vector3();
  const right = new THREE.Vector3();
  const moveDirection = new THREE.Vector3();

  useEffect(() => {
    // Play idle animation on start
    if (actions) {
      const idle =
        actions["Idle"] ||
        actions["idle"] ||
        Object.values(actions)[0];

      idle?.play();
    }
  }, [actions]);

  useFrame(() => {
    if (!ref?.current || !joystick?.current) return;

    const x = joystick.current.x;
    const y = joystick.current.y;

    const moving = Math.abs(x) > 0.05 || Math.abs(y) > 0.05;

    // Animation switching
    if (actions) {
      const idle = actions["Idle"] || actions["idle"];
      const walk = actions["Walk"] || actions["walk"];

      if (moving) {
        idle?.fadeOut(0.2);
        walk?.reset().fadeIn(0.2).play();
      } else {
        walk?.fadeOut(0.2);
        idle?.reset().fadeIn(0.2).play();
        return;
      }
    }

    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();

    right.crossVectors(forward, camera.up).normalize();

    moveDirection.set(0, 0, 0);
    moveDirection.addScaledVector(forward, y);
    moveDirection.addScaledVector(right, x);

    if (moveDirection.lengthSq() > 0) {
      moveDirection.normalize();

      ref.current.position.addScaledVector(moveDirection, speed);

      const targetRotation = Math.atan2(
        moveDirection.x,
        moveDirection.z
      );

      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        targetRotation,
        0.15
      );
    }
  });

  return (
    <group ref={ref} position={[0, 4, 0]}>
      <primitive
        object={scene}
        scale={2}
        position={[0, -2, 0]}
      />
    </group>
  );
});

useGLTF.preload(
  "/models/8590256991748008892.vrm"
);

export default Player;