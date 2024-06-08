
function setup() {
  createCanvas(400, 400);
  background(173, 75, 136);
  
hi = createGraphics(width, height);
  hi.fill(255, 230, 66);  
  hi.rect(50,100, 290, 200);  // x , y, width and height 
  hi.erase();
  hi.textSize(100);
  hi.text('Billie', 100, 240); // txt, x, y
  image(hi, 0, 0);
}