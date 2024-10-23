// Get the button element
const button = document.getElementById('startbutton');

// Add a click event listener to the button
button.addEventListener('click', Start);

function Start(){
  start = !start
}


function setup() {
  let cnv = createCanvas(500, 700);
  background(220)
  cnv.position(20, 20);
  cnv.
  frameCount;
  rows = 20
  cols = 10
  shapes = []
  newshape = 1
  count = -1
  row_num = 0
  block_width = 30
  currentfr = 0
  start = false
}


function draw() {

 if (start) {

        

  grid = Array(rows).fill().map(() => Array(cols).fill(0));

  // Draw  background
  rect(0, 0, block_width * cols, block_width * rows)
  for (let i = 0; i < cols; i++) {
    line((i * block_width), 0, (i * block_width), block_width * rows)
  }

 // map places of shapes to the grid and show them
 for (const element of shapes) {
  element.Show()
  for (const block of element.blocks) {
    grid[block.y_pos][block.x_pos] = 1
  }
}

  // Spawn new shape 
  if (newshape == 1) {

    shapes = NewShape(shapes)
    count += 1
    newshape = 0
    if (isGameOver(grid,shapes[count])) {

      // End game
      alert("Game Over!!")
      noLoop()
  
   }
  }

 


  // map places of shapes to the grid and show them
  for (const element of shapes) {
    element.Show()
    for (const block of element.blocks) {
      grid[block.y_pos][block.x_pos] = 1
    }
  }

  // move shape down & map new places of shapes to the grid
  if (frameCount % 50 == 0) {

    if (frameCount != currentfr + 50) {
      shapes[count].MoveDown(grid)
    }




    grid = Array(rows).fill().map(() => Array(cols).fill(0));
    for (const element of shapes) {
      element.Show()
      for (const block of element.blocks) {
        grid[block.y_pos][block.x_pos] = 1
      }
    }

    if (shapes[count].ReachedBottom(grid)) {
      if (frameCount == currentfr + 50) {
        newshape = 1
      }

      currentfr = frameCount

      shapes = EraseCompleteLines(shapes, complete_lines)

    }

  }

  // get complete lines
  complete_lines = CheckGrid(grid)

  // stop shape and erase complete lines 


 }

}



function isGameOver(grid,shape){

  for (const block of shape.blocks){
    if  (grid[block.y_pos][block.x_pos] == 1){
      console.log("end")
      return true
    }
  }
  return false

}

function keyPressed() {

  switch (keyCode) {
    case LEFT_ARROW:

      shapes[count].MoveLeft(grid)
      break;
    case RIGHT_ARROW:

      shapes[count].MoveRight(grid)
      break;
    case 82:  // R letter

      shapes[count].Rotate()
      break;

    case DOWN_ARROW:

      if (shapes[count].blocks) {
        shapes[count].MoveDown(grid)
      }


      break;

    default:

  }


}

function CheckGrid(grid) {
  ones_array = Array(10).fill(1).toString()
  returned_array = []
  for (let i = 0; i < grid.length; i++) {
    if (grid[i].toString() == ones_array) {

      returned_array.push(i)
    }
  }
  return returned_array;
}

function NewShape(shapes) {
  selector = floor(random(7))
  switch (selector) {
    case 0:
      shapes.push(new L(4, 0))
      break;
    case 1:
      shapes.push(new Mirror_L(4, 0))
      break;
    case 2:
      shapes.push(new Tile(4.5, 0.5))
      break;
    case 3:
      shapes.push(new T(4, 0))
      break;
    case 4:
      shapes.push(new Z(4, 1))
      break;
    case 5:
      shapes.push(new Mirror_Z(4, 1))
      break;
    case 6:
      shapes.push(new Strip(4.5, -0.5))
      break;
  }
  return shapes;
}

function EraseCompleteLines(shapes, complete_lines) {

  for (let i = shapes.length - 1; i >= 0; i--) {
    for (const line of complete_lines) {
      for (let j = shapes[i].blocks.length - 1; j >= 0; j--) {


        if (shapes[i].blocks[j].y_pos == line) {
          shapes[i].blocks.splice(j, 1)
        }
        else if (shapes[i].blocks[j].y_pos < line) {
          shapes[i].blocks[j].y_pos += 1
        }

      }
    }
  }
  return shapes;

}

