//collection of premitive data type in sequential order.
//array
//referance type

let a=["apple","grape","mango"];
let b=[1,2,3,4];
let c=[1,2,3.4,"string",null,undefined];
console.log(a[2]);
console.log(b);
console.log(c);
console.log(a.length);

//array mutable in nature
console.log("------------------------");
a[1]="banana";
console.log(a);

//array is an object
console.log(typeof a);