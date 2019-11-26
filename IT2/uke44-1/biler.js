imgSlide = document.querySelector("#imgSlide");
btnNeste = document.querySelector("#btnNeste");

const bilder = ["bilder/SkogF.png","bilder/logoo.jpg","bilder/New big logo.png"];
let bildeNr = 0;

btnNeste.onclick = nesteBilde;

function nesteBilde(){
  if (bildeNr > 2) {
    bildeNr = 0;
  }
  bildeNr += 1;
  imgSlide.src = bilder[bildeNr];
}
