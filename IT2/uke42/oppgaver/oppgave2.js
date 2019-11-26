const tekst = document.querySelector("#sma");
const style = document.querySelector("#stil");
tekst.onclick = endretekst;

function endretekst(){
  tekst.style = "backgroundColor: green;  ";
}
