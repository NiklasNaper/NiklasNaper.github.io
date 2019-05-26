console.log("Skriptet er lastet");

//Opprette variabler som refer til databasen
const db = firebase.database();
const bloggere = db.ref("bloggere");

//pusha en string til databasen, firebase lager primærnøkkel
bloggere.push("Sophie Elise");

//Pushet et objekt til databasen, firebase lager primærnøkkel
bloggere.push({
  "navn":"Komikerfrue",
  "folgere":59001
});
//Lagde et objekt med egen primærnøkkel
const pappahjerte = bloggere.child("Pappahjerte");
pappahjerte.set({
  "navn":"Pepe the frog",
  "folgere": 2000000
});

//Oppdaterer objektet Pappahjerte med nytt navn
storePappahjerte.update({
  "navn":"Hans Olav Lorem"
});
