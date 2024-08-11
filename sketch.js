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
  numc = 18
  for (let i = 0 ; i <numc; i++){
    fill(50)
    circle(centerx + 85*cos(2*i* PI/numc) ,centery + 85*sin(2*i* PI/numc),(bigd-littled)/2)


  }
  
}
