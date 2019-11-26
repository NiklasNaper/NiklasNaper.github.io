// //oppgave 1 a
// let Matliste = document.querySelector("#Matliste");
//
// let matvarer = ["Ost","Brød","Paprika","kaviar"];
//
// //Sortere
// matvarer.sort(sorterAtilAA);
//
// function sorterAtilAA(a, b){
//   a = a.toLowerCase();
//   b = b.toLowerCase();
//   if (a > b) {
//     return 1;
//   } else{
//     return -1;
//   }
// }
//
//
// for( let vare of matvarer){
//   Matliste.innerHTML += `<li>${vare}</li>`;
//   console.log(vare);
// }
// //b
//
//
// //For løkker med tall teller
// /*for (let i = 0; i < matvarer.length; i += 1){
//   Matliste.innerHTML += `<li>${matvarer[i]}</i>`;
// }
// */
// //for løkke som gjøre den samme som den over
// /*for (let vare in matvarer){
//     Matliste.innerHTML += `<li>${matvarer[i]}</i>`;
// }
// */
let temp = [3, 4, 5, 6, 5, 5, 6, 4, 4, 5];

temp.sort(sorteratal);
let total = 0;

function sorteratal(a,b){
return a - b;
}
console.log(temp);
let antall = 0;

for (let dagTemp of temp){
  total += dagTemp;
  if(dagTemp < 5){
    antall += 1;
  }
}
console.log("gjennomsnitt: " + (total/temp.length));
console.log(antall + " dager lolol.");
