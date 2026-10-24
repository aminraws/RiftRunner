// B1: constant gravity, upward thrust on key press / click.
class Cloak {
  constructor() { this.w = CONFIG.CLOAK.w; this.h = CONFIG.CLOAK.h; this.reset(); }
  reset() { this.x = CONFIG.CLOAK.x; this.y = CONFIG.H / 2 - this.h / 2; this.vy = 0; }
  flap() { this.vy = CONFIG.CLOAK.flapV; }
  update(dt) { this.vy += CONFIG.CLOAK.gravity * dt; this.y += this.vy * dt; }
}
