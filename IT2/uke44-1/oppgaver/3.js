const neste = document.querySelector("#fremover");
const forrige = document.querySelector("#bakover");
const bilde = document.querySelector("#bilde");

let feriebilder = ["bilder/logoo.jpg","bilder/New big logo.png"];

let bildeNr = 0;

neste.onclick = nesteBilde;
forrige.onclick = forrigeBilde;

function nesteBilde(){
  bildeNr += 1;
  console.log(bildeNr);
  bilde.src = feriebilder[bildeNr];
}

function forrigeBilde(){
  bildeNr -= 1;
  console.log(bildeNr);
  bilde.src = feriebilder[bildeNr];
}
bilde.src = feriebilder[bildeNr];
