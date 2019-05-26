//Variabler til databasen
const db = firebase.database();
const kontakter = db.ref("kontakter");
//Variabler som referer til HTML-elementene
const skjema = document.querySelector("#skjema");
const inpNavn = document.querySelector("#inpNavn");
const inpTelefonnummer = document.querySelector("#inpTelefonnummer");
const inpEpost = document.querySelector("#inpEpost");
const secKontakter = document.querySelector("#secKontakter");
//secKontakter.innerHTML = "Heisann";
//function f(x){
  //secKontakter.innerHTML = x;
//}

//f("Heieieieie");
function regis
trerKontakt(hendelse){
  hendelse.preventDefault();
  const key = inpTelefonnummer.value;
  const data = {
    "Navn": inpNavn.value,
    "Epost": inpEpost.value
  };
  const kontakt = kontakter.child(key);
  kontakt.set(data);
  skjema.reset();
}

skjema.addEventListener("submit",registrerKontakt);

function visKontakter(snapshot){
  const telefon = snapshot.key;
  const kontakt = snapshot.val();
  secKontakter.innerHTML += `
  <div>${telefon}</div>
  <div>${kontakt.navn}</div>
  <div>${kontakt.epost}</div>
  `;
}
kontakter.on("child_added",visKontakter);
