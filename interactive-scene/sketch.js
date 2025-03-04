// Interactive Scene
// Carolena
// March 3, 2025


let backgroundColour;
let shape;


function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColour = color(220);
  textAlign(CENTER, CENTER);
  textSize(14);
}


function draw() {
  background(backgroundColour);


  fill(200);
  rect(10, 10, 80, 40);
  rect(100, 10, 80, 40);
  rect(190, 10, 100, 40);


  fill(0)
  text("Get square", 50, 30);
  text("Get triangle", 140, 30);
  text("Get rectangle", 240, 30);


  fill(150, 0, 150);
  noStroke();
  let x = width / 2;
  let y = height / 2;


  if (shape === "square") {
    rect(x - 50, y - 50, 100, 100);
  } else if (shape === "triangle") {
    triangle(x, y - 60, x - 60, y + 40, x + 60, y + 40);
  } else if (shape === "rectangle") {
    rect(x - 75, y - 40, 150, 80);
  }


}


function mouseClicked() {
  if (mouseX > 10 && mouseX < 90 && mouseY > 10 && mouseY < 50) {
    shape = "square";
  } else if (mouseX > 100 && mouseX < 180 && mouseY > 10 && mouseY < 50) {
    shape = "triangle";
  } else if (mouseX > 190 && mouseX < 270 && mouseY > 10 && mouseY < 50) {
    shape = "rectangle";
  } else {
    backgroundColour = color(random(255), random(255), random(255))
  }
}




