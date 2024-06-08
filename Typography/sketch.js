let angle = 0;
let xoff = 0;

function setup() {
  createCanvas(600, 400);
  textFont('Georgia');
  textSize(100);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  
 //intractive background  
 noFill();
  stroke(52, 22, 158);
  strokeWeight(2);
  let yoff = 0;
  for (let y = 0; y < height; y += 20) {
    beginShape();
    for (let x = 0; x <= width; x += 10) {
      let ywave = map(sin(angle + yoff), -1, 1, -50, 50);
      vertex(x, y + ywave);
      yoff += 0.1;
    }
    endShape();
    yoff += 0.1;
  }
  angle += 0.05;
  
  // Moving text
  let waveText = sin(xoff) * 20;
  xoff += 0.05;
  
  // Bath Spa shadow
  for (let i = 1; i <= 4; i++) {
    fill(0, 100 - i * 20); 
    text('Bath Spa', width / 2 + i * 1, height / 2 + waveText + i * 5);
  }
  
  // Bath Spa text
  fill(52, 70, 235);
  noStroke();
  text('Bath Spa', width / 2, height / 2 + waveText);
}
