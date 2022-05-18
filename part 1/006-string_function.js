//trim()    
//toupperCase()
//toLowerCase()
//slice()

//trim() can remove the space from before and after of a string. not from middle.
let n = "    suman m    ";
console.log(n.length);
let newString = n.trim();
// n =n.trim(); valid
console.log(newString.length);


//toUppercase method
let x = "rakesh";
console.log(x.toUpperCase());

//toLowerCase() method
let y = "SUMAN";
console.log(y.toLowerCase());

//slice(start index, end index) method
let z = "sounak";
z = z.slice(1,4);  //give output end index-1
console.log(z);