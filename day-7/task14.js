var g1 = "var global";
let g2 = "let global";
const g3 = "const global";

console.log(window.g1);//var global
console.log(window.g2);//undefined
console.log(window.g3);//undefined

//var added to global objet while let/const didn't add to goloval object