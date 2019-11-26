let figur = {
  x: 50,
  y: 100,
  xFart: 20,
  yFart: 2
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // put drawing code here
  background(220);

  sjekkPosisjon();

  flyttFigur();

  tegnFigur();
}

function flyttFigur(){
  figur.x += figur.xFart;
  figur.y += figur.yFart;
}

function tegnFigur(){
  fill(200,100,150);
  circle(figur.x,figur.y,20);
}
function sjekkPosisjon(){
  if(figur.x > width || figur.x < 0){
    figur.xFart *= -1;
  }
  if(figur.y > height || figur.y < 0){
    figur.yFart *= -1.3;
  }

}
