//object destructuring.

const p = {
    name: "prallad",
    age: 23,
    position: "AD",
    company: "dxc",
};

let { name, age } = p;  //name and age become normal variable. we can also use let and var.
//variable name need to be same else it will undefined.
console.log(age); 
//or
const per = {
    n: "prallad",
    a: 23,
    p: "AD",
    c: "dxc",
};
let { n, a, ...restProperty } = per;
console.log(restProperty);


//if we want to create variable 
const person = {
    name: "prallad",
    age: 23,
    position: "AD",
};
let { name:var1, age: var2 } = person;
console.log(var1);


