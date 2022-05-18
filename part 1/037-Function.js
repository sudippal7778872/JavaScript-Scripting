//three type of function
// 1.Function declaration 2.function expression 3. arrow function
//function declaration
//method 1

function print(){
    console.log(hi);
}

function sumTwoNumber(number1,number2){
    return number1+number2;
}
let returnValue = sumTwoNumber(10,15);
console.log(returnValue);




//function expression
//method 2

const sum = function(number1,number2){
    return number1+number2;
}
console.log(sum(10,10));