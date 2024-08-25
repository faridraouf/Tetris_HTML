
// shapes = []
// counter = 0

function setup() {
  let cnv = createCanvas(1000, 600);
  background(220)
  cnv.position(20, 100);
  angleMode(DEGREES);
 // noLoop() // three times each second
  x1 = floor(random(0,500))
  x2 = floor(random(0,500))

  y1 = floor(random(0,500))
  y2 = floor(random(0,500))



}

function draw() {
  background(220)

 

  u1 = 500
  u2 = mouseX

  v1 = 400
  v2 = mouseY


  omega = abs((v1-y2) / (x2 - u1))
  theta = abs((v1 -v2) / (u2 -u1))
  a = abs((v1 - y1) / (x1 -u1))

  line(u1, v1, u2, v2)
  line(x1, y1, x2, y2)

  

  m_free = (v2 - v1) / (u2 - u1)
  m_fix = (y2 - y1) / (x2 - x1)

  Au = (m_fix * x1 + v1 - m_free * u1 - y1) / (m_fix - m_free)

  Bu = m_fix * (Au - x1) + y1



  dis = sqrt((v2-v1)**2 + (u2-u1)**2)

  min_dis = sqrt((Au - u1)**2 + (Bu - v1)**2)
  // Au < x2 && Au > x1 && Bu > y1 && Bu < y2 &&
  
  // && theta > omega && theta < a
  
  if (dis > min_dis&& theta > min(omega,a) && theta < max(omega,a) )  {

    fill(255, 255, 0)
    circle(Au, Bu, 20)
  }
  else {
    fill(255)
    circle(Au, Bu, 20)

  }


}


function mouseClicked() {



}



function keyPressed() {

  switch (keyCode) {
    case LEFT_ARROW:

      a.MoveLeft()
      break;
    case RIGHT_ARROW:

      a.MoveRight()
      break;
    case 82:

      a.Rotate()
      break;

    case DOWN_ARROW:

      a.GetDown()
      break;

    default:

  }

  background(220)
  a.Show()
} 