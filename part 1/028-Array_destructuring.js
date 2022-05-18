//array destructuring

const a = ["value1","value2"];
let b = a[0];
let c = a[1];
console.log("value in b is ",b);
console.log("value in c is ",c);


//now the same thing will do through array destructuring.

let [v1,v2] = a;  //index 0 and 1 of a value will be store in v1 and v2 correspondingly.
//v1 and v2 become normal variable.
console.log("value in v1 is ",v1);
console.log("value in v2 is ",v2);

//example
const f = ["item1","item2","item3","item4","item5"];
let [f1,f2,...newarray] = f;  //other all value goes to newarray
console.log("value of f1 ",f1);
console.log("value of f2 ",f2);
console.log("value of newarray ",newarray); 