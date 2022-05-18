// clone array
//concatinate array
//spread operator

let array1 = ["item1","item2"];
//clone method 1
let array2 = array1.slice(0); 
/*
slice(start index,end index)., so it start from 0 and go to end. */

//clone method 2 by concatine with blank array.
let array3 = [].concat(array1);

//clone method 3 by spread operator
let array4 = [...array1];

console.log(array1===array2);
console.log(array1===array3);
console.log(array1===array4);
console.log("array1 is ",array1);
console.log("array2 is ",array2);
console.log("array3 is ",array3);
console.log("array4 is ",array4);
//all arrays are refering different address.

//if we want to clone and add few more element then-
let array5 = array1.slice(0).concat(["item3","item4"]);
console.log("array5 is ",array5);

//
let array6 = [...array1,"item5","item6",...array5];
console.log("array6 is ",array6);

