function setup() {
  let cnv = createCanvas(400, 400);

  background(220);
  cnv.position(100, 200);
}

function draw() {
  centerx=200
  centery=200
  bigd = 200
  littled = 140
  fill(255)
  circle(centerx,centery,bigd)
  fill(100)
  circle(centerx,centery,littled) 
  
  for (let i = 0 ; i <4; i++){
    fill(50)
    circle(centerx + 85*cos(i* PI/2) ,centery + 85*sin(i*PI/2),(bigd-littled)/2)


  }
  
}
