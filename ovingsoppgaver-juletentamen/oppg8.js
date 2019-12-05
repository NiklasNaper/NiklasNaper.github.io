const imgSp = document.querySelector("#imgSp");
const imgMdg = document.querySelector("#imgMdg");
const divInfo = document.querySelector("#divInfo");
const a = new Image(250, 200);
const b = new Image(250, 200);
const c = new Image(250, 200);
let slideshowSp = [a, b, c];
a.src = "vedlegg-ovingsoppgaver-juletentamen/sp01.jpg";
b.src = "vedlegg-ovingsoppgaver-juletentamen/sp02.jpg";
c.src = "vedlegg-ovingsoppgaver-juletentamen/sp03.jpg";
document.body.appendChild(a);

imgSp.onclick = visSp;
imgMdg.onclick = visMdg;

function visSp(){
  divInfo.innerHTML = "Vi er senterpartiet og vi vil drepe ulven. Derfor hater alle oss. Takk for at du stemmer på oss ha en god dag.";
}

function visMdg(){
  divInfo.innerHTML = "Vi redder verden fra den miljø skandalen alle sammen snakker om. Stem på oss stem på miljøet."
}
