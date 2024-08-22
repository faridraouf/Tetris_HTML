
// shapes = []
// counter = 0

function setup() {
  let cnv = createCanvas(380, 600);
  background(220)
  cnv.position(20, 100);
  //frameRate(3); // three times each second
  a = new Shape(200,200, 100)
  b = new Shape(200,200,40)
}

function draw() {
  background(220)
  a.x_center = mouseX
  a.y_center = mouseY
  
  a.Show()
  b.Show()

  distance = sqrt((a.x_center - b.x_center)**2 + (a.y_center - b.y_center)**2)
  while ( distance > 60){
    a.Show()
    // background(220)
    if ( a.x_center-b.x_center > 0){b.MoveRight()}
    else{b.MoveLeft()}

    if ( a.y_center-b.y_center > 0){b.GetDown()}
    else{b.GetUp()}
    

    
    distance = sqrt((a.x_center - b.x_center)**2 + (a.y_center - b.y_center)**2)
    
  }
  b.Show()
}


function mouseClicked() {
  


}



function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    a.MoveLeft()
  }
  if (keyCode == RIGHT_ARROW) {
    a.MoveRight()
  }
  background(220)
    a.Show()
} 