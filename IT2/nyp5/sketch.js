function setup() {
  createCanvas(windowWidth, windowHeight);

}
let figur = {
  x: 50,
  y: 50,
  xFart: 0,
  yFart: 5,
  hoyde: 25,
  bredde: 25,
  hopp: 9
}
function draw() {
    background(220);
  figur.x = figur.x + figur.xFart;
  figur.y = figur.y + figur.yFart;
if(figur.y>height){
text("Du er død",width/2,height/2);
noLoop();
}
rect(figur.x,figur.y,figur.bredde,figur.hoyde);

window.onkeydown = hopp;
}
function hopp(){
  if(event.key === "ArrowUp"){
    figur.y = figur.y - figur.hopp;
    figur.xFart = figu.xFart + 1;
  } else if (event.key === "ArrowDown"){
    location.reload();
  }
}
