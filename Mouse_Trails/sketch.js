function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
}

function mouseMoved() {
  // Shadow 
  fill(0, 100); // Darker color for shadow
  noStroke();
  ellipse(mouseX + 10, mouseY + 10, 100, 100); // shaping the  shadows into circles

  
  // colors(rgb) of the  circle
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);

  fill(r, g, b);
  ellipse(mouseX, mouseY, 100, 100); // Main circle
}
