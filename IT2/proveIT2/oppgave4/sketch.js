function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // put drawing code here
  background(220);

}
let fahrtemp = Number(prompt("Skriv inn en temperatur i fahrenheit."));
alert("Din temperatur i celsius er:" + (fahrtemp-32)/(1.8));
