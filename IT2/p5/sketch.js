function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
}

let color = {
  r: 255,
  g: 255,
  b: 255
}

function draw() {
  fill("white");
  rect(0,0,width,60);
  fill("blue");
  stroke("lightgrey");
  rect(20,20,20,20);

  if(mouseIsPressed){
    noStroke();
    if(mouseX<40 && mouseX>20 && mouseY<40 && mouseY>20){
      color.r = 0;
      color.g = 0;
      color.b = 255;
    }
    fill(color.r, color.g, color.b);
    circle(mouseX, mouseY, 20);
  }

}
