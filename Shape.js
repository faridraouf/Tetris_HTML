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
    this.no_of_rotations = 4
    
  }
  Update(){
    for (let i = 0 ; i < this.no_of_squares ; i++){
      this.blocks[i] = new Block(this.x_center + (this.x[this.rotation_no][i]), this.y_center + (this.y[this.rotation_no][i] ) )
    }
  }
  Show() {
    
    for (let i = 0; i < this.no_of_squares; i++) {

      var test = this.blocks[i]
      test.Show()
    
      // Stop drawing the shape.
      
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

  ReachedBottom() {
    for (const element of this.blocks) {
      if (element.y_pos == 19){
        return true ;
      }
    }
    return false;
  }

}

class L extends Shape {
  constructor(x_center, y_center) {
    super(x_center, y_center);
    this.no_of_squares = 4;
    
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

    

    for (let i = 0 ; i < this.no_of_squares ; i++){
      this.blocks.push(new Block(this.x_center - (this.x[this.rotation_no][i]), this.y_center - (this.y[this.rotation_no][i] ) ))
    }

  }



  

  

}
