function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  let a = 1;
  let b = 1;
  for(let i = 0; i < 100; i = i + 1){
    let c = a + b;
    text(c, 20*i, 20*i);
    a = b;
    b = c;
  }
}


function draw() {

}
