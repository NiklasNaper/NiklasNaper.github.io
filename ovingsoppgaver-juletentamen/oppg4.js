const fahren = document.querySelector("#fahren");
const btn = document.querySelector("#btn");

btn.onclick = convfahr;

function convfahr(){
  let tempFahr = fahren.value;
  document.write((tempFahr-32)*(5/9) + " celsius");
}
