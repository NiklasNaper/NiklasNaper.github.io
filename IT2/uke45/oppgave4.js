let personer = [
  {
    navn: "Niklas",
    alder: 16
  },
  {
    navn:"Erlend",
    alder: 6.54
  }
];

personer.sort(sorterAlder);

personer.reverse();
function sorterAlder(a, b){
  return a.alder - b.alder;
}

for (let person of personer){
  console.log(`Hei ${person.navn}, du er ${person.alder} år.`);
}
