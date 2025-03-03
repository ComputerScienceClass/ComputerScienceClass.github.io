function setup() {
    createCanvas(10000, 10000);
    
    let button = createButton("Click me");
    button.position(750, 250);
    button.mousePressed(repaint);
    
    
    let thisButton = createButton("Get ball");
    thisButton.position(150, 400);
    thisButton.mousePressed(ball);
    
    let thisTriangle = createButton("Get triangle");
    thisTriangle.position(250, 400);
    thisTriangle.mousePressed(triangleShape);
    
    let thisRect = createButton("Get rectangle");
    thisRect.position(375, 400);
    thisRect.mousePressed(rectangleShape);
  }
  
  function draw() {
    //background(0, 100, 200);
    //circle(250, 250, 80)
    //noStroke();
  }
  
  
  function repaint() {
    let g = random(["magenta", "lightgreen", "lightyellow"]);
    background(g);
  }
  
  function ball() {
    let ballMore = circle(50, 50, 50);
    let d = random(ballMore);
  }
  
  
  function triangleShape() {
    let triangleMore = triangle(-20, 25, 8, -30, 36, 25);
    let e = random(triangleMore);
  }
  
  function rectangleShape() {
    let rectangleMore = rect(230, 30, 55, 40);
    let r = random(rectangleMore);
    
  }
