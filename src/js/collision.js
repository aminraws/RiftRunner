// Axis-aligned box collision + boundary check.
class CollisionDetector {
  static aabb(a, b) { return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y; }
  //AABB stands for Axis-Aligned Bounding Box. It checks whether two rectangular boxes overlap.

  static hitsBounds(cloak, H) { return cloak.y <= 0 || cloak.y + cloak.h >= H; }
  //0 : top
  //H : bottom

  static hitsBarrier(cloak, barrier) { return barrier.rects().some(r => CollisionDetector.aabb(cloak, r)); }
  //as we have two rectangkes for a single pole
  //br() returns both upper and lower rectangles 
  //aabb() do they overlap
  //if no ,check (cl..,lowerrec)

}
  