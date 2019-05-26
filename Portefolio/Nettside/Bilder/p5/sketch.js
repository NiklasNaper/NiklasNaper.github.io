let x = 200;
let y = 50;
let retningX = 1;
let retningY = 1;

function preload(){

}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
}

function draw() {
  clear();
  if(x>window.innerWidth-25){
    retningX = -5;
  } else if (x<0) {
    retningX = 5;
  }

if (y>window.innerHeight-25) {
  retningY = -5;
} else if (y<0) {
  retningY = 5;
}

  x = x + retningX;
  y = y + retningY;
  ellipse(x,y,50,50);

}
