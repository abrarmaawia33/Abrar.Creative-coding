function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // rect (x, y, width, height)
  fill(118, 224, 43)
  rect( 100, 140, 200, 150);
  rect(50, 200, 300, 100);
 
  //window
  fill(255);
  //rect (x, y, width, height)
  rect(118, 155, 170, 35);
  
  
  // wheels
  fill (0)
  //elipse (x, y, width, height)

  ellipse( 100, 300, 60, 60);
  ellipse( 300, 300, 60, 60);
  fill(255)
  ellipse (100, 300, 30, 30);
  ellipse(300, 300, 30, 30);
  
  fill(234, 255, 0)
  
  //healight 
  ellipse( 50, 200, 20, 20);
  ellipse( 350, 200, 20, 20);
  //taillights 
  ellipse ( 50, 250, 20, 20);
  ellipse (350, 250, 20, 20); 
  
}