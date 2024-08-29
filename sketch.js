

function setup() {
  let cnv = createCanvas(500, 700);
  background(220)
  cnv.position(20, 20);

  frameCount;
  rows = 20
  cols = 10
  shapes = []
  newshape = 1
  count = -1
//frameRate(1)
  row_num = 0
  

  grid = Array(rows).fill().map(() => Array(cols).fill(0));
}

function draw() {
  grid = Array(rows).fill().map(() => Array(cols).fill(0));

  rect(0, 0, 300, 600)
  for (let i = 0; i < 10; i++) {
    line((i * 30), 0, (i * 30), 600)
  }
if(newshape == 1){
  shapes.push(new L(2,2))
  count  += 1
newshape = 0
}

  for (const element of shapes) {
    element.Show()
    for (const block of element.blocks) {
      grid[block.y_pos][block.x_pos] = 1
    }
  }
  
if (frameCount % 20 == 0){
  
    //shapes[count].MoveDown()
}
  
if(shapes[count].ReachedBottom()){
  newshape  = 1
}



}





function keyPressed() {

  switch (keyCode) {
    case LEFT_ARROW:

      shapes[count].MoveLeft()
      break;
    case RIGHT_ARROW:

    shapes[count].MoveRight()
      break;
    case 82:  // R letter

    shapes[count].Rotate()
      break;

    case DOWN_ARROW:

      if (shapes[count].blocks) {
        shapes[count].MoveDown()
      }


      break;

    default:

  }

  background(220)
  shapes[count].Show()
}

function LineLine(u1, v1, u2, v2, x1, y1, x2, y2) {

  omega = abs((v1 - y2) / (x2 - u1))
  theta = abs((v1 - v2) / (u2 - u1))
  a = abs((v1 - y1) / (x1 - u1))

  m_free = (v2 - v1) / (u2 - u1)
  m_fix = (y2 - y1) / (x2 - x1)

  Au = (m_fix * x1 + v1 - m_free * u1 - y1) / (m_fix - m_free)

  Bu = m_fix * (Au - x1) + y1



  dis = sqrt((v2 - v1) ** 2 + (u2 - u1) ** 2)

  min_dis = sqrt((Au - u1) ** 2 + (Bu - v1) ** 2)

  if (dis > min_dis && theta > min(omega, a) && theta < max(omega, a)) {

    return true;
  }
  else {

    return false;

  }

}