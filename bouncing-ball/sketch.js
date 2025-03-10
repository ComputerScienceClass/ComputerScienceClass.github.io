// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Bouncing Ball Object Demo

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall();
}

function draw() {
  background(220);

  for (let ball of ballArray) {
    //move ball
    ball.x += ball.dx;

    ball.y += ball.dy;

    //teleport around edge of screen
    if (ball.x > width) {
      ball.x -= width;
    }
    else if (ball.x < 0) {
      ball.x = width;
    }
    if (ball.y > height) {
      ball.y = -ball.radius < 0) {

      }
    
    else if (ball.y < 0) {
      ball.y += height;
    }

    //display ball
    fill("red");
    circle(ball.x, ball.y, ball.radius * 2);
  }
}

function mousePressed() {
  spawnBall();
}

function spawnBall() {
  let someBall = {
    x: random(width),
    y: random(height),
    radius: random(100, 200),
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
  ballArray.push(someBall);
}
