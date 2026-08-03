import * as THREE from "three";

export default class AnimationSystem {
  constructor(character, mixer) {
    this.character = character;
    this.mixer = mixer;

    this.actions = {};
    this.current = null;
  }

  add(name, clip) {
    const action = this.mixer.clipAction(clip);

    action.enabled = true;
    action.clampWhenFinished = false;
    action.setLoop(THREE.LoopRepeat);

    this.actions[name] = action;
  }

  play(name, fade = 0.25) {

    const next = this.actions[name];

    if (!next) return;

    if (this.current === next) return;

    if (this.current) {

      this.current.fadeOut(fade);

    }

    next
      .reset()
      .fadeIn(fade)
      .play();

    this.current = next;
  }

  update(delta) {

    this.mixer.update(delta);

  }
}