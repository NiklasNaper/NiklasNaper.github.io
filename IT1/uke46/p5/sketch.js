let xPos = 1;
let yPos = 1;
let yFart = 1;
let back;

function preload(){
  back = loadImage("Birb.png");
}

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(random(255), random(255), random(255));
  frameRate(60);
  stroke(0, 0, 0);
  fill(0, 255, 0);
  ellipse(xPos,yPos, 50, 50);
  xPos = xPos *1.01;
  yPos = yPos +yFart;
  yFart = yFart +1;
  frameRate(60);
  if (xPos > innerWidth){
    xPos = 0.00001;
  }
  if (yPos > innerHeight){
    yPos = 0.99*innerHeight;
  }
}

window.onkeydown = hopp;



function hopp(){
  yFart = -0.1*yPos/4;
}
