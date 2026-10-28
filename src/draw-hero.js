'use strict';//to catch common programming mistakes
// Draws the hero (Iron Man suit) tilted by its vertical speed.
function drawHero(g, c) {//g=pen and paint tools and c=info about the character
  g.save();//saves the current canvas drawing state
   g.translate(c.x + c.w / 2, c.y + c.h / 2);//go yo character's centre
    g.rotate(clamp(c.vy / 900, -.5, .7));//rotate it around that centre
  g.shadowColor = '#00e5ff'; g.shadowBlur = 18; g.fillStyle = '#9ff6ff';
  const f = 14 + Math.random() * 10 + (c.vy < 0 ? 10 : 0);//random value btw 14 and 24 + 10 if upward(c.vy<0) or 0 if downward=> gives the flame length
  g.beginPath(); g.moveTo(-18, -5); g.lineTo(-18 - f, 0);//f=flame's length 
  g.lineTo(-18, 5); g.fill(); g.shadowBlur = 0;
  g.fillStyle = '#c4222c'; g.fillRect(-20, -10, 36, 20);
  g.fillStyle = '#f5c542';//red to gold
   g.fillRect(-20, 6, 36, 4); g.fillRect(-20, -10, 6, 20);//g(x,y,width,height)
  g.shadowColor = '#00e5ff'; g.shadowBlur = 10; g.fillStyle = '#e8fdff'; g.beginPath(); g.arc(2, 0, 4.5, 0, 7); //g(x,y,radius,start angle,end angle)
  g.fill(); g.shadowBlur = 0;
  //red helmet->the whole head covering
  g.fillStyle = '#c4222c';//chooses a colour
   g.beginPath(); g.arc(18, -2, 10, 0, 7); 
   g.fill();//fills with that colour
   //faceplate->the gold part on the front
  g.fillStyle = '#f5c542'; g.fillRect(18, -8, 9, 12); 
  //eyeslit-> a narrow glowing eye
  g.fillStyle = '#7ff3ff'; g.fillRect(21, -5, 6, 2.5);
  g.restore();//go back to the drawing settings set earlier
}
