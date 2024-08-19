class Shape {
  constructor( x_center,   y_center)
  {
      this.x_center = x_center;
      this.y_center = y_center;
  }



  Show() {
    circle(this.x_center, this.y_center, 40)
    
  }

  GetDown(){
    this.y_center += 2
  }

  MoveLeft(){
    this.x_center -= 40
  }

  MoveRight(){
    this.x_center += 40
  }
  
}
