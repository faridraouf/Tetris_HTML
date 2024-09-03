class Block{
  constructor(x_pos,y_pos,colour){
    this.w = 30;
    this.x_pos = x_pos;
    this.y_pos = y_pos;
    this.colour = colour;
           
  }
  Show(){
    fill(this.colour)
    square(this.x_pos*this.w,this.y_pos*this.w,this.w)
    fill(255)

  }
}

class Shape {
  constructor(x_center, y_center) {
    
    this.x_center = x_center ;
    this.y_center = y_center ;
    this.colour;
    this.no_of_squares
    this.x = []
    this.y = []
    this.rotation_no = 0
    this.blocks = []
    this.lower_blocks = []
    this.no_of_rotations

    this.lower_blocks_nos = []
  }
  Update(){
    this.lower_blocks = []
    for (let i = 0 ; i < this.no_of_squares ; i++){
      this.blocks[i] = new Block(this.x_center + (this.x[this.rotation_no][i]), this.y_center + (this.y[this.rotation_no][i] ) , this.colour)
    }
    for (let i = 0 ; i < this.lower_blocks_nos[this.rotation_no].length ; i++){
      this.lower_blocks.push( this.blocks[this.lower_blocks_nos[this.rotation_no][i]])
    }
  }
  Show() {
    
    for (const block of this.blocks){

      block.Show()
    }
      
    
    
    
  }

  MoveUp() {
    this.y_center -= 1
  }
  MoveDown() {
    this.y_center += 1
    this.Update()
  }

  MoveLeft() {
    
      for (const block of this.blocks) {
        if(block.x_pos == 0){
          return;
        }
      }
    
    this.x_center -= 1
    this.Update()
  }

  MoveRight() {
    for (const block of this.blocks) {
      if(block.x_pos == 9){
        return;
      }
    }
    this.x_center += 1
    this.Update()
  }

  Rotate() {
    this.rotation_no += 1
    if(this.rotation_no == this.no_of_rotations){this.rotation_no = 0}
    this.Update()
    for (const block of this.blocks) {
      if(block.x_pos > 9){
        this.x_center -=  1
        break;
      }
      else if(block.x_pos < 0){
        this.x_center += 1
        break;
      }
    }
    
    this.Update()
    

    
  }

  ReachedBottom(grid) {



    
    for (const element of this.blocks) {
      if (element.y_pos == 19){
        return true ;
      }

    }


    for (const block of this.lower_blocks){
      
      if (grid[block.y_pos+1][block.x_pos] == 1){
        return true
      }
    }
    
    

    return false;
  }

}

class L extends Shape {
  constructor(x_center, y_center) {
    super(x_center, y_center);
    this.no_of_squares = 4;
    this.no_of_rotations = 4;
    this.rotation_no = 3;
    this.colour = "DarkOrange"
    this.x = [
      [0,0,0,1],
      [-1,-1,0,1],
      [-1,0,0,0],
      [-1,0,1,1]
    ]

    this.y = [
      [-1,0,1,1],
      [1,0,0,0],
      [-1,-1,0,1],
      [0,0,0,-1]
    ]

    this.lower_blocks_nos = [
      [2,3],
      [0,2,3],
      [0,3],
      [0,1,2]
    ]
    
    this.Update()
    

  }
}

class Mirror_L extends Shape {
  constructor(x_center, y_center) {
    super(x_center, y_center);
    this.no_of_squares = 4;
    this.no_of_rotations = 4;
    this.rotation_no = 3;
    this.colour = "MediumBlue"
    this.x = [
      [0,0,0,-1],
      [-1,-1,0,1],
      [1,0,0,0],
      [-1,0,1,1]
    ]

    this.y = [
      [-1,0,1,1],
      [-1,0,0,0],
      [-1,-1,0,1],
      [0,0,0,1]
    ]

    this.lower_blocks_nos = [
      [2,3],
      [1,2,3],
      [0,3],
      [0,1,3]
    ]
    
    this.Update()
    

  }
}

class T extends Shape {
  constructor(x_center, y_center) {
    super(x_center, y_center);
    this.no_of_squares = 4;
    this.no_of_rotations = 4;
    this.rotation_no = 2;
    this.colour = "DarkViolet"   
    this.x = [
      [0,-1,0,1],
      [1,0,0,0],
      [0,-1,0,1],
      [-1,0,0,0]
    ]

    this.y = [
      [-1,0,0,0],
      [0,-1,0,1],
      [1,0,0,0],
      [0,-1,0,1]
    ]

    this.lower_blocks_nos = [
      [1,2,3],
      [0,3],
      [0,1,3],
      [0,3]
    ]
    
    this.Update()
    

  }
}

  class Tile extends Shape {
    constructor(x_center, y_center) {
      super(x_center, y_center);
      this.no_of_squares = 4;
      this.no_of_rotations = 1;
      this.colour = "Gold"
      this.x = [
        [-0.5,0.5,-0.5,0.5]
        
      ]
  
      this.y = [
        [-0.5,-0.5,0.5,0.5]
        
      ]
  
      this.lower_blocks_nos = [
        [2,3]
        
      ]
      
  
      this.Update()
  
    }

  

  

}

class Z extends Shape {
  constructor(x_center, y_center) {
    super(x_center, y_center);
    this.no_of_squares = 4;
    this.no_of_rotations = 4;
    this.colour = "Red"
    this.x = [
      [-1,0,0,1],
      [1,1,0,0],
      [-1,0,0,1],
      [0,0,-1,-1]
    ]

    this.y = [
      [-1,-1,0,0],
      [-1,0,0,1],
      [0,0,1,1],
      [-1,0,0,1]
    ]

    this.lower_blocks_nos = [
      [0,2,3],
      [1,3],
      [0,2,3],
      [1,3]
    ]
    
    this.Update()
    

  }
}

class Mirror_Z extends Shape {
  constructor(x_center, y_center) {
    super(x_center, y_center);
    this.no_of_squares = 4;
    this.no_of_rotations = 4;
    this.colour = "LimeGreen"
    this.x = [
      [-1,0,0,1],
      [0,0,1,1],
      [-1,0,0,1],
      [-1,-1,0,0]
    ]

    this.y = [
      [0,0,-1,-1],
      [-1,0,0,1],
      [1,1,0,0],
      [-1,0,0,1]
    ]

    this.lower_blocks_nos = [
      [0,1,3],
      [1,3],
      [0,1,3],
      [1,3]
    ]
    
    this.Update()
    

  }
}

class Strip extends Shape {
  constructor(x_center, y_center) {
    super(x_center, y_center);
    this.no_of_squares = 4;
    this.no_of_rotations = 4;
    this.rotation_no = 1;
    this.colour = "Aqua"
    this.x = [
      [0.5,0.5,0.5,0.5],
      [-1.5,-0.5,0.5,1.5],
      [-0.5,-0.5,-0.5,-0.5],
      [-1.5,-0.5,0.5,1.5]
    ]

    this.y = [
      [-1.5,-0.5,0.5,1.5],
      [0.5,0.5,0.5,0.5],
      [-1.5,-0.5,0.5,1.5],
      [-0.5,-0.5,-0.5,-0.5]
    ]

    this.lower_blocks_nos = [
      [3],
      [0,1,2,3],
      [3],
      [0,1,2,3]
    ]
    
    this.Update()
    

  }
}