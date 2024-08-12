function setup() {
  let cnv = createCanvas(400, 400);

  
  cnv.position(100, 200);
}

function draw() {
  background(220);
  centerx=200
  centery=200
  bigd = 200
  littled = 140
  fill(255)
  circle(centerx,centery,bigd)
  fill(100)
  circle(centerx,centery,littled) 

  
 if(Math.pow(mouseX-200,2) + Math.pow(mouseY-200,2)  > 10000 ){
  circle(centerx + 85*cos(atan((mouseY-200)/(mouseX-200))),centery+ 85*sin(atan((mouseY-200)/(mouseX-200))),(bigd-littled)/2)
 }

    
  


}
