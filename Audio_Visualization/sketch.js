var mySound, fft;
var particles = [];

function preload() {
  mySound = loadSound('audio5.mp3');
}

function setup() {
  createCanvas(400, 400);
  fft = new p5.FFT();
  mySound.setVolume(0.5);
  mySound.play();
  mySound.loop();
}

function draw() {
  // Get amplitude data
  var amplitude = mySound.getLevel();

  //background color
  background(0);

  // Generate particles based on amplitude
  if (amplitude > 0.3) { // Adjust threshold as needed
    var particleCount = int(random(5, 10));
    for (var i = 0; i < particleCount; i++) {
      var particle = new Particle(random(width), 0);
      particles.push(particle);
    }
  }

  // Update and display particles
  for (var i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].offscreen()) {
      particles.splice(i, 1);
    }
  }

  // Get waveform data
  var waveform = fft.waveform();
  var waveStep = width / waveform.length;

  // Draw waveform
  noFill();
  stroke(0, 255, 0); // Green color for waveform
  strokeWeight(5);
  beginShape();
  for (var j = 0; j < waveform.length; j++) {
    var x = j * waveStep;
    var y = map(waveform[j], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();
}

// Particle class
function Particle(x, y) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, random(1, 5));
  this.acc = createVector(0, 0.05);

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.display = function() {
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 5, 5);
  }

  this.offscreen = function() {
    return (this.pos.y > height);
  }
}
