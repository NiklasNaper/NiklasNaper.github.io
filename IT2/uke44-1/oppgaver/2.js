let bestetrer = ["lønn","hassel","bjørk","eik","blodlønn","furu","gran"];
console.log(bestetrer);
bestetrer.splice(3,1);
console.log(bestetrer);
bestetrer.splice(2,1,"hengebjørk");
console.log(bestetrer);
bestetrer.splice(4,2);
console.log(bestetrer);
bestetrer.push("fjellbjørk","dvergbjørk");
console.log(bestetrer);

function alfabetiske(a,b){
  a = a.toLowerCase();
  b = b.toLowerCase();
  if(a > b){
    return 1;
  }else{
    return -1;
  }
}

bestetrer.sort(alfabetiske);
console.log(bestetrer);
