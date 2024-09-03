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
  block_width = 30


}

function draw() {

  grid = Array(rows).fill().map(() => Array(cols).fill(0));

  // Draw  background
  rect(0, 0, block_width * cols, block_width * rows)
  for (let i = 0; i < cols; i++) {
    line((i * block_width), 0, (i * block_width), block_width * rows)
  }

  // Spawn new shape 
  if (newshape == 1) {
    selector = floor(random(7))
    switch (selector) {
      case 0:
        shapes.push(new L(5, 2))
        break;
      case 1:
        shapes.push(new Mirror_L(5, 2))
        break;
      case 2:
        shapes.push(new Tile(5.5, 2.5))
        break;
      case 3:
        shapes.push(new T(5, 2))
        break;
      case 4:
        shapes.push(new Z(5, 2))
        break;
      case 5:
        shapes.push(new Mirror_Z(5, 2))
        break;
      case 6:
        shapes.push(new Strip(5.5, 2.5))
        break;
    }

    count += 1
    newshape = 0
  }

  // map places of shapes to the grid
  for (const element of shapes) {
    element.Show()
    for (const block of element.blocks) {
      grid[block.y_pos][block.x_pos] = 1
    }
  }



  // move shape down & map new places of shapes to the grid
  if (frameCount % 50 == 0) {

    shapes[count].MoveDown()

    
    grid = Array(rows).fill().map(() => Array(cols).fill(0));
    for (const element of shapes) {
      element.Show()
      for (const block of element.blocks) {
        grid[block.y_pos][block.x_pos] = 1
      }
    }
  }

    // get complete lines
    complete_lines = CheckGrid(grid)

  // stop shape and erase complete lines 
  if (shapes[count].ReachedBottom(grid)) {
    
    newshape = 1
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

