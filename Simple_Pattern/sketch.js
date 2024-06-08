var rows = 20;
var cols = 20;
var distanceX = 25; 
var distanceY = 25; 
var palette = ["#ab27ab", "#2767ab", "#ab2776"]; //colors
 

function setup() {
  createCanvas(500, 500);
  // Automatically trigger one random pattern
  mousePressed();
}

function mousePressed() {
  background(255);//background color - white
  rectMode(CENTER);
  noStroke();
  colorMode(RGB);

  for (var r = 1; r < rows; r++) {
    for (var c = 1; c < cols; c++) {
      
      var randomColor = random(palette);
      fill(randomColor);
      
      var size = random(10, 30); 
      
      print("The random size is " + size);
     
      
      var shape = floor(random(0, 5));
      
      // Use if to choose between shapes
      if (shape == 0) {
        
        //circle shape
        ellipse(c * distanceX, r * distanceY, size, size);
      } else if (shape == 1) {
        
        //rectingle shape 
        rect(c * distanceX, r * distanceY, size, size);
      } else if (shape == 2) {
        
        //triangle shape
        triangle(
          c * distanceX, r * distanceY - size / 2,
          c * distanceX - size / 2, r * distanceY + size / 2,
          c * distanceX + size / 2, r * distanceY + size / 2
        );
      } else if (shape == 3) {
        
        //line
        stroke(randomColor);
        line(c * distanceX - size / 2, r * distanceY - size / 2, c * distanceX + size / 2, r * distanceY + size / 2);
        noStroke();
      } else if (shape == 4) {
        // Added an arc
        arc(c * distanceX, r * distanceY, size, size, 0, HALF_PI);
      }
    }
  }
}