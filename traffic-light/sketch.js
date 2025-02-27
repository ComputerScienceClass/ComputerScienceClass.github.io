// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let = lightState = "green";
;et ;astSwitchedTime = 0;
const GREEN_LIGHT_DURATION = 3000;
const YELLOW_LIGHT_DURATION = 1000;
const RED_LIGHT_DURATION =  4000;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("255");
  drawOutlineOfLights();
}

function displayCorrectlight() {
  if (lightState)
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  
  
  
  
  fill = random(["red", "yellow", "green"]);s

  ellipse(width/2, height/2 - 65, 50, 50); //top

  ellipse(width/2, height/2, 50, 50); //middle
  
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}



