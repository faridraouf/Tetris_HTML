class Shape {
  constructor(x_center, y_center) {
    this.x_center = x_center;
    this.y_center = y_center;
    this.numofv
    this.x = []
    this.y = []
    this.w = 40
    this.j = 0
    
  }

  Show() {
    beginShape();
    for (let i = 0; i < this.numofv; i++) {

      vertex(this.x_center + (this.x[this.j][i] * this.w), this.y_center + (this.y[this.j][i] * this.w));
      
    
      // Stop drawing the shape.
      
    }
    endShape(CLOSE);
    circle(this.x_center, this.y_center, 10)
  }

  GetUp() {
    this.y_center -= 10
  }
  GetDown() {
    this.y_center += 10
  }

  MoveLeft() {
    this.x_center -= 10
  }

  MoveRight() {
    this.x_center += 10
  }

}

class Mirror_L extends Shape {
  constructor(x_center, y_center) {
    super(x_center, y_center);
    this.numofv = 6;

    this.x = [
      [-1,0,0,1,1,-1],
      [-1.5,1.5,1.5,-0.5,-0.5,-1.5],
      [-1,1,1,0,0,-1],
      [-1.5,0.5,0.5,1.5,1.5,-1.5]
    ]

    this.y = [
      [-1.5,-1.5,0.5,0.5,1.5,1.5],
      [-1,-1,0,0,1,1],
      [-1.5,-1.5,1.5,1.5,-0.5,-0.5],
      [0,0,-1,-1,1,1]
    ]

    

  }



  Rotate() {
    
    this.j += 1
    if(this.j == 4){this.j = 0}
  }

  

}
