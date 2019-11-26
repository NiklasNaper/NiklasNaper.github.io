let gjett = Number(prompt("Hvilket tall tenker jeg på (0-10)"));
let tall = Math.floor(Math.random()*10);
let riktig = false;

console.log(tall);

while(riktig === false){
  if(gjett < tall){
    gjett = Number(prompt("For lavt"));
  }else if(gjett > tall){
    gjett = Number(prompt("For hoyt"));
  }else if (gjett === tall){
    alert("Riktig! Du vant en Rotte")
    riktig = true;
  }else if(gjett !== tall){
    gjett = Number(prompt("Bare tall din idiot"));
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {


}
