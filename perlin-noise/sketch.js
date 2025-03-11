// Perlin Noise Demo
// 
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xTime = 0;
let yTime = 1000;
let deltaTime = 0.01;
let x;
let y;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  fill("black");
  x = noise(xTime) * width;
  y = noise(yTime) * height;
  circle(x, y, 50);
  // circle(x, height/2, 50)

  xTime += deltaTime;
  yTime += deltaTime;
} // Have let time not also yTime
