//global

// Text font
var robotoFont;

// Player 
var playerX = 300; // Player X position
var playerY = 475; // Player Y position
var playerWidth = 50;
var playerHeight = 30;
var playerSpeed = 3;

// Boxes ( named as mice)
var mice = [];
var numMice = 5;
var mouseWidth = 20;
var mouseHeight = 20;
var mouseSpeed = 2;

// Game state
var gameState = "title"; 

// Game over state variables
var win = false;
var timeLeft = 12; // 12 seconds to catch all boxes
var startTime;

// Stars for background
var stars = [];
var numStars = 100;

function preload() {
  // Load custom font
  robotoFont = loadFont('Robot.ttf');
}

// Setup function
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Set rectangle mode to center
  rectMode(CENTER);

  //  mice positions
  for (var i = 0; i < numMice; i++) {
    mice.push({
      x: random(mouseWidth, width - mouseWidth),
      y: random(mouseHeight, height - mouseHeight - 50), // avoid banner area
      caught: false
    });
  }

  // stars
  for (var i = 0; i < numStars; i++) {
    stars.push({
      x: random(0, width),
      y: random(0, height),
      size: random(1, 3),
      speed: random(1, 3)
    });
  }
}

function draw() {
  background(0);

  // Draw moving stars
  drawStars();

  if (gameState === "title") {
    // Title screen
    drawTitleScreen();
  } else if (gameState === "playing") {
    // Main game loop
    drawGame();
  } else if (gameState === "gameOver") {
    // Game over screen
    drawGameOverScreen();
  }
}

function drawTitleScreen() {
  // Title screen appearance with shadow
  fill(0);
  textSize(48);
  textAlign(CENTER, CENTER);
  textFont(robotoFont);
  text("Collect the boxes", width / 2 + 3, height / 2 - 37);
  fill(233, 250, 2);
  text("Collect the boxes", width / 2, height / 2 - 40);

  // Instructions
  fill(255);
  textSize(20);
  text("Click ENTER to Start the game :)", width / 2 + 2, height / 2 + 22);
  fill(200);
  text("Click ENTER to Start the game :)", width / 2, height / 2 + 20);
}

function drawGame() {
  // Appearance of game world
  stroke(0, 255, 0); // green
  noFill();
  strokeWeight(3);
  rect(width / 2, height / 2, width, height);

  // Draw top banner
  noStroke();
  fill(0,255, 0); // green
  rect(width / 2, 25, width, 50); // Banner

  // Draw player 
  fill(255, 255, 0); // yellow
  rect(playerX, playerY, playerWidth, playerHeight);

  // Draw mice
  fill(255, 0, 0); // red
  for (var i = 0; i < mice.length; i++) {
    if (!mice[i].caught) {
      rect(mice[i].x, mice[i].y, mouseWidth, mouseHeight);
      moveMouse(i);
    }
  }

  // Check for collision between player and mice
  for (var i = 0; i < mice.length; i++) {
    if (!mice[i].caught && checkCollision(playerX, playerY, playerWidth, playerHeight, mice[i].x, mice[i].y, mouseWidth, mouseHeight)) {
      mice[i].caught = true;
    }
  }

  // Player controls
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= playerSpeed;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    playerX += playerSpeed;
  }

  if (keyIsDown(UP_ARROW)) {
    playerY -= playerSpeed;
  }

  if (keyIsDown(DOWN_ARROW)) {
    playerY += playerSpeed;
  }

  // Check win condition
  var allCaught = true;
  for (var i = 0; i < mice.length; i++) {
    if (!mice[i].caught) {
      allCaught = false;
      break;
    }
  }

  if (allCaught) {
    gameState = "gameOver";
    win = true;
  }

  // Update and display timer
  var elapsedTime = (millis() - startTime) / 1000;
  var timeRemaining = max(0, timeLeft - elapsedTime);
  fill(0);//black
  textSize(35);
  text("Time Left: " + timeRemaining.toFixed(1), width / 2, 25);

  if (timeRemaining <= 0) {
    gameState = "gameOver";
    win = false;
  }
}

function drawGameOverScreen() {
  // Game over screen appearance with shadow
  fill(0);
  textSize(48);
  textAlign(CENTER, CENTER);
  if (win) {
    text("You Win!", width / 2 + 3, height / 2 - 37);
    fill(0, 255, 0); //green when you win 
    text("You Win!", width / 2, height / 2 - 40);
  } else {
    text("Game Over", width / 2 + 3, height / 2 - 37);
    fill(255, 0, 0); // red when you lose
    text("Game Over", width / 2, height / 2 - 40);
  }

  // Instructions
  fill(255);
  textSize(20);
  text("Click ENTER to Start the game :)", width / 2 + 2, height / 2 + 22);
  fill(200);
  text("Click ENTER to Start the game :)", width / 2, height / 2 + 20);
}

function keyPressed() {
  if (gameState === "title" && keyCode === ENTER) {
    // Start the game
    gameState = "playing";
    startTime = millis();
  } else if (gameState === "gameOver" && keyCode === ENTER) {
    // Restart the game
    resetGame();
  }
}

function checkCollision(x1, y1, w1, h1, x2, y2, w2, h2) {
  // Axis-Aligned Bounding Box (AABB) collision detection
  return x1 < x2 + w2 &&
         x1 + w1 > x2 &&
         y1 < y2 + h2 &&
         y1 + h1 > y2;
}

function moveMouse(index) {
  // Simple random movement for the mice
  var dir = random(0, 4);
  if (dir < 1) {
    mice[index].x += mouseSpeed;
  } else if (dir < 2) {
    mice[index].x -= mouseSpeed;
  } else if (dir < 3) {
    mice[index].y += mouseSpeed;
  } else {
    mice[index].y -= mouseSpeed;
  }

  // Ensure mice stay within bounds
  mice[index].x = constrain(mice[index].x, mouseWidth / 2, width - mouseWidth / 2);
  mice[index].y = constrain(mice[index].y, mouseHeight / 2 + 50, height - mouseHeight / 2);
}

function resetGame() {
  // Reset game variables
  playerX = 300;
  playerY = 475;
  win = false;
  timeLeft = 12;
  startTime = millis();

  // Reset mice positions and states
  mice = [];
  for (var i = 0; i < numMice; i++) {
    mice.push({
      x: random(mouseWidth, width - mouseWidth),
      y: random(mouseHeight, height - mouseHeight - 50), // avoid banner area
      caught: false
    });
  }

  gameState = "title";
}

function drawStars() {
  // Draw and move stars
  for (var i = 0; i < stars.length; i++) {
    fill(255);
    noStroke();
    ellipse(stars[i].x, stars[i].y, stars[i].size);
    stars[i].y += stars[i].speed;

    // Reset star position if it moves off screen
    if (stars[i].y > height) {
      stars[i].y = 0;
      stars[i].x = random(0, width);
    }
  }
}
