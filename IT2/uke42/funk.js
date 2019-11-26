const Overskrift1 = document.querySelector("#Overskrift1");

Overskrift1.onclick = byttTekst;

function byttTekst(){
  if (Overskrift1.innerHTML == "Hei på deg") {
    Overskrift1.innerHTML = "Ikke mer";
  } else if(Overskrift1.innerHTML == "Ikke mer") {
  Overskrift1.innerHTML = "Hei på deg";
} else {
  Overskrift1.innerHTML = "Hei på deg";
}
}
