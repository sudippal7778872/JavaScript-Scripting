//undefined
//null
//bigint

//undefined  ---- when we does not assign a value to a variable.
//then it is undefined.
var a
console.log(typeof a);
var a = "prallad";
console.log(typeof a, a);

//null
let b = null;
console.log(typeof b); //object
b = "prallad pal";
console.log(typeof b, b);
//error or bug

//bigint
let c = 123;  //there is a limit
console.log(c);
console.log(Number.MAX_SAFE_INTEGER); 
/* this is the limit that we can store in int.
if our value is greater than this use bigint. */

let d = BigInt(1234354565784356762442353);
let e = BigInt(12);
let f = 12n   //this is also bigint due to n.
console.log(e);