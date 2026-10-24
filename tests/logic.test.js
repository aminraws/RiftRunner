const test = require('node:test'); const assert = require('node:assert');
const fs = require('fs'); const path = require('path'); const vm = require('vm');
const ctx = vm.createContext({ Math, console });
for (const f of ['config', 'collision', 'cloak', 'barrier'])
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'src', 'js', f + '.js'), 'utf8'), ctx);
const { CONFIG, CollisionDetector: CD, Cloak, Barrier } = vm.runInContext('({CONFIG,CollisionDetector,Cloak,Barrier})', ctx);

test('gravity pulls down, flap pushes up', () => {
  const k = new Cloak(); for (let i = 0; i < 30; i++) k.update(1 / 60);
  assert.ok(k.vy > 0); k.flap(); assert.ok(k.vy < 0);
});
test('ground and ceiling end the run', () => {
  const k = new Cloak(); k.y = -1; assert.ok(CD.hitsBounds(k, CONFIG.H));
  k.y = CONFIG.H; assert.ok(CD.hitsBounds(k, CONFIG.H));
  k.y = 200; assert.ok(!CD.hitsBounds(k, CONFIG.H));
});
test('cloak passes through the gap but hits barrier walls', () => {
  const b = new Barrier(); b.gapY = 200; b.gapH = 150; const k = new Cloak(); b.x = k.x - 10;
  k.y = 230; assert.ok(!CD.hitsBarrier(k, b));
  k.y = 150; assert.ok(CD.hitsBarrier(k, b));
  k.y = 340; assert.ok(CD.hitsBarrier(k, b));
});
