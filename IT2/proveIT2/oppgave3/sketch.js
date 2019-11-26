function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // put drawing code here
  background(220);

  if (mouseX > windowWidth/2 && mouseY < windowHeight/2) {
    ellipse(mouseX,mouseY,50,50);
  } else if (mouseX < windowWidth/2 && mouseY < windowHeight/2) {
    rect(mouseX-40,mouseY-10,80,20);
} else if (mouseY > windowHeight/2){
    ellipse(mouseX,mouseY,100,50);
}

}
