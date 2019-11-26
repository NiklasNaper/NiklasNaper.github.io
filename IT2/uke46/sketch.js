class Boble{
  constructor(){
    this.x = 50;
    this.y = 50;
    this.radius = 25;
  }

  sprett(){
    this.x += Math.random()*10-5;

  }
  tegn(){
    circle(this.x, this.y, this.radius);
  }
}

let bobler = [];

for(let i = 0; i < 40; i += 1){
  bobler[i] = new Boble;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let i = 0; i < bobler.lenght; i += 1){
    bobler[i].sprett();
    bobler[i].tegn();
  }
}
