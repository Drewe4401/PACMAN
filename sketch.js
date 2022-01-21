function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(0,0,0);
  fill(255,255,0)
  stroke(255,255,0)
  arc(100, 100, 150, 150, PI+QUARTER_PI, PI-QUARTER_PI)
  fill(255,0,0);
  stroke(255, 0, 0)
  rect(200, 30, 140, 140, 150, 150, 0 ,0);
  fill(255);
  stroke(255);
  ellipse(240, 100, 40, 40);
  ellipse(300, 100, 40, 40);
  fill(0, 0, 255);
  stroke(0, 0, 255);
  ellipse(240, 100, 25, 25);
  ellipse(300, 100, 25, 25);
  
}