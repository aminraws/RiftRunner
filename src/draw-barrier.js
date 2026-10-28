'use strict';//helps js catch coding mistakes
// Draws one barrier pair (Stark-tech wall with glowing gap edges).
function drawBarrier(g, b) {//g->drawing tool, b->info about the barrier
  b.rects().forEach((r, i) => {
    if (r.h <= 0) return;//if rects's height <=0 ->skip
    const gr = g.createLinearGradient(r.x, 0, r.x + r.w, 0); 
    gr.addColorStop(0, '#8a1017');//beginning of rect dark red
     gr.addColorStop(.5, '#c4222c'); //halfway point of rect light red
     gr.addColorStop(1, '#7a0d13');//end of rect dark red
    g.fillStyle = gr;// telling drawing tool to use the gradient we created
     g.fillRect(r.x, r.y, r.w, r.h);//actually draws the rect
    g.fillStyle = 'rgba(245,197,66,.55)'; 
    for (let y = r.y + 30; y < r.y + r.h; y += 60) g.fillRect(r.x + 8, y, r.w - 16, 2);//r.x + 8 moves the line inward from the left edge, while r.w - 16 makes it shorter so it leaves an 8-pixel margin on the right too.
    g.fillStyle = '#f5c542'; g.fillRect(r.x, r.y, 4, r.h); g.fillRect(r.x + r.w - 4, r.y, 4, r.h);
    const ey = i === 0 ? r.y + r.h - 6 : r.y;
    g.shadowColor = '#00e5ff'; g.shadowBlur = 14; g.fillStyle = '#7ff3ff'; g.fillRect(r.x - 4, ey, r.w + 8, 6); g.shadowBlur = 0;
  });
}
