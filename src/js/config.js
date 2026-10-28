'use strict';
//All game numbers live here. Change values here only.
const W = 960, H = 540, FLOOR = H - 18, STEP = 1 / 120;   //play area, ground line, fixed physics step
const CFG = Object.freeze({
  GRAVITY: 1500,      //B1: constant downward pull
  FLAP_V: -420,       //B1: upward thrust on key press / click
  SPEED: 230,         //B2: barrier speed (px/s)
  GAP: 190,           //B2: gap height
  SPACE: 320,         //B2: distance between two barriers
  BARRIER_W: 84, POOL: 5, MARGIN: 55, MAX_SHIFT: 230
});
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));//keeps the values in allowed range
const rand = (a, b) => a + Math.random() * (b - a);//generates random values
