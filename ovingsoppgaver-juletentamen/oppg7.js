const kamel = document.querySelector("#gammeelMann");
const k = document.querySelector("#k");
const mark = document.querySelector("#mark");
let julekule;
kamel.onclick = randomshit;

function randomshit(){
  julekule = Math.ceil(Math.random()*70);
  mark.innerHTML = julekule + "år";
  if (julekule < 15) {
    k.innerHTML = "Beklager du er bare " + julekule + " år.";
  } else if (julekule > 60) {
    k.innerHTML = "beklaer din gamling jeg elsker deg din saver men du er bare " + julekule;
  } else {
    k.innerHTML = "";
  }
}
