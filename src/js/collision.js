// Axis-aligned box collision + boundary check.
class CollisionDetector {
  static aabb(a, b) { return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y; }
  static hitsBounds(cloak, H) { return cloak.y <= 0 || cloak.y + cloak.h >= H; }
  static hitsBarrier(cloak, barrier) { return barrier.rects().some(r => CollisionDetector.aabb(cloak, r)); }
}
