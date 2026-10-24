// States: START -> PLAY -> OVER -> (single key press) PLAY ...
class Game {
  constructor(canvas) {
    this.renderer = new Renderer(canvas);
    this.cloak = new Cloak();
    this.barriers = []; this.spawnTimer = 0; this.score = 0; this.state = 'START';
    this.last = 0; this.overAt = 0; this.clock = 0;
    const press = () => this.onPress();
    window.addEventListener('keydown', (e) => { if (!e.repeat) { e.preventDefault(); press(); } });
    canvas.addEventListener('pointerdown', (e) => { e.preventDefault(); press(); });
    requestAnimationFrame((t) => { this.last = t; this.loop(t); });
  }
  onPress() {
    if (this.state === 'PLAY') this.cloak.flap();
    else if (this.clock - this.overAt > 0.35) this.start();   // short delay avoids accidental restart
  }
  start() {
    this.cloak.reset(); this.barriers = []; this.spawnTimer = 0.5; this.score = 0;
    this.state = 'PLAY'; this.cloak.flap();
  }
  update(dt) {
    const k = this.cloak; k.update(dt);
    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) { this.barriers.push(new Barrier()); this.spawnTimer += CONFIG.BARRIER.interval; }
    for (const b of this.barriers) {
      b.update(dt);
      if (!b.passed && b.x + b.w < k.x) { b.passed = true; this.score++; }   // B3: +1 per gap
    }
    this.barriers = this.barriers.filter(b => b.x + b.w > 0);
    if (CollisionDetector.hitsBounds(k, CONFIG.H) || this.barriers.some(b => CollisionDetector.hitsBarrier(k, b))) {
      this.state = 'OVER'; this.overAt = this.clock;
    }
  }
  loop(ts) {
    requestAnimationFrame((t) => this.loop(t));
    const dt = Math.min((ts - this.last) / 1000, 0.05); this.last = ts; this.clock += dt;
    if (this.state === 'PLAY') this.update(dt);
    this.renderer.draw(this);
  }
}
