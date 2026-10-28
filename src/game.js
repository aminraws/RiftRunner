'use strict';
//Game loop + state (START -> PLAY -> OVER -> PLAY ...). Fixed timestep = same speed on every PC.
class Game {
  constructor(canvas) {
    this.input = new InputHandler(); //input is a property we don't need to declare it in js
    this.cloak = new Cloak(); 
    this.barriers = new BarrierManager();
    this.score = new ScoreManager(); 
    this.renderer = new Renderer(canvas);
    this.state = 'START'; 
    this.accumulator = 0; 
    //Crux:the accumulator collects elapsed time and determines how many fixed physics updates should run
    this.last = 0; //timestamp of the previous animation frame
    this.overAt = 0;//timestamp when the game ends
    this.input.bind();
    requestAnimationFrame(ts => { //ts is the timetsamp supplied by browser(in ms)
      this.last = ts; 
      this.loop(ts); //starts the game loop
    });
    //It initializes the timing and starts the game loop. Inside loop(), requestAnimationFrame() is called again to keep the game running continuously.
    //this is calculated to find the positions of player and barrier
  }

  //start resets everything and starts a new game
  start() { //function
    this.cloak.reset(); 
    this.barriers.reset(); 
    this.score.reset(); 
    this.state = 'PLAY'; 
    this.cloak.flap(); }
  restart() { this.start(); }                      // B3: restart with a single key press
  
  //main game loop
  loop(ts) {
    this.accumulator += Math.min((ts - this.last) / 1000, 0.1); 
    this.last = ts;
    while (this.accumulator >= STEP) { 
      this.update(STEP); 
      this.accumulator -= STEP; }
    this.renderer.draw(this);
    requestAnimationFrame(t => this.loop(t));
  }
  
  update(dt) {
    const flap = this.input.consumeFlap();
    if (this.state === 'START') { if (flap) this.start(); return; }
    if (this.state === 'OVER') { if (flap && performance.now() - this.overAt > 400) this.restart(); return; }
    if (flap) this.cloak.flap();                   // B1
    this.cloak.update(dt); this.barriers.update(dt);
    const b = this.barriers.nearest(this.cloak.x);
    if (CollisionDetector.hitsBounds(this.cloak) || (b && CollisionDetector.hitsBarrier(this.cloak, b))) return this.gameOver();
    for (const p of this.barriers.pool)            // B3: +1 per gap crossed
      if (p.active && !p.passed && p.x + p.w < this.cloak.x) { p.passed = true; this.score.increment(); }
  }
  gameOver() { this.state = 'OVER'; this.overAt = performance.now(); }  // B3: final score shown by Renderer
}
//starting the game
if (typeof document !== 'undefined' && document.getElementById('game')) new Game(document.getElementById('game'));//document.getElementById('game') = canvas parameter
