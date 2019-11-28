//Definerer variabler

let permaMarker;
let katana;
let backImg;
let watermelon;
let strawberry;
let pomegranate;
let pineapple;
let slashSound;

//Loader variabler mm

function preload(){
  permaMarker = loadFont("PermanentMarker-Regular.ttf");
  katana = loadImage("Bilder/Katana.png");
  watermelon = loadImage("Bilder/Watermelon.png");
  strawberry = loadImage("Bilder/Strawberry.png");
  pomegranate = loadImage("Bilder/Pomegranate.png");
  pineapple = loadImage("Bilder/Pineapple.png");
  backImg = loadImage("Bilder/NazNinjaBackground.jpg");
  soundFormats('mp3', 'ogg');
  slashSound = loadSound("Lyder/Slash Sound.mp3");
}

//Definerer bredden på canvas

function setup(){
  createCanvas(windowWidth, windowHeight);
}

//Referer til en klasse som skal kjøre

  let ninja = new Ninja;
  let fruits = new Fruit;

//Legger inn et bakgrunnsbilde og definerer hvor mange FPS spillet skal kjøre på

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
