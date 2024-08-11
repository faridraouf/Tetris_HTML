function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  MakeCircle(200,200,20);
  MakeCircle(220,200,20);
}

function MakeCircle(x,y,d) {
    
  circle(x,y,d);
}