const inpVerdi = document.querySelector("#inpVerdi");
const btnOk = document.querySelector("#btnOk");

btnOk.onclick = regnUtPris;

function regnUtPris(){
  verdi = Number(inpVerdi.value);
  if (verdi < 350) {
    document.write(verdi);
  } else if (verdi >= 350) {
    document.write(verdi+158+((verdi*25)/100));
  }
}
