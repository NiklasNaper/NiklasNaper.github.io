/*1)
let navn = prompt("What's you're name?");
console.log(navn);
let alder = Number(prompt("How old are you?"));
console.log(alder);
alert("Whats up "+(navn)+". In "+(100-alder)+" years you're either dead or old and sick.");
*/
//2.1, 2.2)
/*let tall = Number(prompt("Choose a number between 1 and 20"));
if(tall === 10){
  alert("tallet er 10")
} else if (tall>6) {
  alert("tallet er større enn 6")
} else{
  alert("tallet er ikke 10")
}*/
//2.3)
/*let tall = Number(prompt("Velg et tall"));
if (tall<5 || tall>15){
  alert("Tallet er bra")
} else{
  alert("Tallet er dritt")
}
*/
//2.4)
/*let tall = Number(prompt("Velg tall"));
if (tall>5 && tall<15){
  alert("tall = True +==!    (<meta name=keywords content=  Objective-C,Think    Geek,Python,Ruby,Javascript,HTML&amp;CSS,programming,programmer,web developer,software developer);")
} else{
  alert("slutt op");
}*/
//3.1)
/*let bredde = Number(prompt("Velg en bredde"));
let hoyde = Number(prompt("Velg en hoyde"));
alert("areal av din form er "+(bredde*hoyde))+".";
*/
//3.2)
/*let form = prompt("Skriv sirkel eller rektangel");
if (form === "rektangel"){
  let bredde = Number(prompt("Velg en bredde"));
  let hoyde = Number(prompt("Velg en hoyde"));
  alert("areal av din form er "+(bredde*hoyde))+".";
}else if (form === "sirkel"){
  let radius = Number(prompt("Velg en radius på din sirkel"));
  let gjett = Number(prompt("Hva tror du arealet blir"));
  let areal = Math.PI*radius*radius;
  alert("Arealet av din sirkel er "+areal+"."+" Du gjettet "+gjett+" og arealet ble "+areal+"."+" Det betyr at du gjettet "+(areal-gjett)+" unna riktig svar.");
} else{
  alert("Du skrev feil din idiot.")
}*/
/*let riktig = 0;
let galt = 0;

let svar = prompt("Hvem er den beste læreren?")
if (svar === "Thor" || svar === "thor"){
  riktig = riktig + 1;
  alert("Riktig! Thor er bra")
}else {
  alert ("Nei nei nei! Han er bra!")
  galt = galt + 1;
}

let svar2 = prompt("Hva er hovedstaden i Tyskland?")
if(svar2 === "Ekke det germeny a?"){
  alert("Wtf du fikk faktisk riktig!!:)")
  riktig = riktig + 1;
}else{
  alert("Feil din idiot!")
  galt = galt + 1;
}
alert("Du fikk "+(riktig-galt)+" poeng.")
*/
/*let i = 0; //Definerer en global variabel.
while(i <= 8190){//Så lenge i er mindre enn 10 skal vi lage i
  console.log(i);//logger i konsoll
  i = i + i^2;// legger til 1 på i
}*/
/*for(let i = 0; i<=70;i += 1){
  console.log(i*7);
}*/
for(let i = 0; i<=1000; i += 1){
  if(i % 48 === 0){
    console.log(i);
  }
}
