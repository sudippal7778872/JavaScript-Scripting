/*we can use var or let to initialize variable.  
But difference is for var we can reinitialize same variable for multiple time 
and declare again same variable.
for let we can reinitialize variable but we cant redeclare, we get error. 
also have some difference in scope.
*/

//initialize variable by var
var Fname = "suman";
var Fname = "rakesh";//redeclared and reinitialize
console.log(Fname);

//initialize variable by let
// let name = "suman";
// let name = "rakesh"; //error
// console.log(name);

//initialize variable by let
let n = "suman";
 n = "rakesh"; //reinitialize
//  let n = "rakesh";//get error. if we use let keyword to declare again same variable.
console.log("using let keyword",n);