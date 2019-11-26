let tegn = prompt("Hvilket fortegn vil du ha (Velg mellom : +, -, *, /).");
let tall1 = Number(prompt("Hvilket tall skal det første tallet ditt være?"));
let tall2 = Number(prompt("Hvilket tall skal det andre tallet ditt være?"));
//Fikk det akkurat til lol glemte bare å ha number i prompten... xD
if (tegn == "+") {
  alert(tall1+tall2);
} else if (tegn == "-") {
  alert(tall1-tall2);
} else if (tegn == "/"){
  alert(tall1/tall2);
} else if (tegn == "*"){
  alert(tall1*tall2);
}
