'use strict';
// B1:key press or click gives thrust. Only NOTES the request; Game applies it on the next step.
class InputHandler {
  constructor() { this.queued = false; }
  bind() {
    addEventListener('keydown', e => {
      if (['Space', 'ArrowUp', 'KeyW', 'Enter'].includes(e.code)) {
        e.preventDefault(); if (!e.repeat) this.queued = true;
      }
    });
    addEventListener('mousedown', () => { this.queued = true; });
  }
  consumeFlap() { const q = this.queued; this.queued = false; return q; }
}
