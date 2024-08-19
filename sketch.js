function setup() {
  let cnv = createCanvas(380, 600);
  background(220)
  cnv.position(20, 100);
  //frameRate(3); // three times each second
  shapes = []
  shapes[0] = new Shape(100, 100)
  counter = 0
}

function draw() {
  background(220)
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].GetDown()

    shapes[i].Show()
  }
}
function mouseClicked() {
  counter += 1
  shapes[counter] = new Shape(mouseX, mouseY)

  shapes[counter].Show()



}



function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    shapes[counter].MoveLeft()
    background(220)
    shapes[counter].Show()
  }
  if (keyCode == RIGHT_ARROW) {
    shapes[counter].MoveRight()
    background(220)
    shapes[counter].Show()
  }
} 