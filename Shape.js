class Shape {
  constructor( x_center,   y_center , r)
  {
      this.x_center = x_center;
      this.y_center = y_center;
      this.r = r * 2;
  }



  Show() {
    circle(this.x_center, this.y_center, this.r)
    
  }

  GetUp(){
    this.y_center -= 1
  }
  GetDown(){
    this.y_center += 1
  }

  MoveLeft(){
    this.x_center -= 1
  }

  MoveRight(){
    this.x_center += 1
  }
  
}
