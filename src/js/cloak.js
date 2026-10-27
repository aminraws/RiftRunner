'use strict';
// B1: the Cloak (drawn as the Iron Man suit). Gravity pulls down, flap pushes up.
class Cloak {
  constructor() { this.x = 200; this.w = 48; this.h = 30; this.reset(); }
  reset() { this.y = H / 2 - 15; this.vy = 0; }
  flap() { this.vy = CFG.FLAP_V; }
  update(dt) { this.vy += CFG.GRAVITY * dt; this.y += this.vy * dt; }
  bounds() { return { x: this.x + 6, y: this.y + 4, w: this.w - 12, h: this.h - 8 }; } // slightly smaller = fair hitbox
}
