//hoisting
//variable creating using var,let and const.

//using var
//if we create the variable using var keyword, in compilation time it's value  
//set to "undefined"
console.log("--------------variable using var-------------------");
console.log(variable1); //undefined
var variable1 = "hello world1";
console.log(variable1);

// --------------------------------
//using let 
//if we create the variable using let keyword, in compilation time it's value  
//set to "not initialize" and give error.
console.log("--------------variable using let-------------------");
console.log(variable2);
let variable2 = "hello world2"; //Uncaught ReferenceError: Cannot access 'variable2' before initialization
console.log(variable2);


//using const
//let and const having same output 
//if we create the variable using let keyword, in compilation time it's value  
//set to "not initialize" and give error.
console.log("--------------variable using const-------------------");
console.log(variable3);
let variable3 = "hello world3";//Uncaught ReferenceError: Cannot access 'variable2' before initialization
console.log(variable3);

console.log(variable4); //Uncaught ReferenceError: variable4 is not defined
/*let and const are also hoisted. because if we does not create the variable using
let and const we got different error. you can try by only write console.log(variable4).
so the variable is already in the memory during compilation or before excuting the
first line. so it is hoisting.
*/

















