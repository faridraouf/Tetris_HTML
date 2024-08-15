function setup() {
  let cnv = createCanvas(600, 400);
  
  cnv.position(100, 200);
  
  oldx = 0
  dydt = 0
  y = oldx
}

function draw() {
  background(220);
  fill(100)
  
  f = 2
  z = 0.5
  r = 2
  T = 0.01
  k1 = z / (PI*f)
  k2 = 1 / ((2*PI*f)*(2*PI*f))
  k3 = r * z / (2*PI*f)


  
  
  dxdt = (mouseX - oldx ) / T 
  oldx = mouseX
  
  y = y + T*dydt
  dydt = dydt + T*(mouseX + k3*dxdt - y - k1*dydt)/k2
  oldx = mouseX
  
 circle(y,40,40) 
  console.log(oldx)

} 


