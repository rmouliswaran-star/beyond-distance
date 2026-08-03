import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import Island from "../components/Island";
import Lighting from "../components/Lighting";
import GameSky from "../components/Sky";
import Path from "../components/Path";
import RingMountains from "../components/RingMountains";
import Moon from "../components/Moon";
import Lake from "../components/Lake";
import LakeReeds from "../components/LakeReeds";
import Player from "../player/Player";


export default function HomeScene({ joystick }) {

  const playerRef = useRef();

  const { camera, controls } = useThree();


  useFrame(() => {

    if (!playerRef.current || !controls) return;


    const player = playerRef.current.position;


    controls.target.lerp(
      new THREE.Vector3(
        player.x,
        player.y + 2,
        player.z
      ),
      0.08
    );


  controls.update();

});


  return (
    <>
      <GameSky />

      <Moon />

      <Lighting />

      <Island />

      <Lake />

      <LakeReeds />

      
      <Player
        ref={playerRef}
        joystick={joystick}
      />

      <RingMountains
        position={[0, 20, 0]}
        rotation={[0, 2, 0]}
        scale={50}
      />


      <Path
        points={[
          [-25, 0.2, 20],
          [-5, 0.2, 0],
          [10, 0.2, -5],
          [25, 0.2, 10],
        ]}
      />


      <Path
        points={[
          [-80, 0.2, -65],
          [-55, 0.2, -65],
          [-70, 0.2, -30],
          [-60, 0.2, -15],
          [-40, 0.2, -30],
          [-30, 0.2, -15],
          [-25, 0.2, 20],
        ]}
      />
    </>
  );
}