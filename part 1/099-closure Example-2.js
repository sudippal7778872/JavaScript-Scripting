//closure example
//finding "any to the power of any number"

// function number(n){
//     let result=1;
//     return function(p){
//         for(let i=1; i<=p;i++){
//         result=result*n;
//         }
//         return result;
//     }
// }

//arrow function
// const number = (n) =>{
//     return (p) => {
//         return n ** p;
//     }
// }

//arrow function in shortcut way
// const number = (n) => (p) => n ** p;
//or
const number = n => p => n ** p;

var answer = number(4);
var a = answer(3);
console.log(a);

