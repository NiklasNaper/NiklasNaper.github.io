const inpFarge = document.querySelector("#inpFarge");

function endreFarge (){
  document.body.style.backgroundColor = inpFarge.value;
}
inpFarge.oninput = endreFarge;
