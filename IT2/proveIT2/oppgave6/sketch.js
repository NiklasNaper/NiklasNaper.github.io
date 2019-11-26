let gjett = Number(prompt("Hvilket tall tenker jeg på (0-20)"));
let tall = Math.floor(Math.random()*21-1);
let riktig = false;
let antallForsok = 0;

while(riktig === false){
  if(gjett < tall){
    gjett = Number(prompt("For lavt"));
    antallForsok += 1;
  }else if(gjett > tall){
    gjett = Number(prompt("For høyt"));
    antallForsok += 1;
  }else if (gjett === tall){
    alert("Riktig! Du vant med kun dette antall forsøk: " + antallForsok);
    riktig = true;
  }

}
