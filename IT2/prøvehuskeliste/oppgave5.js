const inpNavn = document.querySelector("#inpNavn");
const inpAntall = document.querySelector("#inpAntall");
const btnRegistrer = document.querySelector("#btnRegistrer");
const elevListe = document.querySelector("#elevListe");

let elever = [];

btnRegistrer.onclick = leggTilElev;

function leggTilElev(){
  elever.push({
    navn: inpNavn.value,
    antall: inpAntall.value
  });

elever.sort(sorterAntall);

elever.reverse();

elever.reverse();

elevListe.innerHTML ="";

for(let elev of elever){
  elevListe.innerHTML += `<li>${elev.navn}: ${elev.antall}</li>`
  }
}

function sorterAntall(a, b){
    return a.antall - b.antall;
}
