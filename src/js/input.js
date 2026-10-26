'use strict';//it makes JavaScript stricter about some mistakes.
// B1:key press or click gives thrust. Only NOTES the request; Game applies it on the next step.
class InputHandler {//to keep all that related code together.
  constructor() {
    this.queued = false;//No flap request initially
  }
  bind() { // Runs when a keyboard key is pressed
    //// Record a flap request when the mouse button is pressed.
    addEventListener('keydown', e => {
      if (['Space', 'ArrowUp', 'KeyW', 'Enter'].includes(e.code)) {
        //space , arrowup , w , enter
        e.preventDefault(); //prevent default action of browsers
        if (!e.repeat) this.queued = true;//not repeated..
      }
    });
    addEventListener('mousedown', () => { this.queued = true; });
  }
  consumeFlap() { // Get the current flap request
    const q = this.queued;

    // Reset the request to prevent it from being processed again
    this.queued = false;

    // Return the previous request to the game
    return q;
  }
}
