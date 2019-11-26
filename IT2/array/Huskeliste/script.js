const inphusk = document.querySelector("InpHusk");
const inpbtn = document.querySelector("BtnLeggtil");

let huskeliste = [];

inpbtn.onclick = leggTil;

function leggTil(){
  huskeliste.push(inphusk.value);
  console.log(huskeliste);
}
