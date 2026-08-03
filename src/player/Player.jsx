import { forwardRef, useEffect, useRef } from "react";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import * as THREE from "three";

const Player = forwardRef(({ joystick }, ref) => {

  const mixer = useRef(null);

  const actions = useRef({});

  const currentAction = useRef(null);

  const isMoving = useRef(false);

  const character = useLoader(
    FBXLoader,
    "/models/character.fbx"
  );

  const idle = useLoader(
    FBXLoader,
    "/models/animations/Idle.fbx"
  );

  const walk = useLoader(
    FBXLoader,
    "/models/animations/Walk.fbx"
  );

  const { camera } = useThree();

  const speed = 0.13;

  const forward = new THREE.Vector3();
  const right = new THREE.Vector3();
  const moveDirection = new THREE.Vector3();

  useEffect(() => {

    character.scale.set(0.01, 0.01, 0.01);

    character.traverse((child) => {

      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }

    });

    mixer.current = new THREE.AnimationMixer(character);

    const idleClip = idle.animations[0];
    const walkClip = walk.animations[0];


    const idleAction = mixer.current.clipAction(idleClip);
    const walkAction = mixer.current.clipAction(walkClip);

    idleAction.enabled = true;
    walkAction.enabled = true;

    idleAction.setLoop(THREE.LoopRepeat);
    walkAction.setLoop(THREE.LoopRepeat);

    idleAction.clampWhenFinished = false;
    walkAction.clampWhenFinished = false;

    idleAction.play();

    actions.current = {
      idle: idleAction,
      walk: walkAction,
    };

    currentAction.current = idleAction;

    console.log("Animations Ready");

  }, [character, idle, walk]);

  useFrame((state, delta) => {

    if (mixer.current) {
      mixer.current.update(delta);
    }

    if (!ref?.current || !joystick?.current) return;

    const x = joystick.current.x;
    const y = joystick.current.y;

    const moving =
      Math.abs(x) > 0.05 ||
      Math.abs(y) > 0.05;

      console.log("moving:", moving, "x:", x.toFixed(2), "y:", y.toFixed(2));

    if (moving !== isMoving.current) {

      isMoving.current = moving;

      const nextAction = moving
        ? actions.current.walk
        : actions.current.idle;

      if (currentAction.current !== nextAction) {

       currentAction.current.fadeOut(0.25);

       nextAction
        .reset()
        .fadeIn(0.25)
        .play();

       currentAction.current = nextAction;
      }
    }

    if (!moving) return;

    camera.getWorldDirection(forward);

    forward.y = 0;
    forward.normalize();

    right.crossVectors(
      forward,
      camera.up
    ).normalize();

    moveDirection.set(0, 0, 0);

    moveDirection.addScaledVector(forward, y);

    moveDirection.addScaledVector(right, x);

    if (moveDirection.lengthSq() > 0) {

      moveDirection.normalize();

      ref.current.position.addScaledVector(
        moveDirection,
        speed
      );

      const targetRotation =
        Math.atan2(
          moveDirection.x,
          moveDirection.z
        );

      ref.current.rotation.y =
        THREE.MathUtils.lerp(
          ref.current.rotation.y,
          targetRotation,
          0.15
        );

    }

  });

  return (
    <group
      ref={ref}
      position={[0, 2.2, 0]}
    >
      <primitive
        object={character}
        rotation={[0, 0, 0]}
      />
    </group>
  );

});

export default Player;