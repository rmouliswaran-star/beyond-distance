import * as THREE from "three";

export default class CameraController {
  constructor(camera, controls) {
    this.camera = camera;
    this.controls = controls;

    this.offset = new THREE.Vector3(0, 7, 12);

    this.targetPosition = new THREE.Vector3();
    this.cameraPosition = new THREE.Vector3();
  }

  update(player) {
    if (!player || !this.controls) return;

    this.targetPosition.set(
      player.position.x,
      player.position.y + 2,
      player.position.z
    );

    this.controls.target.lerp(
      this.targetPosition,
      0.12
    );

    this.cameraPosition.copy(player.position);
    this.cameraPosition.add(this.offset);

    this.camera.position.lerp(
      this.cameraPosition,
      0.08
    );

    this.controls.update();
  }

  setOffset(x, y, z) {
    this.offset.set(x, y, z);
  }
}