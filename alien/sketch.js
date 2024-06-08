function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(71, 56, 35); // background color 

  
  //face 
  fill(35, 99, 0); // green 
  ellipse(200, 150, 150, 220); // x, y, w , h
  
  
  
  //eyes 
   fill(256); //white
	ellipse(160, 150, 50, 15); // x, y, w , h
  fill(256); //white
	ellipse(240, 150, 50, 15);// x, y, w , h
  
  //color eyes ( yellow )
   fill(242, 250, 5); // yellow - right eye
	ellipse(250, 150, 12,12);// x, y, w , h
  
  fill(242, 250, 5);// yellow - left eye
	ellipse(175, 150, 12,12);// x, y, w , h
  
  //black eyes
  fill(0); //black -right eye
	ellipse(250, 150, 7,7);// x, y, w , h
  
  fill(0);//black -left eye
	ellipse(175, 150, 7,7);// x, y, w , h
  
 
  
  //mouth
  fill(100, 0,0) // red
  arc(200, 205, 100, 20, 180, PI+QUARTER_PI, CHORD); // x, y, w, h , start , stop, mode
  
  
  
  //hair
  noFill();
  
  // Draw hair using curves
  beginShape();
  for (let i = -30; i <= 30; i += 10) {
    curveVertex(200 + i, 50);
    curveVertex(200 + i + random(-10, 10), 50 - random(20, 40));
    curveVertex(200 + i + random(-10, 10), 50 - random(10, 30));
    curveVertex(200 + i, 110);
  }
  endShape();
}
 
	
