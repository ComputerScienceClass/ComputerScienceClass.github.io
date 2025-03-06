// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let ball of ballArray) {
    ball.X += ball.dx;
    ball.Y += ball.dy;
    
    if (ball.x > width) {
      ball.x += width;
    }
    else if (ball.y < 0) {
      ball.y ++ height;
    }
    
    
    fill("red");
    circle(ball.x, ball.y, ball.radius * 2);
  }
}

function spawnBall() {
  let someBall = {
    x: random(width),
    y: random(height),
    radius: random(15, 60),
    dx: random(-5, 5),
    dy: random(-5, 5),
  }
}
