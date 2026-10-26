// Basic tunable numbers.
const CONFIG = Object.freeze({ //Object.freeze() prevents the object's existing properties from being changed, added, or removed.
  W: 960, H: 540, // w h are dimessions canvas dim..
  //y from top
  CLOAK: { x: 200, w: 38, h: 30, gravity: 1500, flapV: -440 },//cloak : our character
  BARRIER: { w: 76, gap: 180, speed: 240, interval: 1.6, margin: 60 } //obstacle setting
});
