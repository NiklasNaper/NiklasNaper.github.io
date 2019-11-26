function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(220);
}

//2)
//let tall = Math.floor(Math.random()*6+1);
//alert("Tallet er:" + tall);

//2)
//let tall = Math.floor(Math.random()*11)+10;
//alert(tall);

//3)
/*let radius = Number(prompt("Hva er radius?"));
alert("Omkrets: " + 2*(Math.floor(Math.PI*radius)));
alert("Volumet av kula :" + 4*(Math.floor(Math.PI*(Math.pow(radius,3)/(3)))))
alert("Areal av kula: " + 4*Math.floor((Math.PI*Math.pow(radius,2))))
*/
/*4)
let poeng = prompt("Hvor mange poeng fikk du på prøven din fakenaver!?");
let muligpoeng = prompt("Hvor mange poeng var mulige?");
alert("Din karakter er stryk. :) Neida den er " + (Math.round(poeng)/(muligpoeng)*6)) + ".";
*/
//5)
let vekt = Number(prompt("Skriv inn din vekt her."));
let hoyde = Number(prompt("Skriv inn din høyde her."));
alert("Din kmi er:" + (Math.round(vekt)/Math.pow(hoyde,2)));
