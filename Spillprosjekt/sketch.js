let permaMarker;
let katana;
let backImg;
let watermelon;
let strawberry;
let pomegranate;
let pineapple;

function preload(){
  permaMarker = loadFont("PermanentMarker-Regular.ttf");
  katana = loadImage("Bilder/Katana.png");
  watermelon = loadImage("Bilder/Watermelon.png");
  strawberry = loadImage("Bilder/Strawberry.png");
  pomegranate = loadImage("Bilder/Pomegranate.png");
  pineapple = loadImage("Bilder/Pineapple.png");
  backImg = loadImage("Bilder/NazNinjaBackground.jpg");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
}

  let ninja = new Ninja;
  let fruits = new Fruit;

function draw() {
  frameRate(60);
  image(backImg,0,0,width,height);
  ninja.make();
  ninja.animation();
  fruits.draw();
  fruits.move();
  fruits.cut();
  fruits.score();
  fruits.healthpoints();
}
