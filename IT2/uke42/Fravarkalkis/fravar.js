const totaltimer = document.querySelector("#inpText1");
const bortetimer = document.querySelector("#inpText2");
const resultat = document.querySelector("#spResultat");
function regnFravar(){
  let prosent = Number(bortetimer.value)/(Number(totaltimer)*(100));
  resultat.innerHTML = prosent;
  if (prosent >= 5 || prosent < 10) {
    document.body.style.backgroundColor = "yellow";
  } else if (prosent >= 10) {
    document.body.style.backgroundColor = "red";
  } else {
      document.body.style.backgroundColor = "green";
  }
}
totaltimer.oninput = regnFravar;
bortetimer.oninput = regnFravar;
