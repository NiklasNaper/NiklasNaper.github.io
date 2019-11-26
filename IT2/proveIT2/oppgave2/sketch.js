function setup() {
  // put setup code here
    noLoop();
  createCanvas(windowWidth, windowHeight);
  let s = 200;
  // put drawing code here
  background(220);
  while(s < 700){
    ellipse(s,20,20,20);
    s = s + 20;
  }

  let i = 2;
  while(i <= 30){
    text(i,i*40+10,50);
    i = i + 2;
  }
}

function draw() {

}
