class Matbit{
  constructor(){
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.storrelse = 10;
    this.farge = rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)});
  }
  tegn(){
    circle(this.x, this.y, this.storrelse);
    fill(this.farge);
  }
}
