// B2: pairs of barriers scroll in from the right, gap at a random height.
class Barrier {
  constructor() {
    const B = CONFIG.BARRIER;
    this.w = B.w; this.x = CONFIG.W; this.gapH = B.gap;
    this.gapY = B.margin + Math.random() * (CONFIG.H - 2 * B.margin - B.gap);
    this.passed = false;
  }
  update(dt) { this.x -= CONFIG.BARRIER.speed * dt; }
  rects() {
    const bottomY = this.gapY + this.gapH;
    return [{ x: this.x, y: 0, w: this.w, h: this.gapY },
            { x: this.x, y: bottomY, w: this.w, h: CONFIG.H - bottomY }];
  }
}
