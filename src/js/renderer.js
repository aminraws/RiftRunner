class Renderer {
  constructor(canvas) { this.ctx = canvas.getContext('2d'); }
  text(str, x, y, size, color = '#ffe9a8') {
    const c = this.ctx; c.font = `bold ${size}px Georgia, serif`; c.textAlign = 'center';
    c.fillStyle = color; c.fillText(str, x, y);
  }
  draw(game) {
    const c = this.ctx, { W, H } = CONFIG;
    c.fillStyle = '#1a0a10'; c.fillRect(0, 0, W, H);
    c.fillStyle = '#8a2430';
    for (const b of game.barriers) for (const r of b.rects()) c.fillRect(r.x, r.y, r.w, r.h);
    const k = game.cloak; c.fillStyle = '#c0272d'; c.fillRect(k.x, k.y, k.w, k.h);
    this.text(String(game.score), W / 2, 62, 52);
    if (game.state === 'START') this.overlay('RIFT RUNNER', 'Press any key or click to thrust the Cloak');
    else if (game.state === 'OVER') {
      this.overlay('THE CLOAK IS LOST', 'Final score: ' + game.score);
      this.text('Press any key or click to restart', W / 2, H / 2 + 70, 20, '#ffffff');
    }
  }
  overlay(title, line) {
    const c = this.ctx, { W, H } = CONFIG;
    c.fillStyle = 'rgba(8,2,6,0.65)'; c.fillRect(0, 0, W, H);
    this.text(title, W / 2, H / 2 - 20, 52); this.text(line, W / 2, H / 2 + 28, 22, '#ffffff');
  }
}
