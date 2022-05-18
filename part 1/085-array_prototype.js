//array prototype
const number = [1,2,3];

function hello(){
    console.log("hello world");
}
/* 
generally we create array like this. then from where all the array method come 
from (ex. fill,find, every.slice etc)?

answer: All this function coming from array prototype. 

internally array create (const number2 = new Array(1,2,3);) this way.
this all function exists in Array prototype.
we show in below example.
*/
const number2 = new Array(1,2,3);
console.log(number2); //expand the  [[prototype]] you will see all the function.
// or
console.log(Object.getPrototypeOf(number2));



//prototype of array is array
console.log("--------------------------------------");

console.log(Array.prototype); //[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …] --this is array
console.log(hello.prototype); //{constructor: ƒ}  ---this is object

// we can also change the prototype
console.log("----------prototype changing ---------------");
console.log(hello.prototype); //{constructor: ƒ}  ---this is object
hello.prototype = [];// change to empty array
console.log(hello.prototype);
//we can also push something into this empty array.
hello.prototype.push(1);
console.log(hello.prototype);






