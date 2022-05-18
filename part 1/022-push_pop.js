//push and pop operation.
//shift and unshift operation.


let a = ["apple","grape","mango"];
//push
a.push("banana");
console.log(`after push operation ${a}`);

//pop
//pop by default remove from last. and return that element.
let p = a.pop()
console.log(`after pop operation ${a}`);
console.log(`return value of pop is ${p}`);


//unshift add element at begining
a.unshift("hi");
console.log(`after unshift operation ${a}`);

//shift remove element from the begining. it also return the remove value.

let r = a.shift();
console.log(`after shift operation ${a}`);
console.log(`after shift operation return value ${r}`);

