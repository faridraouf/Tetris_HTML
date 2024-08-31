class Block{
  constructor(x_pos,y_pos){
    this.w = 30;
    this.x_pos = x_pos;
    this.y_pos = y_pos;
           
  }
  Show(){
    fill(255,0,0)
    square(this.x_pos*this.w,this.y_pos*this.w,this.w)
    fill(255)

  }
}

class Shape {
  constructor(x_center, y_center) {
    this.w = 30
    this.x_center = x_center ;
    this.y_center = y_center ;
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
      this.blocks[i] = new Block(this.x_center + (this.x[this.rotation_no][i]), this.y_center + (this.y[this.rotation_no][i] ) )
    }
    for (let i = 0 ; i < this.lower_blocks_nos[this.rotation_no].length ; i++){
      this.lower_blocks.push( this.blocks[this.lower_blocks_nos[this.rotation_no][i]])
    }
  }
  Show() {
    
    for (const block of this.blocks){

      block.Show()
    }
      
    
    
    circle(this.x_center* this.w  + this.w/2, this.y_center* this.w  + this.w/2, 10)
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
    

    // for (let i = 0 ; i < this.no_of_squares ; i++){
    //   this.blocks.push(new Block(this.x_center + (this.x[this.rotation_no][i]), this.y_center + (this.y[this.rotation_no][i] ) ))
      
    // }
    // for (let i = 0 ; i < this.lower_blocks_nos[this.rotation_no].length ; i++){
    //   this.lower_blocks.push(this.blocks[this.lower_blocks_nos[this.rotation_no][i]])
    // }

  }
}

  class Tile extends Shape {
    constructor(x_center, y_center) {
      super(x_center, y_center);
      this.no_of_squares = 4;
      this.no_of_rotations = 1;
  
      this.x = [
        [-0.5,0.5,-0.5,0.5]
        
      ]
  
      this.y = [
        [-0.5,-0.5,0.5,0.5]
        
      ]
  
      this.lower_blocks_nos = [
        [2,3]
        
      ]
      
  
      for (let i = 0 ; i < this.no_of_squares ; i++){
        this.blocks.push(new Block(this.x_center + (this.x[this.rotation_no][i]), this.y_center + (this.y[this.rotation_no][i] ) ))
        
      }
      for (let i = 0 ; i < this.lower_blocks_nos[this.rotation_no].length ; i++){
        this.lower_blocks.push(this.blocks[this.lower_blocks_nos[this.rotation_no][i]])
      }
  
    }

  

  

}
