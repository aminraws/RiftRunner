'use strict';
// B2: barriers scroll in from the right, each with a gap at a random height.
class Barrier {
  constructor() { this.active = false; this.x = 0; this.gapY = 0; this.gapH = 0; this.w = CFG.BARRIER_W; this.passed = false; }
  reset(gapY, gapH) { this.x = W; this.gapY = gapY; this.gapH = gapH; this.passed = false; this.active = true; }
  update(dt, speed) { this.x -= speed * dt; if (this.x + this.w < 0) this.active = false; }
  rects() {
    return [{ x: this.x, y: 0, w: this.w, h: this.gapY },
            { x: this.x, y: this.gapY + this.gapH, w: this.w, h: FLOOR - this.gapY - this.gapH }];
  }
}

class BarrierManager {
  constructor() { this.pool = Array.from({ length: CFG.POOL }, () => new Barrier()); this.reset(); }
  reset() { this.pool.forEach(b => b.active = false); this.prevGapY = H / 2 - 100; }
  nearest(cx) { let n = null; for (const b of this.pool) if (b.active && b.x + b.w >= cx && (!n || b.x < n.x)) n = b; return n; }
  update(dt) {
    this.pool.forEach(b => b.active && b.update(dt, CFG.SPEED));
    const last = this.pool.filter(b => b.active).reduce((m, b) => Math.max(m, b.x), -Infinity);
    if (last <= W - CFG.SPACE) this.spawn();
  }
  spawn() {
    const b = this.pool.find(p => !p.active); if (!b) return;
    const gapY = clamp(this.prevGapY + rand(-CFG.MAX_SHIFT, CFG.MAX_SHIFT), CFG.MARGIN, FLOOR - CFG.MARGIN - CFG.GAP);
    b.reset(gapY, CFG.GAP); this.prevGapY = gapY;
  }
}
