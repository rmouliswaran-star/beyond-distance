export default class CharacterController {
  constructor(animationSystem) {
    this.animation = animationSystem;
    this.state = "Idle";
  }

  setState(state) {
    if (this.state === state) return;

    this.state = state;

    switch (state) {
      case "Idle":
        this.animation.play("Idle");
        break;

      case "Walk":
        this.animation.play("Walk");
        break;

      case "Run":
        this.animation.play("Run");
        break;

      case "Jump":
        this.animation.play("Jump");
        break;

      default:
        break;
    }
  }

  update(moving, running = false) {
    if (!moving) {
      this.setState("Idle");
      return;
    }

    if (running) {
      this.setState("Run");
      return;
    }

    this.setState("Walk");
  }
}