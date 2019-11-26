const btnTemp = document.querySelector("#btnTemp");
const txtTemp = document.querySelector("#txtTemp");
const inpTemp = document.querySelector("#inpTemp");
const inpDato = document.querySelector("#inpDato");
const inpSted = document.querySelector("#inpSted");
const sortering = document.querySelector("#sortering");

let temperaturer = [];

btnTemp.onclick = addTemp;
sortering.onchange = function(){
  nySortering();
  skrivUtTemp();
};

function addTemp() {
  temperaturer.push({
    temp: inpTemp.value,
    sted: inpSted.value,
    dato: inpDato.value
  });
  nySortering();
  skrivUtTemp();
}

function skrivUtTemp() {
  txtTemp.innerHTML = "";
  for (let temperatur of temperaturer) {
    if (temperatur.temp > 0) {

      txtTemp.innerHTML +=

        `<li id="code21">Det var ${temperatur.temp} grader på ${temperatur.sted} den ${temperatur.dato}.</li>
    <p id="code22">Søylediagram:</p>
    <div class="soyle" style="width:${temperatur.temp * 1.7 + 1}vw">${temperatur.temp}</div>`

    } else {

      txtTemp.innerHTML +=

        `<li id="code21">Det var ${temperatur.temp} grader på ${temperatur.sted} den ${temperatur.dato}.</li>
    <p id="code22">Søylediagram:</p>
    <div class="soyle1" style="width:${temperatur.temp * -1.7 + 1}vw">${temperatur.temp}</div>`
    }
  }
}

function nySortering() {
  if (sortering.value === "Lav-Hoy") {

    temperaturer.sort(tempLavTilHoy);

  } else if (sortering.value === "Hoy-Lav") {

    temperaturer.sort(tempHoyTilLav);
  }
}

function tempLavTilHoy(a, b) {
  return a.temp - b.temp;
}

function tempHoyTilLav(a, b) {
  return b.temp - a.temp;
}
