//  == vs ===
let a = 4;
let b = 3;
console.log(a>=b);

//== does not check the datatype
let c = 4;
let d = "4";

console.log(c==d);  //true
//=== check the data type
console.log(c===d); //false


// != vs !==
console.log(c != d);  //did not check datatype
console.log(c !== d); //check the datatype
